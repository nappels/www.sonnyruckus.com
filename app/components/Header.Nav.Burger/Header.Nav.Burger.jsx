import React from 'react';


class Burger extends React.Component {
  render() {
    return (
      <div className="burger" onClick={this.props.toggleOpen}>
        <div className="bun bun-top"></div>
        <div className="bun bun-bottom"></div>
      </div>
    );
  }

};

export default Burger;
