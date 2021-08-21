export interface Image {
  url: string;
}

export interface AuthorMetadata {
  image: Image;
  description: string;
}

export interface Author {
  slug: string;
  title: string;
  metadata: AuthorMetadata;
}
