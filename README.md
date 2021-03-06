This project contains the code to power the covid projections web portal.

In the project directory, you can:

### Preferred IDE

VSCode - https://code.visualstudio.com/download <br />

### Step 0
`yarn install` to install all the needed node modules.<br/>

### Run the app in the development mode - `yarn start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Deployment to production
Install VSCode<br />
Install the azure app service extension from  https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice<br />
Copy the `.env.sample` file to `.env`. Replace the place holders with actual variables.<br />
Run the command `yarn run build` to produce the build folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
To deploy the app, follow this link - https://docs.microsoft.com/en-us/azure/javascript/tutorial-vscode-azure-app-service-node-01?tabs=bash

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
