import { Button } from "@chakra-ui/react";
import AccessibleLink from "./AccessibleLink";
export interface CategoryProps {
  slug: string;
  text: string;
}

const Category: React.FC<CategoryProps> = ({ text, slug }) => {
  return (
    <AccessibleLink href={`/category/${slug}`}>
      <Button
        bg="primary.50"
        color="text.DEFAULT"
        size="xs"
        _hover={{ bg: "primary.100" }}
        px="3"
        mr={2}
        mb={2}
        borderRadius="md"
      >
        {text}
      </Button>
    </AccessibleLink>
  );
};

export default Category;
