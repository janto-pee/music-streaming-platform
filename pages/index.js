import { Box } from "@chakra-ui/react";
import Header from "../Components/Header";
import Properties from "../Components/Properties";
import Location from "../Components/Location";
import HomeForm from "../Components/HomeForm";
import Footer from "../Components/Footer";
import { baseUrl, fetchApi } from "../Utils/fetchApi";

export default function Home({ rentList, saleList }) {
  return (
    <Box>
      <Header />
      <Properties item={saleList} purpose={"Sale"} />
      <Location />
      <Properties item={rentList} purpose={"Rent"} />
      <HomeForm />
      <Footer />
    </Box>
  );
}

export async function getStaticProps() {
  const rent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );
  const sale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  return {
    props: {
      rentList: rent?.hits,
      saleList: sale?.hits,
    },
  };
}
