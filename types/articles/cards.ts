import { EdtingArticleAuthor } from "./authors";

export interface ArticleCardWithBGSmallProps {
  authors: Array<EdtingArticleAuthor>;
  title: string;
  cover: string;
  date: number;
  lazyLoadImages?: boolean;
}

export interface ArticleCardWithBGMediumProps {
  authors: Array<EdtingArticleAuthor>;
  title: string;
  cover: string;
  date: number;
  lazyLoadImages?: boolean;
}
