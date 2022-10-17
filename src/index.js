import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto';

import './index.css';
import App from './App';

import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Home />
  </BrowserRouter>,
);


