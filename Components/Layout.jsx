import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Realance Properties</title>
      </Head>
      <Box>
        <main>{children}</main>
      </Box>
    </>
  );
};

export default Layout;
