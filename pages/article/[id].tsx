import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Col,
  Divider,
  Group,
  List,
  Paper,
  Rating,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { Oswald } from "@next/font/google";
import { format, formatDistance, formatDistanceToNow } from "date-fns";
import { GetStaticPathsContext } from "next";
import {
  BookOpen,
  Check,
  Cloud,
  Diamond,
  DotsThree,
  GenderFemale,
  Hexagon,
  MagnifyingGlass,
  MaskHappy,
  MaskSad,
  PictureInPicture,
  Star,
  StarHalf,
  Trophy,
  WifiNone,
  X,
} from "phosphor-react";
import EdtingImage from "../../components/global/image";
import AppWrapper from "../../components/global/wrapper";
import { getBase64ImageUrl } from "../../data/blur";
import { generateGradient, generateGradient2 } from "../../utils/basic";
import { condensed, serif } from "../_app";

const verticalImagePath =
  "https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80";

const squareImagePath =
  "https://images.unsplash.com/photo-1587749091230-fb8a034d695c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80";

const landscapeImagePath =
  "https://images.unsplash.com/photo-1645005513751-e22717a66ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

//Feminine

const verticalImage =
  "https://images.unsplash.com/photo-1581122584612-713f89daa8eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80";

const landscapeImage =
  "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80";

//
//
//
//

