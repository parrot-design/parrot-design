import React from 'react'; 
import { Paper } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      {'hello world'}
      <Paper elevation={2} style={{display:'inline-block'}}>
        <div style={{height:300,width:300}}>hahah</div>
      </Paper>
    </div>
  );
}

export default App;
