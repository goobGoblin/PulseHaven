// src/components/TextSphere.js
import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';
import './TextSphere.css'; // Import the CSS file for styles

const TextSphere = () => {
  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'DANCE ~ MOVE ~ SHAKE',
      'A safe haven for creativity and self-expression',
      'Put your phone away and dance',
      'Music and Art collective focused on curating intimate experiences and a safe space to express yourself on the dancefloor',
      'A reprieve from the mundane, stressful, sometimes soul-crushing experience of surviving in a capitalist world, where the music envelops, the dancefloor unites, and the outside world fades away',
      'Music is a universal language, long before words took shape, music connected us, we are dedicated to tapping into those primal urges hard-coded into our DNA to foster pure escapism through rhythm and movement',
      'Join us, and be part of something greater: an organism in harmony on the dancefloor',
    ];

    const options = {
      radius: 300,
      maxSpeed: 'normal',
      initSpeed: 'normal',
      keep: true,
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
