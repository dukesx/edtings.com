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
import FirstHomepageSection from "../components/home/first-section";
import SecondHomepageSection from "../components/home/second-section";
import ThirdHomepageSection from "../components/home/third-section";
import LastHomepageSection from "../components/home/last-section";
import { serif } from "./_app";
import { sampleArticles } from "../data/samples";
import { Carousel, Embla } from "@mantine/carousel";
import { CaretLeft, CaretRight, Play, PlayCircle } from "@phosphor-icons/react";
import Balancer from "react-wrap-balancer";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";
import { fadeToDark } from "../utils/basic";
import FourthHomepageSection from "../components/home/fourth-section";

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
      <FirstHomepageSection />
      <SecondHomepageSection />
      <Container py={60}>
        <Stack>
          <Title>Browse Our Categories</Title>
          <Carousel getEmblaApi={setEmblaMainApi} p="xl">
            <Carousel.Slide>
              <Button>Technology</Button>
            </Carousel.Slide>
          </Carousel>
          <Carousel getEmblaApi={setEmblaThumbsApi} p="xl">
            <Carousel.Slide>
              <Button>Technology</Button>
            </Carousel.Slide>
          </Carousel>
        </Stack>
      </Container>
      <ThirdHomepageSection />
      <FourthHomepageSection />
      <LastHomepageSection />
    </AppWrapper>
  );
};

export default IndexPage;
