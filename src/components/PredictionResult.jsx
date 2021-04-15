import React from 'react';
import { Button, List, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
const PredictionResult = ({ formData, setFormData }) => {
  window.onload = function () {
    window.location = '/';
  };
  console.log(formData);
  const { city, postal_code, category, brand_association, dates } = formData;
  console.log(dates);
  const query = ['City: ' + city, 'Postal Code: ' + postal_code,'Brand Association: '+ brand_association,'Category: '+ category,dates[0] + ' to ' + dates[1]];

  return (
    <>
      <Row gutter={24} style={{ margin: 5 }}>
        <Col className='gutter-row' span={4}>
          <List
            size='small'
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>Your Query</h6>
            }
            bordered
            dataSource={query}
            renderItem={(item) => (
              <List.Item >{item}</List.Item>
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
