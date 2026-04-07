import React from 'react';

function Contact() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px',
      background: 'linear-gradient(to bottom right, #ede7f6, #d1c4e9)',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#512da8', fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h2>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoGf5BlnjZPLBv4oNEMEXgD4mAWOr89Aomg&s" 
        alt="Customer support representative" 
        style={{ width: '200px', height: '200px' , borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} 
      />
      <p style={{ fontSize: '1.2rem', color: '#311b92', marginTop: '25px', lineHeight: '1.6' }}>
        Have questions, feedback, or partnership ideas? We’re always happy to connect and assist you. 
        Our dedicated support team ensures that every message receives the attention it deserves.
      </p>
      <p style={{ fontSize: '1rem', color: '#4527a0', marginTop: '15px' }}>
        Reach out via email at <strong>support@ourcompany.com</strong> or call us at <strong>+91 98765 43210</strong>. 
        You can also follow us on social media for updates and announcements.
      </p>
      <p style={{ fontSize: '1rem', color: '#5e35b1', marginTop: '15px' }}>
        We value your time and strive to respond within 24 hours. Let’s build something great together!
      </p>
    </div>
  );
}

export default Contact;
