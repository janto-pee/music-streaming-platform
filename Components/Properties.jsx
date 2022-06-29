import React from "react";
import { Box, Text, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import Property from "./Property";
import Link from "next/link";

const Properties = ({ item, purpose }) => {
  return (
    <Box bg="gray.100">
      <Box w="90%" mx="auto" textAlign="center" py={20}>
        <Text color="red.300">SALE</Text>
        <Heading mt={2} mb={2} fontSize="3xl" fontWeight="bold">
          Properties For {purpose}
        </Heading>
        {/* <Text>Check out some of our latest </Text> */}
        <SimpleGrid columns={[1, 2, 3]} spacing={10} mt={8}>
          {item &&
            item.map((itemList) => (
              <Property list={itemList} comment key={itemList.id} />
            ))}
        </SimpleGrid>
        <Link href={`/search?purpose=for-${purpose}`}>
          <Button colorScheme="red" mt={6}>
            See More Properties
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Properties;
