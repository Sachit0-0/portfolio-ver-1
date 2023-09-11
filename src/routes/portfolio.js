import React from 'react';

function Portfolio() {
  return (
    <div>
    <div className="text-center">
      <h1 className='try'>MY CV</h1>
      <p>Here is MY CV:</p>
      </div>
      <img
        src="assests/final.jpg" // Use a relative path to your image
        alt="My CV"
        style={{ width: '80%', display: 'block', margin: '0 auto' }} // Center the image horizontally
      />
    </div>
  );
}

export default Portfolio;
