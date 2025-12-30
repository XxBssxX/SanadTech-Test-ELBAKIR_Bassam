import { useState } from 'react';
import AlphabetMenu from './components/MenuAlphabet';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [letter, setLetter] = useState('A');

  return (
    <div className="app-container">
      <h1>SanadTech List</h1>
      <AlphabetMenu onSelect={setLetter} />
      <UserList letter={letter} />
    </div>
  );
}

export default App;
