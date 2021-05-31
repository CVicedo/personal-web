import React from 'react';
import './Resume.css';
import { Chip } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import Experience from '../../elements/experience/Experience';
import data from '../constants/index';

function Resume() {
  const { resume } = data;

  return (
    <div className="resume">
      <h2>Resume</h2>
      <h3>About</h3>
      <span className="resume__about-text">
        {resume.about}
      </span>
      <br />
      <h3>Skills</h3>
      <div className="resume__skills">
        {resume.skills.map((skill) => (<Chip label={skill} variant="outlined" className="skills__chip" />))}
      </div>
      <br />
      <h3>Work Experience</h3>
      <Timeline align="left">
        {resume.experiences.work.map((experience) => (
          <Experience
            timeFrame={experience.timeFrame}
            title={experience.title}
            company={experience.company}
            city={experience.city}
            description={experience.description}
          />
        ))}
      </Timeline>
      <br />
      <h3>Education History</h3>
      <Timeline align="left">
        {resume.experiences.study.map((experience) => (
          <Experience
            timeFrame={experience.timeFrame}
            title={experience.title}
            company={experience.company}
            city={experience.city}
            description={experience.description}
          />
        ))}
      </Timeline>
      <br />
    </div>
  );
}

export default Resume;
