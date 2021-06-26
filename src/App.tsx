import React from 'react';  
import Paper from 'parrot-ui-paper';
import "parrot-ui-paper/dist/index.css";

import './App.css';

function App() {
  return (
    <div className="App">
      {'hello world'}
      <Paper elevation={1} style={{display:'inline-block'}}>
        <div style={{width:100,height:100}}>hello</div>
      </Paper>
    </div>
  );
}

export default App;
