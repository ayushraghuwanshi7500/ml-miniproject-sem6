import React from "react";
import { SizeMe } from "react-sizeme";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const PredictionsLineGraph = ({ predictions }) => {
  return (
    <SizeMe>
      {({ size }) => (
        <div
          style={{
            width: "100%",
            marginTop: 10,
            background: "#fff",
            paddingTop: 15,
          }}
        >
          <LineChart
            width={size.width - 15}
            height={350}
            data={predictions?.map((prediction) => {
              const key = Object.keys(prediction)[0];
              return { date: key.split(" ")[0], count: prediction[key] };
            })}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#001529" />
          </LineChart>
        </div>
      )}
    </SizeMe>
  );
};

export default PredictionsLineGraph;
