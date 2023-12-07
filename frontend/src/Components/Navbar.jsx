import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} m={10}>
      <GridItem w="100%" h="10">
        <Link to={"/Signup"}>Sign-up</Link>
      </GridItem>
      <GridItem w="100%" h="10">
        <Link to={"/Signin"}>Sign-in</Link>
      </GridItem>
      <GridItem w="100%" h="10">
        <Link to={"/blogs"}>Blogs</Link>
      </GridItem>
    </Grid>
  );
}

export default Navbar;
