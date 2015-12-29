import React from 'react';

class PageContact extends React.Component {
  render() {
    return (
      <section id="Contact" className="row page-contact">
        <div className="col">
          <h2>Contact</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/sonnyruckus/" target="_blank">
              <div className="icon-facebook"></div>
            </a>
            <a href="https://soundcloud.com/sonnyruckus" target="_blank">
              <div className="icon-soundcloud"></div>
            </a>
            <a href="mailto:booking@sonnyruckus.com" target="_blank">
              <div className="icon-email"></div>
            </a>
          </div>
        </div>
      </section>
    );
  }
};

export default PageContact;
