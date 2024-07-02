import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Rick and Morty Characters</h2>
      </header>
      <main>
        <CharacterList />
      </main>
    </div>
  );
}

export default App;