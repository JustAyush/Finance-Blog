export interface Image {
  url: string;
}

export interface AuthorMetadata {
  image: Image;
}

export interface Author {
  slug: string;
  title: string;
  description: string;
  metadata: AuthorMetadata;
}
