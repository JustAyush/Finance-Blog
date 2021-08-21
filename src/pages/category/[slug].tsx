import { Heading, Image, Box, Text, AspectRatio, Flex } from "@chakra-ui/react";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blog as BlogType } from "types/blog";
import { dateFormatter, parseHtml } from "utils";
import bucket from "utils/cosmic";

export interface BlogCategoryProps {
  blogs: BlogType[];
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}
const BlogCategory: React.FC<BlogCategoryProps> = ({ blogs }) => {
  console.log("blogCategory", blogs);
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
      {/* <Posts includeHeading={false} /> */}
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;

  const blogs = await bucket.getObjects({
    query: {
      type: "blogs",
      "metadata.published_date": "2021-08-20",
    },
  });

  return {
    props: {
      blogs,
    },
  };
};

export default BlogCategory;