const SingleArticle = ({ placeholder }: any) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      logo={
        <Group spacing={8}>
          <Text
            size="xl"
            sx={{
              fontFamily: serif.style.fontFamily,
              fontSize: 23,
            }}
          >
            Edtings
          </Text>

          <ThemeIcon
            mt={4}
            radius="xl"
            color={colorScheme == "dark" ? "dark.3" : "dark"}
            variant="gradient"
            // gradient={{
            //   from: "blue",
            //   to: "teal",
            // }}
            // gradient={{
            //   from: "pink.4",
            //   to: "grape.6",
            // }}

            // gradient={{
            //   from: "yellow.5",
            //   to: "orange.6",
            // }}
            gradient={{
              from: "red.5",
              to: "pink.5",
            }}
            sx={{
              // backgroundColor: "transparent",
              border: 0,
            }}
          >
            <X size={18} />
          </ThemeIcon>

          {/* <Text
            transform="uppercase"
            mt={2}
            weight={400}
            // variant="gradient"
            // gradient={{
            //   from: "yellow.5",
            //   to: "orange.6",
            // }}
            size="xl"
            sx={{
              fontFamily: condensed.style.fontFamily,
            }}
          >
            Lifestyle
          </Text> */}

          {/* <Text
            transform="uppercase"
            mt={2}
            weight={400}
            // variant="gradient"
            // gradient={{
            //   from: "pink.4",
            //   to: "grape.6",
            // }}
            sx={{
              fontFamily: condensed.style.fontFamily,
            }}
            size="xl"
          >
            Women&apos;s Health
          </Text> */}

          <Text
            transform="uppercase"
            mt={4}
            weight={700}
            // variant="gradient"
            // gradient={{
            //   from: "blue",
            //   to: "teal",
            // }}
            size="lg"
          >
            Reviews
          </Text>
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
            paddingBottom: theme.spacing.xl * 2,
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
          spacing={30}
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
                maxHeight: 400,
                borderRadius: 0,
              },
            })}
          >
            <EdtingImage
              style={{
                objectFit: "cover",
                borderRadius: 0,
                width: "100%",
              }}
              priority
              src={squareImagePath}
              width={610}
              height={610}
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
              <Group mt="xs" position="center">
                <Stack spacing={0} align="center">
                  <Text weight={500}> Final Verdict</Text>
                  <Badge size="lg" color="gray.0">
                    <Rating value={4} count={5} sx={{}} readOnly />
                  </Badge>
                  <Text weight={800}>GREAT</Text>
                </Stack>
              </Group>
              <Text
                transform="capitalize"
                align="center"
                size={35}
                weight={800}
                lineClamp={3}
                sx={(theme) => ({
                  //   fontFamily: serif.style.fontFamily,
                  //   fontWeight: 400,
                  //   fontSize: 35,
                  [theme.fn.smallerThan("xs")]: {
                    fontSize: theme.fontSizes.xl * 1.1,
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
                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
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
                            "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
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
                            "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
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
                    <Badge
                      variant="gradient"
                      gradient={{
                        from: colorScheme == "dark" ? "red.6" : "red.3",
                        to: colorScheme == "dark" ? "pink.6" : "pink.3",
                      }}
                    >
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
            p="xl"
            sx={(theme) => ({
              border: `1px solid ${
                colorScheme == "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[2]
              }`,
              borderRadius: theme.radius.lg,
            })}
            id="score"
          >
            <Group px={0} position="apart">
              <Text size="xl" weight={800}>
                GREAT
              </Text>

              <Group pos="relative">
                <ThemeIcon
                  radius="xl"
                  sx={{
                    borderRadius: "100%",
                  }}
                  variant="gradient"
                  gradient={{ from: "red.4", to: "pink.4", deg: 35 }}
                  size={80}
                >
                  <Hexagon weight="thin" size={70} />
                </ThemeIcon>
                <Text
                  mx="xl"
                  align="center"
                  weight={800}
                  color="white"
                  sx={{
                    position: "absolute",
                    transform: "translate(30%)",
                  }}
                >
                  80
                </Text>
              </Group>
            </Group>
            <Text mx="auto" align="center" maw={500} size="sm">
              Nice device in terms of design (especially the screen to body
              ratio). An eye catcher that can also offer quality. I doubted
              whether the switch of an s9 is really an upgrade and it turned out
              to be.
            </Text>
            <Group
              sx={(theme) => ({
                alignItems: "center",
                alignContent: "center",
              })}
              spacing="xl"
              my="xl"
              mt="xl"
              position="apart"
            >
              <Stack mb="auto" maw={"50%"}>
                <Text weight={800}>FOR</Text>
                <List
                  size="sm"
                  icon={
                    <ThemeIcon
                      sx={{
                        border: 0,
                      }}
                      color="teal"
                      variant="outline"
                      bg="transparent"
                    >
                      <Check size={17} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text component="span" weight={700}>
                      AMOLED
                    </Text>{" "}
                    Screen
                  </List.Item>
                  <List.Item>Gorilla Glass Victus</List.Item>
                </List>
              </Stack>
              <Stack mb="auto">
                <Text weight={800}>AGAINST</Text>
                <List
                  size="sm"
                  icon={
                    <ThemeIcon
                      sx={{
                        border: 0,
                      }}
                      color="red"
                      variant="outline"
                      bg="transparent"
                    >
                      <X size={17} />
                    </ThemeIcon>
                  }
                >
                  <List.Item
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Battery life
                  </List.Item>
                  <List.Item
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Price tag
                  </List.Item>
                  <List.Item
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    One UI is bad
                  </List.Item>
                  <List.Item
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Ships with Android 10 instead of 11
                  </List.Item>
                </List>
              </Stack>
            </Group>

            {/* <Stack>
              <Text weight={700}>Awards</Text>
              <Group>
                <Group
                  p="xs"
                  px="lg"
                  position="center"
                  spacing="xs"
                  sx={(theme) => ({
                    position: "relative",
                    backgroundColor:
                      colorScheme == "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.dark[8],
                    // boxShadow: theme.shadows.xl,
                    borderRadius: theme.radius.xl,
                  })}
                >
                  <ThemeIcon
                    size={20}
                    bg="transparent"
                    variant="outline"
                    sx={(theme) => ({
                      border: 0,
                      color: theme.colors.gray[4],
                    })}
                  >
                    <MagnifyingGlass size={100} />
                  </ThemeIcon>

                  <Text color="white" size="xs" weight={800}>
                    Most Searched
                  </Text>
                </Group>
              </Group>
            </Stack> */}
          </Stack>

          <Stack mt="xl" id="intro">
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
  const placeholder = await getBase64ImageUrl(squareImagePath);

  return {
    props: {
      placeholder: placeholder,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: ["/article/123"],
    fallback: false,
  };
};
