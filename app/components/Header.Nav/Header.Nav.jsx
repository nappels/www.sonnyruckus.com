import React from 'react';
import classNames from 'classnames';

import Burger from '../Header.Nav.Burger/Header.Nav.Burger';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }

  componentWillUpdate(nextProps, nextState) {
    var htmlClass = document.getElementsByTagName('html')[0].className;
    var bodyClass = document.body.className;

    if (nextState.isOpen) {
      document.body.className += ' no-scroll';
      document.getElementsByTagName('html')[0].className += ' no-scroll';
    }
    else {
      if (bodyClass.indexOf('no-scroll') > -1) {
        document.body.className = bodyClass.replace(' no-scroll', '');
      }
      if (htmlClass.indexOf('no-scroll') > -1) {
        document.getElementsByTagName('html')[0].className = htmlClass.replace(' no-scroll', '');
      }
    }
  }

  toggleOpen() {
    if (document.body.clientWidth <= 530) {
      this.setState({isOpen: !this.state.isOpen});
    }
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
          <li><a data-scroll href="#Home" onClick={this.toggleOpen.bind(this)}>Home</a></li>
          <li><a data-scroll href="#Music" onClick={this.toggleOpen.bind(this)}>Music</a></li>
          <li><a data-scroll href="#Shows" onClick={this.toggleOpen.bind(this)}>Shows</a></li>
          <li><a data-scroll href="#Bio" onClick={this.toggleOpen.bind(this)}>Bio</a></li>
          <li><a data-scroll href="#Contact" onClick={this.toggleOpen.bind(this)}>Contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
