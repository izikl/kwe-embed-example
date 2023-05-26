# Example For Embedding ADX Web UI

This project is an example of how to embed Azure Data Explorer and Azure Data Explorer dashboards in an iframe.
OAuth authentication is done with @azure/msal-react.

Followed instructions in <https://learn.microsoft.com/en-us/azure/data-explorer/kusto/api/monaco/host-web-ux-in-iframe>. 

## Run the project

### prerequisites

- Create an app in Azure Portal.
  - Add the below permissions and grant admin consent.  
    ADX Cluster:       `https://kwetest.eastus.kusto.windows.net/.default`,
    Dashboard Service: `https://rtd-metadata.azurewebsites.net/user_impersonation`
    Graph:             `User.ReadBasic.All`,
                       `Group.Read.All`
                       `People.Read`
  - Make sure the app allows redirect to `[host URL]/blank.html`
- in auth.js, replace tenantId and appId.
- in app.js, replace iframeConfig.cluster and iframeConfig.database with your cluster/database.

### Run locally

run `npm install && npm start`

### Prepare for deployment  

run `npm install && npm run build` and publish the `/build` folder.


