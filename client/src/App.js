
import './styles/App.css';
import React from 'react';
import List from './components/List';
import Lables from './components/Lables';


function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <div class="documentList">
        <List/>
      </div>
      <div class="annotation">
        
      </div>
      <div class="lables">
        <Lables/>
      </div>
    </div>
  );
}

export default App;
