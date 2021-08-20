import { Button } from "@chakra-ui/react";

export interface CategoryProps {
  text: string;
}

const Category: React.FC<CategoryProps> = ({ text }) => {
  return (
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
  );
};

export default Category;
