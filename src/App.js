import React from 'react';
import {Bio} from './component/Bio';
import './App.css';
import FullName from './component/FullName';
import Profession from './component/Profession'


function showAdditional(additional) {
  const alertInformation = Object.entries(additional)
    .map(information => `${information[0]}: ${information[1]}`)
    .join('\n');
  alert(alertInformation)
};

function App() {
  console.log(Bio)
  return (
    <div className="wrapper">
      <h1>Faculté</h1>
      {Bio.map(fac => (
        <FullName 
        additional={fac.additional}
          key={fac.name}
          name={fac.name}
          scientificName={fac.scientificName}
          showAdditional={showAdditional}
          />
      
      ))}
    
    <div className='container'>
        <Profession>
          <img src='téléchargement (1).png' alt=''></img>
          <img src='téléchargement.jpeg' alt=''></img>
          <img src='téléchargement.png' alt=''></img>
        </Profession>
      
    </div>
    </div>
  )
}

export default App;
