
import './styles/App.css';
import React from 'react';
import List from './components/List';
import Lables from './components/Lables';
import DisplayText from './components/DisplayText';
import {showText} from './components/index.js';

function App() {
  
  return (
    <div className="App">
      <div class="documentList">
        <List/>
      </div>
      <div class="annotation">
        {showText()}
        <DisplayText/>
      </div>
      <div class="lables">
        <Lables/>
      </div>
    </div>
  );
}

export default App;
