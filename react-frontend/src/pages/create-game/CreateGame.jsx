import React, { useState } from 'react';
import './CreateGame.css';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function CreateGame() {
  const [form, setForm] = useState({
    title: '',
    stadium: '',
    date: '',
    time: '',
    image: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: send form data to backend or update state
  };

  return (
    <div className="create-game-bg">
      <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          left: 30,
          top: 60,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.7rem',
          background: 'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)',
          color: '#5b3ec8',
          border: '1.5px solid #ece9f7',
          borderRadius: 12,
          padding: '0.55rem 1.4rem',
          fontWeight: 'bold',
          fontSize: '1.08rem',
          boxShadow: '0 2px 12px #a259fa22',
          cursor: 'pointer',
          transition: 'background 0.18s, color 0.18s, box-shadow 0.18s',
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg,#a259fa22 0%,#fff 100%)';
          e.currentTarget.style.color = '#7c3aed';
          e.currentTarget.style.boxShadow = '0 4px 16px #a259fa44';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)';
          e.currentTarget.style.color = '#5b3ec8';
          e.currentTarget.style.boxShadow = '0 2px 12px #a259fa22';
        }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 6 }}>
          <path d="M13.5 17L8 11L13.5 5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Retour
      </button>
      <Navbar />
      <div className="create-game-content">
        <div className="create-game-card">
          <h1 className="create-game-title">Créer un match</h1>
          <form className="create-game-form" onSubmit={handleSubmit}>
            <label>Titre du match</label>
            <input name="title" value={form.title} onChange={handleChange} required placeholder="ex: FC Barcelona vs Real Madrid" />
            <label>Stade</label>
            <input name="stadium" value={form.stadium} onChange={handleChange} required placeholder="ex: Camp Nou, Barcelona" />
            <label>Date</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} required />
            <label>Heure</label>
            <input name="time" type="time" value={form.time} onChange={handleChange} required />
            <label>Image (URL)</label>
            <input name="image" value={form.image} onChange={handleChange} required placeholder="ex: https://..." />
            <button type="submit">Créer le match</button>
          </form>
          {submitted && <div className="create-game-success">Match créé (simulation) !</div>}
        </div>
      </div>
    </div>
  );
} 