import React from 'react';
import './experience.css';
import {
  Typography,
  Paper
} from '@material-ui/core';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@material-ui/lab';
import PropTypes from 'prop-types';

function Experience({
  timeFrame, title, company, city, description
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent className="resume__oposite">
        <Typography className="oposite__content">{timeFrame}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" className="resume__dot" />
        <TimelineConnector className="resume__connector" />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className="resume__paper">
          <Typography variant="h5" component="h1" className="paper__card-title">
            {title}
          </Typography>
          <Typography variant="h6" component="h1" className="paper__card-subtitle">
            {company}
            ,
            {' '}
            {city}
          </Typography>
          <Typography>{description}</Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}

Experience.propTypes = {
  timeFrame: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Experience;
