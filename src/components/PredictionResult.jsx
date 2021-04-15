import React from 'react';
import { Button, List, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const PredictionResult = ({ formData, setFormData }) => {
  window.onload = function () {
    window.location = '/';
  };
  console.log(formData);
  const { city, postal_code, category, brand_association, start_date,end_date } = formData;
  const query = [city, postal_code, brand_association, category, start_date,end_date];

  return (
    <>
      <Row gutter={24} style={{ margin: 5 }}>
        <Col className='gutter-row' span={4}>
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
            <Button style={{ width: '100%' }}>Go Back and Predict Again</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default PredictionResult;
