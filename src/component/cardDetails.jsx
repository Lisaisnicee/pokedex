import React, { useState } from 'react';

const CardDetails = ({
  name,
  namejp,
  category,
  generation,
  picture,
  pictureshiny,
  statshp,
  statsatk,
  statsdef,
  statsspecial,
  types,
  resistances,
  height,
  weight,
  eggGroups,
  catchRate,
}) => {
  const [currentTab, setCurrentTab] = useState('resistances');
  const [isShiny, setIsShiny] = useState(false);

  const handleImageClick = () => {
    setIsShiny(!isShiny);
  };

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className="carddetails">
      <h2>{name}</h2>
      <h2>{namejp}</h2>
      <p>Category: {category}</p>
      <p>Generation: {generation}</p>
      <img
        src={isShiny ? pictureshiny : picture}
        alt={name}
        className="card-image"
        onClick={handleImageClick}
      />

      <div className="type-tags">
        {types.map((type, index) => (
          <div className="type-tag" key={index}>
            <img src={type.image} alt={type.name} />
            <span>{type.name}</span>
          </div>
        ))}
      </div>
      <br></br>

      <div className="tabs-container">
        <button
          className={`tab-button ${
            currentTab === 'resistances' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('resistances')}
        >
          Resistances
        </button>
        <button
          className={`tab-button ${currentTab === 'stats' ? 'active' : ''}`}
          onClick={() => handleTabChange('stats')}
        >
          Stats
        </button>
        <button
          className={`tab-button ${
            currentTab === 'additionalInfo' ? 'active' : ''
          }`}
          onClick={() => handleTabChange('additionalInfo')}
        >
          Info
        </button>
      </div>

      {currentTab === 'resistances' && (
        <div className="tab-content">
          <h3>Resistances:</h3>
          <ul>
            {resistances.map((resistance, index) => (
              <li key={index}>{resistance.name}</li>
            ))}
          </ul>
        </div>
      )}

      {currentTab === 'stats' && (
        <div className="tab-content">
          <h3>Stats:</h3>
          <div className="stats-container">
            <div className="stat">
              <span>HP</span>
              <div className="gauge">
                <div
                  className="bar"
                  style={{ width: `${(statshp / 100) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="stat">
              <span>Attaque</span>
              <div className="gauge">
                <div
                  className="bar"
                  style={{ width: `${(statsatk / 100) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="stat">
              <span>Defense</span>
              <div className="gauge">
                <div
                  className="bar"
                  style={{ width: `${(statsdef / 100) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="stat">
              <span>Special</span>
              <div className="gauge">
                <div
                  className="bar"
                  style={{ width: `${(statsspecial / 100) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentTab === 'additionalInfo' && (
        <div className="tab-content">
          <h3>Information:</h3>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Egg Groups: {eggGroups.join(', ')}</p>
          <p>Catch Rate: {catchRate}</p>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
