import { EdtingArticleAuthor } from "./authors";

export interface ArticleCardWithBGSmallProps {
  authors: Array<EdtingArticleAuthor>;
  title: string;
  cover: string;
  date: number;
}

export interface ArticleCardWithBGMediumProps {
  authors: Array<EdtingArticleAuthor>;
  title: string;
  cover: string;
  date: number;
}
