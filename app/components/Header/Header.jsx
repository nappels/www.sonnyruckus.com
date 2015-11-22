import React from 'react';

import Nav from '../Header.Nav/Header.Nav';

class Header extends React.Component {
  render() {
    return (
      <header className="row header">
        <Nav />
      </header>
    );
  }
};

export default Header;
