import React, { Fragment, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { actions, getLoginUser } from "../store/reducer";
import { TextField, Box, Button, Container } from "@mui/material";
import "./LoginPage.css";
import { useDispatch } from "react-redux";

export const LoginPage = (props) => {
  const dispatch=useDispatch()
  const [user,setUser]=useState('')
  const loginUserStore= useSelector(getLoginUser)
  
  useEffect(()=>{
    dispatch(actions.setLoginUser(user))
  },[user])


  console.log("user value", loginUserStore)
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Box className="loginBox">
          <TextField id="standard-basic" label="UserName" variant="standard" value={user} onChange={(e)=>setUser(e.target.value)}/>
          <TextField id="standard-basic" label="Password" variant="standard" />
          <Button variant="contained" >Login</Button>
        </Box>
      </Container>
    </Fragment>
  );
};

// const mapStateToProps = (state) => {
//   console.log("");
//   return { name: state.vnovus.loginUser };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     showUserName: () => dispatch(actions.setLoginUser()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
