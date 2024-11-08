import React, { useState } from "react";

const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [song, setSong] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        
        if (name.length < 3 || name.startsWith(" ")) {
        setError("Por favor chequea que la información sea correcta");
        return;
        }
        if (song.length < 6) {
        setError("Por favor chequea que la información sea correcta");
        return;
        }

        onSubmit(name, song);
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Nombre: </label>
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
            />
        </div>
        <div>
            <label>Canción favorita: </label>
            <input
            type="text"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            placeholder="Ingresa tu canción favorita"
            required
            />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">ENVIAR</button>
        </form>
    );
};

export default Form;
