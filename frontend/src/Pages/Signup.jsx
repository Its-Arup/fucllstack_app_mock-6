import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/userReducer/action";
import { useDispatch } from "react-redux";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [userdata, setUserData] = useState({
    Username: "",
    Avatar: "",
    Email: "",
    Password: "",
  });

  const handelInput = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userdata))
      .then((res) => {
        console.log(res.data);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/Signin");
      })
      .catch((err) => {
        toast({
          title: "Error to create Account.",
          description: "error",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });

    setUserData({
      Username: "",
      Avatar: "",
      Email: "",
      Password: "",
    });
  };

  return (
    <Container maxW="md">
      <Heading as="h2" size="xl" mt={10} mb={10}>
        Sign-up Here
      </Heading>

      <form onSubmit={handelSubmit}>
        <FormControl>
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            name="Username"
            value={userdata.Username}
            placeholder="Enter your name"
            onChange={handelInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>User Avatar</FormLabel>
          <Input
            type="text"
            name="Avatar"
            value={userdata.Avatar}
            placeholder="Enter yout avatar"
            onChange={handelInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="Email"
            value={userdata.Email}
            placeholder="Enter Your Email"
            onChange={handelInput}
          />
        </FormControl>
        <FormControl>
          <FormLabel>User Password</FormLabel>
          <Input
            type="password"
            name="Password"
            value={userdata.Password}
            placeholder="*******"
            onChange={handelInput}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Signup;
