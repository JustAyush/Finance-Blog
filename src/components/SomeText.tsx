import { Box, Heading, useColorMode } from "@chakra-ui/react";

const SomeText = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box d="flex" alignItems="center">
        This is a Next.js app with Chakra-UI and TypeScript setup.
      </Box>
    </>
  );
};

export default SomeText;
