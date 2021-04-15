import { Timeline } from 'antd';
import React from 'react';

const SiderContent = () => {
  const mystyle = {
    fontSize: '0.9rem'
  };
  return (
    <div style={{ margin: 10 }}>
      <h5 style={{ marginBottom: 30 }}>
        Project Timeline
      </h5>
      <Timeline mode='left'>
        <Timeline.Item style={mystyle} label='Initial Data Exploration'>
          <h6>Aditi Bhole</h6>
          <h6>Anshuta Kakuste</h6>
        </Timeline.Item>
        <Timeline.Item style={mystyle} label='Data Cleaning and PreProcessing'>
          <h6>Jennifer James</h6>
          <h6>Sneha Bency</h6>
          <h6>Eshan Goel</h6>
        </Timeline.Item>
        <Timeline.Item
          style={mystyle}
          label='Data Modelling And Result Compilation'
        >
          <h6>Rhea Handa</h6>
          <h6>Shivalika Pandita</h6>
          <h6>Shyann James</h6>
          <h6>Hanah Zachariah</h6>
          <h6>Dilrose Reji</h6>
        </Timeline.Item>
        <Timeline.Item style={mystyle} label='Website'>
          <h6>Ayush Raghuwanshi</h6>
          <h6>Sanmith Kurian</h6>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default SiderContent;
