import React from 'react'
import { Box, Heading, Select, Stack, Button, Flex } from "@chakra-ui/react";
import header from "../assets/header1.jpg";
import Navbar from "./Navbar";
import Link from "next/link";
import Filter from "./Filter";
const TestHead = () => {
    return (
        <Box
        
        height={[ "75vh", "40rem", "100vh" ]}
        className="hero"
        >
        
        <Box
            textAlign= 'center'
            position= 'absolute'
            top= '50%'
            left= '50%'
            transform= 'translate(-50%, -50%)'
            color= 'white'
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
    );
}

export default TestHead

