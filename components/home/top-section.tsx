import { Carousel, Embla } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Group,
  List,
  MediaQuery,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { CaretLeft, CaretRight, Dot } from "@phosphor-icons/react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Suspense, useRef, useState } from "react";
import { sampleArticles } from "../../data/samples";
import { serif } from "../../pages/_app";
import EdtingImage from "../global/image";

const TopHomepageSection = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container size="100%" px={0}>
      <Box h={814}>
        <Group spacing={0} noWrap mt={-25} h="100%" w="100%">
          <Suspense>
            <Carousel
              // withIndicators={true}
              getEmblaApi={setEmbla}
              withControls={false}
              //@ts-ignore
              plugins={[autoplay.current, wheel.current]}
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
                  slideSize: "100%",
                  maxWidth: 400,
                  slideGap: 0,
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
              {sampleArticles.map((mapped: any, index: number) => (
                <Carousel.Slide key={"firstHomepageSection" + index}>
                  <Card
                    pos="relative"
                    radius={0}
                    p={0}
                    sx={(theme) => ({
                      [theme.fn.smallerThan("xl")]: {
                        maxWidth: 800,
                      },
                      [theme.fn.smallerThan(2400)]: {
                        maxWidth: "100%",
                      },
                    })}
                    w="100%"
                    maw={768}
                    h="100%"
                  >
                    <EdtingImage src={mapped.cover} fill />
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
                        sx={(theme) => ({
                          [theme.fn.smallerThan(600)]: {
                            paddingLeft: 0,
                            paddingRight: 0,
                          },
                        })}
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
                            sx={(theme) => ({
                              [theme.fn.smallerThan(400)]: {
                                fontSize: 22,
                              },
                            })}
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
                              onClick={() => embla?.scrollPrev()}
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
                              onClick={() => embla?.scrollNext()}
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
              pt={90}
            >
              <Card px={60} bg="transparent" mx="auto">
                <Stack w="100%">
                  <Title
                    sx={(theme) => ({
                      fontFamily: serif.style.fontFamily,
                    })}
                    weight={400}
                    order={5}
                  >
                    Just Posted
                  </Title>
                  <Avatar
                    mt="xs"
                    sx={{
                      minHeight: 270,
                      height: 270,
                      minWidth: 350,
                      width: 350,
                    }}
                    radius="md"
                    size={200}
                  >
                    <EdtingImage
                      width={350}
                      height={270}
                      widthWise
                      src={sampleArticles[1].cover}
                      style={{
                        borderRadius: "20px",
                      }}
                    />
                  </Avatar>
                  <Group mt="md" ml="sm" spacing={0}>
                    <Badge
                      px="md"
                      mr="xs"
                      h={28}
                      py={5}
                      size="sm"
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      variant="outline"
                      display="block"
                      w="max-content"
                      styles={{
                        inner: {
                          fontWeight: 500,
                        },
                      }}
                    >
                      {sampleArticles[2].category}
                    </Badge>

                    <ThemeIcon
                      mr="xs"
                      p={0}
                      size="md"
                      color={colorScheme == "dark" ? "gray.4" : "dark"}
                      variant="outline"
                      sx={{
                        border: 0,
                        background: "transparent",
                      }}
                    >
                      <Dot size={30} />
                    </ThemeIcon>

                    <Text
                      size="xs"
                      color={colorScheme == "dark" ? "gray.4" : "dark"}
                    >
                      {sampleArticles[1].readTime}
                    </Text>
                  </Group>

                  <Title
                    transform="capitalize"
                    ml="xs"
                    mb="sm"
                    mt="sm"
                    lineClamp={2}
                    order={4}
                  >
                    {sampleArticles[1].title}
                  </Title>

                  <Divider ml="xs" />

                  <List mb="md" spacing="md">
                    <List.Item>
                      <Title weight={500} order={6}>
                        {sampleArticles[1].title}
                      </Title>
                    </List.Item>
                    <List.Item>
                      <Title weight={500} order={6}>
                        {sampleArticles[1].title}
                      </Title>
                    </List.Item>
                  </List>

                  <Anchor
                    color={colorScheme == "dark" ? "gray" : "dark"}
                    ml="xs"
                    href="/"
                    component={Link}
                    size="xs"
                  >
                    See all latest -&gt;
                  </Anchor>
                </Stack>
              </Card>
            </Card>
          </MediaQuery>
        </Group>
      </Box>
    </Container>
  );
};

export default TopHomepageSection;
