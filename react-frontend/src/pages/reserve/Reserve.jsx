import React, { useState } from 'react';
import './Reserve.css';
import stadiumBg from '../../images/360_F_1016880316_LWFicWYhqXzAiGZOHqoKx7esuF5Jy737.jpg';
import stadiumMap from '../../images/UCL18-21_PressKit_KeyVisual_Stadium.jpg';
import { useNavigate } from 'react-router-dom';

const sections = [
  {
    name: 'L10',
    color: 'blue',
    seats: ['L10-01', 'L10-02', 'L10-03', 'L10-04', 'L10-05', 'L10-06', 'L10-07', 'L10-08', 'L10-09', 'L10-10', 'L10-11', 'L10-12'],
  },
  {
    name: 'L20',
    color: 'blue',
    seats: ['L20-01', 'L20-02', 'L20-03', 'L20-04', 'L20-05', 'L20-06', 'L20-07', 'L20-08', 'L20-09', 'L20-10', 'L20-11', 'L20-12'],
  },
  {
    name: 'Section VIP',
    color: 'orange',
    seats: ['SUP', 'K1', 'K2', 'K3', 'K4', 'K5', 'K6', 'K7'],
  },
];

function getSectionPrice(sectionName) {
  return sectionName === 'Section VIP' ? 120 : 50;
}

function getSectionLabel(sectionName) {
  if (sectionName === 'Section VIP') return 'VIP';
  return sectionName;
}

export default function Reserve() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/games');
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedSeat(null);
  };

  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
  };

  const handleConfirm = () => {
    navigate('/paiement', {
      state: {
        section: selectedSection ? getSectionLabel(selectedSection.name) : null,
        seat: selectedSeat,
        price: price
      }
    });
  };

  const price = selectedSection ? getSectionPrice(selectedSection.name) : null;

  return (
    <div className="reserve-bg" style={{ backgroundImage: `url(${stadiumBg})` }}>
      <button
        onClick={handleBack}
        style={{
          position:'absolute',
          left:30,
          top:30,
          zIndex:10,
          display:'flex',
          alignItems:'center',
          gap:'0.7rem',
          background:'linear-gradient(90deg,#fff 60%,#f6f6fa 100%)',
          color:'#5b3ec8',
          border:'1.5px solid #ece9f7',
          borderRadius:12,
          padding:'0.55rem 1.4rem',
          fontWeight:'bold',
          fontSize:'1.08rem',
          boxShadow:'0 2px 12px #a259fa22',
          cursor:'pointer',
          transition:'background 0.18s, color 0.18s, box-shadow 0.18s',
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
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginRight:6}}>
          <path d="M13.5 17L8 11L13.5 5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Retour
      </button>
      <div className="reserve-title">Plan du Stade et Numérotation</div>
      <div className="reserve-main">
        <div className="reserve-card reserve-select">
          <div className="reserve-section-title">Sélectionnez votre section</div>
          <div className="reserve-section-list">
            {sections.map(section => (
              <button
                key={section.name}
                className={`reserve-section-btn${selectedSection && selectedSection.name === section.name ? ' reserve-section-btn-selected' : ''} reserve-section-btn-${section.color}`}
                onClick={() => handleSectionClick(section)}
                type="button"
              >
                {getSectionLabel(section.name)}
              </button>
            ))}
          </div>
          {selectedSection && (
            <>
              <div className="reserve-section-title" style={{marginTop: '1.2rem'}}>Sélectionnez votre place</div>
              <div className="reserve-seats">
                {selectedSection.seats.map(seat => (
                  <button
                    key={seat}
                    className={`reserve-seat reserve-seat-${selectedSection.color}${selectedSeat === seat ? ' reserve-seat-selected' : ''}`}
                    onClick={() => handleSeatClick(seat)}
                    type="button"
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="reserve-selected-info-box">
            <div className="reserve-selected-info-title">Informations sur la place sélectionnée</div>
            <div className="reserve-selected-info-content">
              <div>Section: <b>{selectedSection ? getSectionLabel(selectedSection.name) : '-'}</b></div>
              <div>Place: <b>{selectedSeat || '-'}</b></div>
              <div>Prix: <b>{selectedSeat ? price : '-'}</b> <span style={{color:'#4ade80'}}>{selectedSeat ? '€' : ''}</span></div>
              <div className="reserve-selected-info-desc">
                {selectedSection && selectedSeat ? (
                  selectedSection.name === 'Section VIP' ? (
                    'Vue exceptionnelle depuis la tribune VIP'
                  ) : (
                    'Bonne vue sur le terrain depuis cette section.'
                  )
                ) : (
                  'Veuillez sélectionner une section et une place.'
                )}
              </div>
            </div>
            <button
              className="reserve-confirm-btn"
              disabled={!selectedSeat}
              type="button"
              onClick={handleConfirm}
            >
              Confirmer la sélection
            </button>
          </div>
        </div>
        <div className="reserve-card reserve-map">
          <div className="reserve-map-title">Vue du Stade</div>
          <img src={stadiumMap} alt="Plan du stade" className="reserve-map-img" />
          <div className="reserve-map-desc">
            Plan des place. Sélectionnez une place pour voir la vue et les détails.<br />
            {selectedSection && selectedSeat && (
              <>
                <div className="reserve-map-seat-title">Vue depuis la Section {getSectionLabel(selectedSection.name)}, Place {selectedSeat}</div>
                <div className="reserve-map-seat-desc">
                  {selectedSection.name === 'Section VIP'
                    ? 'Vue VIP premium avec les meilleures perspectives et commodités. Votre place est située dans la zone VIP premium avec accès exclusif.'
                    : 'Vue standard avec une bonne perspective sur le terrain.'}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 