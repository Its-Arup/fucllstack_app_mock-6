import React, { useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createBlog } from "../Redux/BlogReducer/action";

function Blog() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch()

  const [bloginput, setBloginput] = useState({
    title: "",
    Content: "",
    Category: "",
  });


  const handelChange = (e) => {
    setBloginput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

 const handelSubmit =()=>{
  // console.log(bloginput);
  dispatch(createBlog(bloginput))
 } 


  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Create Blog
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Title"
                value={bloginput.title}
                name="title"
                onChange={handelChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea
                placeholder="Enter your blog post"
                value={bloginput.Content}
                name="Content"
                onChange={handelChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Select name="Category" onChange={handelChange}>
                <option value="">Select Category</option>
                <option value="Business">Business</option>
                <option value="Tech">Tech</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Entertainment">Entertainment</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelSubmit}>
              Post
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      
    </>
  );
}

export default Blog;
