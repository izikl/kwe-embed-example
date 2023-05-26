# Example For Embedding ADX Web UI

This project is an example of how to embed Azure Data Explorer and Azure Data Explorer dashboards in an iframe.
OAuth authentication is done with @azure/msal-react.

## Images

### Query Experience

:::image type="content" source="./docs/images/kwe-embed-query.png" alt-text="Query Experience":::

### Dashboard Experience

#### Dashboard

:::image type="content" source="./docs/images/kwe-embed-dashboard.png" alt-text="Dashboards":::

#### Sharing

:::image type="content" source="./docs/images/kwe-embed-share-dashboard.png" alt-text="Dashboards Sharing":::

## Run the project

### prerequisites

- Create an app in Azure Portal.
  - The app should follow the guidelines here <https://learn.microsoft.com/en-us/azure/data-explorer/kusto/api/monaco/host-web-ux-in-iframe>
  - Make sure the app allows redirect to `[host URL]/blank.html`
- in auth.js, replace tenantId and appId.
- in app.js, replace iframeConfig.cluster and iframeConfig.database with your cluster/database.

### Run locally

run `npm install && npm start`

### Prepare for deployment  

run `npm install && npm run build` and publish the `/build` folder.
