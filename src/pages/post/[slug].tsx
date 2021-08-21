import { Heading, Image, Box, Text, AspectRatio, Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Categories from "wrappers/Categories";
import { Blog as BlogType } from "types/blog";
import { dateFormatter, parseHtml } from "utils";
import bucket from "utils/cosmic";

interface BlogPostProps {
  blog: BlogType;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  return (
    <Box width="full" mb="4" mt="5">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        color="text.DEFAULT"
        fontWeight="bold"
        mb="3"
      >
        {blog.title}
      </Heading>
      <Text fontSize="sm">
        By{" "}
        <Text as="span" fontWeight="semibold">
          {blog.metadata?.author?.title}
        </Text>
        , {dateFormatter(blog.metadata?.published_date)}
      </Text>
      <AspectRatio w="100%" ratio={16 / 8} my="6">
        <Image
          src={blog.metadata?.banner_image?.url}
          alt="blog-image"
          borderRadius="sm"
        />
      </AspectRatio>

      <Box
        dangerouslySetInnerHTML={{
          __html: parseHtml(blog.content),
        }}
      />

      <Box mt="12">
        <Text fontSize="sm">Posted in:</Text>
        <Categories
          includeHeading={false}
          categories={blog.metadata?.categories}
        />
        <hr />
        <Flex mt="6">
          <AspectRatio minW="12" w="12" h="12" ratio={1 / 8}>
            <Image
              src={blog.metadata?.author?.metadata?.image?.url}
              alt={blog.metadata?.author?.slug}
              borderRadius="50%"
            />
          </AspectRatio>
          <Box ml="5">
            <Heading as="h6" fontSize="md" fontWeight="normal" py="3">
              by{" "}
              <Text as="span" fontWeight="bold">
                {blog.metadata?.author?.title}
              </Text>
            </Heading>
            <Text>{blog.metadata?.author?.metadata?.description}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;

  const blog = await bucket.getObjects({
    query: {
      slug,
    },
    props: `slug,title,content,
      metadata.banner_image.url,metadata.published_date,
      metadata.categories.slug,metadata.categories.title,
      metadata.author.title,metadata.author.metadata.image.url,metadata.author.metadata.description`,
  });

  return {
    props: {
      blog: blog.objects[0],
    },
  };
};

export default BlogPost;
