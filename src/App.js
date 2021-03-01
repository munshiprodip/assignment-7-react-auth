import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import Players from './components/players/Players';
import Team from './components/team/Team';
import Header from './components/header/Header';
import playerData from './data/playerData.json';




function App() {
  const [playersData, setPlayersData] = useState([])
  const [selected, setSelected] = useState([])
  useEffect(()=>{
    setPlayersData(playerData)
  }, [])

  const handleClick = (addPlayer) =>{
    if (selected.indexOf(addPlayer)===-1) {
      const newTeam = [...selected, addPlayer]
      setSelected(newTeam)
    }else{
      alert("This player allready added")
    }
    
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
          <h3>Select your favorite players </h3>
            <Players players={playersData} clickEvent={handleClick} ></Players>
          </div>
          <div className="col-md-3">
            <h3>Your Team</h3>
            <Team players={selected}></Team>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
