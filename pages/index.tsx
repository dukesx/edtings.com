import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Indicator,
  List,
  MediaQuery,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import EdtingImage from "../components/global/image";
import AppWrapper from "../components/global/wrapper";
import LastHomepageSection from "../components/home/last-section";
import { serif } from "./_app";
import { sampleArticles } from "../data/samples";
import { Carousel, Embla } from "@mantine/carousel";
import { CaretLeft, CaretRight, Play, PlayCircle } from "@phosphor-icons/react";
import Balancer from "react-wrap-balancer";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { fadeToDark, fadeToWhite } from "../utils/basic";
import CategoriesHomepageSection from "../components/home/categories-section";
import TopHomepageSection from "../components/home/top-section";
import TrendingStoriesHomepageSection from "../components/home/trending-stories";
import VideosHomepageSection from "../components/home/video-section";
import FeaturedHighlightsHomepageSection from "../components/home/featured-highlights";

// import { HOME_NAV_DATA } from "../data/generics";

const IndexPage = ({ blurhash }: { blurhash?: string }) => {
  const theme = useMantineTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainApi, setEmblaMainApi] = useState<Embla | null>(null);
  const [emblaThumbsApi, setEmblaThumbsApi] = useState<Embla | null>(null);
  const { colorScheme } = useMantineColorScheme();
  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <AppWrapper
      path=""
      navbar={false}
      headerProps={{
        headerPosition: "absolute",
        headerColor: "gray",
      }}
      padding={false}
    >
      <TopHomepageSection />
      <TrendingStoriesHomepageSection />
      <CategoriesHomepageSection />
      <VideosHomepageSection />
      <FeaturedHighlightsHomepageSection />
      <LastHomepageSection />
    </AppWrapper>
  );
};

export default IndexPage;
