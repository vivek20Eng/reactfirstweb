import React from'react';
import './App.css';
import Header from './components/header/header';
import Homebanner from './components/homebanner/homebanner';
function App() {
  return (
    <div className="App">
      <Header/>
      <Homebanner/>
    </div>
  );
}

export default App;
