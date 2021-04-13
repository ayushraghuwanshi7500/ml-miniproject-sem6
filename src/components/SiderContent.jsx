import React from 'react';
import { Steps } from 'antd';
// const { Steps, Divider } = antd;

const { Step } = Steps;

const SiderContent = () => {
  return (
    <div style={{ margin: 10 }}>
      <h5 style={{ textAlign: 'center' }}>Steps Followed</h5>
      {/* <Steps progressDot current={3} direction='vertical'>
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
      </Steps> */}
      <Steps progressDot current={6} direction='vertical'>
        <Step
          title='Initial Data Exploration'
          description='Data exploration is the initial step in data analysis, where users explore a large data set in an unstructured way to uncover initial patterns, characteristics, and points of interest.'
        />
        <Step
          title='Data Cleaning and Pre-Processing'
          description='Data cleaning is the process of detecting and correcting (or removing) corrupt or inaccurate records from a record set, table, or database.'
        />
        <Step
          title='Data Modelling And Result Compilation'
          description='The process of modeling means training a machine learning algorithm to predict the labels from the features, tuning it for the business need, and validating it on holdout data.'
        />
        <Step
          title='Website'
          description='Build a basic website to display output for a better UI and UX.'
        />
        <Step title='Documentation' />
      </Steps>
    </div>
  );
};

export default SiderContent;
