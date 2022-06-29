import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FcHome } from "react-icons/fc";

const Navbar = ({ color }) => {
  return (
    <Box py={4} color={color}>
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/" passHref>
          <Heading
            as="h6"
            size="lg"
            fontWeight="normal"
            cursor="pointer"
            fontFamily="Fruktur"
            className="logo-font"
          >
            {" "}
            <span className="secondary">Real</span>ance
          </Heading>
        </Link>

        {/* MD & LG Screen Navigation */}
        <Flex alignItems="center" gap="2rem" display={["none", "none", "flex"]}>
          <Link href="/" passHref>
            <Heading
              size={"sm"}
              fontWeight="semibold"
              cursor="pointer"
              fontFamily={"Inter"}
            >
              Home
            </Heading>
          </Link>
          <Link href="/search" passHref>
            <Heading
              size={"sm"}
              fontWeight="semibold"
              cursor="pointer"
              fontFamily={"Inter"}
            >
              Search
            </Heading>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <Heading
              size={"sm"}
              fontWeight="semibold"
              cursor="pointer"
              fontFamily={"Inter"}
            >
              For Rent
            </Heading>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <Heading
              size={"sm"}
              fontWeight="semibold"
              cursor="pointer"
              fontFamily={"Inter"}
            >
              For Sale
            </Heading>
          </Link>
        </Flex>
        <Link href="/contact" passHref>
          <Button
            colorScheme="red"
            display={["none", "none", "Flex"]}
            fontFamily={"Inter"}
          >
            Contact Us
          </Button>
        </Link>
        {/* Mobile Navigation */}
        <Box display={["flex", "flex", "none"]}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMenu />}
              variant="outline"
              color="red.400"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcHome />}>Rental</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FcHome />}>Buy</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<FcHome />}>Search</MenuItem>
              </Link>
              <Link href="/contact" passHref>
                <MenuItem icon={<FcHome />}>Contact Us</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
