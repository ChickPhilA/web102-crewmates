import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'

import App from './App.jsx'
import Navbar from './pages/Navbar.jsx'
import CreateCrewmate from './pages/createCrewmate.jsx'
import ReadCrewmates from './pages/ReadCrewmates.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Navbar/>}>
        <Route index={true} element={<App/>} />
        <Route path="create" element={<CreateCrewmate/>} />
        <Route path="gallery" element={<ReadCrewmates/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
