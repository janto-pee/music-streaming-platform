import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { GoLocation } from "react-icons/go";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const contact = () => {
  return (
    <Box bg="gray.400" overflow="hidden">
      <Box w="100%">
        <Box w="90%" mx="auto">
          <Navbar color={"white"} />
        </Box>
      </Box>
      <Box bg="gray.400" minHeight="100vh">
        <Box w={["90%", "90%", "80%", "50%"]} mx="auto" mb={6}>
          <Box py={8} textAlign="center">
            <Heading as="h3" fontSize={"4xl"} color='white'>
              Get in Touch
            </Heading>
            <Flex
              textAlign={["left", "center"]}
              direction={["column", "row", "row", "row"]}
              mt={6}
              justifyContent={"space-between"}
              gap={[4, 6]}
              alignItems="center"
            >
              <Flex
                direction="column"
                alignItems="center"
                clasName="contact-hover"
              >
                <GoLocation color="red" />
                <Text fontsize="sm" mt={4} color='white'>
                  Admiralty, Lekki
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems="center"
                clasName="contact-hover"
              >
                <IoIosCall color="red" />
                <Text fontsize="sm" mt={4} color='white'>
                  +2349064890551
                </Text>
              </Flex>
              <Flex
                direction="column"
                alignItems="center"
                clasName="contact-hover"
              >
                <AiOutlineMail color="red" />
                <Text fontsize="sm" mt={4} color='white'>
                  ayobami_adejumo@yahoo.com
                </Text>
              </Flex>
            </Flex>
            <Box mt={10} bg="white" p={6}>
              <Form formText={"gray.500"} />
            </Box>
          </Box>
        </Box>
          <Footer footerBg='gray.500' />
      </Box>
    </Box>
  );
};

export default contact;
