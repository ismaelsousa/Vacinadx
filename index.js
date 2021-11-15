/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (__DEV__) {
  require('./server');
}

AppRegistry.registerComponent(appName, () => App);
