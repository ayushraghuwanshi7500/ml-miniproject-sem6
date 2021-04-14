import React from 'react';
import { Button, List, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const PredictionResult = ({ formData, setFormData }) => {
  const mystyle = {
    textAlign: 'center',
    Rowor: '#171717',
    fontSize: 15,
    marginBottom: 5
  };
  console.log(formData);
  const { city, postalCode, category, brand } = formData;
  const query = [city, postalCode, category, brand];
  return (
    <div style={{ color: 'black' }}>
      <List
        size='small'
        style={{ textAlign: 'center' }}
        header={
          <h6 style={{ marginTop: 5, textAlign: 'center' }}>Your Query</h6>
        }
        bordered
        dataSource={query}
        renderItem={(item) => (
          <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
        )}
      />

      <Link to='/'>
        <Button>Predict Again</Button>
      </Link>
    </div>
  );
};

export default PredictionResult;
