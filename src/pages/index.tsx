import { Box, Stack } from "@chakra-ui/react";

import Banner from "components/Banner";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";

import { Category as CategoryType } from "types/category";
import { Blog as BlogType } from "types/blog";
import { GetServerSideProps, NextPage } from "next";
import bucket from "utils/cosmic";

interface HomeProps {
  blogs: { objects: BlogType[]; total: number };
  categories: { objects: CategoryType[]; total: number };
}

const Home: NextPage<HomeProps> = ({ blogs, categories }) => {
  return (
    <Box mb={8} w="full">
      <Banner />
      <Stack spacing="12" mt="6">
        <Categories includeHeading categories={categories.objects} />
        <Posts includeHeading blogs={blogs.objects} />
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await bucket.getObjects({
    query: {
      type: "blogs",
    },
    props:
      "slug,title, metadata.banner_image.url,metadata.author.title,metadata.published_date",
  });

  const categories = await bucket.getObjects({
    query: {
      type: "blog-categories",
    },
    props: "slug,title",
  });

  return {
    props: {
      blogs: blogs,
      categories: categories,
    },
  };
};

export default Home;
