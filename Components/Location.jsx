import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Text, Heading, Grid, Button, Flex } from "@chakra-ui/react";
import { locationImages } from "../Utils/filterData";

const Location = () => {
  return (
    <Box>
      <Box w="90%" mx="auto" textAlign="center" py={10}>
        <Heading mt={3} fontSize="3xl">
          Properties By Location
        </Heading>
        <Text>Check out some of our latest </Text>
        {/* <Button colorScheme='red' mt={6}>See More</Button> */}
        <Flex mt={8} flexWrap="wrap" gap={6}>
          {locationImages.map((items, i) => (
            <Link href={items.link} passHref key={i}>
              <Box
                flexGrow={1}
                flexBasis="31%"
                position="relative"
                className="gen-loc"
                border="1px solid black"
              >
                <Image
                  src={items.img}
                  className="card-transform"
                  layout="responsive"
                  alt='img'
                />
                <Box
                  className="location"
                  position="absolute"
                  justifyContent="center"
                  alignItems="center"
                  top={0}
                  left={0}
                  width="100%"
                  height="100%"
                >
                  <button className="location-button">{items.name}</button>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Location;
