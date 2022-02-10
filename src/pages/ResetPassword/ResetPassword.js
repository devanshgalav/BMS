import React, { useState } from "react";
import { Row, Col, Input, Button, Typography } from "antd";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./ResetPassword.css";
import ResetPasswordLogo from "../../images/reset-password.jpg";

const { Text } = Typography;

const ResetPassword = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="reset-password-page">
      <Col>
        <Row justify="center" className="reset-password-inner-container">
          <Col span={12} className="reset-password-col">
            <Card variant="outlined" className="reset-password-card">
              <CardMedia
                component="img"
                height="140"
                image={ResetPasswordLogo}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="reset-password-title">
                  RESET PASSWORD
                </Typography>
                <Input
                  placeholder="Enter your Email ID"
                  className="reset-password-input"
                />
                <br />
                <Input
                  placeholder="Enter your new PassWord"
                  className="reset-password-input"
                />
                <br/>
                <Input
                  placeholder="Confirm your new PassWord"
                  className="reset-password-input"
                />
                <br />
                <Button type="primary" className="reset-password-login-button">
                  RESET
                </Button>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default ResetPassword;
