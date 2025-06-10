import React from 'react';
import ASCIIText from './ASCIIText';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="ascii-container">
        <ASCIIText 
          text="wk inc." 
          asciiFontSize={7}
          textFontSize={200}
          enableWaves={true}
        />
      </div>
    </div>
  );
}

export default App;