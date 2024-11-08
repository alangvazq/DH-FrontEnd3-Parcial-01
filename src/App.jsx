import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (name, song) => {
    setName(name);
    setSong(song);
    setSubmitted(true);
  };

  return (
    <div className="app-container">
      <h1>Canción favorita</h1>
      <Form onSubmit={handleFormSubmit} />

      {submitted && <Card name={name} song={song} />}
    </div>
  );
};

export default App;
