import React from 'react';

import Header from './ResumeHeader';
import About from './ResumeAbout';
import Skills from './ResumeSkills';
import Experience from './ResumeExperience';
import Works from './ResumeWorks';
import Contact from './ResumeContact';

const resume = props => (
  <React.Fragment>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Works />
    <Contact />
  </React.Fragment>
);

export default resume;
