import React, { useRef, useEffect } from 'react';
import './app.css';


export function App() {
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleIframeMessage = (event) => {
            console.log("event.data.type: " + event.data.type);
            const iframe = iframeRef.current;
            if (event.data.type === "getToken" && iframe && iframe.contentWindow) {
                debugger;
                iframe.contentWindow.postMessage({
                    "type": "postToken",
                    "message": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2hlbHAua3VzdG8ud2luZG93cy5uZXQiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83MmY5ODhiZi04NmYxLTQxYWYtOTFhYi0yZDdjZDAxMWRiNDcvIiwiaWF0IjoxNjg0MzY4NDYwLCJuYmYiOjE2ODQzNjg0NjAsImV4cCI6MTY4NDM3Mzc3OCwiYWNyIjoiMSIsImFpbyI6IkFZUUFlLzhUQUFBQVZHQnJlNWFqWEdaRDJhaTNRbG9TZC9iVnkwNzZ3VHVDNEpaNjEzY0hLeEx3Sk5PdkZYY2hhZXh4VzNVbFNQZVE1VEdHVzBPMFlrREZJUzRtY2NsM1N1a1VrUm1GcEdDbjZ4bXpVRzFoeXdVVVBYQU5hU0JldUdSYmhDTVpoelo0NDZ3V1FVK0UyeDZ4cWMyL3pnUVhNeDJJMTk2Y2lid1h0dU5CcHh0emFTUT0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiMDRiMDc3OTUtOGRkYi00NjFhLWJiZWUtMDJmOWUxYmY3YjQ2IiwiYXBwaWRhY3IiOiIwIiwiZGV2aWNlaWQiOiIxZmQwZDA5OS1lNWQxLTQ1NjItODQ1Mi04MDRjYjIzODI3ZTUiLCJmYW1pbHlfbmFtZSI6Ikxpc2JvbiIsImdpdmVuX25hbWUiOiJJc3NhYyIsImlwYWRkciI6IjczLjE2OS4xNTAuMjQ0IiwibmFtZSI6Iklzc2FjIExpc2JvbiIsIm9pZCI6IjNkNTgxMWU2LTI4MTktNGI3Ny05M2RmLTIwYWU5NzZmY2FhNSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0yMTI3NTIxMTg0LTE2MDQwMTI5MjAtMTg4NzkyNzUyNy00MjA4NzAzNSIsInB1aWQiOiIxMDAzMjAwMEFCNTUzNDA1IiwicmgiOiIwLkFRRUF2NGo1Y3ZHR3IwR1JxeTE4MEJIYlIzZnFSaWNDUjBWTGdNbzhsLWFBNkxjYUFEUS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJHQUtTYVRjbUlaVTVodEFaUkZFYXhjUlpqRXFjdVpleXlCdGVSNUVIbVdJIiwidGVuYW50X2N0cnkiOiJVUyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJXVyIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoiaXpsaXNib25AbWljcm9zb2Z0LmNvbSIsInVwbiI6Iml6bGlzYm9uQG1pY3Jvc29mdC5jb20iLCJ1dGkiOiJTelNwdWhlYnBVdUdBNDNlV1ZSc0FBIiwidmVyIjoiMS4wIiwieG1zX3BkbCI6Ik5BTSJ9.rNnYpgJijncaqU0aNWD3hjIepali3vmAS8yEOzQxO_z_ynsONmyFfikJiS28EOKw3ejTbCwnecR4Qd8XlmlnShx9NEWnbt_pFEEr2rMoyYxQux7LHmeoTc-opR8H_NVlScmFWwGeXJ3HWKAtoJRJJxZCrNz5M379v8-6spJ1m70wpe8GHqXKnQ5wjp8EhvGFk-hnm7EHUS1nKUznhrGRWA-u08R20WKwrQsMGJrbxoodBMQKYRmyxwhJ4EbPKnM2NVaDmV0D5nwH1gt7ThI0XN3AAkK_hk9PfhTtHkSpnPvlr0S57RSVaP2n3geIPlhmGB2VAUEeUseqnNG10tuQZA",
                    "scope": "query"
                });
            }
        };
    
        // Attach event listener when the component mounts
        window.addEventListener('message', handleIframeMessage);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('message', handleIframeMessage);
        };
      }, []); 

  return (
    <iframe ref={iframeRef} title="adx example" src='https://dataexplorer.azure.com?f-IFrameAuth=true&workspace=kwe-embed-demo' />
  );
}