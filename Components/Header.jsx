import React from "react";
import { Box, Heading, Select, Stack, Button, Flex } from "@chakra-ui/react";
import header from "../assets/header1.jpg";
import Navbar from "./Navbar";
import Link from "next/link";
import Filter from "./Filter";

const Header = () => {
  return (
    <Box
      background={header}
      height={{ base: "75vh", md: "40rem", lg: "100vh" }}
      className="hero"
      position="relative"
    >
      <Box w={"90%"} mx={"auto"}>
        <Navbar color={"gray.200"} />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="100%"
        >
          <Heading
            textAlign="center"
            fontSize={["3xl", "4xl", "4xl", "5xl"]}
            mx={{ base: 4 }}
            textColor="white"
          >
            Discover <span style={{ color: "red" }}>Your</span> Dream Home
          </Heading>
          <Flex mt={14} direction="column" alignItems="center" p={{ sm: 4 }}>
            <Stack
              direction="row"
              spacing={4}
              align="center"
              bg="whiteAlpha.400"
              p={2}
            >
              <Link href={"/search"}>
                <Button colorScheme="red" variant="solid">
                  Advance Search
                </Button>
              </Link>
            </Stack>
            <Filter
              simplified
              direction={{ sm: "row", md: "row", lg: "row" }}
              gap={2}
              spacing={3}
              border={5}
              borderColor="white"
              p="4"
              bg="whiteAlpha.400"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
