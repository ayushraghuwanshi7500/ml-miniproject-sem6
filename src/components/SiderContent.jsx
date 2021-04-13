import React from 'react';
import { Steps, Divider } from 'antd';
// const { Steps, Divider } = antd;

const { Step } = Steps;

const SiderContent = () => {
  return (
    <div>
      <Steps current={3} direction='vertical'>
        <Step
          title='Data Entry'
          description='The prepared data can be in the form that may not be machine-readable, so to convert this data to readable form, some conversion algorithms are needed. '
        />
        <Step
          title='Processing'
          description='This is the stage where algorithms and ML techniques are required to perform the instructions provided over a large volume of data with accuracy and optimal computation.'
        />
        <Step
          title='Prediction'
          description='“Prediction” refers to the output of an algorithm after it has been trained on a historical dataset and applied to new data when forecasting the likelihood of a particular outcome.'
        />
      </Steps>
    </div>
  );
};

export default SiderContent;
