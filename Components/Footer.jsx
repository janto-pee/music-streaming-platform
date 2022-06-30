import React from "react";
import { Box, Flex, Text, Stack, Grid, GridItem } from "@chakra-ui/react";
import { FooterLinks } from "../Utils/filterData";
import {AiFillLinkedin, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import Link from "next/link";

const Footer = ({footerBg}) => {
  return (
    <Box color='white' bg={footerBg}  >
      <Box w={['98%', '94%', '90%']} mx='auto'>
        <Flex justifyContent={'space-between'} alignItems='center' p={6}>
          <Text fontWeight='semibold'>© 2022 Ayobami Adejumo. All rights reserved</Text>
          <Flex gap={4} >
            <AiFillLinkedin className='footer-icons' />
            <AiFillFacebook className='footer-icons' />
            <AiFillInstagram className='footer-icons' />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
