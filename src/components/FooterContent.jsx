import React from 'react';
import "../index.css";
const FooterContent = () => {
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
          window.open(
            'https://www.linkedin.com/in/gauri-patil-17a0131b3',
            '_blank'
          )
        }
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
          window.open(
            'https://www.linkedin.com/in/ayush-raghuwanshi-333a1a1a2',
            '_blank'
          )
        }
        className='namestyle'
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
          window.open(
            'https://www.linkedin.com/in/yukta-thakur-39b8b1199',
            '_blank'
          )
        }
        className='namestyle'
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
      <div style={{ color: '#000', fontSize: '20px' }}>Simran Kalaskar</div>
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
