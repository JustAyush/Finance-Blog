import { Flex, Heading } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center">
      <AccessibleLink href="/">
        <Heading as="h1" size="md">
          Finance Blog
        </Heading>
      </AccessibleLink>
    </Flex>
  );
};

export default Header;
