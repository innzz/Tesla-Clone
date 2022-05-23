import React, {useState} from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  return (
    <div className="App">
      <Header setBurgerStatus={setBurgerStatus} BurgerStatus={BurgerStatus}/>
      <Home setBurgerStatus={setBurgerStatus} BurgerStatus={BurgerStatus}/>
    </div>
  );
}

export default App;
