import React, { useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Property from "../Components/Property";
import { useRouter } from "next/router";
import { fetchApi } from "../Utils/fetchApi";
import Filter from "../Components/Filter";
import header from "../assets/header5.jpg";
import Image from "next/image";
import Footer from "../Components/Footer";

const Search = ({ searchKeys }) => {
  const [filterState, setFilterState] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Box w="98%" mx="auto">
        <Navbar color={"gray.600"} />
      </Box>
      <Box bg="gray.200" minH="100vh" py={4}>
        <Box w="95%" mx="auto">
          <Heading
            as="h4"
            fontSize={["2xl", "3xl"]}
            fontWeight={["semibold", "bold"]}
            py={8}
          >
            Properties {router.query.purpose}
          </Heading>

          <Filter
            direction={["column", "row", "row"]}
            mb={6}
            spacing={3}
            border={5}
            borderColor="white"
            p="4"
            bg="white"
          />

          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap={8}
          >
            {searchKeys &&
              searchKeys.map((searchList) => (
                <Box w="100%" key={searchList.id}>
                  <Property list={searchList} />
                </Box>
              ))}
          </Grid>
          {searchKeys.length === 0 && (
            <Flex
              justifyContent="center"
              alignItems="center"
              flexDir="column"
              marginTop="5"
              marginBottom="5"
            >
              <Image src={header} alt='img' />
              <Text fontSize="xl" marginTop="3">
                No Result Found.
              </Text>
            </Flex>
          )}
        </Box>
          <Footer mt={6} footerBg='gray.700' />
      </Box>
    </Box>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const searchQuery = await fetchApi(
    `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&categoryExternalID=${categoryExternalID}`
  );

  return {
    props: {
      searchKeys: searchQuery?.hits,
    },
  };
}
