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

const IndexPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const { title }: any = router.query;
  return (
    <AppWrapper
      path={title}
      navbarLinks={[
        {
          title: "home",
          href: "/",
          icon: GlobeSimple,
          color: "gray",
          path: "home",
        },
        {
          title: "technology",
          href: "/tag/technology",
          icon: Cloud,
          color: "gray",
          path: "technology",
        },
        {
          title: "reviews",
          href: "/tag/reviews",
          icon: StarHalf,
          color: "gray",
          path: "reviews",
        },
        {
          title: "programming",
          href: "/tag/programming",
          icon: Terminal,
          color: "gray",
          path: "programming",
        },
        {
          title: "lifestyle",
          href: "/tag/lifestyle",
          icon: MaskHappy,
          color: "gray",
          path: "lifestyle",
        },
        {
          title: "general health",
          href: "/tag/general-health",
          icon: Heartbeat,
          color: "gray",
          path: "general-health",
        },
        {
          title: "physiotherapy",
          href: "/tag/physiotherapy",
          icon: PersonSimpleRun,
          color: "gray",
          path: "physiotherapy",
        },
        {
          title: "medicine",
          href: "/tag/medicine",
          icon: Pill,
          color: "gray",
          path: "medicine",
        },
      ]}
      padding={false}
    >
      <Box
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
                {title.includes("-")
                  ? title.split("-")[0] + " " + title.split("-")[1]
                  : title}
              </Title>
              <Box pos="relative">
                <Group>
                  <Tooltip label="Subscribe for updates">
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
                  </Tooltip>

                  <Tooltip label="Browse Technology">
                    <Anchor
                      color={colorScheme == "dark" ? "dark.0" : "dark"}
                      component={Link}
                      href="/"
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
                  <Tooltip label="Unsubscribe">
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
                  </Tooltip>
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
