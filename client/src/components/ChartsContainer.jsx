import React, { useState } from "react";
import BarChart from "./BarChart";
import BarChartv2 from "./BarChart2025";
import AreaChart from "./AreaChart";
import AreaChartv2 from "./AreaChart2025";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [chartType, setChartType] = useState(0);

  const renderChart = () => {
    switch (chartType) {
      case 0:
        return <BarChart data={data} />;
      case 1:
        return <BarChartv2 data={data} />;
      case 2:
        return <AreaChart data={data} />;
      case 3:
        return <AreaChartv2 data={data} />;
      default:
        return <BarChart data={data} />;
    }
  };

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setChartType((chartType + 1) % 4)}>
        {chartType === 0
          ? "Bar Chart with Predictions for 2025"
          : chartType === 1
          ? "Area Chart for 2024"
          : chartType === 2
          ? "Area Chart with Predictions for 2025"
          : "Bar Chart for 2024"}
      </button>
      {renderChart()}
    </Wrapper>
  );
};

export default ChartsContainer;

/* import React from "react";

import { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import AreaChartv2 from "./AreaChart2025";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
const [barChart, setBarChart] = useState(true);

return (
<Wrapper>
<h4>Monthly Applications</h4>
<button type="button" onClick={() => setBarChart(!barChart)}>
{barChart ? "Area Chart" : "Bar Chart"}
</button>
{barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
</Wrapper>
);
};

export default ChartsContainer;*/
