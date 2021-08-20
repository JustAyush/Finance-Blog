import { Heading, Image, Box, Text, AspectRatio } from "@chakra-ui/react";
import { dateFormatter } from "utils";

import { Blog as BlogType } from "types/blog";

export interface PostProps {
  blog: BlogType;
}

const Post: React.FC<PostProps> = ({ blog }) => {
  return (
    <Box width="full" mb="4">
      <AspectRatio maxW="400px" ratio={16 / 9} mb="6">
        <Image
          src={blog.metadata?.banner_image?.url}
          alt="blog-image"
          borderRadius="sm"
        />
      </AspectRatio>
      <Heading
        as="h4"
        fontSize="1xl"
        color="text.DEFAULT"
        fontWeight="bold"
        mb="2"
      >
        {blog.title}
      </Heading>
      <Text fontSize="xs">
        By{" "}
        <Text as="span" fontWeight="semibold">
          {blog.metadata?.author?.title}
        </Text>
        , {dateFormatter(blog.metadata?.published_date)}
      </Text>
    </Box>
  );
};

export default Post;
