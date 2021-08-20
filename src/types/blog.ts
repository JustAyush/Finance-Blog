import { Category } from "./category";
import { Author, Image } from "./author";

interface BlogMetadata {
  banner_image: Image;
  published_date: string;
  author: Author;
  categories: Category[];
}

export interface Blog {
  slug: string;
  title: string;
  content: string;
  metadata: BlogMetadata;
}
