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
import AppWrapper from "../components/global/wrapper";
import { generateGradient } from "../utils/basic";
import { Carousel } from "@mantine/carousel";
import EdtingImage from "../components/global/image";
import { format } from "date-fns";
import Link from "next/link";
import ArticleCardWithBGSmall from "../components/articles/cards/with-bg-small";
import ArticleCardWithBGMedium from "../components/articles/cards/with-bg-medium";
import HomepageCategorySection from "../components/homepage/section";
import { sampleArticles } from "../data/samples";
import LazyLoad from "react-lazy-load";

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      navbarProps={{
        navbarTitle: "Categories",
        navbarPosition: "sticky",
        navbarLinks: [
          {
            title: "technology",
            href: "#technology",
            icon: Cloud,
            color: "gray",
            path: "technology",
          },
          {
            title: "reviews",
            href: "#reviews",
            icon: StarHalf,
            color: "gray",
            path: "reviews",
          },
          {
            title: "programming",
            href: "#programming",
            icon: Terminal,
            color: "gray",
            path: "programming",
          },
          {
            title: "lifestyle",
            href: "#lifestyle",
            icon: MaskHappy,
            color: "gray",
            path: "lifestyle",
          },
          {
            title: "general health",
            href: "#general-health",
            icon: Heartbeat,
            color: "gray",
            path: "general-health",
          },
          {
            title: "physiotherapy",
            href: "#physiotherapy",
            icon: PersonSimpleRun,
            color: "gray",
            path: "physiotherapy",
          },
          {
            title: "medicine",
            href: "#medicine",
            icon: Pill,
            color: "gray",
            path: "medicine",
          },
        ],
      }}
      path=""
      padding={false}
    >
      <HomepageCategorySection
        subscribers={100000000}
        gradient={{
          from: "blue",
          to: "pink",
        }}
        title="Technology"
        articles={sampleArticles}
        lazyLoadImages={false}
      />
      <HomepageCategorySection
        subscribers={100000}
        gradient={{
          from: "red",
          to: "pink",
        }}
        title="Reviews"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={200000000}
        gradient={{
          from: "blue",
          to: "indigo",
        }}
        title="Programming"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "teal",
          to: "cyan",
        }}
        title="Lifestyle"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "blue",
          to: "cyan",
        }}
        title="General Health"
        articles={sampleArticles}
        lazyLoadImages={true}
      />

      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "indigo",
          to: "violet",
        }}
        title="Physiotherapy"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
      <HomepageCategorySection
        subscribers={1420000}
        gradient={{
          from: "teal",
          to: "green",
        }}
        title="Medicine"
        articles={sampleArticles}
        lazyLoadImages={true}
      />
    </AppWrapper>
  );
};

export default IndexPage;
