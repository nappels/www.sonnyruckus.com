import React from 'react';

class PageMusic extends React.Component {
  render() {
    return (
      <section id="Music" className="row page-music">
        <div className="col">
          <h2>Music</h2>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236435663&amp;color=cb9326&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
          </iframe>
        </div>
      </section>
    );
  }
};

export default PageMusic;
