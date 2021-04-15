import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Steps } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import PredictionForm from "./PredictionForm";
const { Step } = Steps;

const MainContent = ({ formData, setFormData }) => {
  const request = useMutation(async ({ data }) => {
    console.log(data);
    const response = await axios.post(
      "https://ml-api-2021.herokuapp.com/predict",
      JSON.stringify(data),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    return response.data;
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <Row style={{ margin: 20, marginBottom: 30 }}>
        <Col span={4}></Col>
        <Col span={16}>
          <Steps current={current}>
            <Step title="Data Entry" />
            <Step
              title="Data Processing"
              icon={
                !request.isSuccess && request.isLoading && <LoadingOutlined />
              }
            />
            <Step title="Prediction" />
          </Steps>
        </Col>
      </Row>
      <PredictionForm setCurrent={setCurrent} request={request} />
    </>
  );
};

export default MainContent;
