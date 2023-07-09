import React from "react";
import TotalCountsCards from "./TotalCountCards";
import CustomerDataCountChart, {
  ICountChartProps,
} from "./CustomerDataCountChart";

const DashboardContainer: React.FC = () => {
  const anualSalaryProps: ICountChartProps = {
    heading: "Anual Salary Range",
    chartType: "doughnut",
    itemKey: "annual Salary",
    backgroundColors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
    hoverBackgroundColor: [
      "#FF4F81",
      "#2D9CDB",
      "#FFB238",
      "#00A19D",
      "#AB80FF",
    ],
  };
  const creditCardDebtProps: ICountChartProps = {
    heading: "Credit Card Debt Range",
    chartType: "pie",
    itemKey: "credit card debt",
    backgroundColors: ["#66BB6A", "#FFCD56", "#42A5F5", "#FF4081", "#9C27B0"],
    hoverBackgroundColor: [
      "#66BB6A1A",
      "#FFCD561A",
      "#42A5F51A",
      "#FF40811A",
      "#9C27B01A",
    ],
  };
  const netWorthProps: ICountChartProps = {
    heading: "Net Worth Range",
    chartType: "doughnut",
    itemKey: "net worth",
    backgroundColors: ["#FF9F40", "#32CD32", "#FF00FF", "#00FFFF", "#FF5733"],
    hoverBackgroundColor: [
      "#FF884D",
      "#39E639",
      "#FF00FF",
      "#00FFFF",
      "#FF6E47",
    ],
  };
  const carPurchaseProps: ICountChartProps = {
    heading: "Car Purchase Range",
    chartType: "pie",
    itemKey: "car purchase amount",
    backgroundColors: ["#ADFF2F", "#FF69B4", "#87CEEB", "#FF4500", "#40E0D0"],
    hoverBackgroundColor: [
      "#ADFF2F",
      "#FF82A1",
      "#9AC0D6",
      "#FF5633",
      "#7FFFD4",
    ],
  };
  return (
    <>
      <TotalCountsCards />
      <div className="grid">
        <div className="col-12 md:col-6 xl:col-3">
          <CustomerDataCountChart {...anualSalaryProps} />
        </div>
        <div className="col-12 md:col-6 xl:col-3">
          <CustomerDataCountChart {...creditCardDebtProps} />
        </div>
        <div className="col-12 md:col-6 xl:col-3">
          <CustomerDataCountChart {...netWorthProps} />
        </div>
        <div className="col-12 md:col-6 xl:col-3">
          <CustomerDataCountChart {...carPurchaseProps} />
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;
