import React from 'react';

class PageShows extends React.Component {
  componentDidMount() {
    var script = document.createElement('script');
    script.src = "//widget.songkick.com/widget.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  render() {
    return (
      <section id="Shows" className="row page-shows">
        <div className="col">
          <h2>Shows</h2>

          <div className="tour-date-wrapper">
            <a href="http://www.songkick.com/artists/8681649" className="songkick-widget" data-theme="light" data-detect-style="true" data-background-color="transparent">Sonny Ruckus tour dates</a>
          </div>
        </div>
      </section>
    );
  }
};

export default PageShows;
