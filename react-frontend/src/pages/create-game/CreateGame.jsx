import React, { useState } from 'react';
import './CreateGame.css';
import Navbar from '../../components/navbar/Navbar';

export default function CreateGame() {
  const [form, setForm] = useState({
    title: '',
    stadium: '',
    date: '',
    time: '',
    image: '',
  });
  const [submitted, setSubmitted] = useState(false);

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