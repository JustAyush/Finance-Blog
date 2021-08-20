import { Flex, Heading, Image, Box, Text } from "@chakra-ui/react";
import MotionBox from "components/motion/Box";

const Banner: React.FC = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" py="8">
      <Box width={{ base: "100%", md: "60%" }} pr={{ base: 0, md: "16" }}>
        <Heading as="h1" fontSize={["2xl", "3xl"]} mb="4">
          Learn what&apos;s happening in the financial landscape.
        </Heading>
        <Text>
          We share stuffs about Nepal Stock Market, book summaries and other
          bited-size educational bits about finance.
        </Text>
      </Box>
      <MotionBox
        animate={{ y: 10, scale: 0.99 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        marginY={8}
        maxWidth={[50, 300]}
        marginX="auto"
        display={{ base: "none", md: "block" }}
      >
        <Image
          src="/hero-illustration.svg"
          width={300}
          height="auto"
          alt="Launching Illustration"
        />
      </MotionBox>
    </Flex>
  );
};

export default Banner;
