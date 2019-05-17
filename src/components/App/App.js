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

  componentDidMount() {
    window.addEventListener('scroll', this.calculateScrollPosition)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.calculateScrollPosition)
  }
  
  calculateScrollPosition = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    const scrolled = (winScroll / height)*100;
  
    this.setState({
      scrollpercentage: scrolled.toFixed(2)
    })
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
