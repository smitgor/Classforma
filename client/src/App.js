
import './styles/App.css';
import React from 'react';
import List from './components/List';
import Lables from './components/Lables';
import DisplayText from './components/DisplayText';
function App() {
  
  return (
    <div className="App">
      <div class="documentList">
        <List/>
      </div>  
      <div id="annotation">
        <DisplayText/>
      </div>
      <div id="lables">
        <Lables/>
      </div>
    </div>
  );
}

export default App;
