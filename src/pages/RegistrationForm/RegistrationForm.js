import React, { Component } from "react";
import "./RegistrationForm.css";
import { Row, Col, Input, Button, Typography } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const { Text } = Typography;

let isValid;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custName: "",
      accNumb: "",
      email: "",
      phoneNumb: "",
      password: "",
      date: "",
      address: "",
      cardNumb: "",
      occupation: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validation = () => {
    if (
      !this.state.custName &&
      !this.state.accNumb &&
      !this.state.email &&
      !this.state.phoneNumb &&
      !this.state.password &&
      !this.state.date &&
      !this.state.address &&
      !this.state.cardNumb &&
      !this.state.occupation &&
      !this.state.gender
    ) {
      isValid = false;
    } else if (
      !this.state.custName ||
      !this.state.accNumb ||
      !this.state.email ||
      !this.state.phoneNumb ||
      !this.state.password ||
      !this.state.date ||
      !this.state.address ||
      !this.state.cardNumb ||
      !this.state.occupation ||
      !this.state.gender
    ) {
      isValid = false;
    }else if(!this.state.custName.length() > 50){
      isValid = false;
    }else if(!this.state.length() > 15){
      isValid = false;
    }else{
      isValid = true;
    }

    return isValid
  };

  handleSubmit = (event) => {
    if(this.validation()){
      alert('Registered Successfully !')
    }else{
      alert('incorrect details! Fill the detail again')
    }
    // alert(
    //   `${this.state.custName} ${this.state.accNumb}  Registered Successfully !!!!`
    // );
    // console.log(this.state);
    // this.setState({
    //   custName: "",
    //   accNumb: "",
    //   email: "",
    //   password: "",
    //   phoneNumb: "",
    //   gender: "",
    //   date: "",
    //   occupation: "",
    // });
    event.preventDefault();
  };

  render() {
    const {
      custName,
      accNumb,
      email,
      phoneNumb,
      password,
      date,
      address,
      cardNumb,
      occupation,
      gender,
    } = this.state;
    return (
      <div className="registration-form-container">
        <Col>
          <Row justify="center" align="middle">
            <Card className="registration-form-card">
              <div className="title">Registration</div>
              <div className="content">
                <form onSubmit={this.handleSubmit}>
                  <div className="user-details">
                    <div className="input-box">
                      <span className="details">Full Name</span>
                      <input
                        type="text"
                        value={custName}
                        name="custName"
                        onChange={this.changeHandler}
                        placeholder="CustomerFullName..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Account Number</span>
                      <input
                        type="text"
                        value={accNumb}
                        name="accNumb"
                        onChange={this.changeHandler}
                        placeholder="AccountNumber..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Email</span>
                      <input
                        type="text"
                        value={email}
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="Email Address.."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Phone Number</span>
                      <input
                        type="text"
                        value={phoneNumb}
                        name="phoneNumb"
                        onChange={this.changeHandler}
                        placeholder="Phone Number..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Password</span>
                      <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={this.changeHandler}
                        placeholder="Password..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">DOB</span>
                      <input
                        type="date"
                        value={date}
                        name="date"
                        onChange={this.changeHandler}
                        placeholder="DOB..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Address</span>
                      <input
                        type="text"
                        value={address}
                        name="address"
                        onChange={this.changeHandler}
                        placeholder="Address..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Card Number</span>
                      <input
                        type="text"
                        value={cardNumb}
                        name="cardNumb"
                        onChange={this.changeHandler}
                        placeholder="CardNumber..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Occupation</span>
                      <input
                        type="text"
                        value={occupation}
                        name="occupation"
                        onChange={this.changeHandler}
                        placeholder="Occupation..."
                      />
                      <br />
                    </div>
                    <div className="input-box">
                      <span className="details">Gender</span>
                      <select
                        onChange={this.changeHandler}
                        name="gender"
                        value={gender}
                        defaultValue="Select Gender"
                      >
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <br />
                    </div>
                  </div>

                  <div className="button">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
            </Card>
          </Row>
        </Col>
      </div>
    );
  }
}

export default RegistrationForm;
