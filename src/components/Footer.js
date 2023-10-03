import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebookSquare, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/sachit.dahal.7/' target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter-link-here' target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://google-link-here' target="_blank" rel="noopener noreferrer">
            <FaGoogle />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/sachit_0.0/' target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/sachit-dahal-59a05b212/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Sachit0-0' target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='mailto:sachitdahal33@gmail.com' target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          sachitsachit.com
        </a>
      </div>
    </MDBFooter>
  );
}
