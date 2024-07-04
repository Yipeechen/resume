import React from 'react';

import Header from '@src/features/Resume/ResumeHeader';
import About from '@src/features/Resume/ResumeAbout';
import Skills from '@src/features/Resume/ResumeSkills';
import Experience from '@src/features/Resume/ResumeExperience';
import Works from '@src/features/Resume/ResumeWorks';
import Contact from '@src/features/Resume/ResumeContact';

const resume = () => (
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
