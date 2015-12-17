import React from 'react';
import smoothScroll from 'smooth-scroll';

import Header from '../Header/Header';
import PageHome from '../Page.Home/Page.Home';
import PageMusic from '../Page.Music/Page.Music';
import PageShows from '../Page.Shows/Page.Shows';
import PageBio from '../Page.Bio/Page.Bio';
import PageContact from '../Page.Contact/Page.Contact';
import PageComingSoon from '../Page.ComingSoon/Page.ComingSoon';

class Page extends React.Component {
  componentDidMount() {
    smoothScroll.init()
  }

  render() {
    if (true) {
        return (
            <PageComingSoon />
        );
    }
    else {
        return (
          <div className="page-wrapper">
            <Header />
            <PageHome />
            <PageMusic />
            <PageShows />
            <PageBio />
            <PageContact />
          </div>
        );
    }
  }
};

export default Page;
