import { EdtingArticleAuthor } from "../articles/authors";

export interface UserPageSectionProps {
  followed: boolean;
  author: {
    status: string;
    name: string;
    cover: string;
  };
  stats: {
    articles: number;
    views: number;
    followers: number;
  };
}
