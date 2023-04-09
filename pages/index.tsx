import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
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
import {
  fadeToDark,
  fadeToWhite,
  generateBottomFade,
  generateGradient,
  generateGradient2,
} from "../utils/basic";
import { Carousel, Embla } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight, Dot } from "@phosphor-icons/react";
import { flushSync } from "react-dom";

// import { Fade, Slide } from "react-awesome-reveal";
//@ts-ignore
import Fade from "react-reveal";
//@ts-ignore
import Slide from "react-reveal/Slide";
import { nanoid } from "nanoid";

// import { HOME_NAV_DATA } from "../data/generics";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const sampleArticles = [
  {
    title: "The 10 Best Places to Visit in Pakistan",
    category: "World",
    readTime: "5 min read",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat iaculis mauris, et pretium metus sagittis sed. Aliquam a aliquet justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget diam ut erat iaculis blandit. In eleifend sem quis ultricies vulputate. Integer iaculis mollis pellentesque. Vestibulum ac justo dui.`,
    cover:
      "https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "What it takes to make 165 years of journalism available online",
    category: "World",
    readTime: "2 min read",
    description: `Nulla gravida lacus orci, ut gravida tellus lacinia ut. Morbi egestas sem velit, quis aliquam est imperdiet nec. Pellentesque eget ante velit. Pellentesque dictum nulla velit, sit amet consequat eros aliquet a. Donec finibus non ante ut tincidunt. Aliquam dui sem, ultricies quis congue vitae, ultricies et eros. In nisl nisi, feugiat eget velit ac, hendrerit semper est. Phasellus ultrices vitae sapien et sodales. Curabitur quis sapien fringilla, fermentum purus at, vulputate tortor. Donec eget lacinia erat. Quisque eu est laoreet, accumsan mauris a, aliquet ipsum. Fusce ac suscipit metus.`,
    cover:
      "https://images.unsplash.com/photo-1498644035638-2c3357894b10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
  {
    title: "Report from a Relationship",
    category: "Relationships",
    readTime: "4 min read",
    description: `Quisque non leo odio. Nulla euismod, ligula nec vulputate laoreet, magna nisi efficitur tortor, a tincidunt dui lacus ut nulla. Suspendisse eget molestie ex. Nulla consectetur tempor placerat. Etiam convallis ligula quis rhoncus sagittis. Donec malesuada felis mi, ut accumsan ipsum laoreet ut. Pellentesque non nunc sit amet purus feugiat sagittis sed non nibh.
`,
    cover:
      "https://images.unsplash.com/photo-1591711696773-c4b7fe4d3d74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
  {
    title: "The Ugly American Passport Fiasco",
    category: "Law",
    readTime: "7 min read",
    description: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean in fringilla neque. Morbi quis felis sed elit iaculis efficitur. Quisque lectus tortor, semper vel blandit eu, tempor in nulla. Praesent mattis et nulla at semper. Suspendisse ut faucibus dui. Curabitur ac vestibulum tortor. Nunc id nunc pharetra, interdum urna non, imperdiet felis. Pellentesque ullamcorper, lorem vel efficitur sagittis, nibh arcu mollis ante, vitae lacinia mauris sapien a tellus. Pellentesque posuere accumsan ante non vulputate. Integer non dolor egestas, gravida nunc vel, pellentesque erat. Proin euismod est vitae augue pulvinar, id pellentesque magna ultricies.`,
    cover:
      "https://images.unsplash.com/photo-1561121864-3e4031788fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "David Attenborough Narrates the Great Twitter Migration",
    category: "Tech Companies",
    readTime: "3 min read",
    description: `Nulla gravida arcu ac nibh vehicula, at suscipit sem volutpat. Praesent eros turpis, gravida non justo id, egestas feugiat ante. Nunc vestibulum euismod convallis. Nam blandit a mi ut sodales. Mauris bibendum eros vel condimentum posuere. Aenean vitae lobortis nisi, sit amet dignissim erat. Sed eu gravida lacus.`,
    cover:
      "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    title: "The Real Problem with TikTok’s ‘Glamour’ Filter",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    description: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a cursus orci. Integer ultrices quam sem, vel viverra purus scelerisque ac. Proin id nulla pellentesque mauris semper porta vel sit amet nunc. Maecenas vel viverra libero, in porttitor arcu. Etiam vulputate massa ac varius maximus. Vestibulum et tempor nunc. Aenean fringilla volutpat erat, ac placerat mauris porttitor auctor. Suspendisse pretium auctor justo ut feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut felis metus, dapibus sed nibh sit amet, placerat pretium turpis. Donec ut arcu eu erat cursus molestie ut nec turpis. Curabitur finibus vulputate lacus. Mauris venenatis est ac rhoncus faucibus. Praesent est neque, volutpat non arcu at, aliquet pharetra felis.`,
    cover:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    title: "Design notes on the 2023 Wikipedia redesign",
    category: "Design",
    readTime: "2 min read",
    description: `Curabitur fermentum ultricies turpis. Mauris nec ullamcorper felis. Maecenas consectetur nisi ac ultricies aliquam. Pellentesque vel ligula egestas, porttitor ex ut, auctor ex. Etiam id lectus eu massa laoreet tempus vitae et ex. Pellentesque a ex id dolor efficitur faucibus eu id orci. Sed maximus, purus nec tempor pellentesque, nulla risus viverra mauris, eget eleifend sem tortor a lacus. Quisque eleifend magna et risus pulvinar vestibulum. Suspendisse malesuada turpis tristique nunc dapibus aliquet. Morbi pulvinar dolor ipsum, id hendrerit ex elementum id. Pellentesque vitae diam ligula. Curabitur at lacinia turpis. Vivamus quis felis nisl. Etiam suscipit risus ac dui consequat commodo.`,
    cover:
      "https://images.unsplash.com/photo-1657256031790-e898b7b3f3eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  },
  {
    title: "The 13 Rules of Good Luck",
    category: "Spirtuality",
    readTime: "4 min read",
    description: `Integer metus mi, aliquet eu consectetur et, sodales malesuada leo. Pellentesque augue lectus, facilisis at dui accumsan, vehicula rutrum dolor. Quisque ullamcorper odio et risus elementum, sit amet sollicitudin arcu feugiat. Nullam nec justo congue, venenatis lectus a, dictum arcu. Nam sit amet luctus dolor. Quisque ac molestie nulla. Nam viverra orci at felis aliquet, nec porttitor sapien egestas.`,
    cover:
      "https://images.unsplash.com/photo-1550534790-5724c29d08f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const IndexPage = ({ blurhash }: { blurhash?: string }) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [embla2, setEmbla2] = useState<Embla | null>(null);

  // var navLinks = HOME_NAV_DATA;
  // navLinks = navLinks.filter((mapped) => mapped.title != "home");
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());

  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!embla2) return;

    const engine = embla2.internalEngine();
    const scrollProgress = embla2.scrollProgress();

    const styles = embla2.scrollSnapList().map((scrollSnap, index) => {
      if (!embla2.slidesInView().includes(index)) return 0;
      let diffToTarget: any = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [embla2, setTweenValues]);

  useEffect(() => {
    if (!embla2) return;

    onScroll();
    embla2.on("scroll", () => {
      flushSync(() => onScroll());
    });
    embla2.on("reInit", onScroll);
  }, [embla2, onScroll]);
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
      <Container size="100%" px={0}>
        <Box h={814}>
          <Group spacing={0} noWrap mt={-25} h="100%" w="100%">
            <Suspense>
              <Carousel
                // withIndicators={true}
                getEmblaApi={setEmbla2}
                withControls={false}
                //@ts-ignore
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                mt="xl"
                w="100%"
                height={790}
                slideSize="100%"
                align="center"
                slideGap={0}
                loop={true}
                breakpoints={[
                  {
                    slideSize: "20%",
                    maxWidth: 400,
                    slideGap: "md",
                  },

                  {
                    slideSize: "100%",
                    maxWidth: "md",
                    slideGap: "md",
                  },
                  {
                    slideSize: "100%",
                    maxWidth: "xl",
                    slideGap: "xs",
                  },
                ]}
              >
                {sampleArticles.map((mapped) => (
                  <Carousel.Slide key={nanoid()}>
                    <Card
                      pos="relative"
                      radius={0}
                      p={0}
                      sx={(theme) => ({
                        [theme.fn.smallerThan("xl")]: {
                          maxWidth: 800,
                        },
                        [theme.fn.smallerThan(2000)]: {
                          maxWidth: 1800,
                        },
                      })}
                      w="100%"
                      maw={768}
                      h="100%"
                    >
                      <EdtingImage
                        sizes="(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      (max-width: 2000px) 25vw,
                      33vw"
                        src={mapped.cover}
                        fill
                      />
                      <Box
                        h="100%"
                        w="100%"
                        pos="absolute"
                        bg={theme.fn.rgba("gray", 0.6)}
                        sx={{
                          zIndex: 1000,
                        }}
                      >
                        <Group
                          position="apart"
                          pos="absolute"
                          w="100%"
                          px="xl"
                          bottom={30}
                          noWrap
                        >
                          <Stack maw={550} p="xl">
                            <Group>
                              <Badge
                                w="fit-content"
                                p="sm"
                                sx={{
                                  fontWeight: 600,
                                  fontSize: 10,
                                }}
                                color={"gray.4"}
                                variant="outline"
                              >
                                {mapped.category}
                              </Badge>

                              <Text size="xs" color="gray.1">
                                {mapped.readTime}
                              </Text>
                            </Group>

                            <Title
                              transform="capitalize"
                              order={2}
                              color="gray.3"
                            >
                              {mapped.title}
                            </Title>
                            <Text color="gray.3" lineClamp={2}>
                              {mapped.description}
                            </Text>
                          </Stack>
                          <MediaQuery
                            smallerThan={600}
                            styles={{
                              display: "none",
                            }}
                          >
                            <Group right={30} pos="static" spacing="xl" noWrap>
                              <ActionIcon
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    color: "white",
                                  },
                                }}
                                size="xl"
                                variant="outline"
                                color="gray"
                              >
                                <CaretLeft weight="bold" />
                              </ActionIcon>

                              <ActionIcon
                                sx={{
                                  color: "white",
                                  "&:hover": {
                                    color: "white",
                                  },
                                }}
                                size="xl"
                                variant="outline"
                                color="gray"
                              >
                                <CaretRight weight="bold" />
                              </ActionIcon>
                            </Group>
                          </MediaQuery>
                        </Group>
                      </Box>
                    </Card>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Suspense>

            <MediaQuery
              smallerThan={1300}
              styles={{
                display: "none",
              }}
            >
              <Card
                radius="xs"
                h="100%"
                w="100%"
                maw={500}
                bg={colorScheme == "dark" ? "dark.6" : "gray.0"}
                pt={100}
              >
                <Text>{sampleArticles[1].title}</Text>
              </Card>
            </MediaQuery>
          </Group>
        </Box>
      </Container>

      <Container size="100%" px={0} pb={10}>
        <Center mt={0} pt={60} w="100%">
          <Stack px="xl" spacing={8}>
            <Title
              sx={(theme) => ({
                [theme.fn.smallerThan(400)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1.5)`,
                },
              })}
              weight={900}
              transform="uppercase"
              ml="xl"
            >
              Trending Stories
            </Title>
            <Divider
              ml="xl"
              size="lg"
              color={colorScheme == "dark" ? "pink" : "indigo"}
              sx={{
                transform: "skew(0deg,3deg)",
              }}
            />
          </Stack>
        </Center>
        <Box pos="relative" py={"xl"}>
          <Group
            px={"xl"}
            bg={colorScheme == "dark" ? "dark.5" : "gray.0"}
            py={10}
            mx="auto"
            left={0}
            w="100%"
            maw={380}
            right={0}
            pos="absolute"
            bottom={20}
            position="apart"
            sx={{
              borderRadius: theme.radius.xl,
              zIndex: 1,
            }}
          >
            <ActionIcon
              onClick={() => embla2?.scrollPrev()}
              sx={{
                "&:active": {
                  backgroundColor: theme.colors.indigo[6],
                },
                "&:hover": {
                  backgroundColor: theme.colors.indigo[6],
                },
              }}
              color="dark"
              mr={0}
              variant="filled"
            >
              <CaretLeft />
            </ActionIcon>
            <ActionIcon
              onClick={() => embla2?.scrollNext()}
              sx={{
                "&:active": {
                  backgroundColor: theme.colors.indigo[6],
                },
                "&:hover": {
                  backgroundColor: theme.colors.indigo[6],
                },
              }}
              variant="filled"
              color="dark"
            >
              <CaretRight />
            </ActionIcon>
          </Group>
          <Suspense>
            <Carousel
              withIndicators={true}
              getEmblaApi={setEmbla2}
              withControls={false}
              //@ts-ignore
              // plugins={[autoplay.current, wheel.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              mt="xl"
              height={760}
              slideSize="27%"
              align="center"
              slideGap="xs"
              loop={true}
              breakpoints={[
                {
                  slideSize: "20%",
                  maxWidth: 400,
                  slideGap: "md",
                },
                {
                  slideSize: "20%",
                  maxWidth: "xl",
                  slideGap: "xl",
                },
              ]}
              styles={{
                indicator: {
                  backgroundColor: theme.colors.dark[1],
                  width: 10,
                  height: 10,
                  zIndex: 2,
                  ["&[data-active]"]: {
                    backgroundColor: theme.colors.indigo[6],
                  },
                },
              }}
            >
              {sampleArticles.map((mapped, index) => (
                <Carousel.Slide>
                  <Card
                    bg="transparent"
                    w={450}
                    radius="xs"
                    withBorder
                    // maw={350}
                    style={{
                      ...(tweenValues.length && {
                        opacity: tweenValues[index],
                      }),
                      borderTop: 0,
                      borderBottom: 0,
                      borderRight: 0,
                    }}
                    sx={(theme) => ({
                      [theme.fn.smallerThan(400)]: {
                        maxWidth: 330,
                      },
                    })}
                  >
                    <Stack align="center">
                      <EdtingImage
                        widthWise
                        src={mapped.cover}
                        width={400}
                        height={400}
                        style={{
                          borderRadius: "20px 20px 20px 20px",
                        }}
                      />
                      <Stack w="100%" align="start" p="xl">
                        <Group>
                          <Badge
                            p="sm"
                            sx={{
                              fontWeight: 600,
                              fontSize: 10,
                            }}
                            color={colorScheme == "dark" ? "gray" : "dark"}
                            variant="outline"
                          >
                            {mapped.category}
                          </Badge>

                          <Text size="xs" color="dimmed">
                            {mapped.readTime}
                          </Text>
                        </Group>
                        <Title order={3} lineClamp={3}>
                          {mapped.title}
                        </Title>
                        <Text lineClamp={3}>{mapped.description}</Text>
                      </Stack>
                    </Stack>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Suspense>
        </Box>
      </Container>
      <Container px={0} py="xl" size="100%">
        <Group
          sx={(theme) => ({
            [theme.fn.smallerThan(400)]: {
              justifyContent: "center",
            },
          })}
          mt="xl"
          pr="xl"
          position="apart"
        >
          <Stack mt={20} ml="xl" spacing={0}>
            <Title
              sx={(theme) => ({
                [theme.fn.smallerThan(400)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1)`,
                },
              })}
              order={3}
              weight={900}
              transform="uppercase"
            >
              Trending Web Stories
            </Title>
            <Divider
              size="md"
              color={colorScheme == "dark" ? "pink" : "indigo"}
              maw={276}
            />
          </Stack>

          <Group spacing="xs" mt={15}>
            <ActionIcon
              sx={{
                "&:hover": {
                  backgroundColor:
                    colorScheme == "dark"
                      ? theme.colors.pink[6]
                      : theme.colors.indigo[6],
                  color: theme.white,
                },

                "&:active": {
                  backgroundColor:
                    colorScheme == "dark"
                      ? theme.colors.pink[6]
                      : theme.colors.indigo[6],
                  color: theme.white,
                },
              }}
              onClick={() => embla?.scrollPrev()}
              color="dark"
              variant="default"
            >
              <CaretLeft />
            </ActionIcon>
            <ActionIcon
              sx={{
                "&:hover": {
                  backgroundColor:
                    colorScheme == "dark"
                      ? theme.colors.pink[6]
                      : theme.colors.indigo[6],
                  color: theme.white,
                },

                "&:active": {
                  backgroundColor:
                    colorScheme == "dark"
                      ? theme.colors.pink[6]
                      : theme.colors.indigo[6],
                  color: theme.white,
                },
              }}
              onClick={() => embla?.scrollNext()}
              color="dark"
              variant="default"
            >
              <CaretRight />
            </ActionIcon>
          </Group>
        </Group>

        <Carousel
          mb={20}
          //@ts-ignore
          plugins={[autoplay.current, wheel.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          mt="xl"
          getEmblaApi={setEmbla}
          slideSize="21%"
          withControls={false}
          align="center"
          slideGap="xs"
          loop={true}
          breakpoints={[
            {
              slideSize: "80%",
              maxWidth: 400,
              slideGap: "md",
            },
            {
              slideSize: "70%",
              maxWidth: "xs",
              slideGap: "xs",
            },
            {
              slideSize: "40%",
              maxWidth: "sm",
              slideGap: "xs",
            },
            {
              slideSize: "25%",
              maxWidth: "lg",
              slideGap: "xs",
            },
            {
              slideSize: "20%",
              maxWidth: "xl",
              slideGap: "xs",
            },
          ]}
        >
          <Carousel.Slide>
            <Card
              withBorder
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      width={40}
                      avatar
                      height={40}
                      src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    Report from a Relationship
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Lifestyle
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                src="https://images.unsplash.com/photo-1510932742089-bef92acabb5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              />
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      avatar
                      width={40}
                      height={40}
                      src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    What it takes to make 165 years of journalism available
                    online
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Politics & Journalism
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                fill
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              />
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      avatar
                      width={40}
                      height={40}
                      src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=798&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    My kids and I just played D&D with ChatGPT4 as the DM
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Tech
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src="https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
              />
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      avatar
                      width={40}
                      height={40}
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    The TikTok Teens Go To Washington
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Tech
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src="https://images.unsplash.com/photo-1597075095400-fb3f0de70140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
              />
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      avatar
                      width={40}
                      height={40}
                      src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    AI and the American Smile
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Tech
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
              />
            </Card>
          </Carousel.Slide>
          <Carousel.Slide>
            <Card
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      avatar
                      width={40}
                      height={40}
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    I’m an ER doctor: Here’s what I found when I asked ChatGPT
                    to diagnose my patients
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    Health & Medicine
                  </Text>
                </Stack>
              </Box>

              <EdtingImage
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              />
            </Card>
          </Carousel.Slide>
        </Carousel>
      </Container>

      <Container pos="relative" size="100%" px={0}>
        <Center mt={30} py="xl" w="100%">
          <Stack px="xl" spacing={8}>
            <Title
              sx={(theme) => ({
                [theme.fn.smallerThan(400)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1)`,
                },
                [theme.fn.smallerThan(500)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1.4)`,
                },
              })}
              weight={900}
              transform="uppercase"
              ml="xl"
            >
              And So Much More
            </Title>
            <Divider
              ml="xl"
              maw={380}
              size="lg"
              color={colorScheme == "dark" ? "pink" : "indigo"}
              sx={{
                transform: "skew(0deg,-3deg)",
              }}
            />
          </Stack>
        </Center>
        <Slide duration={1700} up>
          <Box
            h={590}
            py={"xl"}
            //@ts-ignore
            sx={
              colorScheme == "dark"
                ? {
                    ...fadeToDark("85%"),
                  }
                : {
                    ...fadeToWhite(),
                  }
            }
          >
            <Carousel
              //@ts-ignore
              plugins={[autoplay.current, wheel.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              mt="xl"
              withControls={false}
              slideSize="25%"
              align="center"
              slideGap="xs"
              loop={true}
              breakpoints={[
                {
                  slideSize: "20%",
                  maxWidth: 400,
                  slideGap: "md",
                },
                {
                  slideSize: "20%",
                  maxWidth: "xl",
                  slideGap: "xl",
                },
              ]}
            >
              <Carousel.Slide>
                <Card
                  radius="xl"
                  maw={350}
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      src="https://images.unsplash.com/photo-1677896263326-18a6681eb9dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      width={350}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={6} lineClamp={2}>
                      What Makes Reviewpad the Best Pull Request Management
                      System
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>
              <Carousel.Slide>
                <Card
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                  radius="xl"
                  maw={350}
                >
                  <Card.Section>
                    <EdtingImage
                      src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2231&q=80"
                      width={350}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={6} lineClamp={2}>
                      What Makes Reviewpad the Best Pull Request Management
                      System
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>
              <Carousel.Slide>
                <Card
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                  radius="xl"
                  maw={350}
                >
                  <Card.Section>
                    <EdtingImage
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width={350}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={6} lineClamp={2}>
                      What Makes Reviewpad the Best Pull Request Management
                      System
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <Card
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                  radius="xl"
                  maw={350}
                >
                  <Card.Section>
                    <EdtingImage
                      src="https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width={350}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={6} lineClamp={2}>
                      What Makes Reviewpad the Best Pull Request Management
                      System
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <Card
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                  radius="xl"
                  maw={350}
                >
                  <Card.Section>
                    <EdtingImage
                      src="https://images.unsplash.com/photo-1645005512968-0c1fe99f0093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width={350}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={6} lineClamp={2}>
                      What Makes Reviewpad the Best Pull Request Management
                      System
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>
            </Carousel>
          </Box>
        </Slide>
      </Container>
    </AppWrapper>
  );
};

export default IndexPage;
