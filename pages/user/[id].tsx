import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import {
  ChartBar,
  ChartLine,
  Check,
  HandWaving,
  Newspaper,
  Rss,
  User,
} from "phosphor-react";
import ArticleCardWithBGSmall from "../../components/articles/cards/with-bg-small";
import EdtingImage from "../../components/global/image";
import AppWrapper from "../../components/global/wrapper";
import { generateGradient } from "../../utils/basic";
import FacebookLogo from "../../public/facebook.svg";
import InstagramLogo from "../../public/instagram.svg";
import MediumLogo from "../../public/medium.svg";
import Medium2Logo from "../../public/medium-2.svg";

import TwitterLogo from "../../public/twitter.svg";
import YoutubeLogo from "../../public/youtube.svg";
import Image from "next/image";

const ABC = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      path="profile"
      padding={false}
      headerProps={{
        headerPosition: "relative",
      }}
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "Muhammad Afzaal Afridi",
        navbarLinks: [
          {
            color: "gray",
            href: "#welcome",
            active: true,
            icon: HandWaving,
            path: "welcome",
            title: "Welcome",
          },

          {
            color: "gray",
            href: "#published",
            icon: Newspaper,
            path: "published",
            title: "Published works",
          },
        ],
      }}
    >
      <Container
        sx={{
          ...generateGradient({
            color1: "blue",
            color2: "teal",
          }),
        }}
        p={0}
        size="xl"
      >
        <Paper
          bg={"transparent"}
          pt={30}
          id="welcome"
          sx={(theme) => ({
            backgroundColor:
              colorScheme == "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
        >
          <Stack
            sx={(theme) => ({
              alignItems: "center",
              alignContent: "center",
              height: "100%",
              justifyItems: "center",
              justifyContent: "center",
            })}
            align="center"
          >
            <Group
              sx={{
                position: "relative",
              }}
              position="center"
            >
              <Avatar
                sx={(theme) => ({
                  borderRadius: "50%",
                })}
                radius="xl"
                size={300}
              >
                <EdtingImage
                  avatar
                  height={300}
                  width={300}
                  src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                />
              </Avatar>

              <Group
                spacing="xs"
                sx={{
                  position: "absolute",
                  bottom: -62,
                }}
              >
                <Tooltip label="@dukesx on Twitter">
                  <ActionIcon
                    color={colorScheme == "dark" ? "gray.8" : "gray.1"}
                    variant="transparent"
                    radius="xl"
                    size="xl"
                  >
                    <Image
                      priority
                      alt=""
                      width={35}
                      height={35}
                      src={TwitterLogo}
                    />
                  </ActionIcon>
                </Tooltip>

                <Tooltip label="@dukesx on Medium">
                  <ActionIcon
                    color={"gray.1"}
                    variant={colorScheme == "dark" ? "filled" : "transparent"}
                    radius="xl"
                    size={35}
                  >
                    <Image
                      priority
                      alt=""
                      width={colorScheme == "dark" ? 25 : 32}
                      height={colorScheme == "dark" ? 25 : 32}
                      src={colorScheme == "dark" ? Medium2Logo : MediumLogo}
                    />
                  </ActionIcon>
                </Tooltip>

                <Tooltip label="@dukesx on Youtube">
                  <ActionIcon
                    color={colorScheme == "dark" ? "gray.8" : "gray.1"}
                    variant="transparent"
                    radius="xl"
                    size="xl"
                  >
                    <Image
                      priority
                      style={{
                        borderRadius: "100%",
                      }}
                      alt=""
                      width={35}
                      height={35}
                      src={YoutubeLogo}
                    />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
            <Stack mt={45} p="xl" spacing={0}>
              <Title
                sx={(theme) => ({
                  [theme.fn.smallerThan(600)]: {
                    marginLeft: 0,
                  },
                })}
                order={4}
                transform="uppercase"
                weight={800}
                align="center"
              >
                Muhammad Afzaal Afridi
              </Title>
              <Text
                my={8}
                align="center"
                color={colorScheme == "dark" ? "dimmed" : "gray.7"}
                size="sm"
                weight={500}
              >
                Administrator
              </Text>
              {/* <Button mt={6} color="dark" leftIcon={<Rss size={19} />}>
                Follow
              </Button> */}
              <Button
                variant="outline"
                mt={6}
                color={colorScheme == "dark" ? "gray.3" : "dark"}
                leftIcon={<Check size={19} />}
              >
                Following
              </Button>
            </Stack>
          </Stack>
        </Paper>
        <Paper
          bg="transparent"
          mt={20}
          px="xl"
          pb={50}
          sx={(theme) => ({
            // borderBottom: `1px solid ${theme.fn.themeColor(
            //   theme.colors.dark[6]
            // )}`,

            backgroundColor:
              colorScheme == "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          })}
        >
          <Group
            noWrap
            spacing={50}
            position="center"
            px="xl"
            sx={(theme) => ({
              height: "100%",
              [theme.fn.smallerThan(400)]: {
                gap: 30,
              },
            })}
          >
            <Stack spacing={5} align="center">
              <Text transform="uppercase" size="md" weight={800}>
                Views
              </Text>
              <Text size="md">
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(1000000)}{" "}
              </Text>
            </Stack>

            <Stack spacing={5} align="center">
              <Text transform="uppercase" size="md" weight={800}>
                Articles
              </Text>
              <Text size="md">5</Text>
            </Stack>

            <Stack spacing={5} align="center">
              <Text transform="uppercase" size="md" weight={800}>
                Followers
              </Text>
              <Text size="md">
                {Intl.NumberFormat("en-US", {
                  notation: "compact",
                  compactDisplay: "short",
                }).format(100000)}{" "}
              </Text>
            </Stack>
          </Group>
        </Paper>

        <Paper
          sx={(theme) => ({
            [theme.fn.smallerThan(1400)]: {
              padding: "24px 15px",
            },
          })}
          p="xl"
          id="published"
        >
          <Title mb="md" pt={40} order={3}>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  marginLeft: 0,
                },
              })}
              component="span"
              weight={800}
              mx="xl"
            >
              Published
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
            sx={(theme) => ({
              [theme.fn.smallerThan(1400)]: {
                padding: "24px 0px",
              },
            })}
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
          </SimpleGrid>
        </Paper>
      </Container>
    </AppWrapper>
  );
};

export default ABC;
