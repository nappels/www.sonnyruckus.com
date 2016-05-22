import React from 'react';

class PageBio extends React.Component {
  render() {
    return (
      <section id="Bio" className="row page-bio">
        <div className="col">
          <h2>Bio</h2>
          <p>
          In the foggy San Francisco summer of 2014, Juan Martinez met Noah Appel, and together the emcee-drummer duo started what would become Sonny Ruckus.
          As the pieces started to come together - Joe Ferrone on trumpet, Scott Mayhew on guitar, Clare Nauman on violin, Kaila Love emcee/vocals, and Colin Bjorklund on bass -
          the sound started to form. Sonny Ruckus found its identity blending a fresh mix of Hip-Hop, Funk, and Dance, and is here to unleash it on you.
          </p>

          <ul className="instrumentation">
            <li>Juan Martinez - emcee</li>
            <li>Kaila Love - emcee</li>
            <li>Joe Ferrone - trumpet</li>
            <li>Scott Mayhew - guitar</li>
            <li>Clare Nauman - violin</li>
            <li>Colin Bjorklund - bass</li>
            <li>Noah Appel - drums</li>
          </ul>
        </div>
      </section>
    );
  }
};

export default PageBio;
