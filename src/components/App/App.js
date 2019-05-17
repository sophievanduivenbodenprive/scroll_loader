import React from 'react';
import './App.scss';
import ScrollBar from '../ScrollBar/ScrollBar';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <ScrollBar />
      </div>
    );
  }
}

export default App;
