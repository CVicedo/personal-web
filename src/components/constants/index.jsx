import React from 'react';

const data = {
  personalData: {
    name: 'Carles',
    surname: 'Vicedo de Salvador',
    position: 'Web Developer'
  },
  socialMedia: {
    linkedIn: 'https://www.linkedin.com/in/carlesvicedo/',
    gitHub: 'https://github.com/CVicedo'
  },
  resume: {
    about: [`I am a curious and dedicated web developer who likes to solve problems.
      Aware of good practices and testing, my professional goal at the moment is to
      continue developing as a programmer.`, <br />, <br />, `Although I am good at working independently, in teamwork I dont only apply my
      knowledge, but also contribute to theproper functioning of the team, striving to
      maintain unity and high spirits.`],
    skills: ['React', 'Angular', 'NodeJs', 'ExpressJs', 'JavaScript'],
    experiences: {
      work: [
        {
          timeFrame: '9/2021 - Present',
          title: 'Full Stack Developer',
          company: 'Rzilient',
          city: 'Barcelona',
          description: ['Frontend made with React, Redux, Material UI, Styled Components and other technologies / libraries. ',
            'Migrating backend to microservices in Node hosted by Google Cloud Services. ', 'Mobile App made with React Native']
        },
        {
          timeFrame: '6/2021 - 9/2021',
          title: 'Frontend Developer',
          company: 'Grupo Romeu Multiservicios',
          city: 'Remote',
          description: [`Frontend development with technologies such as React, Redux, SCSS... and libraries including
        Ant Design. `, 'Use of Agile methodologies in order to organizing all the workflow']
        },
        {
          timeFrame: '11/2018 - 7/2020',
          title: 'E-Commerce Manager',
          company: 'ProPrintweb',
          city: 'Barcelona',
          description: [`In charge of different marketing channels including SEO, email marketing and
            display.`]
        },
        {
          timeFrame: '5/2015 - 11/2018',
          title: 'Digital Project Manager',
          company: 'MontaWeb',
          city: 'Sabadell',
          description: ['Client management and permanent contact with all the projects stakeholders.', `Successfully supervised a team composed of developers and
          designers.`]
        },
        {
          timeFrame: '9/2013 - 12/2014',
          title: 'Digital Marketing Manager',
          company: 'Albert Bauer Digital',
          city: 'Hamburg',
          description: [`Planning and implementation of SEO-strategies, including keyword analysis and content strategies for the company's own blog and portal
          network.`]
        },
        {
          timeFrame: '4/2012 - 8/2013',
          title: 'Country Manager Spain',
          company: 'Panna Cotta GmbH',
          city: 'Hamburg',
          description: ['Manager of the website Cupon.es, including the coordination of SEO, Social Media and Affiliate departments.']
        }
      ],
      study: [
        {
          timeFrame: '2021',
          title: 'Coding Bootcamp',
          company: 'Skylab Coders Academy',
          city: 'Barcelona'
        },
        {
          timeFrame: '2009 - 2010',
          title: 'Master of Business Administration,',
          company: 'University Of Valencia',
          city: 'Valencia'
        },
        {
          timeFrame: '2005 - 2009',
          title: 'Grade, Touristic Companies and Activities',
          company: 'University Of Valencia',
          city: 'Valencia'
        }
      ]
    }
  }
};

export default data;
