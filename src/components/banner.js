import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { FaFacebookSquare, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap as SchoolIcon} from 'react-icons/fa';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';
import { MDBSpinner } from 'mdb-react-ui-kit'; // Assuming you're using MDB React UI Kit for the spinner



function App() {
  const darkerBackgroundColor = 'rgb(18, 18, 18)'; // Darker background color
  const whiteTextColor = '#fff'; // White text color

  return (
    <div className='try'>
      <Container className="text-center">
        {/* Profile Image */}
        <Image
          src="assests/360033919_329090166112916_8476159787953751632_n.jpg"
          roundedCircle
          alt="Profile"
          className="mx-auto my-4 "
        />

        {/* Introduction */}

        <div className="container my-4">
          <div className="text-center">
            <h1 className="display-4">Sachit Dahal</h1>
            <p className="typewriter">Passionate Developer | Tech Enthusiast</p>
          </div>
          <div className="my-4">
            <h2 className="text-center">Welcome to My Portfolio!</h2>
            {/* ... (Rest of the content) */}
          </div>
       
        {/* Animated Social Buttons */}
        <div className="justify-content-center my-9" >

          <a
            href="https://github.com/Sachit0-0"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mx-3"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sachit-dahal-59a05b212/e"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mx-3"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://www.facebook.com/sachit.dahal.7/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mx-3"
          >
            <FaFacebookSquare className="icon" />
          </a>
          <a
            href="https://www.instagram.com/sachit_0.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mx-3"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="mailto:sachitdahal33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link mx-3"
          >
            <FaEnvelope className="icon" />
          </a>
          </div>
          <hr className="sidhaline" />
                    









       

            {/* Other timeline elements */}
            
       



<div className='timeliness'>
<hr className="sidhaline" />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Born on 2000 Oct 18"
              iconStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentArrowStyle={{ borderRight: `7px solid ${darkerBackgroundColor}` }}
              icon={<FaBirthdayCake />} // Customized icon
            >
              <h3 className="vertical-timeline-element-title">Happy Birthday!</h3>
              <p style={{ color: whiteTextColor }}>You were born on October 18, 2000.</p>
            </VerticalTimelineElement>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="CHAITRA 2073"
              iconStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentArrowStyle={{ borderRight: `7px solid ${darkerBackgroundColor}` }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">SEE, ASHIRVAD BOARDING SCHOOL</h3>
              <p style={{ color: whiteTextColor }}>GPA: 3.65</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="BAISAKH 2076"
              iconStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentArrowStyle={{ borderRight: `7px solid ${darkerBackgroundColor}` }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">NEB, CANVAS INTERNATIONAL COLLEGE</h3>
              <p style={{ color: whiteTextColor }}>Science Stream</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="ASHADH 2080 B.S."
              iconStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentArrowStyle={{ borderRight: `7px solid ${darkerBackgroundColor}` }}
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">B. Sc.IT, HERALD COLLEGE KATHMANDU</h3>
              <p style={{ color: whiteTextColor }}>
                Recent graduate in Information Technology (B.IT) from Herald College Kathmandu (HCK).
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
             iconStyle={{
              background: 'rgba(0, 0, 0, 0)', // Fully transparent background
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: whiteTextColor
            }}
            icon={
              <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
            }
            />
          </VerticalTimeline>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Death: Pending"
              iconStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentStyle={{ background: darkerBackgroundColor, color: whiteTextColor }}
              contentArrowStyle={{ borderRight: `7px solid ${darkerBackgroundColor}` }}
              icon={<FaQuestionCircle />} // Customized icon
            >
              <h3 className="vertical-timeline-element-title">Life Journey</h3>
              <p style={{ color: whiteTextColor }}>The journey continues...</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          </div>
        </div>
      </Container>
      <hr className="sidhaline" />
    </div>
    
  );
}

export default App;
