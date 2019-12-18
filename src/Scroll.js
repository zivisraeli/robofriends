import React from 'react';

class Scroll extends React.Component {
  divStyle = {
    overflow: 'scroll',
    border: '5px solid black',
    height: '800px'
  }

  render() {
    return (
      <div style = {this.divStyle}> 
        { this.props.children } 
      </div>
    );
  }
}

export default Scroll;