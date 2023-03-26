import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Signup from "../components/authentication/Signup";
import Login from "../components/authentication/Login";

const HomePage = () => {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0 15px 0"
          borderRadius={"lg"}
          borderWidth="1px"
        >
          <Text
            textAlign={"center"}
            fontSize="4xl"
            fontFamily={"Work sans"}
            color="black"
          >
            Chat App
          </Text>
        </Box>
        <Box
          bg="white"
          p={4}
          w="100%"
          borderRadius="lg"
          color={"black"}
          borderWidth={"1px"}
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Signup</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>{<Login />}</TabPanel>
              <TabPanel>{<Signup />}</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
