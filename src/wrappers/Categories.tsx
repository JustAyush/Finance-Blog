import { Heading, Box } from "@chakra-ui/react";
import Category from "components/Category";

import { Category as CategoryType } from "types/category";
export interface CategoriesProps {
  includeHeading: boolean;
  categories: CategoryType[];
}

const Categories: React.FC<CategoriesProps> = ({
  includeHeading,
  categories,
}) => {
  return (
    <Box mt="3">
      {includeHeading && (
        <Heading
          as="h6"
          fontSize="sm"
          color="primary.DEFAULT"
          fontWeight="normal"
          textTransform="uppercase"
          mb="6"
        >
          Top Categories
        </Heading>
      )}
      {categories?.map((category) => (
        <Category key={category.slug} text={category.title} />
      ))}
    </Box>
  );
};

export default Categories;
