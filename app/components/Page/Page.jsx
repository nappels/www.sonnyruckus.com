import React from 'react';

import Header from '../Header/Header';
import PageHome from '../Page.Home/Page.Home';

class Page extends React.Component {
  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <PageHome />
      </div>
    );
  }
};

export default Page;
