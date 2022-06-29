import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Form from "./Form";

const HomeForm = () => {
  return (
    <Box bg="red.500" py={10} textAlign="center">
      <Text fontSize="2xl" color="white" mb={6}>
        Have an inquiry? Contact Us Today
      </Text>
      <Box w={["90%", "50%"]} mx="auto" bg="whiteAlpha.200" p={6}>
        <Form formText={"gray.300"} />
      </Box>
    </Box>
  );
};

export default HomeForm;
