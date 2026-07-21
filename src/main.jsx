import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import App from './App.jsx'
import Navbar from './pages/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Navbar/>} /> 
        <Route index={true} element={<App/>} />
      <Route />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
