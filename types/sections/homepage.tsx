import { MantineColor } from "@mantine/core";
import { EdtingArticleAuthor } from "../articles/authors";
import { EdtingArticle } from "../articles/generics";

export interface HomepageFeaturedSectionProps {
  articles: Array<EdtingArticle>;
  subscribers: number;
  title: string;
  lazyLoadImages?: boolean;
  gradient: {
    from: MantineColor;
    to: MantineColor;
    opacity?: number;
  };
}
