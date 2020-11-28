SystemJS.config({
 baseURL: 'https://unpkg.com/',
 defaultExtension: true,
 packages: {
  ".": {
   main: './index.js',
   defaultExtension: 'js'
  }
 },
 meta: {
  '*.js': {
   'babelOptions': {
    react: true
   }
  }
 },
 map: {
  'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
  'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
  'react': 'react@17/umd/react.development.js',
  'react-dom': 'react-dom@17/umd/react-dom.development.js',
  'react-router-dom': 'react-router-dom@5.2.0/umd/react-router-dom.min.js',
  'redux':'redux@4.0.5/dist/redux.min.js',
  'react-redux':'react-redux@7.2.2/dist/react-redux.min.js',
  'axios': 'axios/dist/axios.min.js',
  'prop-types': 'prop-types@15.7.2/prop-types.js',
  'classnames': 'classnames@2.2.6/index.js',
  '@material-ui/core': '@material-ui/core@3.2.2/umd/material-ui.development.js',
  '@material-ui/icons': '@material-ui/icons@3.0.1/index.js'
 },
 transpiler: 'plugin-babel'
});

SystemJS.import('./index')
 .catch(console.error.bind(console));
 

//