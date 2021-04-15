import React from "react";
import { SizeMe } from "react-sizeme";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const DaysChart = ({ day_pop }) => {
  return (
    <SizeMe>
      {({ size }) => (
        <div
          style={{
            width: "100%",
            background: "#fff",
            height: "100%",
            paddingTop: 15,
          }}
        >
          <BarChart
            width={size.width - 15}
            height={size.height > 275 ? size.height : 275}
            data={day_pop?.map((val, index) => ({
              day:
                index === 0
                  ? "Sunday"
                  : index === 1
                  ? "Monday"
                  : index === 2
                  ? "Tuesday"
                  : index === 3
                  ? "Wednesday"
                  : index === 4
                  ? "Thursday"
                  : index === 5
                  ? "Friday"
                  : index === 6 && "Saturday",
              count: val,
            }))}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#1890ff" />
          </BarChart>
        </div>
      )}
    </SizeMe>
  );
};

export default DaysChart;
