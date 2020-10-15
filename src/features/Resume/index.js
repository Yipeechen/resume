import React from 'react';

import Header from './ResumeHeader';
import About from './ResumeAbout';
import Skills from './ResumeSkills';

const resume = props => (
  <React.Fragment>
    <Header />
    <About />
    <Skills />
  </React.Fragment>
);

export default resume;
