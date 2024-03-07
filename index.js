/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {BookStore} from './Redux/BookStore';

const Redux =() =>{
  return (
    <Provider store={BookStore}>
      <App/>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Redux);
