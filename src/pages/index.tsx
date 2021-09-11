import { Box, Stack } from "@chakra-ui/react";

import Banner from "components/Banner";
import Categories from "wrappers/Categories";
import Posts from "wrappers/Posts";

import { Category as CategoryType } from "types/category";
import { Blog as BlogType } from "types/blog";
import { Banner as BannerType } from "types/banner";
import { GetServerSideProps, NextPage } from "next";
import bucket from "utils/cosmic";

interface HomeProps {
  blogs: { objects: BlogType[]; total: number };
  categories: { objects: CategoryType[]; total: number };
  banner: { objects: BannerType[]; total: number };
}

const Home: NextPage<HomeProps> = ({ blogs, categories, banner }) => {
  return (
    <Box mb={8} w="full">
      <Banner
        title={banner.objects[0]?.metadata?.title}
        subtitle={banner.objects[0]?.metadata?.subtitle}
      />
      <Stack spacing="12" mt="6">
        <Categories includeHeading categories={categories.objects} />
        <Posts includeHeading blogs={blogs.objects} />
      </Stack>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const banner = await bucket.getObjects({
    query: {
      type: "banner",
    },
    props: "slug,title, metadata",
  });

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
      banner: banner,
    },
  };
};

export default Home;
