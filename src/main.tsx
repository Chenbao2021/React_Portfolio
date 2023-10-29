import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from "react-modal"

import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './main.css'

Modal.setAppElement('#root');
const rootElement = document.getElementById('root');
if(rootElement) {
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
} else {
  throw Error("Root file not found!");
}
