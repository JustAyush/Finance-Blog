import { Heading, Box } from "@chakra-ui/react";
import Posts from "wrappers/Posts";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Blog as BlogType } from "types/blog";
import bucket from "utils/cosmic";

export interface BlogCategoryProps {
  blogs: BlogType[];
  categoryTitle: string;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}
const BlogCategory: React.FC<BlogCategoryProps> = ({
  blogs,
  categoryTitle,
}) => {
  return (
    <Box width="full" mb="4" mt="5">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        color="text.DEFAULT"
        fontWeight="bold"
        mb="8"
      >
        Topic: {categoryTitle}
      </Heading>
      <Posts includeHeading={false} blogs={blogs} />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;

  // Fetch categories by slug first
  const categories = await bucket.getObjects({
    query: {
      type: "blog-categories",
      slug: slug,
    },
    props: `id,title`,
  });

  const categoryId = categories?.objects[0]?.id;
  const categoryTitle = categories?.objects[0]?.title;

  // Fetch blogs having the category id
  // TODO: Fetch blog by matching category slug directly
  // (without having to fetch categoryId first)
  const blogs = await bucket.getObjects({
    query: {
      type: "blogs",
      "metadata.categories": [categoryId],
    },
    props: `slug,title, metadata.banner_image.url,
      metadata.author.title,metadata.published_date,
      metadata.categories.slug,metadata.categories.title`,
  });

  return {
    props: {
      blogs: blogs.objects,
      categoryTitle: categoryTitle,
    },
  };
};

export default BlogCategory;
