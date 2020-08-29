import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './src/navigation';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
    primary: '#519ee3',
    error: '#ee5c43',
    placeholder: '#cccccc',
  },
};

const App = () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  </Provider>
);

export default App;
