import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Signin from './pages/signin/Signin.jsx';
import Games from './pages/games/Games.jsx';
import Reserve from './pages/reserve/Reserve.jsx';
import Paiement from './pages/paiement/Paiement.jsx';
import Ticket from './pages/ticket/Ticket.jsx';
import Admin from './pages/admin/Admin.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/games" element={<Games />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/paiement" element={<Paiement />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/admin" element={<Admin />} />
        {/* Add a default route or other routes here */}
        <Route path="/" element={<Login />} /> 
      </Routes>
    </Router>
  </StrictMode>,
)
