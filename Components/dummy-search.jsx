// import React, {useState} from 'react'
// import { Box, Heading, Select, Stack, Button, Flex, Grid, Text } from '@chakra-ui/react'
// import Navbar from '../Components/Navbar'
// import Property from '../Components/Property'
// import SidebarProperty from '../Components/SidebarProperty'
// import { useRouter } from "next/router";
// import { fetchApi } from '../Utils/fetchApi'
// import Filter from '../Components/Filter'


// const DumSearch = ({searchKeys}) => {
//     const [filterState, setFilterState] = useState(false);
//     const router = useRouter();

//   return (
//     <Box>
//         <Box w='98%' mx='auto'>
//         <Navbar color={'gray.600'} />
//         </Box>
//         <Box bg='gray.200' minH='100vh'py={4} w='100%'>
//             <Box w='90%' mx='auto'>
//                 <Heading as='h4' fontSize={['2xl', '3xl']} fontWeight={['semibold', 'bold']} py={8} >Properties {router.query.purpose}</Heading>
//                 <Grid templateColumns={['1fr', '1fr', '1fr', '2fr 1fr']} gap={8}  >
//                     <Box  >
//                         <Filter />
                        
//                         <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={8}>
//                             {
//                                 searchKeys && searchKeys.map((searchList) => (
//                                     <Box w='100%' key={searchList.id} >
//                                         <Property list={searchList} />
//                                     </Box>
//                                 ))
//                             }
//                         </Grid>
//                     </Box>
//                     <Box  >
//                         {/* Right Sidebar Top */}
//                         <Box display={['none', 'block']}>
//                             {/* <Flex gap={4} direction='row' align='center'mb={2} >
//                                 <Button colorScheme='red' size='md'>
//                                     All
//                                 </Button>
//                                 <Button bg='gray.700' color='gray.100' size='md'>
//                                     Rental
//                                 </Button>
//                                 <Button bg='gray.700' color='gray.100' size='md'>
//                                     Sale
//                                 </Button>
//                                 <Button bg='gray.700' color='gray.100' size='md'>
//                                     New
//                                 </Button>
//                             </Flex> */}
//                             <Stack direction={'column'} mb={6} spacing={3} border={5} borderColor='white' p='4' bg='white'>
//                                 <Select placeholder='extra small size' bg='whiteAlpha.600' size='lg' />
//                                 <Select placeholder='small size' size='lg' bg='whiteAlpha.600' />
//                                 <Select placeholder='medium size' size='lg'bg='whiteAlpha.600' />
//                                 <Select placeholder='large size' size='lg' bg='whiteAlpha.600' />
//                                 <Box>
//                                     <Box bg='gray.700' color='gray.100' size='md' display='flex' justifyContent='center' p={2} borderRadius={6} >
//                                         Search our Properties
//                                     </Box>
//                                 </Box>
//                             </Stack>
//                         </Box> 

//                         {/* Right Sidebar Middle */}
//                         <Box mb={6}>
//                             <Text fontSize='xl' >Recent Listing</Text>
//                             {
//                                 [...Array(5)].map((items, i) => (
//                                     <SidebarProperty />
//                                 ))
//                             }
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Box>
//         </Box>
//     </Box>
//   )
// }

// export default DumSearch

// export async function getServerSideProps({ query }) {
//     const purpose = query.purpose || "for-rent";
//     const rentFrequency = query.rentFrequency || "yearly";
//     const minPrice = query.minPrice || "0";
//     const locationExternalIDs = query.locationExternalIDs || "5002";
//     const categoryExternalID = query.categoryExternalID || "4";

  
//     const searchQuery = await fetchApi(
        
//         `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&categoryExternalID=${categoryExternalID}`
//         );
        
//         return {
//             props: {
//                 searchKeys: searchQuery?.hits,
//             },
//     };
//   }
//             //   `https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
//             // );