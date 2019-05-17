import React from 'react';
import './ScrollBar.scss';

class ScrollBar extends React.Component {
  render(){
    return (
      <div className="ScrollBar">
        <div className="bar">
          <div className="barfiller" />
        </div>
      </div>
    );
  }
}

export default ScrollBar;
