import React from 'react';

function Portfolio() {
  return (
    <div>
      <h1>Your CV</h1>
      <p>Here is your CV:</p>
      <iframe
        title="Your CV"
        src="/assests/Sachit-Dahal_CV.pdf#toolbar=0" // Use a relative path
        width="100%"
        height="1200px" // Adjust the height as needed
      ></iframe>
    </div>
  );
}

export default Portfolio;
