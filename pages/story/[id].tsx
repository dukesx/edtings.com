import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Center,
  Divider,
  Group,
  HoverCard,
  List,
  Paper,
  Rating,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { format } from "date-fns";
import { GetStaticPathsContext } from "next";
import Link from "next/link";
import {
  ArrowRight,
  At,
  BookOpen,
  Check,
  Hash,
  Hexagon,
  Image,
  Seal,
  StarHalf,
  TextH,
  WifiNone,
  X,
} from "@phosphor-icons/react";
import { getPlaiceholder } from "plaiceholder";
import EdtingImage from "../../components/global/image";
import AppWrapper from "../../components/global/wrapper";
import { getBase64ImageUrl } from "../../data/blur";
import { serif, condensed } from "../_app";

const verticalImagePath =
  "https://unsplash-cache.edtings.com/photo-1587749090881-1ea18126ab3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const squareImagePath =
  "https://unsplash-cache.edtings.com/photo-1587749091230-fb8a034d695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

const landscapeImagePath =
  "https://unsplash-cache.edtings.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

//Feminine

const verticalImage =
  "https://unsplash-cache.edtings.com/photo-1581122584612-713f89daa8eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

const landscapeImage =
  "https://unsplash-cache.edtings.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";

//
//
//
//

const SingleArticle = ({ placeholder }: any) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      headerProps={{
        headerPosition: "sticky",
      }}
      logo={
        <Group noWrap spacing={4}>
          <Anchor
            pr={4}
            style={{
              textDecoration: "none",
            }}
            href="/"
          >
            <Text
              color={colorScheme == "dark" ? "gray.5" : "dark"}
              size="xl"
              sx={(theme) => ({
                fontFamily: serif.style.fontFamily,
                fontSize: 23,
                [theme.fn.smallerThan(620)]: {
                  fontSize: 18,
                },
              })}
            >
              Edtings
            </Text>
          </Anchor>

          <Divider h={40} mt={10} orientation="vertical" />
          <Anchor
            maw={{
              xs: 250,
              sm: 300,
              base: 200,
            }}
            lineClamp={1}
            mt={5}
            py={6}
            px={6}
            sx={(theme) => ({
              [":hover"]: {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
              },
            })}
            style={{
              textDecoration: "none",
            }}
            href="/ambrose"
          >
            <Stack spacing={0}>
              <Group noWrap spacing={0}>
                <Text
                  color={colorScheme == "dark" ? "gray.5" : "dark"}
                  transform="uppercase"
                  weight={800}
                  size="sm"
                  sx={(theme) => ({
                    // fontFamily: serif.style.fontFamily,
                    [theme.fn.smallerThan(800)]: {
                      fontSize: 11,
                    },

                    [theme.fn.smallerThan(400)]: {
                      fontSize: 10,
                    },
                  })}
                  lineClamp={1}
                >
                  Muhammad Afzaal Afridi
                </Text>
                <HoverCard>
                  <HoverCard.Target>
                    <ThemeIcon
                      ml={6}
                      size="sm"
                      pos="relative"
                      sx={(theme) => ({
                        border: 0,
                        padding: 0,
                        [theme.fn.smallerThan(800)]: {
                          height: 16,
                          width: 16,
                          minHeight: 16,
                          minWidth: 16,
                        },
                      })}
                      color="blue"
                      variant="outline"
                    >
                      <Seal weight="fill" size={27} />
                      <ThemeIcon
                        size="sm"
                        pos="absolute"
                        sx={(theme) => ({
                          border: 0,
                          padding: 0,
                          background: "transparent",
                          [theme.fn.smallerThan(800)]: {
                            height: 8,
                            width: 8,
                            minHeight: 8,
                            minWidth: 8,
                          },
                        })}
                        variant="filled"
                      >
                        <Check weight="bold" size={10} />
                      </ThemeIcon>
                    </ThemeIcon>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Stack spacing={0} align="center">
                      <ThemeIcon
                        ml={3}
                        size="lg"
                        pos="relative"
                        sx={(theme) => ({
                          border: 0,
                          padding: 0,
                        })}
                        color="blue"
                        variant="outline"
                        mb={5}
                      >
                        <Seal weight="fill" size={60} />
                        <ThemeIcon
                          size="sm"
                          pos="absolute"
                          sx={{
                            border: 0,
                            padding: 0,
                            background: "transparent",
                          }}
                          variant="filled"
                        >
                          <Check weight="bold" size={14} />
                        </ThemeIcon>
                      </ThemeIcon>
                      <Text
                        color={colorScheme == "dark" ? "gray.2" : "dark"}
                        mt={2}
                        mb={5}
                        weight={600}
                        size="xs"
                      >
                        Verified Creator
                      </Text>
                      <Anchor color="gray" size={10}>
                        Click to Learn more
                      </Anchor>
                    </Stack>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
              <Text
                lineClamp={1}
                mt={-3}
                color={colorScheme == "dark" ? "gray.5" : "dark"}
                size={11}
              >
                @sean-ambrose-sweet
              </Text>
            </Stack>
          </Anchor>
        </Group>
      }
      padding={false}
      navbarProps={{
        navbarPosition: "sticky",
        navbarLinks: [
          {
            title: "Cover",
            href: "#cover",
            path: "cover",
            color: "gray",
          },
          {
            title: "Score",
            href: "#score",
            path: "score",
            color: "gray",
          },
          {
            title: "Intro",
            href: "#intro",
            path: "intro",
            color: "gray",
            // icon: ArrowRight,
          },
          {
            title: "To do",
            href: "#khan",
            path: "khan",
            color: "gray",
            // icon: ArrowRight,
          },
        ],
        navbarTitle: "",
      }}
      path=""
    >
      <Box
        id="cover"
        pb="0px"
        sx={(theme) => ({
          backgroundColor:
            colorScheme == "dark"
              ? theme.colors.dark[8]
              : theme.fn.rgba("gray", 0),

          maxHeight: 1200,
          [`@media (min-width: 300px) and (max-width: 1430px)`]: {
            paddingBottom: `calc(${theme.spacing.xl} * 2)`,
          },
        })}
        mx="auto"
        w="100%"
      >
        <Group
          mx="auto"
          sx={(theme) => ({
            [`@media (min-width: 300px) and (max-width: 1430px)`]: {
              maxWidth: 600,
            },
          })}
          spacing={20}
          w="100%"
        >
          <Box
            sx={(theme) => ({
              maxWidth: "51%",
              [`@media (min-width: 300px) and (max-width: 1430px)`]: {
                maxWidth: "100%",
                marginLeft: "auto",
                marginRight: "auto",
                borderRadius: "0px 0px 25px 25px",
                overflow: "hidden",
              },

              [theme.fn.smallerThan("xs")]: {
                borderRadius: 0,
              },
            })}
          >
            <EdtingImage
              style={{
                objectFit: "cover",
                borderRadius: 0,
                maxWidth: "100%",
                maxHeight: 610,
              }}
              src={landscapeImagePath}
              width={710}
              height={710}
              placeholder={placeholder}
            />
          </Box>

          <Center
            mx="auto"
            maw={"47%"}
            sx={(theme) => ({
              paddingLeft: 10,
              paddingRight: 10,
              [`@media (min-width: 300px) and (max-width: 1430px)`]: {
                maxWidth: 600,
              },
              [theme.fn.smallerThan("xs")]: {
                padding: 7,
              },
            })}
            h="100%"
          >
            <Stack
              sx={(theme) => ({
                [`@media (min-width: 300px) and (max-width: 1430px)`]: {
                  maxWidth: 600,
                },
              })}
              maw={440}
            >
              <Text
                transform="capitalize"
                align="center"
                size={35}
                weight={800}
                lineClamp={3}
                sx={(theme) => ({
                  [theme.fn.smallerThan("xs")]: {
                    fontSize: `calc(${theme.fontSizes.xl} * 1.1)`,
                  },
                })}
              >
                Galaxy S10 Review: The Next Gen Phone is Here
              </Text>

              <Text
                px={10}
                size="sm"
                transform="capitalize"
                align="center"
                color="dimmed"
                weight={400}
                lineClamp={2}
                sx={(theme) => ({
                  [theme.fn.smallerThan("xs")]: {
                    fontSize: theme.fontSizes.sm,
                  },
                })}
              >
                The Galaxy S10 Not Only Surprises But Also Impresses With its
                Unique Take on Aesthetics
              </Text>

              <Group
                position="center"
                spacing={0}
                mt="xl"
                ml="sm"
                sx={(theme) => ({
                  [theme.fn.smallerThan("md")]: {
                    marginLeft: 0,
                  },
                })}
              >
                <Group spacing={8}>
                  <Avatar.Group spacing={12}>
                    <Tooltip label="Muhammad Afzaal Afridi">
                      <Avatar size="md" radius="xl">
                        <EdtingImage
                          style={{
                            objectFit: "cover",
                            borderRadius: "100%",
                            width: "100%",
                            height: "100%",
                            objectPosition: "left center",
                          }}
                          priority
                          src={
                            "https://unsplash-cache.edtings.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                          }
                          width={200}
                          height={200}
                        />
                      </Avatar>
                    </Tooltip>
                    <Tooltip label="Amber Heard">
                      <Avatar size="md" radius="xl">
                        <EdtingImage
                          style={{
                            objectFit: "cover",
                            borderRadius: "100%",
                            width: "100%",
                            height: "100%",
                            objectPosition: "left center",
                          }}
                          priority
                          src={
                            "https://unsplash-cache.edtings.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                          }
                          width={200}
                          height={200}
                        />
                      </Avatar>
                    </Tooltip>
                    <Tooltip label="Amber Heard">
                      <Avatar size="md" radius="xl">
                        <EdtingImage
                          style={{
                            objectFit: "cover",
                            borderRadius: "100%",
                            width: "100%",
                            height: "100%",
                            objectPosition: "left center",
                          }}
                          priority
                          src={
                            "https://unsplash-cache.edtings.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          }
                          width={200}
                          height={200}
                        />
                      </Avatar>
                    </Tooltip>
                  </Avatar.Group>
                  <Group spacing={"sm"}>
                    <Anchor
                      href="/"
                      size="sm"
                      transform="capitalize"
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      weight={400}
                    >
                      Muhammad Afzaal Afridi
                    </Anchor>
                    <Badge variant="filled" color="blue">
                      +2 more
                    </Badge>
                  </Group>
                </Group>
              </Group>

              <Group spacing={-10} position="center">
                <Group spacing={0}>
                  <Text size="sm">
                    {format(new Date(2021, 10, 15), "MMMM dd, yyyy")}
                  </Text>

                  <ThemeIcon
                    color={colorScheme == "dark" ? "gray" : "dark"}
                    size="xl"
                    mt={-23}
                    variant="outline"
                    sx={{
                      border: 0,
                    }}
                    bg="transparent"
                  >
                    <WifiNone size={50} />
                  </ThemeIcon>
                </Group>

                <Group spacing={8}>
                  <ThemeIcon
                    size="md"
                    variant="default"
                    radius="xl"
                    bg="transparent"
                    color="dark"
                    sx={{
                      border: 0,
                    }}
                  >
                    <BookOpen size={20} />
                  </ThemeIcon>

                  <Text size="sm">2 mins read</Text>
                </Group>
              </Group>
            </Stack>
          </Center>
        </Group>
      </Box>
      <Paper
        sx={(theme) => ({
          [theme.fn.smallerThan("xs")]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        })}
        p="xl"
        pt={50}
      >
        <Stack
          px="xl"
          sx={(theme) => ({
            [theme.fn.smallerThan("xs")]: {
              paddingLeft: 0,
              paddingRight: 0,
            },
          })}
          mx="auto"
          maw={700}
        >
          <Stack
            sx={(theme) => ({
              [theme.fn.smallerThan("xs")]: {
                padding: theme.spacing.sm,
              },
            })}
            mt="xl"
            id="intro"
          >
            <Title>Introduction</Title>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>
          </Stack>
          <Stack
            sx={(theme) => ({
              [theme.fn.smallerThan("xs")]: {
                padding: theme.spacing.sm,
              },
            })}
            mt="xl"
            id="khan"
          >
            <Title>To Do</Title>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              non tincidunt lorem, in rutrum nisl. In pharetra velit eu lacus
              aliquet imperdiet. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nam non rutrum tortor, et porta diam. Quisque
              dignissim magna sed justo molestie egestas at eu risus.
              Pellentesque luctus rhoncus tristique. Donec pellentesque eros at
              fermentum mollis.
            </Text>
          </Stack>
        </Stack>
      </Paper>
    </AppWrapper>
  );
};

export default SingleArticle;

export const getStaticProps = async ({}: GetStaticPathsContext) => {
  const { base64 } = await getPlaiceholder(
    "https://unsplash-cache.edtings.com/photo-1587749091230-fb8a034d695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
  );

  return {
    props: {
      placeholder: base64,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: ["/story/123"],
    fallback: false,
  };
};
