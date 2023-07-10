import React from 'react';

import { Link } from 'react-router-dom';
const ListCards = ({ id, name, namejp, category, generation, picture }) => {
  return (
    <div className="card">
      <h2>
        {' '}
        <Link to={`/pokemon/${id}`}>{name}</Link>
      </h2>

      <img src={picture} alt={name} className="card-image" />
    </div>
  );
};

export default ListCards;
