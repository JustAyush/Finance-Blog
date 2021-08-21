import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" marginTop="auto">
      <Text fontSize="sm">&copy;{new Date().getFullYear()}. Finance Blog</Text>
    </Flex>
  );
};

export default Footer;
