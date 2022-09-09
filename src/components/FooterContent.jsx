
import {
  AreaChartOutlined,
  ClearOutlined,
  CloudServerOutlined,
  DesktopOutlined
} from "@ant-design/icons";
import { Steps } from "antd";
import React from 'react';
import '../index.css';
const FooterContent = () => {
  return (

    <>
      <Steps size="small" current={4}>
        <Steps.Step
          title={
            <>
              Initial Data
              <br /> Exploration
            </>
          }
          icon={<AreaChartOutlined />}
          description={
            <>
              <>Aditi Bhole</>
              <br />
              <>Anshuta Kakuste</>
            </>
          }
        />
        <Steps.Step
          title={
            <>
              Data Cleaning
              <br />
              and Pre-Processing
            </>
          }
          icon={<ClearOutlined />}
          description={
            <>
              <>Jennifer James</>
              <br />
              <>Sneha Bency</>
              <br />
              <>Eshan Goel</>
            </>
          }
        />
        <Steps.Step
          title={
            <>
              Data Modelling <br /> and Result Compilation
            </>
          }
          icon={<DesktopOutlined />}
          description={
            <>
              <>Rhea Handa</>
              <br />
              <>Shivalika Pandita</>
              <br />
              <>Shyann James</>
              <br />
              <>Hanah Zachariah</>
              <br />
              <>Dilrose Reji</>
            </>
          }
        />
        <Steps.Step
          title="Deployment"
          icon={<CloudServerOutlined />}
          description={
            <>
              <>Ayush Raghuwanshi</>
              <br />
              <>Sanmith Kurian</>
            </>
          }
        />
      </Steps>
    </>
  )
};

export default FooterContent;
