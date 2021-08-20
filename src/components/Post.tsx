import { Heading, Image, Box, Text, AspectRatio } from "@chakra-ui/react";

export interface PostProps {}

const Post: React.FC<PostProps> = () => {
  return (
    <Box width="full" mb="4">
      <AspectRatio maxW="400px" ratio={16 / 9} mb="6">
        <Image
          src="https://images.ctfassets.net/s600jj41gsex/6vyEmx8KoXM3JcmI9v86m9/c3447555a39782035d80b3fd446994f0/photo-1510511336377-1a9caa095849.jpeg?w=668&h=534&q=50&fm=webp&fit=scale"
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
        Corporate Social Responsibility: Tax Perspective
      </Heading>
      <Text fontSize="xs">
        By{" "}
        <Text as="span" fontWeight="semibold">
          Robus Gauli
        </Text>
        , August 28, 2021
      </Text>
    </Box>
  );
};

export default Post;
