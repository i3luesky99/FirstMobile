import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {createStore, useSelector} from 'react-redux';
import Appnavigator from './src/navigation/Appnavigator';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App() {
  // const counter = useSelector(state => state.counter);

  return (
    <Provider store={store}>
      <MenuProvider>
        <Appnavigator />
      </MenuProvider>
    </Provider>
  );
}

export default App;
