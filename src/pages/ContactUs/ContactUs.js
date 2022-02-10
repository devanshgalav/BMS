import React, { useState } from "react";
import { Row, Col, Button, Typography, Select } from "antd";
import Dropdown from "react-bootstrap/Dropdown";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Marquee from "react-fast-marquee";
import "./ContactUs.css";

const { Text, Title } = Typography;
const { Option } = Select;

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <center>
        <Col className="contact-us-col">
          <Marquee className="contact-us-dropdown-marquee">
            Dear customer, you may select "Check Complaint/Request" and then
            select "the complaint".
          </Marquee>
          <Row justify="center" align="middle" className="first-dropdown-row">
            <Text className="contact-us-dropdown-label">
              Raise Request / Complaint Types:{" "}
            </Text>
            <Dropdown className="complaint-types-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                --Select--
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Raise Complaint or Request
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row justify="center" align="middle" className="second-dropdown-row">
            <Text className="contact-us-dropdown-label">
              Raise Request / Complaint:{" "}
            </Text>
            <Dropdown className="complaint-dropdown">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                --Select--
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Digital Payment</Dropdown.Item>
                <Dropdown.Item href="#/action-2">About Withdraw</Dropdown.Item>
                <Dropdown.Item href="#/action-3">About Deposit</Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  About Exchange Rate
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">About MyAccount</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row>
            <Button type="primary" className="contact-us-page-submit-button">
              SUBMIT
            </Button>
          </Row>
        </Col>
        <hr />
        <Col className="feedback-col">
          <Marquee className="contact-us-feedback-marquee">
            Dear customer, you may share your valuable feedback below.
          </Marquee>
          <Row justify="center" className="contact-us-inner-container">
            <Col span={12} className="feedback-col">
              <Card variant="outlined" className="contact-us-feedback-card">
                <CardContent>
                  <Title className="contact-us-feedback-title">
                    FEEDBACK FORM
                  </Title>
                  <textarea
                    placeholder="Enter Your Valuable Feedback Here"
                    className="contact-us-textarea-input"
                  />
                  <br />
                  <Row>
                    <Button
                      type="primary"
                      className="contact-us-page-feedback-submit-button"
                    >
                      SUBMIT FEEDBACK
                    </Button>
                  </Row>
                  <br />
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* <Row>
        <Card className="contact-us-card">
          <Row>
            <Select placeholder="Select Complaint Type">
              <Option value="CT">Raise Complaint or Request</Option>
            </Select>
          </Row>
        </Card>
      </Row> */}
      </center>
    </div>
  );
};

export default ContactUs;
