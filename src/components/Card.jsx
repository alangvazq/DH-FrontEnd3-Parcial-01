import React from 'react';

const Card = ({ name, song }) => (
  <div className="card">
    <h2>Información</h2>
    <p><strong>Nombre: </strong> {name}</p>
    <p><strong>Canción favorita: </strong> {song}</p>
  </div>
);

export default Card;

