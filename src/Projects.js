import React from 'react'
import DotnetCertificate from './images/certificate-dotnet+react.jpg'
import FullstackCertificate from './images/certificate-fullstack.png'
import DockerCertificate from './images/certificate-docker.png'
import SurveyApp from './images/survey-app.png'

const Projects = () => (
  <div>
    <h1 className='header'>Projects And Courses</h1>
    <div>
      <h2 className='header'>Full stack open</h2>
      <p className='container'>
        <a href='https://fullstackopen.com/en'>Full stack open 2020</a> is a course from
        Helsinki University, which focuses on building single page applications
        with React.js and Node.js.
      </p>
      <img className='certificate' src={FullstackCertificate} alt='Full stack open 2020 certificate Elias Seeve'></img>
    </div>
    <div>
      <h2 className='header'>.NET Core and React course</h2>
      <p className='container'>
        <a href='https://www.udemy.com/course/complete-guide-to-building-an-app-with-net-core-and-react/'>.NET Core and React</a> is a Udemy course, 
        where a Full Stack application is built from ground-up using Clean Architecture.
      </p>
      <img className='certificate'src={DotnetCertificate} alt='Dotnet + React certificate Elias Seeve'></img>
    </div>
    <div>
      <h2 className='header'>Survey App</h2>
      <p className='container'>
        Survey App is a page for creating different surveys and quizzes.
        Users can take surveys and collect data own their own surveys.
        This is a full stack project built with React.js as the frontend and Node.js as the backend. The project uses
        MongoDB as the database. The app is hosted on <a href='https://survey-app-seeve.herokuapp.com/#/'>Heroku</a>. <br />
        View on <a href='https://github.com/eseeve/survey-app'>GitHub</a>.
      </p>
      <img className='certificate' src={SurveyApp} alt='Survey app homepage'></img>
    </div>
    <div style={{ paddingBottom: '3rem' }}>
      <h2 className='header'>DevOps with Docker</h2>
      <p className='container'>
        <a href='https://devopswithdocker.com/'>DevOps with Docker</a> is a course from
        Helsinki University, which focuses on containerizing applications and working with docker-compose.
      </p>
      <img className='certificate' src={DockerCertificate} alt='Devops with Docker certificate Elias Seeve'></img>
    </div>
  </div>
)

export default Projects