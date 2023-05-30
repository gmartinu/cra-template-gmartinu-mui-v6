import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./router";
import { AppBarLayout } from './components';
import { setDefaultProtoTypes, theme } from './assets'
import { ThemeProvider } from '@mui/material';

setDefaultProtoTypes();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppBarLayout>
        <RouterProvider router={router} />
      </AppBarLayout>
    </ThemeProvider>
  </React.StrictMode>
);