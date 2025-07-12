### Setup

Assuming you already have the following utilities installed
- brew
- nodenv

Follow the steps outlined below to setup development environment.
1. Clone this repo and `cd` into it.
2. Set the node version: `nodenv local 24.0.2`
3. To start a new project, use `npm init -y` but this step can be skipped for this project since it is already setup.
4. Install typescript: `npm install --save-dev typescript`
5. Install webpack: `npm install --save-dev webpack webpack-cli webpack-dev-server`
   - `webpack` is the actual utility that does the bundling.
   - `webpack-cli` is the command line utility to interact with webpack.
   - `webpack-dev-server` is the dev web server that and automatically re-compiles the code after changes.
6. Install `loaders` for `webpack` in order to compile styles (css/scss): `npm install --save-dev sass style-loader css-loader sass-loader`
7. add the following to `package.json`:
  ```
    "develop": "webpack-dev-server --mode development",
    "build": "webpack --mode production",
  ```
  - To start development server, use  `npm run develop`
  - To make a production build, use `npm run build`
8. Install `webpack`'s HTML plugin to simply the creation of HTML files or using your existing HTML file as a template, `npm install --save-dev html-webpack-plugin`
9. Install `babel` to compile typescript/javascript code so older browsers can understand it and render it: `npm install --save-dev @babel/core @babel/preset-env babel-loader`
10. To add support for typescript to babel, install `npm install --save-dev @babel/preset-typescript source-map-loader`
11. Add a utility that shows how your final built bundles are composed of different content `npm install --save-dev webpack-bundle-analyzer`
