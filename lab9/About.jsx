import React from 'react';

function About() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      background: 'linear-gradient(to bottom right, #fff8e1, #ffe082)',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#ff6f00', fontSize: '2.5rem', marginBottom: '20px' }}>About Us</h2>
      <img 
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
        alt="Team collaboration" 
        style={{ width: '400px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} 
      />
      <p style={{ fontSize: '1.2rem', color: '#5d4037', marginTop: '25px', lineHeight: '1.6' }}>
        We’re a passionate team of creators, thinkers, and innovators dedicated to making a positive impact. 
        Our mission is to empower individuals and organizations through technology, design, and collaboration.
      </p>
      <p style={{ fontSize: '1rem', color: '#6d4c41', marginTop: '15px' }}>
        Every project we take on is guided by our core values — integrity, creativity, and community.
      </p>
    </div>
  );
}

export default About;
