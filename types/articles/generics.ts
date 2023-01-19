import { EdtingArticleAuthor } from "./authors";

export interface EdtingArticle {
  title: string;
  authors: Array<EdtingArticleAuthor>;
  date: number;
  cover: string;
}
