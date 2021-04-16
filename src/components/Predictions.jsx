import { Card, Col, Row, Typography } from "antd";
import React from "react";
import DaysChart from "./DaysChart";
import PredictionsLineGraph from "./PredictionsLineGraph";

const Predictions = ({ data }) => {
  return data ? (
    <div style={{ padding: 20, width: "100%" }}>
      <Row>
        <Col span={6}>
          <Card
            title="Tier"
            size="small"
            style={{ marginRight: 10, height: "100%" }}
          >
            <Typography.Title level={4}>{data?.tier.split('_')[1]}</Typography.Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Highest Trafic Day"
            size="small"
            style={{ marginRight: 10, height: "100%" }}
          >
            {data?.high_trafic_day?.map((item) => (
              <Typography.Title level={4}>{item}</Typography.Title>
            ))}
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Total Expected Visits"
            size="small"
            style={{ marginRight: 10, height: "100%" }}
          >
            <Typography.Title level={4}>{data?.month_count}</Typography.Title>
          </Card>
        </Col>
        <Col span={6}>
          <DaysChart day_pop={data?.day_pop} />
        </Col>
      </Row>
      <Row>
        <PredictionsLineGraph predictions={data?.predictions} />
      </Row>
    </div>
  ) : (
    <></>
  );
};

export default Predictions;
