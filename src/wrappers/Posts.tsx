import { Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Post from "components/Post";

const DEMO_POSTS = [1, 2, 3];

export interface PostsProps {
  includeHeading: boolean;
}

const Posts: React.FC<PostsProps> = ({ includeHeading }) => {
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
        {DEMO_POSTS.map((_, index: number) => (
          <Post key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Posts;
