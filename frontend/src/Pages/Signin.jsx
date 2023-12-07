import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/userReducer/action";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [userdata, setUserData] = useState({
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
    dispatch(loginUser(userdata))
      .then((res) => {
        console.log(res.data);
        toast({
          title: "Login Successfuly.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        navigate("/blogs");
      })
      .catch((err) => {
        toast({
          title: "Error to Login Account.",
          description: "error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });

    setUserData({
      Email: "",
      Password: "",
    });
  };

  return (
    <Container maxW="md">
      <Heading as="h2" size="xl" mt={10} mb={10}>
        Sign-In Here
      </Heading>

      <form onSubmit={handelSubmit}>
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

export default Signin;
