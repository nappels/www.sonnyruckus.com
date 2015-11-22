import React from 'react';


class Burger extends React.Component {
  render() {
    return (
      <div className="burger" onClick={this.props.toggleOpen}>
        <div className="bun"></div>
        <div className="bun"></div>
      </div>
    );
  }

};

export default Burger;
