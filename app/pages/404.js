import React from 'react';

const Custom404 = () => {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0', // Your desired background color
        color: '#2f1c5b', // Your desired text color
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>
        404 - Page Not Found
      </h1>
      <p style={{ fontSize: '18px' }}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default Custom404;
