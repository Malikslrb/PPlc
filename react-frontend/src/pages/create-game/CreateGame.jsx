import React, { useState } from 'react';
import './CreateGame.css';
import AdminNavbar from '../../components/navbar/AdminNavbar';
import { useNavigate } from 'react-router-dom';

export default function CreateGame() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    homeTeam: '',
    awayTeam: '',
    stadium: '',
    date: '',
    time: '',
    price: '',
    category: '',
    league: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    navigate('/admin');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="create-game-page">
      <AdminNavbar />
      <div className="create-game-content">
        <h1>Créer un nouveau match</h1>
        <div className="create-game-form-container">
          <form className="create-game-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="homeTeam">Équipe Domicile</label>
              <input
                type="text"
                id="homeTeam"
                name="homeTeam"
                value={formData.homeTeam}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="awayTeam">Équipe Extérieur</label>
              <input
                type="text"
                id="awayTeam"
                name="awayTeam"
                value={formData.awayTeam}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="stadium">Stade</label>
              <input
                type="text"
                id="stadium"
                name="stadium"
                value={formData.stadium}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Heure</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Prix</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Catégorie</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="Quarter Finals">Quarts de finale</option>
                  <option value="Semi Finals">Demi-finales</option>
                  <option value="Final">Finale</option>
                  <option value="Group Stage">Phase de groupes</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="league">Ligue</label>
              <select
                id="league"
                name="league"
                value={formData.league}
                onChange={handleChange}
                required
              >
                <option value="">Sélectionner une ligue</option>
                <option value="Champions League">Champions League</option>
                <option value="Premier League">Premier League</option>
                <option value="La Liga">La Liga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Serie A">Serie A</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/admin')}>
                Annuler
              </button>
              <button type="submit" className="submit-btn">
                Créer le match
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 