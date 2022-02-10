import React from "react";
import { Col, Typography } from "antd";
import "./AboutUs.css";

const { Text } = Typography;

const AboutUs = () => {
  return (
    <>
      <div class="about-us-container">
        <div class="about-section">
          <center>
            <h1>About Us</h1>
          </center>
        </div>
        <Col>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Cognizant Bank is a leading private sector bank in India. The
                Bank's consolidated total assets stood at Rs. 14.76 trillion at
                September 30, 2020. Cognizant Bank currently has a network of
                5,288 branches and 13,834 ATMs across India..
              </Text>
            </div>
          </center>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Cognizant Bank was originally promoted in 1994 by Cognizant
                Limited, an Indian financial institution, and was its
                wholly-owned subsidiary.
              </Text>
            </div>
          </center>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Cognizant Bank offers a wide range of banking products and
                financial services to corporate and retail customers through a
                variety of delivery channels and through its group companies.
              </Text>
            </div>
          </center>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Cognizant Bank's Board members include eminent individuals with
                a wealth of experience in international business, management
                consulting, banking and financial services.
              </Text>
            </div>
          </center>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Cognizant Bank is deeply engaged in human and economic
                development at the national level. The Bank works closely with
                Cognizant Foundation across diverse sectors and programs.
              </Text>
            </div>
          </center>
          <center>
            <div className="about-us-text-div">
              <Text className="about-us-text">
                Catch up with Cognizant Bank's latest communication related to
                Acknowledgements, information on regulatory notices, banking
                ombudsman schemes and others.
              </Text>
            </div>
          </center>
        </Col>
      </div>
    </>
  );
};
export default AboutUs;
