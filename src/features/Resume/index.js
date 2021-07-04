import { Fragment } from 'react';

import Header from './ResumeHeader';
import About from './ResumeAbout';
import Skills from './ResumeSkills';
import Experience from './ResumeExperience';
import Works from './ResumeWorks';
import Contact from './ResumeContact';

const resume = props => (
  <Fragment>
    <Header />
    <About />
    <Skills />
    <Experience />
    <Works />
    <Contact />
  </Fragment>
);

export default resume;
