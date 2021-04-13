import React from 'react';
import { Row, Col, List } from 'antd';
const FooterContent = () => {
  const mystyle = {
    textAlign: 'center',
    Rowor: '#171717',
    fontSize: 15,
    marginBottom: 5
  };
  const dataExploration = ['Aditi Bhole', 'Anshuta Kakuste'];
  const dataCleaningAndPreProcessing = [
    'Jennifer James',
    'Sneha Bency',
    'Eshan Goel'
  ];
  const dataModelling = [
    'Rhea Handa',
    'Shivalika Pandita',
    'Shyann James',
    'Hanah Zachariah',
    'Dilrose Reji'
  ];
  const webDev = ['Ayush Raghuwanshi', 'Sanmith Kurian'];
  const documentation = ['Aditi Bhole'];
  return (
    <>
      <Row gutter={24}>
        <Col className='gutter-row' style={mystyle} span={4}>
          <List
            size='small'
            style={{ textAlign: 'center' }}
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>
                Initial Data Exploration
              </h6>
            }
            bordered
            dataSource={dataExploration}
            renderItem={(item) => (
              <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
            )}
          />
        </Col>
        <Col className='gutter-row' style={mystyle} span={6}>
          <List
            size='small'
            style={{ textAlign: 'center' }}
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>
                Data Cleaning and PreProcessing
              </h6>
            }
            bordered
            dataSource={dataCleaningAndPreProcessing}
            renderItem={(item) => (
              <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
            )}
          />
        </Col>
        <Col className='gutter-row' style={mystyle} span={6}>
          <List
            size='small'
            style={{ textAlign: 'center' }}
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>
                Data Modelling And Result Compilation
              </h6>
            }
            bordered
            dataSource={dataModelling}
            renderItem={(item) => (
              <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
            )}
          />
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          <List
            size='small'
            style={{ textAlign: 'center' }}
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>Website</h6>
            }
            bordered
            dataSource={webDev}
            renderItem={(item) => (
              <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
            )}
          />
        </Col>
        <Col className='gutter-row' style={mystyle} span={4}>
          <List
            size='small'
            style={{ textAlign: 'center' }}
            header={
              <h6 style={{ marginTop: 5, textAlign: 'center' }}>
                Documentation
              </h6>
            }
            bordered
            dataSource={documentation}
            renderItem={(item) => (
              <List.Item style={{ textAlign: 'center' }}>{item}</List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default FooterContent;
