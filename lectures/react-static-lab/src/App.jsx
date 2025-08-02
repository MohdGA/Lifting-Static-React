import { useState } from "react";
import "./App.css";

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
);
  const [strength, setStrength] = useState(0);
  const [agility, setAgility] = useState(0);

  const handleFighter = (addFighter) => {
    if(money >= addFighter.price) {
      setTeam([...team, addFighter]);
      setZombieFighters(zombieFighters.filter((zombie) => zombie.id !== addFighter.id));
      setMoney(money - addFighter.price);
      setStrength(strength + addFighter.strength);
      setAgility(agility + addFighter.agility);
    }else{
      console.log("Not enough money");
    }
    
  };

  const handleRemoveFighter = (removeFighter) => {
    setTeam(team.filter((member) => member.id !== removeFighter.id));
    setZombieFighters([...zombieFighters, removeFighter]);
    setMoney(money + removeFighter.price);
    setStrength(strength - removeFighter.strength);
    setAgility(agility - removeFighter.agility);
  }

  

  return (
    <>
      <h1>Zobmie  Fighters</h1>
      {
        <div>
          {"Money: " + money}
         <p> {"Strength: " + strength} </p>
         <p> {"Agility: " + agility} </p>
        </div>

      }

      <div>
        <h2>Team</h2>
        {team.length > 0 ? 
        <ul>
          {team.map((member, idx) => 
            <li key={idx}>
              <p>Name:{member.name}</p>
              <p>Price:{member.price}</p>
              <p>Strength:{member.strength}</p>
              <p>Agility:{member.agility}</p>
              <img src={member.img} alt="zombieImg" />
              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
            </li>
          )}
        </ul> : 'Pick ssome team members!'}
        <hr />
      </div>

      <ul>
        {zombieFighters.map((zombie, idx) => 
          <li key={idx}>
            <p>Name:{zombie.name}</p>
            <p>Price:{zombie.price}</p>
            <p>Strength:{zombie.strength}</p>
            <p>Agility:{zombie.agility}</p>
            <img src={zombie.img} alt="zombieImg" />
            <hr />
            <button onClick={() => handleFighter(zombie)}>Add</button>
          </li>
        )}
      </ul>
    </>
  );
}

export default App;