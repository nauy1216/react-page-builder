import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes, basename } from './router';
import './App.css';

function App() {
  return <BrowserRouter basename={basename}>{renderRoutes(routes)}</BrowserRouter>;
}

export default App;
