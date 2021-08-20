import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Post from "components/Post";

import { Blog as BlogType } from "types/blog";

export interface PostsProps {
  includeHeading: boolean;
  blogs: BlogType[];
}

const Posts: React.FC<PostsProps> = ({ includeHeading, blogs }) => {
  return (
    <Box mb="5">
      {includeHeading && (
        <Heading
          as="h6"
          fontSize="sm"
          color="primary.DEFAULT"
          fontWeight="normal"
          textTransform="uppercase"
          mb="6"
        >
          Recently Published
        </Heading>
      )}
      <SimpleGrid columns={[1, 2]} spacing={6}>
        {blogs?.map((blog) => (
          <Post key={blog.slug} blog={blog} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
