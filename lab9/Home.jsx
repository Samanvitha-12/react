import React from 'react';

function Home() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      background: 'linear-gradient(to bottom right, #e0f7fa, #b2ebf2)',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#00796b', fontSize: '2.5rem', marginBottom: '20px' }}>Welcome to Our Home Page</h2>
      <img 
        src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae" 
        alt="Modern home exterior" 
        style={{ width: '400px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} 
      />
      <p style={{ fontSize: '1.2rem', color: '#004d40', marginTop: '25px', lineHeight: '1.6' }}>
        Step into our digital home — a space built for creativity, connection, and inspiration. 
        Here you’ll find stories, updates, and resources designed to help you grow and explore new ideas.
      </p>
      <p style={{ fontSize: '1rem', color: '#00695c', marginTop: '15px' }}>
        Whether you’re here to learn, share, or simply browse, we’re glad to have you with us.
      </p>
    </div>
  );
}

export default Home;
