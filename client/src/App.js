
import './styles/App.css';
import React from 'react';
import List from './components/List';
import Lables from './components/Lables';

function App() {
  
  return (
    <div className="App">
      <div class="documentList">
        <List/>
      </div>  
      <div id="annotation">
        <p>Please selece document form section on left side to preform annotation</p>
      </div>
      <div id="lables">
        <Lables/>
      </div>
    </div>
  );
}

export default App;
