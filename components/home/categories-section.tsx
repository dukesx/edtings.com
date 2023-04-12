import { Carousel, Embla } from "@mantine/carousel";
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
  List,
  MediaQuery,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { CaretLeft, CaretRight, Play } from "@phosphor-icons/react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { nanoid } from "nanoid";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { sampleArticles, sampleCategories } from "../../data/samples";
import { serif } from "../../pages/_app";
import { fadeToDark, fadeToWhite, generateBottomFade } from "../../utils/basic";
import EdtingImage from "../global/image";

const CategoriesHomepageSection = () => {
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
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());
  const theme = useMantineTheme();

  return (
    <Container pt={60} pb={80} mah={600} mih={440} size="xl">
      <Stack spacing={0}>
        <Title
          weight={400}
          align="center"
          sx={{
            fontFamily: serif.style.fontFamily,
          }}
        >
          Browse Our Categories
        </Title>
        <Carousel
          breakpoints={[
            {
              maxWidth: "lg",
              slideSize: "50%",
            },
            {
              maxWidth: "md",
              slideSize: "60%",
            },
            {
              maxWidth: "sm",
              slideSize: "100%",
            },
          ]}
          height={190}
          nextControlIcon={<CaretRight weight="bold" size={20} />}
          previousControlIcon={<CaretLeft weight="bold" size={20} />}
          styles={{
            controls: {
              [theme.fn.smallerThan(600)]: {
                paddingLeft: 20,
                paddingRight: 20,
              },
            },
            control: {
              background:
                colorScheme == "dark"
                  ? theme.fn.gradient({
                      from: "pink",
                      to: "grape",
                    })
                  : theme.colors.dark[9],
              opacity: 0.45,
              height: 50,
              width: 50,
              borderRadius: "50%",
              border: 0,
              color: theme.white,
              [theme.fn.smallerThan(600)]: {
                height: 20,
                width: 20,
                svg: {
                  height: 15,
                  width: 15,
                },
              },
            },
          }}
          align="center"
          mt={60}
          slideGap="xl"
          slideSize="35%"
          containScroll="keepSnaps"
          getEmblaApi={setEmblaMainApi}
        >
          {sampleCategories.map((mapped: any, index) => (
            <Carousel.Slide key={nanoid()} h={40}>
              <Stack
                mah={200}
                sx={{
                  overflowY: "hidden",
                }}
                align="center"
              >
                <Title
                  sx={(theme) => ({
                    [theme.fn.smallerThan("lg")]: {
                      fontSize: 25,
                    },
                  })}
                  w="100%"
                  align="center"
                  maw="max-content"
                >
                  {mapped.title}
                </Title>
                {selectedIndex == index ? (
                  <Divider
                    color={colorScheme == "dark" ? "pink" : "dark"}
                    size="xl"
                    w="100%"
                  />
                ) : null}
              </Stack>
            </Carousel.Slide>
          ))}
        </Carousel>
        <Carousel
          mt={-80}
          withControls={false}
          slideGap="xl"
          slideSize="35%"
          align="center"
          containScroll="keepSnaps"
          getEmblaApi={setEmblaThumbsApi}
          sx={{
            overflowY: "hidden",
          }}
          breakpoints={[
            {
              maxWidth: "lg",
              slideSize: "50%",
            },
            {
              maxWidth: "md",
              slideSize: "60%",
            },
            {
              maxWidth: "sm",
              slideSize: "100%",
            },
          ]}
        >
          {sampleCategories.map((mapped: any, index) => (
            <Carousel.Slide key={nanoid()}>
              <Card
                maw={350}
                mah={250}
                mx="auto"
                sx={{
                  cursor: "pointer",
                  ...fadeToWhite(),
                }}
                onClick={() => onThumbClick(index)}
                bg={selectedIndex == index ? "dark" : "transparent"}
                radius="lg"
                py="xl"
              >
                <Stack align="center">
                  {mapped.subCategories.map((sub: any) => (
                    <Stack>
                      <Text
                        weight={700}
                        size="lg"
                        color={
                          selectedIndex == index
                            ? "gray.0"
                            : colorScheme == "dark"
                            ? "gray.4"
                            : "dark"
                        }
                      >
                        {sub.title}
                      </Text>
                      {sub.subCategories && sub.subCategories.length > 0 ? (
                        <List
                          size="sm"
                          spacing="sm"
                          listStyleType="none"
                          color="gray"
                          ml="xl"
                        >
                          {sub.subCategories.map((mapped2: any) => (
                            <List.Item color="gray">
                              <Text
                                transform="capitalize"
                                color={
                                  selectedIndex == index
                                    ? "gray.0"
                                    : colorScheme == "dark"
                                    ? "gray.4"
                                    : "dark"
                                }
                              >
                                {mapped2.title}
                              </Text>
                            </List.Item>
                          ))}
                        </List>
                      ) : null}
                    </Stack>
                  ))}
                </Stack>
              </Card>
              <Center>
                <Button
                  mb={2}
                  color={colorScheme == "dark" ? "dark" : "gray.0"}
                  variant={colorScheme == "dark" ? "filled" : "filled"}
                  sx={{
                    boxShadow: theme.shadows.xl,
                    color:
                      colorScheme == "dark"
                        ? theme.colors.gray[2]
                        : theme.colors.dark[8],
                  }}
                >
                  Read more from{" "}
                  <Text
                    mt={2}
                    component="span"
                    px={4}
                    weight={700}
                    variant="gradient"
                    gradient={{
                      from: colorScheme == "dark" ? "pink.5" : "blue.4",
                      to: colorScheme == "dark" ? "grape" : "indigo",
                    }}
                  >
                    {mapped.title}
                  </Text>
                </Button>
              </Center>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Stack>
    </Container>
  );
};

export default CategoriesHomepageSection;
