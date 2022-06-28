import React from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import Appnavigator from './src/navigation/Appnavigator';

function App() {
  return (
    <MenuProvider>
      <Appnavigator />
    </MenuProvider>
  );
}

export default App;
