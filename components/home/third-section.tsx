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
import { sampleArticles } from "../../data/samples";
import { serif } from "../../pages/_app";
import { fadeToDark, generateBottomFade } from "../../utils/basic";
import EdtingImage from "../global/image";

const ThirdHomepageSection = () => {
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
    <Container pt={40} pb={20} size="xl" px="xs">
      <Carousel
        nextControlIcon={<CaretRight weight="bold" size={20} />}
        previousControlIcon={<CaretLeft weight="bold" size={20} />}
        controlsOffset={50}
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
                : theme.fn.gradient({
                    from: "indigo",
                    to: "blue.4",
                  }),
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
        slideSize="100%"
        getEmblaApi={setEmblaMainApi}
        slideGap="xs"
      >
        {sampleArticles.map((mapped: any, index: number) => (
          <Carousel.Slide>
            <Card
              //@ts-ignore
              sx={{
                ...fadeToDark("160%"),
              }}
              pos="relative"
              radius="lg"
              p={0}
              w="100%"
              h={{
                xl: 650,
                md: 600,
                sm: 500,
                xs: 400,
                base: 400,
              }}
            >
              <EdtingImage src={sampleArticles[index].cover} fill />
              <Center
                pos="absolute"
                h="100%"
                w="100%"
                bg={theme.fn.rgba("dark", 0.5)}
                sx={{
                  zIndex: 10,
                }}
              >
                <Stack maw={700} align="center">
                  <Group noWrap>
                    <Badge
                      color="gray.0"
                      sx={{
                        fontSize: 10,
                        fontWeight: 500,
                      }}
                      variant="outline"
                      px="xs"
                      py={5}
                      h={24}
                    >
                      {sampleArticles[index].category}
                    </Badge>
                    <Text color="gray.0" size="xs">
                      {sampleArticles[index].readTime}
                    </Text>
                  </Group>
                  <Title
                    lineClamp={2}
                    weight={400}
                    align="center"
                    color="gray.0"
                    px="xl"
                    sx={(theme) => ({
                      fontFamily: serif.style.fontFamily,
                      [theme.fn.smallerThan(400)]: {
                        fontSize: `calc(${theme.fontSizes.xl} * 1)`,
                      },
                      [theme.fn.largerThan(400)]: {
                        fontSize: `calc(${theme.fontSizes.xl} * 1.3)`,
                      },
                    })}
                  >
                    {sampleArticles[index].title}
                  </Title>

                  <Text
                    sx={(theme) => ({
                      [theme.fn.smallerThan(800)]: {
                        fontSize: theme.fontSizes.xs,
                        maxWidth: "60%",
                      },
                      [theme.fn.largerThan(800)]: {
                        fontSize: theme.fontSizes.md,
                        maxWidth: "80%",
                      },
                    })}
                    align="center"
                    size="sm"
                    color="gray.2"
                    lineClamp={2}
                  >
                    {sampleArticles[index].description}
                  </Text>
                  <Group mt="md">
                    <ActionIcon
                      radius="xl"
                      opacity={0.55}
                      //   color={  colorScheme == "dark" ? "pink" : "indigo"}

                      gradient={{
                        from: colorScheme == "dark" ? "pink" : "indigo",
                        to: colorScheme == "dark" ? "grape" : "blue.4",
                      }}
                      variant="gradient"
                      size={50}
                      sx={(theme) => ({
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "all 0.2s ease-in-out",
                          opacity: 1,
                        },
                        [theme.fn.smallerThan(600)]: {
                          minHeight: 30,
                          minWidth: 30,
                          width: 30,
                          height: 30,
                        },
                      })}
                    >
                      <Play weight="fill" />
                    </ActionIcon>

                    <Text
                      color="gray.0"
                      sx={(theme) => ({
                        [theme.fn.smallerThan(600)]: {
                          fontSize: theme.fontSizes.xs,
                        },
                      })}
                      weight={500}
                    >
                      Play Video
                    </Text>
                  </Group>
                </Stack>
              </Center>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Carousel
        mt="xl"
        getEmblaApi={setEmblaThumbsApi}
        containScroll="keepSnaps"
        slideSize="34%"
        slideGap="xs"
        withControls={false}
        breakpoints={[
          {
            maxWidth: "xl",
            slideSize: "35%",
            slideGap: "xs",
          },

          {
            maxWidth: "lg",
            slideSize: "40%",
            slideGap: "xs",
          },
          {
            maxWidth: "md",
            slideSize: "50%",
            slideGap: "xs",
          },

          {
            maxWidth: "sm",
            slideSize: "100%",
            slideGap: "xs",
          },
        ]}
      >
        {sampleArticles.map((mapped: any, index: number) => (
          <Carousel.Slide key={nanoid()}>
            <Card
              onClick={() => onThumbClick(index)}
              px="xl"
              w="100%"
              radius="md"
              bg={
                selectedIndex === index
                  ? colorScheme == "dark"
                    ? "dark.5"
                    : "indigo.1"
                  : "transparent"
              }
              sx={{
                cursor: "pointer",
              }}
            >
              <Group position="apart" spacing="xl" noWrap>
                <Stack
                  maw={230}
                  sx={(theme) => ({
                    [theme.fn.smallerThan(500)]: {
                      maxWidth: 200,
                    },
                  })}
                >
                  <Group noWrap>
                    <Badge
                      sx={{
                        fontSize: 9,
                      }}
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      variant="outline"
                      px="xs"
                      py={5}
                      h={24}
                    >
                      {sampleArticles[index].category}
                    </Badge>
                    <Text
                      sx={(theme) => ({
                        [theme.fn.smallerThan(500)]: {
                          display: "none",
                        },
                      })}
                      size="xs"
                    >
                      {sampleArticles[index].readTime}
                    </Text>
                  </Group>
                  <Title lineClamp={2} weight={500} order={6}>
                    {sampleArticles[index].title}
                  </Title>
                </Stack>
                <Box h={100} w={120} pos="relative">
                  <EdtingImage
                    style={{
                      borderRadius: 10,
                      position: "absolute",
                    }}
                    width={120}
                    height={100}
                    src={sampleArticles[index].cover}
                  />

                  {selectedIndex === index ? (
                    <Center
                      bg={theme.fn.rgba("dark", 0.2)}
                      h="100%"
                      w={120}
                      sx={(theme) => ({
                        position: "relative",
                        borderRadius: 10,
                        zIndex: 10,
                      })}
                    >
                      <ActionIcon
                        radius="xl"
                        color="dark"
                        variant="filled"
                        opacity={0.65}
                        size={40}
                        sx={(theme) => ({
                          "&:hover": {
                            transform: "scale(1.1)",
                            transition: "all 0.2s ease-in-out",
                            opacity: 1,
                          },
                        })}
                      >
                        <Play size={20} weight="fill" />
                      </ActionIcon>
                    </Center>
                  ) : null}
                </Box>
              </Group>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Center>
        <Button px={60} mt={50} mx="auto">
          See all Videos
        </Button>
      </Center>
    </Container>
  );
};

export default ThirdHomepageSection;
