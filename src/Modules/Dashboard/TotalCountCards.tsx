import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";
import { Avatar } from "primereact/avatar";
import { Gender, ICustomer } from "../../Types/CustomerTypes";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const TotalCountsCards: React.FC = (props) => {
  const { state } = useContext(AppContext);
  const data = [
    {
      label: "Customers",
      firtValue: state.customers.length,
      firstLabel: "Total",
      secondValue: "",
      secondLabel: "",
      icon: "pi pi-users",
      color: "#2196F3",
    },
    {
      label: "Gender",
      firtValue: state.customers.filter(
        (item: ICustomer) => item.gender === Gender.Male
      ).length,
      firstLabel: "Male",
      secondValue: state.customers.filter(
        (item: ICustomer) => item.gender === Gender.Female
      ).length,
      secondLabel: "Female",
      icon: "pi pi-heart",
      color: "green",
    },
    {
      label: "Age",
      firtValue: state.customers.filter((item: ICustomer) => item.age > 60)
        .length,
      firstLabel: "GT. 60",
      secondValue: state.customers.filter((item: ICustomer) => item.age < 30)
        .length,
      secondLabel: "LT. 30",
      icon: "pi pi-star",
      color: "orange",
    },
    {
      label: "Anual Salary",
      firtValue: state.customers.filter(
        (item: ICustomer) => item["annual Salary"] > 50000
      ).length,
      firstLabel: "GT. 50000",
      secondValue: state.customers.filter(
        (item: ICustomer) => item["annual Salary"] <= 50000
      ).length,
      secondLabel: "LT.and 50000",
      icon: "pi pi-credit-card",
      color: "purple",
    },
  ];

  return (
    <div className="grid" data-cy="total-counts-cards">
      {data.map((item, index) => (
        <div
          key={index}
          className="col-12 md:col-6 xl:col-3"
          data-cy="data-count-card"
        >
          <div className="card shadow-1 flex flex-column">
            <div className="flex align-items-center">
              <div className="flex justify-content-center align-items-center p-2 border-round">
                <Avatar
                  icon={item.icon}
                  size="large"
                  style={{ backgroundColor: item.color, color: "#ffffff" }}
                />
              </div>
              <span
                className="text-xl ml-2 font-semibold"
                data-cy="data-count-card-heading"
              >
                {item.label}
              </span>
            </div>
            <div className="grid mt-3">
              <div className="col-6 flex flex-column p-3 text-center border-right-1 surface-border">
                <span className="text-color text-2xl font-semibold">
                  {item.firtValue}
                </span>
                <span className="text-color font-semibold">
                  {item.firstLabel}
                </span>
              </div>
              <div className="col-6 flex flex-column p-3 text-center ">
                {item.secondValue && item.secondLabel ? (
                  <>
                    {" "}
                    <span className="text-color text-2xl font-semibold">
                      {item.secondValue}
                    </span>
                    <span className="text-color font-semibold">
                      {item.secondLabel}
                    </span>
                  </>
                ) : (
                  <Link to="/customers" data-cy="view-all-customers">
                    <Button
                      text
                      raised
                      size="small"
                      label="View All"
                      className="p-button-link"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalCountsCards;
