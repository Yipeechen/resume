import React from 'react';

import Header from './ResumeHeader';
import About from './ResumeAbout';
import Skills from './ResumeSkills';
import Experience from './ResumeExperience';

const resume = props => (
  <React.Fragment>
    <Header />
    <About />
    <Skills />
    <Experience />
  </React.Fragment>
);

export default resume;
