import { LoadingOutlined } from "@ant-design/icons";
import { Col, Row, Skeleton, Steps } from "antd";
import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import PredictionForm from "./PredictionForm";
import Predictions from "./Predictions";
const { Step } = Steps;

const MainContent = () => {
  const request = useMutation(async ({ data }) => {
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

  return (
    <div style={{ padding: 20 }}>
      <Row style={{ margin: 20, marginBottom: 30 }}>
        <Col span={4}></Col>
        <Col span={16}>
          <Steps
            size="small"
            progressDot
            current={current}
            style={{ alignItems: "center" }}
          >
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "40vh",
          width: "100%",
        }}
      >
        {request.isLoading ? (
          <div style={{display:'flex',flexDirection:'column'}}>
            <div style={{marginTop:25,marginBottom:10, display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <Skeleton.Input style={{width:'23vw',height:'35vh', marginRight: 10,flexShrink:1 }} active/>
              <Skeleton.Input style={{width:'23vw',height:'35vh',marginRight: 10,}} active/>
              <Skeleton.Input style={{width:'23vw',height:'35vh',marginRight: 10,}} active/>
              <Skeleton.Image style={{width:'23vw',height:'35vh',marginRight: 10,}} active/>
            </div>
            <div style={{ display:'flex',flexDirection:'row',justifyContent:'center'}}>
              <Skeleton.Image style={{width:'94vw',height:'35vh',flexShrink:1}} active/>
            </div>
          </div>
        ) : request.isSuccess ? (
          request.data?.predictions?.length > 0 ? (
            <Predictions data={request.data} />
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontSize: 50,
                  color: "rgba(255, 204, 41, 0.45)",
                  padding: 0,
                  margin: 0,
                }}
              >
                :/
              </h1>
              <h6
                style={{
                  color: "rgba(255, 204, 41, 0.45)",
                  padding: 0,
                  margin: 0,
                  paddingLeft: 10,
                }}
              >
                Sorry! Cannot calculate predictions with selected fields!
              </h6>
            </div>
          )
        ) : request.isError ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: 50,
                color: "rgba(206, 18, 18, 0.45)",
                padding: 0,
                margin: 0,
              }}
            >
              :D
            </h1>
            <h6
              style={{
                color: "rgba(206, 18, 18, 0.45)",
                padding: 0,
                margin: 0,
                paddingLeft: 10,
              }}
            >
              Sorry! {`${request.error}`}.
            </h6>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: 50,
                color: "rgba(0, 0, 0, 0.45)",
                padding: 0,
                margin: 0,
              }}
            >
              :D
            </h1>
            <h6
              style={{
                color: "rgba(0, 0, 0, 0.45)",
                padding: 0,
                margin: 0,
                paddingLeft: 10,
              }}
            >
              Welcome!
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
