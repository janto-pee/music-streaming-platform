import React from "react";
import {
  Box,
  Grid,
  Stack,
  Input,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";

const Form = ({ formText }) => {
  return (
    <Box>
      <Text color={formText} mb={6} w={["90%", "90%", "80%", "80%"]} mx="auto">
        We are eager to talk to you, dont hesitate to contact us as one of our
        representative will respond in less than 1hour
      </Text>
      <Stack direction="column">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Input placeholder="Name" type="text" bg="gray.200" />
          <Input placeholder="Mobile" type="number" bg="gray.200" />
          <Input placeholder="Email" type="email" bg="gray.200" />
          <Input placeholder="City" type="text" bg="gray.200" />
        </Grid>
        <Textarea placeholder="Message" bg="gray.200" />
        <Button colorScheme="red" mt={8} bg="red.700">
          Send Message
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
