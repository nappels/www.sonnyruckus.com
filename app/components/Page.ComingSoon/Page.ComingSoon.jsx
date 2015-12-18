import React from 'react';

class PageComingSoon extends React.Component {
  render() {
    return (
      <section id="Home" className="row page-coming-soon">
      <div className="border-glitch"></div>
        <div className="col">
          <div className="center">
            <img src="../img/sr_idea1.png" alt="" />
            <h2>...coming soon</h2>
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236435663&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
            </iframe>
          </div>
        </div>
      </section>
    );
  }
};

export default PageComingSoon;

// <iframe width="100%" height="300" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/236435663&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

// <span className="color-glitch">o</span>
// <span className="sonny">Sonny</span> Ruckus
// <span className="bar">
//   y Rucku
// </span>
