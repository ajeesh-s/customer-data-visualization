import React, { useState } from "react";
import { Gender, ICustomer } from "../../Types/CustomerTypes";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Avatar } from "primereact/avatar";
import femaleIcon from "../../Assets/Images/female.svg";
import maleIcon from "../../Assets/Images/male.svg";
import CountryFlag from "../../Shared/BaseComponents/CountryFlags";
import { Button } from "primereact/button";
import ConfirmDialog from "../../Shared/BaseComponents/ConfirmDialog";

interface ICustomerListProps {
  customers: ICustomer[];
  deleteCustomer: (data: ICustomer[]) => void;
  addEditCustomer: (isAdd: boolean, data?: ICustomer) => void;
}

const CustomerList: React.FC<ICustomerListProps> = (props) => {
  const { customers, deleteCustomer, addEditCustomer } = props;
  const [genders] = useState(["Male", "Female"]);
  const [selectedCustomers, setSelectedCustomers] = useState<ICustomer[]>([]);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const genderRowFilterTemplate = (options: any) => {
    return (
      <Dropdown
        value={
          options.value
            ? options.value === "0"
              ? "Male"
              : "Female"
            : undefined
        }
        options={genders}
        onChange={(e) => {
          options.filterApplyCallback(
            e.value
              ? (e.value === "Male" ? Gender.Male : Gender.Female).toString()
              : undefined
          );
        }}
        placeholder="Select One"
        className="p-column-filter"
        showClear
        style={{ minWidth: "12rem" }}
      />
    );
  };

  const genderBodyTemplate = (rowData: ICustomer) => {
    return (
      <Avatar
        image={rowData.gender === Gender.Male ? maleIcon : femaleIcon}
        size="normal"
        style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
        shape="circle"
      />
    );
  };

  const customerNameTemplate = (rowData: ICustomer) => {
    return (
      <Button
        className="p-button-link"
        onClick={() => addEditCustomer(false, rowData)}
        label={rowData["customer name"]}
      />
    );
  };
  const renderHeader = () => {
    return (
      <div
        className="flex flex-wrap gap-2 align-items-center justify-content-between"
        data-cy="customers-header"
      >
        <h4 className="m-0">Customers</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            label="New customer"
            size="small"
            icon="pi pi-plus"
            severity="success"
            onClick={() => addEditCustomer(true)}
          />
          <Button
            label={`Delete customer${selectedCustomers.length > 1 ? "s" : ""}`}
            size="small"
            icon="pi pi-trash"
            onClick={() => setShowDeleteDialog(true)}
            severity="danger"
            disabled={!selectedCustomers || !selectedCustomers.length}
          />
        </div>
      </div>
    );
  };

  const confirmDelete = () => {
    deleteCustomer(selectedCustomers);
    setSelectedCustomers([]);
    setShowDeleteDialog(false);
  };

  const header = renderHeader();
  return (
    <div className="card">
      <DataTable
        data-cy="customer-list-table"
        value={customers}
        paginator
        rows={100}
        rowsPerPageOptions={[50, 100, 200, 500]}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Customers"
        dataKey="customer e-mail"
        filterDisplay="row"
        size="small"
        sortField={"customer name"}
        sortOrder={1}
        header={header}
        selection={selectedCustomers}
        onSelectionChange={(e) => setSelectedCustomers(e.value as ICustomer[])}
      >
        <Column selectionMode="multiple" exportable={false}></Column>
        <Column
          field="customer name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
          style={{ minWidth: "15rem" }}
          body={customerNameTemplate}
          bodyClassName="text-left"
          sortable
        />
        <Column
          field="customer e-mail"
          header="Email"
          filter
          filterPlaceholder="Search by email"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          field="country"
          header="Country"
          filter
          filterPlaceholder="Search by country"
          style={{ minWidth: "12rem" }}
          body={(rowData: ICustomer) => <CountryFlag name={rowData.country} />}
          sortable
        />
        <Column
          field="gender"
          header="Gender"
          filter
          filterPlaceholder="Search by gender"
          style={{ minWidth: "12rem" }}
          bodyClassName="text-center"
          body={genderBodyTemplate}
          filterElement={genderRowFilterTemplate}
        />
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search by age"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          field="annual Salary"
          header="Anual salary"
          filter
          filterPlaceholder="Search by Anual salary"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          field="credit card debt"
          header="Credit card debt"
          filter
          filterPlaceholder="Search by Credit card debt"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          field="net worth"
          header="Net worth"
          filter
          filterPlaceholder="Search by Net worth"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          field="car purchase amount"
          header="Car purchase amount"
          filter
          filterPlaceholder="Search by Car purchase amount"
          style={{ minWidth: "12rem" }}
          sortable
        />
      </DataTable>
      <ConfirmDialog
        show={showDeleteDialog}
        message="Are you sure want to delete selected customers?"
        closeClick={() => setShowDeleteDialog(false)}
        confirmClick={confirmDelete}
      />
    </div>
  );
};

export default CustomerList;
