import React from 'react';
import './style.scss';

const Splash = () => {
  return (
    <div className="splash">
      <div className="splash__content">
        <div className="splash__circle splash__circle--xl">
          <div className="splash__circle splash__circle--lg">
            <div className="splash__circle splash__circle--md">
              <div className="splash__circle splash__circle--sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
