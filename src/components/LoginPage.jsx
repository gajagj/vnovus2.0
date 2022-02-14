import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setName } from "../store/reducer";
import { TextField, Box, Button, Container } from "@mui/material";
import "./LoginPage.css";

const LoginPage = (props) => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box className="loginBox">
          <TextField id="standard-basic" label="UserName" variant="standard" />
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained">Login</Button>
        </Box>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log("");
  return { name: state.userName.name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showUserName: () => dispatch(setName()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
