import React, { useRef, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { InteractionStatus, InteractionRequiredAuthError } from '@azure/msal-browser';
import './app.css';

const iframeConfig = {
  cluster: "kwetest.eastus",
  database: "covid",
  features: "f-IFrameAuth=true",
  workspaceName: "kwe-embed-demo"
}

export function App() {
    const iframeRef = useRef(null);
    const { instance, inProgress, accounts } = useMsal();
    
    useEffect(() => {
      const postToken = (iframe, accessToken, scope) => {
          iframe.contentWindow.postMessage({
            "type": "postToken",
            "message": accessToken,
            "scope": scope
        }, '*');
      }
      const handleIframeMessage = (event) => {
        console.log("event.data.type: " + event.data.type);

        const scope = event.data.scope === 'query' ? "https://kwetest.eastus.kusto.windows.net/.default" : event.data.scope;
        const iframe = iframeRef.current;
        if (event.data.type === "getToken" && iframe && iframe.contentWindow) {
          if (accounts.length > 0 && inProgress === InteractionStatus.None) {
            instance.acquireTokenSilent({
              scopes: [scope],
              account: accounts[0],
            })
            .then((response) => postToken(iframe, response.accessToken, event.data.scope))                
            .catch((error) => {
              if (error instanceof InteractionRequiredAuthError) {
                instance.acquireTokenPopup({ scopes: [scope]})
                .then((response) => postToken(iframe, response.accessToken, event.data.scope))
                .catch((error) => {
                  console.log(`Error acquiring token: ${error}`);
                });
              } else {
                console.log(`Error acquiring token: ${error}`);
              }
            });
          }
        }
      };
  
      // Attach event listener when the component mounts
      window.addEventListener('message', handleIframeMessage);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('message', handleIframeMessage);
      };

    }, [iframeRef, accounts, inProgress, instance]);

  return (
    <iframe ref={iframeRef} title="adx example" src={`https://dataexplorer.azure.com/clusters/${iframeConfig.cluster}/databases/${iframeConfig.database}?${iframeConfig.features}&workspace=${iframeConfig.workspaceName}`} />
  );
}