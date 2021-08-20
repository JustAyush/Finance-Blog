import { Heading, Box } from "@chakra-ui/react";
import Category from "components/Category";

const DEMO_CATEGORIES = [
  "Finance and Accounting",
  "Income Tax",
  "Annual Report",
  "Book Summary",
  "Random",
];

export interface CategoriesProps {
  includeHeading: boolean;
}

const Categories: React.FC<CategoriesProps> = ({ includeHeading }) => {
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
      {DEMO_CATEGORIES.map((category, index: number) => (
        <Category key={index} text={category} />
      ))}
    </Box>
  );
};

export default Categories;
