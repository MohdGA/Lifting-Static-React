import { useState } from 'react';
import './App.css';

const App = () => {

  const [mode, setMode] = useState(true);

  const handleMode = (modeValue) => {
    setMode(modeValue);
  };

  const [animal, setAnimal] = useState([
    { name: 'Myshka', breed: 'Ragdoll' },
    { name: 'Malta', breed: 'Turkish Angora' },
  ]);

  const addAnimal = (newAnimal) => {
    setAnimal([...animal, newAnimal]);
  }

  return (
    <>
      <div className={mode.toString()}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>

        <button onClick={() => handleMode('neon')}>Neon Mode</button>
        <button onClick={() => handleMode('night')}>Night Mode</button>
      </div>

      <button onClick={() => addAnimal({name: 'Falcon', breed: 'Bird'})}>Add Animal</button>

      <ul>
        {animal.map((type, idx) => 
          <li key={idx}>
            {type.name} - {type.breed}
          </li>
        )}
      </ul>
    </>
  );
};

export default App;