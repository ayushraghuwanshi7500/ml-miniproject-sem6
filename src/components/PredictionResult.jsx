import React from 'react';
import { Button, List, Row, Col } from 'antd';
const PredictionResult = ({ formData, setFormData, data }) => {
  console.log(formData);
  const { city, postal_code, category, brand_association, dates } = formData;
  console.log(dates);
  console.log(data);
  const query = [
    'City: ' + city,
    'Postal Code: ' + postal_code,
    'Brand Association: ' + brand_association,
    'Category: ' + category,
    dates[0] + ' to ' + dates[1]
  ];
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
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </Col>
      </Row>
    </>
  );
};

export default PredictionResult;
