import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
  List,
  Paper,
  Progress,
  Rating,
  Slider,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import AppWrapper from "../../components/global/wrapper";
import EdtingImage from "../../components/global/image";
import { sampleArticles } from "../../data/samples";
import { serif } from "../_app";
import {
  generateBottomFade,
  generateGradient,
  generateGradient2,
} from "../../utils/basic";
import {
  AmazonLogo,
  ArrowLeft,
  ArrowRight,
  ArrowSquareOut,
  Bookmark,
  BookmarkSimple,
  CaretLeft,
  CaretRight,
  Check,
  Heart,
  MaskHappy,
  Notches,
  Share,
  ShoppingBag,
  ShoppingBagOpen,
  Smiley,
  Star,
  X,
} from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import dynamic from "next/dynamic";
import EdtingsPlayer from "../../components/global/player";

const about = `Sephora is a French multinational retailer of personal care and beauty products with nearly 340 brands, along with its own private label, Sephora Collection, and includes beauty products such as cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare.`;

const Review = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const Player = dynamic(() => import("../../components/global/player"), {
    ssr: false,
  });

  return (
    <AppWrapper
      padding={false}
      headerProps={{
        headerPosition: "absolute",
        headerColor: "gray.0",
      }}
      navbar={false}
    >
      <Container p={0} h={"calc(100vh - 0px)"} size="100%">
        <Container px={0} size="100%" h="100%">
          <Center h="100%">
            <Card bg="transparent" radius="xs" p={0} w="100%" h={"100%"}>
              <Group h="100%" noWrap position="apart" w="100%">
                <Box h={"100%"} pos="relative" w="50%">
                  <Carousel
                    nextControlIcon={<CaretRight weight="bold" size={20} />}
                    previousControlIcon={<CaretLeft weight="bold" size={20} />}
                    styles={{
                      controls: {
                        [theme.fn.smallerThan(600)]: {
                          paddingLeft: 5,
                          paddingRight: 5,
                        },
                      },
                      control: {
                        "&[data-inactive]": {
                          opacity: 0,
                          cursor: "default",
                        },
                        background: theme.colors.dark[9],
                        opacity: 0.85,
                        height: 50,
                        width: 50,
                        borderRadius: "50%",
                        border: 0,
                        color: theme.white,
                        [theme.fn.smallerThan(600)]: {
                          height: 45,
                          width: 45,
                          svg: {
                            height: 20,
                            width: 20,
                          },
                        },
                      },
                    }}
                    h="100%"
                    height="100%"
                  >
                    <Carousel.Slide>
                      <Center bg="gray.9" w="100%" h="100%">
                        <Card p={0} radius={0} bg="transparent" w="100%">
                          {/* <Player /> */}
                          <EdtingsPlayer />
                        </Card>
                      </Center>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <EdtingImage
                        style={{
                          borderRadius: 0,
                        }}
                        fill
                        src="https://images.unsplash.com/photo-1583241800698-e8ab01830a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      />
                      <Box
                        pos="absolute"
                        bg={theme.fn.rgba("dark", 0.2)}
                        w="100%"
                        h="100%"
                      >
                        <div />
                      </Box>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <EdtingImage
                        style={{
                          borderRadius: 0,
                        }}
                        fill
                        src="https://images.unsplash.com/photo-1606158582120-b4fc196bffad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      />
                      <Box
                        pos="absolute"
                        bg={theme.fn.rgba("dark", 0.2)}
                        w="100%"
                        h="100%"
                      >
                        <div />
                      </Box>
                    </Carousel.Slide>
                    <Carousel.Slide>
                      <EdtingImage
                        style={{
                          borderRadius: 0,
                        }}
                        fill
                        src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      />
                      <Box
                        pos="absolute"
                        bg={theme.fn.rgba("dark", 0.2)}
                        w="100%"
                        h="100%"
                      >
                        <div />
                      </Box>
                    </Carousel.Slide>
                  </Carousel>
                </Box>
                <Box h="100%" w="50%">
                  <Stack h="100%" pos="relative" align="start">
                    <Group mt={110} px="xl" w="100%" position="apart">
                      <Group>
                        <ThemeIcon radius="xl" variant="filled">
                          <Notches />
                        </ThemeIcon>

                        <Text size="sm" weight={600}>
                          Makeup
                        </Text>
                      </Group>

                      <Group spacing={"xs"}>
                        <Badge color="gray.1">
                          <Rating fractions={4} value={3.75} readOnly />
                        </Badge>
                        <ActionIcon
                          radius="xl"
                          variant="default"
                          sx={{
                            border: 0,
                          }}
                          size="lg"
                        >
                          <Heart size={20} />
                        </ActionIcon>

                        <ActionIcon
                          radius="xl"
                          variant="default"
                          sx={{
                            border: 0,
                          }}
                          size="lg"
                        >
                          <BookmarkSimple size={20} />
                        </ActionIcon>
                      </Group>
                    </Group>

                    <Title
                      weight={400}
                      sx={{
                        fontFamily: serif.style.fontFamily,
                      }}
                      px="xl"
                      mt={10}
                      mb={20}
                      transform="capitalize"
                      order={1}
                    >
                      Sephora&apos;s Matte Metallic eye shadow palette Review
                    </Title>

                    <Group
                      w="100%"
                      spacing="xl"
                      align="start"
                      position="apart"
                      px="xl"
                      noWrap
                    >
                      <Stack maw={400} spacing={4}>
                        <Text weight={700} mt={0} size="md">
                          About Product
                        </Text>
                        <Text
                          sx={{
                            wordSpacing: 0.5,
                          }}
                          size="sm"
                        >
                          Light up the room with the 11 of the season’s best
                          wearable matte and festive metallic eyeshadows. The
                          beautiful mix-and-match matte shades can be worn alone
                          or layered together for a perfectly contoured eyes.
                          Add a dramatic metallic swipe for a flash of holiday
                          sparkle. To get you started, the palette includes two
                          how-to tutorials for entrance-worthy holiday looks.
                        </Text>

                        <Group
                          noWrap
                          align="start"
                          w="100%"
                          spacing={60}
                          mt="xl"
                        >
                          <Stack w="100%" maw={"50%"} spacing={4}>
                            <Text weight={700}>The Good</Text>
                            <List
                              icon={
                                <ArrowRight
                                  style={{
                                    verticalAlign: "middle",
                                  }}
                                />
                              }
                              size="sm"
                            >
                              <List.Item>Cheap price tag</List.Item>
                              <List.Item>
                                Lots of colors to choose from
                              </List.Item>
                            </List>
                          </Stack>

                          <Stack w="100%" maw={"50%"} spacing={4}>
                            <Text weight={700}>The Bad</Text>
                            <List
                              icon={
                                <ArrowRight
                                  style={{
                                    verticalAlign: "middle",
                                  }}
                                />
                              }
                              size="sm"
                            >
                              <List.Item>Quality is not satisfactory</List.Item>
                            </List>
                          </Stack>
                        </Group>
                      </Stack>

                      <Card
                        bg={colorScheme == "dark" ? "dark.7" : "gray.0"}
                        h="100%"
                      >
                        <Badge
                          mx="auto"
                          radius="md"
                          size="xl"
                          sx={{
                            flexFlow: "column",
                            height: "100%",
                            background: "transparent",
                            width: 200,
                          }}
                          leftSection={
                            <ThemeIcon
                              radius="xl"
                              variant="gradient"
                              gradient={{
                                from: colorScheme == "dark" ? "pink" : "blue.5",
                                to: colorScheme == "dark" ? "grape" : "indigo",
                              }}
                              sx={{
                                borderRadius: "50%",
                              }}
                              ml={5}
                              mb={10}
                              size={70}
                            >
                              75
                            </ThemeIcon>
                          }
                        >
                          <Stack mt={5} spacing={0}>
                            <Text weight={900}>Excellent</Text>
                            <Divider
                              sx={{
                                borderRadius: 40,
                              }}
                              color={colorScheme == "dark" ? "gray.6" : "dark"}
                              size="lg"
                            />
                          </Stack>
                          <List
                            spacing="xs"
                            icon={
                              <ArrowSquareOut
                                style={{
                                  verticalAlign: "middle",
                                }}
                              />
                            }
                            size="xs"
                            mt="xl"
                          >
                            <List.Item>
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.5" : "dark"
                                }
                              >
                                Sephora
                              </Anchor>
                            </List.Item>
                            <List.Item>Amazon</List.Item>
                          </List>
                        </Badge>
                      </Card>
                    </Group>

                    <Group
                      mt="xs"
                      w="100%"
                      position="apart"
                      noWrap
                      align="center"
                      px={"xl"}
                    >
                      <Stack spacing={4}>
                        <Text weight={700} mt={0} size="md">
                          Verdict
                        </Text>
                        <Text size="sm" lineClamp={4}>
                          The colour payoff is just average Even when you try to
                          build it up, it’s not buildable. It’ll just look like
                          you just smack it on your eyelids The lighter shade
                          need to put layers on it as you can barely see it with
                          one layer But the shimmers are pretty, used it as an
                          highlighter as well
                        </Text>
                      </Stack>
                    </Group>
                  </Stack>
                </Box>
              </Group>
            </Card>
          </Center>
        </Container>
      </Container>
    </AppWrapper>
  );
};

export default Review;
