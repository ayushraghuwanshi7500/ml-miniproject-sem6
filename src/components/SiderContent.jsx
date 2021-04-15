import React from 'react';
import { Steps, Timeline } from 'antd';
// const { Steps, Divider } = antd;

const { Step } = Steps;

const SiderContent = () => {
  const mystyle = {
    fontSize: '0.9rem'
  };
  return (
    <div style={{ margin: 10 }}>
      <h5 style={{ textAlign: 'center', marginBottom: 30 }}>
        Project Timeline
      </h5>
      <Timeline mode='left'>
        <Timeline.Item style={mystyle} label='Initial Data Exploration'>
          1.Aditi Bhole <br />
          2.Anshuta Kakuste
        </Timeline.Item>
        <Timeline.Item style={mystyle} label='Data Cleaning and PreProcessing'>
          1.Jennifer James
          <br />
          2.Sneha Bency
          <br />
          3.Eshan Goel
        </Timeline.Item>
        <Timeline.Item
          style={mystyle}
          label='Data Modelling And Result Compilation'
        >
          1.Rhea Handa
          <br />
          2.Shivalika Pandita
          <br />
          3.Shyann James
          <br />
          4.Hanah Zachariah
          <br />
          5.Dilrose Reji
        </Timeline.Item>
        <Timeline.Item style={mystyle} label='Website'>
          1.Ayush Raghuwanshi
          <br />
          2.Sanmith Kurian
        </Timeline.Item>
        {/* <Timeline.Item label='Documentation'>Aditi Bhole</Timeline.Item> */}
      </Timeline>
    </div>
  );
};

export default SiderContent;
