import React from 'react';
import './App.scss';
import ScrollBar from '../ScrollBar/ScrollBar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollpercentage: 0
    };
  }

  render(){
    return (
      <div className="App">
        <div className="copy">{this.state.scrollpercentage}%</div>
        <ScrollBar />
      </div>
    );
  }
}

export default App;
