import { Box, Stack } from "@chakra-ui/react";

import bucket from "../cosmic-config";

import Banner from "components/Banner";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";

import { Category as CategoryType } from "types/category";
import { Blog as BlogType } from "types/blog";

interface HomeProps {
  blogs: { objects: BlogType[]; total: number };
  categories: { objects: CategoryType[]; total: number };
}

const Home: React.FC<HomeProps> = ({ blogs, categories }) => {
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

export async function getServerSideProps() {
  const blogs = await bucket.getObjects({
    query: {
      type: "blogs",
    },
    props: "slug,title,content,metadata",
  });

  const categories = await bucket.getObjects({
    query: {
      type: "blog-categories",
    },
    props: "slug,title,content,metadata",
  });

  return {
    props: {
      blogs: blogs,
      categories: categories,
    },
  };
}

export default Home;
