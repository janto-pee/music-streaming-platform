import React from "react";
import { Box, Flex, Text, Stack, Grid, GridItem } from "@chakra-ui/react";
import { FooterLinks } from "../Utils/filterData";
import Link from "next/link";

const Foot = () => {
    return (
        <Box className='footer-color' bg="red.600" display={"none"}>
          <Box w={['98%', '94%', '90%']}>
            <Stack direction={['column', 'row']}>
              <Grid templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}>
                {
                  FooterLinks.map((items, i) => (
                    <GridItem key={i+items.section} display={'flex'} flexDirection='column' gap={4}>
                      <Text className="text-semibold">{items.section}</Text>
                      {
                        items.links.map((item, i) => (
                          <Box key={i+item.name}>
                            <Link href={item.link} passHref><Text>{item.name}</Text></Link>
                          </Box>
                        ))
                      }
                    </GridItem>
                  ))
                }
              </Grid>
            </Stack>
          </Box>
        </Box>
      );
}

export default Foot