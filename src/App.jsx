import { useState } from 'react';
import Weather from './Weather';

function App() {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(city);
    setCity('');
  };

  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        🌤️ Weather App
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: '10px 15px',
            borderRadius: '5px',
            border: 'none',
            outline: 'none',
            width: '250px',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
        >
          Search
        </button>
      </form>

      {query && (
        <p
          style={{
            color:'black',
            fontSize: '1.2rem',
            fontWeight: '500',
            marginBottom: '20px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
          }}
        >
          🔍 Searching weather for <strong>{query}</strong>
        </p>
      )}

      {query && <Weather city={query} />}
    </div>
  );
}

export default App;
