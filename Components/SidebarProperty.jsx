import React from "react";
import Image from "next/image";
import header from "../assets/header3.jpg";
import {
  Box,
  Heading,
  Select,
  Stack,
  Button,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";

const SidebarProperty = () => {
  return (
    <Flex
      direction={["row", "column", "column", "row"]}
      justifyContent="space-between"
      alignItems="flex-start"
      gap={2}
      mb={4}
      p={4}
      bg="white"
    >
      <Image src={header} alt='img' />
      <Box>
        <Text mt={{ md: "1rem" }} fontSize="sm" color="gray.700">
          Pent House Jumeirah
        </Text>
        <Text mt={2}>$54,000.00</Text>
      </Box>
    </Flex>
  );
};

export default SidebarProperty;
