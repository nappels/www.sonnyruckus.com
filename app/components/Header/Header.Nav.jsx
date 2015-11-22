import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="burger">
          <div className="bun"></div>
          <div className="bun"></div>
        </div>
        <ul>
          <li>Home</li>
          <li>Music</li>
          <li>Tour</li>
          <li>Bio</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
