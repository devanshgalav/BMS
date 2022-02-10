import React from "react";
import { Layout, Row, Col, Typography } from "antd";
import "./Footer.css";

const { Title } = Typography;

const Footer = () => {
  return (
    <>
      <Layout.Header className="page-header">
        <Row align="middle" justify="center">
          <Col span={24}>
            <Title className="title">© Cognizant Bank 2022</Title>
          </Col>
        </Row>
      </Layout.Header>
    </>
  );
};

export default Footer;
