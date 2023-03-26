import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [pics, setPics] = useState();

  const [show, setShow] = useState(false);

  const postPicDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"}>
      <FormControl>
        <FormLabel> Name</FormLabel>
        <Input
          type={"text"}
          name="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>
      <FormControl>
        <FormLabel> Email</FormLabel>
        <Input
          type={"email"}
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl>
        <FormLabel> Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement width={"4.5rem"}>
            <Button onClick={() => setShow(() => !show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel> Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassowrd}
          />
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel> Picture</FormLabel>
        <Input
          type={"file"}
          name="pic"
          placeholder="Upload your picture"
          onChange={(e) => postPicDetails(e.target.files[0])}
          value={name}
        />
      </FormControl>
      <Button
        colorScheme={"blue"}
        style={{ marginTop: 15 }}
        width={"100%"}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
