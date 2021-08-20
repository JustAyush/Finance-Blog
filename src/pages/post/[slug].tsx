import { Heading, Image, Box, Text, AspectRatio, Flex } from "@chakra-ui/react";
import Categories from "wrappers/Categories";

export interface BlogPostProps {}

const BlogPost: React.FC<BlogPostProps> = () => {
  return (
    <Box width="full" mb="4" mt="5">
      <Heading
        as="h2"
        fontSize={["2xl", "3xl"]}
        color="text.DEFAULT"
        fontWeight="bold"
        mb="3"
      >
        Performance of High PE and Low PE Ratio under different Holding Period
        in NEPSE recently!
      </Heading>
      <Text fontSize="sm">
        By{" "}
        <Text as="span" fontWeight="semibold">
          Robus Gauli
        </Text>
        , August 28, 2021
      </Text>
      <AspectRatio w="100%" ratio={16 / 8} my="6">
        <Image
          src="https://images.ctfassets.net/s600jj41gsex/6vyEmx8KoXM3JcmI9v86m9/c3447555a39782035d80b3fd446994f0/photo-1510511336377-1a9caa095849.jpeg?w=668&h=534&q=50&fm=webp&fit=scale"
          alt="blog-image"
          borderRadius="sm"
        />
      </AspectRatio>
      <Text>
        Control over how your web application looks is essential. If you’re
        struggling, or fighting your way through an adversarial set of commands
        and HTML configurations just to get your rich text editor to look
        right... know that it doesn’t have to be that way.
        <br />
        <br />
        Control over how your web application looks is essential. If you’re
        struggling, or fighting your way through an adversarial set of commands
        and HTML configurations just to get your rich text editor to look
        right... know that it doesn’t have to be that way.
      </Text>

      <Box mt="12">
        <Text fontSize="sm">Posted in:</Text>
        <Categories includeHeading={false} />
        <hr />
        <Flex mt="6">
          <AspectRatio minW="12" w="12" h="12" ratio={1 / 8}>
            <Image
              src="https://images.ctfassets.net/s600jj41gsex/2P4AEkP8R7iCxO4eT5voCe/d18aa214c40aa5e1ecff6f6d216c8097/Portrait-TinyTribe-JR100px.png?w=72&h=56&q=50&fm=webp&fit=scale"
              alt="author"
              borderRadius="50%"
            />
          </AspectRatio>
          <Box ml="5">
            <Heading as="h6" fontSize="md" fontWeight="normal" py="3">
              by{" "}
              <Text as="span" fontWeight="bold">
                Joe Robinson
              </Text>
            </Heading>
            <Text>
              Technical and creative writer, editor, and a TinyMCE advocate. An
              enthusiast for teamwork, open source software projects, and
              baking. Can often be found puzzling over obscure history, cryptic
              words, and lucid writing.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogPost;
