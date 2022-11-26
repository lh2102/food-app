

import React from 'react';

const CommonSection = (props) => {
  return (
      <section className="common_section">
          <div className='container common_title'>
              <h2>{props.title}</h2>
          </div>
      </section>
  );
}

export default CommonSection