import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >

        <ChakraProvider>
          <Router>
            <App />
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
