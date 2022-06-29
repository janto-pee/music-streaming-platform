import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box color="whiteAlpha.300" bg="red.600" display={"none"}>
      <Box w={["88%", "90%", "96%"]} mx="auto">
        <Flex justifyContent="space-between" alignItems="center">
          <Text flexGrow={1}>Copyright Ayobami. All Rights Reserved</Text>
          <Flex gap={12}>
            <Text>Home</Text>
            <Text>Search</Text>
            <Text>For Sale</Text>
            <Text>For Rent</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
