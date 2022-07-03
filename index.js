/**
 * @format
 */
// if (__DEV__) {
//   require('./server');
// }

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
