import React from 'react';
import classNames from 'classnames';

import Burger from '../Header.Nav.Burger/Header.Nav.Burger';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    var navClass = classNames({
      nav: true,
      open: this.state.isOpen
    });

    return (
      <nav className={navClass}>
        <Burger isOpen={this.state.isOpen} toggleOpen={this.toggleOpen.bind(this)} />
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
