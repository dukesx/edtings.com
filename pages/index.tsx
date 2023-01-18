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

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      navbarLinks={[
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
      ]}
      path=""
      padding={false}
    >
      <Box
        id="technology"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "indigo",
            color2: "pink",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Technology
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Technology">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/technology"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>

      <Box
        id="reviews"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "red",
            color2: "pink",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Reviews
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Reviews">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/reviews"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>
      <Box
        id="programming"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "blue",
            color2: "cyan",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Programming
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Programming">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/programming"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>
      <Box
        id="lifestyle"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "violet",
            color2: "indigo",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Lifestyle
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Lifestyle">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/lifestyle"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>
      <Box
        id="general-health"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "blue",
            color2: "indigo",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                General Health
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse General Health">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/general-health"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>

      <Box
        id="physiotherapy"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "orange",
            color2: "pink",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Physiotherapy
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Physiotherapy">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/physiotherapy"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>
      <Box
        id="medicine"
        sx={(theme) => ({
          height: 570,
          ...generateGradient({
            color1: "blue",
            color2: "blue",
          }),

          [theme.fn.smallerThan(1400)]: {
            height: 500,
          },
        })}
        p="sm"
      >
        <Center mt="xs" w="100%" h="100%">
          <Stack
            w="100%"
            m="xs"
            p="xs"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                padding: 5,
                margin: 5,
              },
            })}
          >
            <Group
              sx={{
                alignItems: "center",
                alignContent: "center",
              }}
              position="apart"
            >
              <Title order={3} transform="uppercase" weight={800} size={20}>
                Medicine
              </Title>
              <Box pos="relative">
                <Group>
                  {/* <Tooltip label="Subscribe for updates">
                    <Group spacing={8}>
                      <ActionIcon variant="filled" color="dark" radius="xl">
                        <BellSimple weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs">Subscribe</Text>
                        <Text color="dimmed" size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(100000) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}

                  <Tooltip label="Browse Medicine">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/tag/medicine"
                    >
                      <Group spacing={8}>
                        <ThemeIcon
                          variant="filled"
                          color="dark"
                          size="lg"
                          radius="xl"
                        >
                          <Plus size={18} weight="duotone" />
                        </ThemeIcon>
                        <Stack spacing={0}>
                          <Text weight={600} size={13}>
                            See More
                          </Text>
                          <Text color="dimmed" size="xs">
                            {Intl.NumberFormat("en-US", {
                              compactDisplay: "short",
                              notation: "compact",
                            }).format(173768760) + " "}
                            subscribers
                          </Text>
                        </Stack>
                      </Group>
                    </Anchor>
                  </Tooltip>
                  {/* <Tooltip label="Unsubscribe">
                    <Group spacing={8}>
                      <ActionIcon variant="outline" radius="xl">
                        <BellSimpleRinging weight="duotone" />
                      </ActionIcon>
                      <Stack spacing={0}>
                        <Text size="xs" weight={400}>
                          Subscribed
                        </Text>
                        <Text color="dimmed" weight={400} size="xs">
                          {Intl.NumberFormat("en-US", {
                            compactDisplay: "short",
                            notation: "compact",
                          }).format(173768760) + " "}
                          subscribers
                        </Text>
                      </Stack>
                    </Group>
                  </Tooltip> */}
                </Group>

                <HandPointing
                  size={18}
                  style={{
                    position: "absolute",
                    left: 8,
                    top: 32,
                  }}
                />
              </Box>
            </Group>

            <Carousel
              mt="md"
              w="100%"
              height={440}
              withControls={false}
              loop
              align="start"
              withIndicators
              slideSize="33.3333%"
              slideGap="md"
              breakpoints={[
                {
                  maxWidth: 500,
                  slideSize: "100%",
                },

                {
                  maxWidth: 700,
                  slideSize: "50%",
                },
                {
                  maxWidth: 1000,
                  slideSize: "33.3333%",
                  slideGap: "xl",
                },

                {
                  maxWidth: 1200,
                  slideSize: "50%",
                },
              ]}
              sx={(theme) => ({
                position: "relative",
                [theme.fn.smallerThan(1200)]: {
                  height: 400,
                },
              })}
            >
              <Carousel.Slide>
                <Card
                  w={"100%"}
                  maw={430}
                  radius="md"
                  h={400}
                  sx={(theme) => ({
                    position: "relative",
                    [theme.fn.smallerThan(1200)]: {
                      height: 330,
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      priority
                      style={{
                        filter: "brightness(50%)",
                      }}
                      fill
                      src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    />
                  </Card.Section>
                  <Center
                    sx={{
                      position: "absolute",
                      height: "100%",
                    }}
                  >
                    <Stack align="center">
                      <Text size="md" weight={600} color="white">
                        {format(Date.now(), "Do MMMM yyyy")}
                      </Text>
                      <Box
                        h={250}
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1200)]: {
                            height: 190,
                          },
                        })}
                      >
                        <Text
                          lineClamp={4}
                          color="white"
                          m="xl"
                          weight={800}
                          size={22}
                        >
                          51 AI tools you should be using for life, programming,
                          content creation and
                        </Text>
                      </Box>

                      <Avatar.Group
                        sx={(theme) => ({
                          [theme.fn.smallerThan(1000)]: {
                            marginTop: -20,
                          },
                        })}
                        mt={-40}
                      >
                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                          />
                        </Avatar>

                        <Avatar size={40} radius="xl">
                          <EdtingImage
                            priority
                            height={45}
                            width={45}
                            avatar
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          />
                        </Avatar>
                      </Avatar.Group>
                    </Stack>
                  </Center>
                </Card>
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>

              <Carousel.Slide>
                <ArticleCardWithBGMedium
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
              </Carousel.Slide>
            </Carousel>
          </Stack>
        </Center>
      </Box>
    </AppWrapper>
  );
};

export default IndexPage;
