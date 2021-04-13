import React from 'react';
import { Row, Col } from 'antd';
const FooterContent = () => {
  const mystyle = {
    textAlign: 'center',
    Rowor: '#171717',
    fontSize: 15,
    marginBottom: 5
  };
  return (
    <>
      <Row gutter={24}>
        <Col className='gutter-row' style={mystyle} span={4}>
          Aditi Bhole
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Anshuta Kakuste
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Ayush Raghuwanshi
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Dilrose Reji
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Eshan Goel
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Hanah Zachariah
        </Col>
      </Row>
      <Row gutter={24}>
        <Col className='gutter-row' style={mystyle} span={4}>
          Jennifer James
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Rhea Handa
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Sanmith Kurian
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Shivalika Pandita
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Shyann James
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          Sneha Bency
        </Col>
      </Row>
    </>
  );
};

export default FooterContent;
