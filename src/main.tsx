import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NewsBlogRoutes } from './routes.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NewsBlogRoutes />
      <Toaster richColors />
    </BrowserRouter>
  </React.StrictMode>,
)
