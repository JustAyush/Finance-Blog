import { Box, Stack } from "@chakra-ui/react";

import Banner from "components/Banner";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Banner />
      <Stack spacing="12" mt="6">
        <Categories includeHeading />
        <Posts includeHeading />
      </Stack>
    </Box>
  );
};

export default Home;
