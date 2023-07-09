import React, { useContext } from "react";
import { Chart } from "primereact/chart";
import { AppContext } from "../../Context/Context";
import { getRange } from "../../Utilities/Utils";
import { ICustomer } from "../../Types/CustomerTypes";

export interface ICountChartProps {
  itemKey: keyof ICustomer;
  chartType: "doughnut" | "pie";
  backgroundColors: string[];
  hoverBackgroundColor: string[];
  heading: string;
}

const CustomerDataCountChart: React.FC<ICountChartProps> = (props) => {
  const {
    itemKey,
    chartType,
    backgroundColors,
    hoverBackgroundColor,
    heading,
  } = props;
  const { state } = useContext(AppContext);
  const generalranges: string[] = [
    "0-10000",
    "10001-30000",
    "30001-60000",
    "60001-100000",
    "100000+",
  ];

  const rangeCounts: Record<string, number> = state.customers.reduce(
    (counts, item) => {
      const range = getRange(item[itemKey as keyof ICustomer] as number);
      counts[range] = (counts[range] || 0) + 1;
      return counts;
    },
    {} as Record<string, number>
  );

  const chartData = {
    labels: generalranges,
    datasets: [
      {
        data: generalranges.map((range) => rangeCounts[range] || 0),
        backgroundColor: backgroundColors,
        hoverBackgroundColor: hoverBackgroundColor,
      },
    ],
  };

  return (
    <div
      className="card shadow-1 flex flex-column"
      data-cy="customer-data-count-charts"
    >
      <h2>{heading}</h2>
      <Chart type={chartType} data={chartData} />
    </div>
  );
};

export default CustomerDataCountChart;
