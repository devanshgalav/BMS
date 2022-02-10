import React, { useState } from "react";
import { Row, Col, Input, Button, Typography } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./Home.css";
import Admin from "../../images/admin-logo.jpg";
import Customer from "../../images/customer-logo.png";
import "react-alice-carousel/lib/react-alice-carousel";
import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpeg";
import banner3 from "../../images/banner3.jpeg";
import banner4 from "../../images/banner4.jpeg";
import banner5 from "../../images/banner5.jpeg";
import Carousel from "react-bootstrap/Carousel";

const { Text } = Typography;

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-page">
      <Col>
        <Row justify="center" className="home-page-inner-container">
          <Col span={12} className="admin-col">
            <Card variant="outlined" className="home-page-admin-card">
              <CardMedia
                component="img"
                height="140"
                image={Admin}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="home-page-title">
                  Admin Login
                </Typography>
                <Input
                  placeholder="Enter your Email ID"
                  className="home-page-input"
                />
                <br />
                <Input
                  placeholder="Enter your PassWord"
                  className="home-page-input"
                />
                <br />
                <Button type="primary" className="home-page-login-button">
                  Login
                </Button>
                <br />
                <Text className="home-page-text">
                  Not a Registered Admin?
                </Text>{" "}
                <a className="home-page-hyperlink" href="/registration">Sign Up</a>
                <hr />
                <Text className="home-page-text">
                  Reset Your PassWord!
                </Text>{" "}
                <a className="home-page-hyperlink" href="/reset-password">Here</a>
              </CardContent>
            </Card>
          </Col>
          <Col span={12} className="customer-col">
            <Card variant="outlined" className="home-page-customer-card">
              <CardMedia
                component="img"
                height="140"
                image={Customer}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="home-page-title">
                  Customer Login
                </Typography>
                <Input
                  placeholder="Enter your Email ID"
                  className="home-page-input"
                />
                <br />
                <Input
                  placeholder="Enter your PassWord"
                  className="home-page-input"
                />
                <br />
                <Button type="primary" className="home-page-login-button">
                  Login
                </Button>
                <br />
                <Text className="home-page-text">
                  Not a Registered Customer?
                </Text>{" "}
                <a className="home-page-hyperlink" href="/registration">Sign Up</a>
                <hr />
                <Text className="home-page-text">
                  Reset Your PassWord!
                </Text>{" "}
                <a className="home-page-hyperlink" href="/reset-password">Here</a>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Col>
      <Row>
        <Carousel className="home-carousel" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="banner1" src={banner1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner2" src={banner2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner3" src={banner3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner4" src={banner4} alt="Fourth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner5" src={banner5} alt="Fifth slide" />
          </Carousel.Item>
        </Carousel>
      </Row>
    </div>
  );
};

export default Home;
