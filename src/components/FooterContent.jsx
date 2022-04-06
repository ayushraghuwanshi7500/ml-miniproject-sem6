import React from 'react';
import '../index.css';
const FooterContent = () => {
  const cursorStyle = { cursor: 'pointer' };
  const LINKED_IN_LINK = 'https://www.linkedin.com/in/';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div
        className='namestyle'
        onClick={() =>
          window.open(`${LINKED_IN_LINK}gauri-patil-17a0131b3`, '_blank')
        }
        style={cursorStyle}
      >
        Gauri Patil
      </div>
      <div
        style={{
          height: '8px',
          width: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}
      />
      <div
        onClick={() =>
          window.open(`${LINKED_IN_LINK}ayush-raghuwanshi-333a1a1a2`, '_blank')
        }
        className='namestyle'
        style={cursorStyle}
      >
        Ayush Raghuwanshi
      </div>
      <div
        style={{
          height: '8px',
          width: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}
      />
      <div
        onClick={() =>
          window.open(`${LINKED_IN_LINK}yukta-thakur-39b8b1199`, '_blank')
        }
        className='namestyle'
        style={cursorStyle}
      >
        Yukta Thakur
      </div>
      <div
        style={{
          height: '8px',
          width: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}
      />
      <div
        onClick={() =>
          window.open(`${LINKED_IN_LINK}simran-kalaskar-51847617a`, '_blank')
        }
        className='namestyle'
        style={cursorStyle}
      >
        Simran Kalaskar
      </div>
      <div
        style={{
          height: '8px',
          width: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}
      />
      <div style={{ color: '#000', fontSize: '20px' }}>&#169; 2022</div>
      <div
        style={{
          height: '8px',
          width: '8px',
          backgroundColor: '#000',
          borderRadius: '50%'
        }}
      />
      <div style={{ color: '#000', fontSize: '20px' }}>
        Shopper Footfall Prediction
      </div>
    </div>
  );
};

export default FooterContent;
