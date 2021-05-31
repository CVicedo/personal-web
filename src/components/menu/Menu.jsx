import React from 'react';
import './menu.css';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from 'react-router-dom';
import portrait from '../../assets/images/carles-viceo-web-developer.png';
import data from '../constants/index';

function Menu() {
  const { socialMedia, personalData } = data;
  return (
    <div className="menu">
      <img src={portrait} alt="Carles Vicedo portrait" className="portrait" />
      <h1>
        {personalData.name}
        {' '}
        {personalData.surname}
      </h1>
      <h2>{personalData.position}</h2>
      <div className="menu__sections">
        <span><Link to="/">Home</Link></span>

        <span>
          <hr />
          <Link to="/resume">Resume</Link>
        </span>

        <span>
          <hr />
          Projects
        </span>

        <span>
          <hr />
          About Me
        </span>

        <span>
          <hr />
          <div className="sections__social-icons">
            <div className="social-icons__icon"><Link to="/contact">Contact</Link></div>
            <div className="social-icons__icon"><a href={socialMedia.linkedIn} label target="_blank" rel="noreferrer"><LinkedInIcon /></a></div>
            <div className="social-icons__icon"><a href={socialMedia.gitHub} label target="_blank" rel="noreferrer"><GitHubIcon /></a></div>
          </div>
        </span>

      </div>
      <Button variant="outlined" className="menu__donload-cv-button">
        Download CV
      </Button>

    </div>
  );
}

export default Menu;
