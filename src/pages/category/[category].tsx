import { Heading, Image, Box, Text, AspectRatio, Flex } from "@chakra-ui/react";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";

export interface BlogCategoryProps {}

const BlogCategory: React.FC<BlogCategoryProps> = () => {
  return (
    <Box width="full" mb="4" mt="5">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        color="text.DEFAULT"
        fontWeight="bold"
        mb="8"
      >
        Accounting and Finance
      </Heading>
      <Posts includeHeading={false} />
    </Box>
  );
};

export default BlogCategory;
