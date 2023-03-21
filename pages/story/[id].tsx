import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Group,
  HoverCard,
  List,
  Modal,
  Paper,
  Rating,
  ScrollArea,
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
import { useState } from "react";
import Balancer from "react-wrap-balancer";

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
  const [modal, setModal] = useState(false);
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
            title: "Intro",
            href: "#intro",
            path: "intro",
            color: "gray",
          },
          {
            title: "To do",
            href: "#khan",
            path: "khan",
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
                    <HoverCard position="top-end">
                      <HoverCard.Target>
                        <Badge
                          sx={{
                            cursor: "pointer",
                          }}
                          onClick={() => setModal(true)}
                          variant="filled"
                          color="blue"
                        >
                          +2 more
                        </Badge>
                      </HoverCard.Target>
                      <HoverCard.Dropdown
                        sx={(theme) => ({
                          boxShadow: theme.shadows.xl,
                        })}
                        pt={"md"}
                        pb="lg"
                        px="md"
                      >
                        <Text mb="md" size="xs" weight={700}>
                          In Collaboration With
                        </Text>
                        <Stack spacing="xs">
                          <Group spacing="xs">
                            <Avatar radius="xl" size="md">
                              <EdtingImage
                                style={{
                                  borderRadius: "100%",
                                }}
                                avatar
                                height={100}
                                width={100}
                                src="https://images.unsplash.com/photo-1611199340099-91a595a86812?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                              />
                            </Avatar>
                            <Stack spacing={1}>
                              <Anchor
                                color={colorScheme == "dark" ? "gray" : "dark"}
                                size="sm"
                              >
                                Mason Moore
                              </Anchor>
                              <Text
                                maw={240}
                                lineClamp={1}
                                size="xs"
                                color="dimmed"
                              >
                                Author of 5 Successful books
                              </Text>
                            </Stack>
                          </Group>

                          <Group spacing="xs">
                            <Avatar radius="xl" size="md">
                              <EdtingImage
                                style={{
                                  borderRadius: "100%",
                                }}
                                avatar
                                height={100}
                                width={100}
                                src="https://images.unsplash.com/photo-1522648485144-849409408aee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                              />
                            </Avatar>
                            <Stack spacing={1}>
                              <Anchor
                                color={colorScheme == "dark" ? "gray" : "dark"}
                                size="sm"
                              >
                                Edwards Schwaretzmuller
                              </Anchor>
                              <Text
                                maw={240}
                                lineClamp={1}
                                size="xs"
                                color="dimmed"
                              >
                                Founder & CEO Howards Tech Pvt Ltd.
                              </Text>
                            </Stack>
                          </Group>
                        </Stack>
                      </HoverCard.Dropdown>
                    </HoverCard>
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
        pb="xl"
        sx={(theme) => ({
          [theme.fn.smallerThan("xs")]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        })}
      >
        <Group align="initial" position="center" noWrap>
          <Stack
            px="xl"
            sx={(theme) => ({
              [theme.fn.smallerThan("xs")]: {
                paddingLeft: 0,
                paddingRight: 0,
              },
            })}
            maw={600}
          >
            <Stack
              pt={30}
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
                Are you a front-end developer looking to take your skills to the
                next level? One of the best ways to do so is by working on
                real-world projects that push you out of your comfort zone and
                force you to learn new techniques and technologies.
              </Text>

              <Text>
                In this blog, I've compiled a list of front-end projects from
                FrontendPro.dev that can help you improve your proficiency in
                HTML, CSS, JavaScript, ReactJs, and other front-end
                technologies.
              </Text>

              <Text>
                These frontend projects are designed for developers of all skill
                levels and each one is unique, varying from developing a
                responsive website to building real-world UI components. So,
                whether you're a beginner, intermediate, or advanced front-end
                developer, there's a front-end project for you.
              </Text>

              <Text>
                FrontendPro is an open-source platform that offers a diverse
                range of real-world frontend projects designed to help
                developers hone their frontend skills. Moreover, FrontendPro
                provides you with Figma files for each project for Free to make
                it even easier for you to get started. With these Figma files,
                you can visualize what you're building and create polished,
                professional-looking projects that you can add to your portfolio
                to showcase your skills and impress potential employers.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                lobortis velit vel nibh lobortis, sit amet finibus ex tempor.
                Sed lorem massa, rutrum a venenatis in, venenatis vel erat.
                Mauris sollicitudin neque augue, nec pharetra ipsum tincidunt
                ac. Quisque eget ultrices purus. Nam vel euismod erat. Vivamus
                id porttitor leo. Phasellus lobortis malesuada purus ac
                ultricies.
              </Text>

              <Text>
                Quisque nunc sapien, varius mattis aliquam sed, tristique et
                enim. Sed tempus ut lacus at sollicitudin. Quisque fringilla
                volutpat turpis. Vivamus est tellus, blandit at sapien nec,
                vestibulum lobortis sem. Nunc eu quam vel lacus consectetur
                consequat. Aliquam erat volutpat. Suspendisse potenti. Curabitur
                lobortis sed sem sit amet lobortis. Vivamus sit amet magna non
                orci viverra ornare id id elit. Etiam lobortis egestas orci vel
                auctor. Proin tincidunt quis quam quis tincidunt. Sed elementum
                sem nunc, non bibendum ante accumsan quis.
              </Text>

              <Text>
                Praesent mattis dui justo. Donec gravida malesuada tortor quis
                suscipit. Suspendisse vehicula varius quam, in viverra tellus
                commodo congue. Donec elementum nibh ut hendrerit laoreet. Cras
                purus urna, laoreet sit amet magna eu, molestie faucibus risus.
                Nullam finibus nisl rutrum gravida aliquam. Proin a eros
                feugiat, venenatis elit eu, varius diam. Sed at ullamcorper
                turpis. Sed rhoncus, magna non fringilla interdum, diam elit
                ultricies velit, quis euismod augue augue a urna. Vestibulum sit
                amet malesuada augue.
              </Text>
            </Stack>
          </Stack>
          <Paper
            radius="xs"
            mx="auto"
            sx={(theme) => ({
              [theme.fn.smallerThan(1400)]: {
                display: "none",
              },
              borderLeft: `1px solid ${
                colorScheme == "dark"
                  ? theme.colors.dark[5]
                  : theme.colors.gray[1]
              }`,
            })}
            p="xl"
            w="100%"
            maw={400}
          >
            <Stack h="100%">
              <Paper p="xl" w={300} h={300}>
                Hello
              </Paper>
              <Stack w={300} pos="sticky" top={65}>
                <Paper p="xl" w={300} h={300}>
                  Hello
                </Paper>
                <Paper p="xl" w={300} h={300}>
                  Hello
                </Paper>
              </Stack>
            </Stack>
          </Paper>
        </Group>
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
