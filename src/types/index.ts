interface IAuthor {
  email: string;
  name: string;
  phone: string;
  picture?: string;
  isVerified?: boolean;
}

export interface IBlog {
  author: IAuthor;
  authorId: number;
  content: string;
  createdAt: string;
  id: number;
  isFeatured: boolean;
  tags: string[];
  thumbnail: string;
  title: string;
  updatedAt: string;
  views: number;
}
