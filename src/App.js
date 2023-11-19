import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Boltcollection from './componets/Boltcollection';
import YourboltArmy from './componets/YourboltArmy';



function App() {


  const [selectedBolts, setSelectedBolts] = useState([]);

  const removeFromBoltArmy = (boltId) => {
    const updatedBolts = selectedBolts.filter((bolt) => bolt.id !== boltId);
    setSelectedBolts(updatedBolts);
  };
  

  const addToBoltArmy = (bolts) => {
    setSelectedBolts([...selectedBolts, bolts]);
  };

  return (
    <>
      <YourboltArmy selectedBolts={selectedBolts}  removeFromBoltArmy={removeFromBoltArmy}/>
      <Boltcollection addToBoltArmy={addToBoltArmy}/> 
     

      


    </>
  
  );
}

export default App;
