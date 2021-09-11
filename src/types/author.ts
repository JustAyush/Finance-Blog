export interface Image {
  url: string;
}

export interface SocialMedia {
  linkedin: string;
  twitter: string;
  website: string;
  facebook: string;
  instagram: string;
  youtube: string;
}

export interface AuthorMetadata {
  image: Image;
  description: string;
  social_media_links: SocialMedia;
}

export interface Author {
  slug: string;
  title: string;
  metadata: AuthorMetadata;
}
