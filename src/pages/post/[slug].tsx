import {
  Heading,
  Image,
  Box,
  Text,
  AspectRatio,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Categories from "wrappers/Categories";
import { Blog as BlogType } from "types/blog";
import { dateFormatter, parseHtml } from "utils";
import bucket from "utils/cosmic";
import AccessibleLink from "components/AccessibleLink";

interface BlogPostProps {
  blog: BlogType;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ blog }) => {
  const authorSocialMedia = blog.metadata?.author?.metadata?.social_media_links;

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
          <AspectRatio minW="12" w="12" h="12" ratio={1 / 1}>
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
            <Stack direction="row" spacing="12px" mt="4">
              {authorSocialMedia.linkedin && (
                <AccessibleLink href={authorSocialMedia.linkedin} isExternal>
                  <Image
                    src="/social-media/linkedin.png"
                    alt="linkedin"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
              {authorSocialMedia.twitter && (
                <AccessibleLink href={authorSocialMedia.twitter} isExternal>
                  <Image
                    src="/social-media/twitter.png"
                    alt="twitter"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
              {authorSocialMedia.website && (
                <AccessibleLink href={authorSocialMedia.website} isExternal>
                  <Image
                    src="/social-media/web.png"
                    alt="website"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
              {authorSocialMedia.facebook && (
                <AccessibleLink href={authorSocialMedia.facebook} isExternal>
                  <Image
                    src="/social-media/facebook.png"
                    alt="facebook"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
              {authorSocialMedia.instagram && (
                <AccessibleLink href={authorSocialMedia.instagram} isExternal>
                  <Image
                    src="/social-media/instagram.png"
                    alt="instagram"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
              {authorSocialMedia.youtube && (
                <AccessibleLink href={authorSocialMedia.youtube} isExternal>
                  <Image
                    src="/social-media/youtube.png"
                    alt="youtube"
                    w="5"
                    h="5"
                  />
                </AccessibleLink>
              )}
            </Stack>
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
      metadata.author.title,metadata.author.metadata.image.url,metadata.author.metadata.description,metadata.author.metadata.social_media_links,`,
  });

  return {
    props: {
      blog: blog.objects[0],
    },
  };
};

export default BlogPost;
