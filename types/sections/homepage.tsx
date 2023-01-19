import { MantineColor } from "@mantine/core";
import { EdtingArticleAuthor } from "../articles/authors";
import { EdtingArticle } from "../articles/generics";

export interface HomepageCategorySectionProps {
  articles: Array<EdtingArticle>;
  subscribers: number;
  title: string;
  gradient: {
    from: MantineColor;
    to: MantineColor;
  };
}
