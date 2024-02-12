import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NewsBlogRoutes } from './routes.tsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsBlogRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
