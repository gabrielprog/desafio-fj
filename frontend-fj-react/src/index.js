import { ColorModeScript, createStandaloneToast } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const { ToastContainer } = createStandaloneToast();

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <App />
    <ToastContainer />
  </StrictMode>
);

