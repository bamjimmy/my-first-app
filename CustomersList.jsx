import { Button } from "bootstrap";
import React, { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-456",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jones",
        phone: null,
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "889-921",
        address: { city: "Kampala" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "James",
        phone: null,
        address: { city: "Nairobi" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "John",
        phone: "781-778",
        address: { city: "Kinshasa" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  //   customerNameStyle = (custName) => {
  //     if (custName.startsWith("S")) return "green-highlight border-left";
  //     else if (custName.startsWith("J")) return "red-highlight border-right";
  //     else return "";
  //   };
  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}:<span>{this.state.customersCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
  //   getPhoneToRender(phone) {
  //     return phone ? (
  //       phone
  //     ) : (
  //       <div className="bg-warning p-2 text-center">No Phone</div>
  //     );
  //   }
  getPhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };
  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td
          // className={this.customerNameStyle(cust.name)}
          // style={this.customerNameStyle(cust.name)}
          // style={{
          //   backgroundColor: cust.name.startsWith("S") ? "green" : "red",
          // }}
          >
            {cust.name}
          </td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  onChangePictureClick = (cust, index) => {
    var currArray = this.state.customers;
    currArray[index].photo = "https://picsum.photos/id/1013/60";
    this.setState({ customers: currArray });
    console.log(cust);
    console.log(index);
  };
}
