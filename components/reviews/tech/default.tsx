import {
  ActionIcon,
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  List,
  MediaQuery,
  NavLink,
  Progress,
  Stack,
  Table,
  Text,
  ThemeIcon,
  Title,
  Transition,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import AppWrapper from "../../global/wrapper";
import EdtingImage from "../../global/image";
import {
  ArrowRight,
  CaretDown,
  CaretRight,
  Check,
  Export,
  ThumbsDown,
  ThumbsUp,
  X,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import ScrollSpy from "react-scrollspy-navigation";
import Link from "next/link";

const TechReviewDefaultTemplate = () => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const [seeAllSpecs, setSeeAllSpecs] = useState(false);
  const [sectionStart, setSectionStart] = useState(false);
  const [sectionEnd, setSectionEnd] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showTOC, setShowTOC] = useState(false);

  useEffect(() => {
    console.log(sectionEnd);
    const sectionStarter = document.querySelector("#section-start");
    const sectionEnder = document.querySelector("#section-end");

    const observer1 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting == true) {
            // header.style.display = "none";
            setOpened(false);
            setSectionStart(true);
          } else {
            setSectionStart(false);
            if (sectionEnd == false) {
              // header.style.display = "block";
              setOpened(true);
            }
          }
        });
      },
      {
        threshold: 1,
      }
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting == true) {
            // header.style.display = "none";
            setOpened(false);
            setSectionEnd(true);
          } else {
            console.log(sectionStart);

            if (sectionStart == false) {
              // header.style.display = "block";
              setOpened(true);
            }
            setSectionEnd(false);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    observer1.observe(sectionStarter);
    observer2.observe(sectionEnder);
  });

  const rows = [
    {
      label: "Brand Name",
      value: "Lenovo",
    },
    {
      label: "Laptop Class",
      value: "3 in 1 Convertible",
    },
    {
      label: "Ram",
      value: "16GB",
    },
    {
      label: "Boot Drive",
      value: "SSD",
    },
    {
      label: "Screen Size",
      value: "14 Inches",
    },
    {
      label: "Touchscreen",
      type: "check",
      value: false,
    },
    {
      label: "Boot Drive",
      value: "SSD",
    },
    {
      label: "Screen Size",
      value: "14 Inches",
    },
    {
      label: "Touchscreen",
      type: "check",
      value: false,
    },
    {
      label: "Boot Drive",
      value: "SSD",
    },
    {
      label: "Screen Size",
      value: "14 Inches",
    },
    {
      label: "Touchscreen",
      type: "check",
      value: false,
    },
    {
      label: "Boot Drive",
      value: "SSD",
    },
    {
      label: "Screen Size",
      value: "14 Inches",
    },
    {
      label: "Touchscreen",
      type: "check",
      value: false,
    },
    {
      label: "Boot Drive",
      value: "SSD",
    },
    {
      label: "Screen Size",
      value: "14 Inches",
    },
    {
      label: "Touchscreen",
      type: "check",
      value: false,
    },
  ];

  return (
    <AppWrapper padding={false} navbar={false}>
      <Container p={0} mih="100vh" size="lg">
        <Box w="100%" mt="xl">
          <Box data-section id="section-start">
            <Title
              sx={(theme) => ({
                [theme.fn.smallerThan(1000)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1.2)`,
                },
              })}
              align="center"
              weight={800}
              order={1}
            >
              Lenovo Yoga 9i Gen 8 Review
            </Title>
            <Text mt={4} align="center" size="sm" weight={500}>
              Yup, Lenovo's Yoga 2-in-1 PCs can still flex
            </Text>
            <Group spacing="xl" mt="xl" mx="auto" position="center">
              <Group spacing={4}>
                <Avatar
                  sx={(theme) => ({
                    [theme.fn.smallerThan(1000)]: {
                      minHeight: 45,
                      height: 45,
                      minWidth: 45,
                      width: 45,
                    },
                  })}
                  size="lg"
                  radius="xl"
                >
                  <EdtingImage
                    avatar
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    fill
                  />
                </Avatar>
                <Text ml="xs" weight={700} size="sm">
                  by
                </Text>
                <Anchor
                  color={colorScheme == "dark" ? "gray" : "dark"}
                  href="#"
                  weight={700}
                  size="sm"
                >
                  Brian Westner
                </Anchor>
              </Group>

              <Text size="sm" weight={700}>
                April 10, 2023
              </Text>

              <Group spacing="xs">
                <ActionIcon
                  mt={-5}
                  size="lg"
                  sx={{
                    border: 0,
                  }}
                  radius="xl"
                  color="dark"
                  variant="default"
                >
                  <Export size={18} />
                </ActionIcon>
              </Group>
            </Group>
          </Box>

          <Transition
            mounted={opened}
            transition="slide-down"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => (
              <MediaQuery
                smallerThan={768}
                styles={{
                  display: "none",
                }}
              >
                <Card
                  bg={colorScheme == "dark" ? "dark.7" : "white"}
                  data-header
                  px="xl"
                  pt="sm"
                  sx={{
                    transition: `max-height 1000ms ease-in`,
                    overflow: "hidden",
                    top: 0,
                    width: "100%",
                    position: "fixed",
                    maxHeight: showTOC ? 1200 : "70px",
                    left: 0,
                    zIndex: 2000,
                    boxShadow: theme.shadows.xl,
                  }}
                  style={opened ? {} : styles}
                >
                  <Group position="apart" maw={750} noWrap mx="auto">
                    <Group>
                      <Button
                        onClick={() => setShowTOC(!showTOC)}
                        variant={colorScheme == "dark" ? "outline" : "filled"}
                        color={colorScheme == "dark" ? "gray" : "gray.0"}
                        sx={{
                          background: "transparent",
                          border: 0,
                          color:
                            colorScheme == "dark"
                              ? theme.colors.gray[4]
                              : theme.colors.dark[8],
                        }}
                        rightIcon={<CaretDown />}
                      >
                        <Text size="sm" weight={700}>
                          Table of Contents
                        </Text>
                      </Button>
                    </Group>
                    <Group spacing="xl">
                      <Stack spacing={0}>
                        <Text size="md" weight={700}>
                          Lenovo Yoga 9i Gen8
                        </Text>
                        <Group spacing={4}>
                          <Text size="sm" weight={700}>
                            {Intl.NumberFormat("en-US", {
                              currency: "USD",
                              style: "currency",
                              compactDisplay: "short",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            }).format(1399)}
                          </Text>
                          <Text size="xs" weight={600}>
                            at BestBuy
                          </Text>
                        </Group>
                      </Stack>
                      <Button
                        variant={"gradient"}
                        px="xl"
                        color={colorScheme == "dark" ? "gray" : "dark"}
                        radius="xl"
                        gradient={{
                          from: colorScheme == "dark" ? "pink" : "blue",
                          to: colorScheme == "dark" ? "grape" : "indigo",
                        }}
                      >
                        See it
                      </Button>
                    </Group>
                  </Group>
                  <Box maw={700} mx="auto" mt="xs">
                    <Box maw={520}>
                      <ScrollSpy className="active-toc" ml="xl">
                        <NavLink
                          icon={<CaretRight weight="bold" size={14} />}
                          label="Testing the Lenovo Yoga 9i Gen 8: Measuring the Boost From 'Rocket Lake'"
                          href="#score"
                          ref={React.createRef<any>()}
                          component={Link}
                        />

                        <NavLink
                          icon={<CaretRight weight="bold" size={14} />}
                          label="Verdict: Among 2-in-1 Laptops, a Pleasing Yoga Still Presides"
                          href="#specs"
                          ref={React.createRef<any>()}
                          component={Link}
                        />
                      </ScrollSpy>
                    </Box>
                  </Box>
                </Card>
              </MediaQuery>
            )}
          </Transition>

          <Box>
            <Grid mt="xl">
              <Grid.Col
                sx={(theme) => ({
                  [theme.fn.smallerThan(1000)]: {
                    paddingRight: 0,
                  },
                })}
                span={12}
                xs={7}
              >
                <Box h="100%" pos="relative">
                  <Card
                    p={0}
                    h={450}
                    w="100%"
                    sx={() => ({
                      [theme.fn.smallerThan(1000)]: {
                        borderRadius: 0,
                      },
                    })}
                    maw={700}
                    pos="relative"
                  >
                    <EdtingImage
                      style={{
                        borderRadius: 0,
                      }}
                      height={450}
                      width={658}
                      src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
                    />
                  </Card>
                </Box>
              </Grid.Col>
              <Grid.Col span={12} xs={5}>
                <Box id="intro" ml="xs">
                  <Group px="xs" position="left" noWrap>
                    <Progress
                      w="100%"
                      color={colorScheme == "dark" ? "grape" : "indigo"}
                      value={(3 / 5) * 100}
                    />
                    <Text size="lg" weight={700}>
                      3.5
                    </Text>
                    <Text transform="uppercase" size="lg" weight={700}>
                      EXCELLENT
                    </Text>
                    <Stack spacing={0}></Stack>
                  </Group>

                  <Stack w="100%" px="xs" spacing="xs">
                    <Title transform="uppercase" mt="xl" order={4} weight={800}>
                      The Bottom Line
                    </Title>
                    <Text size="md">
                      Lenovo's Yoga 9i Gen 8 delivers leading performance and a
                      combination of features and design that makes it the
                      premium 2-in-1 laptop to buy.
                    </Text>

                    <Text mt="md" size="xs">
                      Starting at MSRP{" "}
                      {Intl.NumberFormat("en-US", {
                        currency: "USD",
                        currencyDisplay: "symbol",
                        style: "currency",
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }).format(1099)}
                    </Text>

                    <Stack spacing="xs">
                      <Group w="100%" position="apart">
                        <Group spacing={4}>
                          <Text weight={700}>
                            {" "}
                            {Intl.NumberFormat("en-US", {
                              currency: "USD",
                              currencyDisplay: "symbol",
                              style: "currency",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            }).format(1099)}
                          </Text>

                          <Text size="xs">at</Text>
                          <Text size="xs">Best Buy</Text>
                        </Group>
                        <Button
                          variant={colorScheme == "dark" ? "default" : "filled"}
                          px="xl"
                          color={colorScheme == "dark" ? "gray" : "dark"}
                          radius="xl"
                        >
                          See it
                        </Button>
                      </Group>

                      <Divider />
                      <Group w="100%" position="apart">
                        <Group spacing={4}>
                          <Text weight={700}>
                            {" "}
                            {Intl.NumberFormat("en-US", {
                              currency: "USD",
                              currencyDisplay: "symbol",
                              style: "currency",
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            }).format(1399)}
                          </Text>

                          <Text size="xs">at</Text>
                          <Text size="xs">Best Buy</Text>
                        </Group>
                        <Button
                          variant={colorScheme == "dark" ? "default" : "filled"}
                          px="xl"
                          color={colorScheme == "dark" ? "gray" : "dark"}
                          radius="xl"
                        >
                          See it
                        </Button>
                      </Group>
                    </Stack>
                  </Stack>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
        <Container pb="xl" ml="unset" mr={0} size={"md"}>
          <Group
            id="score"
            mt={30}
            align="start"
            spacing={100}
            w="100%"
            position="left"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                gap: `calc(${theme.spacing.xl} * 1.5)`,
              },
            })}
          >
            <Stack w="100%" maw={300}>
              <Text weight={600} size="md">
                Score Points
              </Text>
              <Stack>
                <Group position="apart">
                  <Text size="sm" weight={600}>
                    Display
                  </Text>
                  <Text size="sm">3/5</Text>
                </Group>

                <Progress
                  color={colorScheme == "dark" ? "grape" : "indigo"}
                  value={(3 / 5) * 100}
                />
              </Stack>
              <Stack>
                <Group position="apart">
                  <Text size="sm" weight={600}>
                    Performance
                  </Text>
                  <Text size="sm">3.5/5</Text>
                </Group>
                <Progress
                  color={colorScheme == "dark" ? "grape" : "indigo"}
                  value={(3.5 / 5) * 100}
                />
              </Stack>
              <Stack>
                <Group position="apart">
                  <Text size="sm" weight={600}>
                    Specs
                  </Text>
                  <Text size="sm">3/5</Text>
                </Group>
                <Progress
                  color={colorScheme == "dark" ? "grape" : "indigo"}
                  value={(3 / 5) * 100}
                />
              </Stack>
              <Stack>
                <Group position="apart">
                  <Text size="sm" weight={600}>
                    Price to Performance
                  </Text>
                  <Text size="sm">2.5/5</Text>
                </Group>
                <Progress
                  color={colorScheme == "dark" ? "grape" : "indigo"}
                  value={(2.5 / 5) * 100}
                />
              </Stack>
            </Stack>
            <Stack maw={300} pb="xl" w="100%" spacing={"xl"} align="start">
              <Stack>
                <Text weight={600} size="xs">
                  LIKE
                </Text>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThumbsUp
                      style={{
                        verticalAlign: "middle",
                      }}
                    />
                  }
                >
                  <List.Item>
                    Excellent performance from new Intel "Raptor Lake" silicon
                  </List.Item>
                  <List.Item>Best one so far</List.Item>
                  <List.Item>Best one so far</List.Item>
                </List>
              </Stack>
              <Divider w="100%" />
              <Stack>
                <Text size="xs" weight={600}>
                  DON'T LIKE
                </Text>
                <List
                  spacing="sm"
                  size="sm"
                  icon={
                    <ThumbsDown
                      style={{
                        verticalAlign: "middle",
                      }}
                    />
                  }
                >
                  <List.Item>Extra function keys aren't customizable</List.Item>
                  <List.Item>Best one so far</List.Item>
                </List>
              </Stack>
            </Stack>
          </Group>
          <Box id="specs" pb={5} pos="relative">
            <Card
              sx={{
                transition: `max-height 2s ease-in-out`,
                maxHeight: seeAllSpecs ? 1500 : 270,
                overflow: "hidden",
              }}
              mb={rows.length > 4 && seeAllSpecs == false ? "xl" : 0}
              p={0}
              withBorder
              bg="transparent"
              maw={700}
            >
              <Title order={5} py="xl" px="md">
                LENOVO YOGA 9i GEN 8 SPECS
              </Title>
              <Table
                verticalSpacing="sm"
                mb={seeAllSpecs ? 0 : rows.length > 4 ? "md" : 0}
                horizontalSpacing={40}
                striped
              >
                <tbody>
                  {rows.map((mapped, index) =>
                    seeAllSpecs || index < 4 ? (
                      <tr key={mapped.label}>
                        <td>
                          <Text weight={500}>{mapped.label}</Text>
                        </td>
                        <td>
                          {mapped.type && mapped.type == "check" ? (
                            mapped.value == true ? (
                              <ThemeIcon
                                variant="outline"
                                radius="xl"
                                sx={{
                                  background: "none",
                                  border: 0,
                                }}
                                color="teal"
                              >
                                <Check />
                              </ThemeIcon>
                            ) : (
                              <ThemeIcon
                                variant="outline"
                                radius="xl"
                                sx={{
                                  background: "none",
                                  border: 0,
                                }}
                                color="red"
                              >
                                <X />
                              </ThemeIcon>
                            )
                          ) : (
                            mapped.value
                          )}
                        </td>
                      </tr>
                    ) : null
                  )}
                </tbody>
              </Table>
            </Card>
            {rows.length > 4 && seeAllSpecs == false ? (
              <Group
                onClick={() => setSeeAllSpecs(true)}
                w="100%"
                maw={650}
                position="center"
                sx={{
                  zIndex: 1000,
                }}
                bottom={"4%"}
                pos="absolute"
              >
                <Button
                  variant="default"
                  radius="xl"
                  sx={{
                    fontSize: 13,
                    border: 0,
                    background:
                      colorScheme == "dark" ? theme.colors.dark[8] : "white",
                    color:
                      colorScheme == "dark"
                        ? theme.colors.gray[0]
                        : theme.colors.dark[8],
                  }}
                  rightIcon={
                    <CaretDown
                      style={{
                        verticalAlign: "middle",
                        marginTop: 2,
                      }}
                    />
                  }
                >
                  All Specs
                </Button>
              </Group>
            ) : null}
          </Box>
          <Box
            my="xl"
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                maxWidth: "100%",
                paddingLeft: theme.spacing.xs,
                paddingRight: theme.spacing.xs,
              },
            })}
            maw={700}
          >
            <Stack>
              <Text id="explanation">
                topped off with a new Intel 13th Generation P-series processor.
                It's a beautiful machine that's as comfortable to use as a
                tablet as it is a laptop. And, like the Lenovo Yoga 9i Gen 7
                before it, the combination of premium build and features with
                still-leading power is easy to recommend, making it our new
                Editors' Choice 2-in-1 laptop. Lenovo Yoga 9i Gen 8:
                Configurations and Design Our test unit from Lenovo was model
                83B1001WUS, a 14-inch laptop with a 2,880-by-1,800-pixel OLED
                touch screen with an included Lenovo Precision Pen 2. The Lenovo
                Yoga 9i Gen 8 starts at $1,700 on Lenovo's website, but Best Buy
                had it listed for $1,399.99 at this writing. This base
                configuration comes with an Intel Core i7-1360P processor, 16GB
                of RAM, Intel Iris Xe integrated graphics, and a 512GB SSD.
              </Text>

              <Text>
                Our test unit from Lenovo was model 83B1001WUS, a 14-inch laptop
                with a 2,880-by-1,800-pixel OLED touch screen with an included
                Lenovo Precision Pen 2. The Lenovo Yoga 9i Gen 8 starts at
                $1,700 on Lenovo's website, but Best Buy had it listed for
                $1,399.99 at this writing. This base configuration comes with an
                Intel Core i7-1360P processor, 16GB of RAM, Intel Iris Xe
                integrated graphics, and a 512GB SSD.
              </Text>
            </Stack>
          </Box>

          <Box id="section-end" data-section h={100}>
            <Title>This is the end</Title>
          </Box>
        </Container>
      </Container>
    </AppWrapper>
  );
};

export default TechReviewDefaultTemplate;
