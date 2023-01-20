import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import {
  Bell,
  BellRinging,
  BellSimple,
  BellSimpleRinging,
  BellSimpleSlash,
  BellSlash,
  Cloud,
  GlobeSimple,
  HandPointing,
  Heartbeat,
  MaskHappy,
  PersonSimpleRun,
  Pill,
  Plus,
  Prohibit,
  Rss,
  StarHalf,
  Terminal,
} from "phosphor-react";
import { Carousel } from "@mantine/carousel";
import { format } from "date-fns";
import Link from "next/link";
import AppWrapper from "../../components/global/wrapper";
import { generateGradient } from "../../utils/basic";
import EdtingImage from "../../components/global/image";
import ArticleCardWithBGMedium from "../../components/articles/cards/with-bg-medium";
import ArticleCardWithBGSmall from "../../components/articles/cards/with-bg-small";
import { useRouter } from "next/router";
import HomepageCategorySection from "../../components/homepage/section";
import { sampleArticles } from "../../data/samples";
import TagPageTrendingSection from "../../components/tag-page/section";
import { DEFAULT_NAV_DATA } from "../../data/generics";

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const { title }: any = router.query;
  return (
    <AppWrapper
      path={title}
      headerProps={{
        headerPosition: "relative",
      }}
      navbarProps={{
        navbarTitle: "",
        navbarPosition: "sticky",
        navbarLinks: DEFAULT_NAV_DATA,
      }}
      padding={false}
    >
      <TagPageTrendingSection
        lazyLoadImages={false}
        subscribers={100000000}
        gradient={{
          from: "blue",
          to: "pink",
        }}
        title={title}
        articles={sampleArticles}
      />
      <Paper pb={50}>
        <Title
          transform="uppercase"
          weight={800}
          order={3}
          pt={40}
          size={20}
          px="xs"
          mx="xl"
          pb={10}
        >
          Latest in{" "}
          <Text
            transform="uppercase"
            component="span"
            variant="gradient"
            weight={900}
            gradient={{
              from: "indigo.5",
              to: "pink.5",
            }}
          >
            {" "}
            {title.includes("-")
              ? title.split("-")[0] + " " + title.split("-")[1]
              : title}
          </Text>
        </Title>

        <SimpleGrid
          breakpoints={[
            { maxWidth: 500, cols: 1, spacing: "xl" },
            { maxWidth: 600, cols: 2, spacing: "xl" },
            { maxWidth: 800, cols: 2, spacing: "md" },
            { maxWidth: 1600, cols: 3, spacing: "md" },
            { maxWidth: 2000, cols: 4, spacing: "md" },
            { maxWidth: 3000, cols: 6, spacing: "md" },
            { maxWidth: 4000, cols: 7, spacing: "md" },
            { maxWidth: 6000, cols: 10, spacing: "md" },
            { maxWidth: 8000, cols: 12, spacing: "md" },
          ]}
          p="xl"
          spacing={"sm"}
          cols={3}
        >
          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />

          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />

          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />

          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />

          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />

          <ArticleCardWithBGSmall
            lazyLoadImages
            title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
            cover="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
            date={Date.now()}
            authors={[
              {
                name: "Afridi",
                dp: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
              {
                name: "Maya",
                dp: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
              },
            ]}
          />
        </SimpleGrid>
      </Paper>
    </AppWrapper>
  );
};

export default IndexPage;
