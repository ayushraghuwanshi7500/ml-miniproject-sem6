import React from 'react';
import { Button, List, Row, Col } from 'antd';
const PredictionResult = ({ formData, setFormData, data }) => {
  console.log(formData);
  const { city, postal_code, category, brand_association, dates } = formData;
  console.log(dates);
  console.log(data);
  const { day_pop, high_trafic_day, month_count, predictions, tier } = data;
  const query = [
    'Day Pop: ' + day_pop,
    'High Traffic Day: ' + high_trafic_day,
    'Month Count: ' + month_count,
    'Tier: ' + tier === 'tier_1'
      ? 1
      : tier === 'tier_2'
      ? 2
      : tier === 'tier_3'
      ? 3
      : tier === 'tier_4'
      ? 4
      : null
  ];

  console.log(day_pop);
  return (
    <>
      <Row gutter={24} style={{ margin: 5 }}>
        <Col className='gutter-row' span={4}>
          <List
            size='small'
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>
                Prediction Result
              </h6>
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
