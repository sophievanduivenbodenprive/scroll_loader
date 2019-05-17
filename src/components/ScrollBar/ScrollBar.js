import React from 'react';
import './ScrollBar.scss';

class ScrollBar extends React.Component {
  render(){
    return (
      <div className="ScrollBar">
        <div className="bar">
          <div className="barfiller" style={{
            width: this.props.scrolledpage + 'vw'
          }}/>
        </div>
      </div>
    );
  }
}

export default ScrollBar;