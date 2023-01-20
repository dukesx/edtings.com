import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  MediaQuery,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  CircleWavyQuestion,
  SignIn,
  UserCirclePlus,
  UserPlus,
} from "phosphor-react";
import EdtingImage from "../components/global/image";
import AppWrapper from "../components/global/wrapper";
import { generateGradient } from "../utils/basic";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { nanoid } from "nanoid";
import { DEFAULT_NAV_DATA } from "../data/generics";

const Signin = () => {
  const { colorScheme } = useMantineColorScheme();
  const [tab, setTab] = useState("sign-in");
  return (
    <AppWrapper
      padding={false}
      headerProps={{
        headerPosition: "fixed",
      }}
      navbarProps={{
        navbarTitle: "Navigation",
        navbarPosition: "sticky",
        navbarLinks: DEFAULT_NAV_DATA,
      }}
      path="signin"
    >
      <Paper
        pt={120}
        sx={{
          height: "100vh",
          ...generateGradient(
            tab == "sign-in"
              ? {
                  color1: "blue",
                  color2: "indigo",
                  opacity: 0.4,
                }
              : tab == "forgot-password"
              ? {
                  color1: "cyan",
                  color2: "blue",
                  opacity: 0.4,
                }
              : tab == "register"
              ? {
                  color1: "grape",
                  color2: "pink",
                  opacity: 0.4,
                }
              : {
                  color1: "blue",
                  color2: "indigo",
                  opacity: 0.4,
                }
          ),
        }}
      >
        {tab == "sign-in" ? (
          <Fade
            duration={1500}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Center key={nanoid()} id="sign-in" h="100%">
              <Paper
                sx={(theme) => ({
                  ["@media (min-width: 700px) and (max-width: 1200px)"]: {
                    maxHeight: "100%",
                  },
                })}
                p={0}
                w="100%"
                maw={900}
                h="100%"
                mah={500}
              >
                <Grid
                  w="100%"
                  sx={(theme) => ({
                    ["@media (min-width: 700px) and (max-width: 1200px)"]: {
                      margin: 0,
                    },
                  })}
                >
                  <MediaQuery
                    smallerThan={576}
                    styles={{
                      display: "none",
                    }}
                  >
                    <Grid.Col
                      sx={(theme) => ({
                        ["@media (min-width: 700px) and (max-width: 1200px)"]: {
                          padding: 0,
                        },
                      })}
                      span={0}
                      xs={6}
                      sm={12}
                      md={12}
                      lg={6}
                    >
                      <Box
                        h={500}
                        sx={(theme) => ({
                          position: "relative",
                        })}
                      >
                        <EdtingImage
                          priority
                          fill
                          src="https://images.unsplash.com/photo-1588460789007-a79cfe129bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        />
                        <Paper
                          radius="xs"
                          p="md"
                          w={"100%"}
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                          }}
                        >
                          <Group position="center">
                            <Text size="xs">
                              Photo by{" "}
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                ml={1}
                                mr={4}
                                href="https://unsplash.com/@martinadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Martin Adams
                              </Anchor>
                              on
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                mr={4}
                                ml={4}
                                href="https://unsplash.com/photos/n0kwms_G_cw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Unsplash
                              </Anchor>
                            </Text>
                          </Group>
                        </Paper>
                      </Box>
                    </Grid.Col>
                  </MediaQuery>
                  <Grid.Col span={0} xs={6} sm={12} md={12} lg={6}>
                    <Stack w="100%" maw={400} mx="auto" mt={50}>
                      <Title
                        transform="capitalize"
                        align="center"
                        mt="xl"
                        order={4}
                      >
                        Sign in
                      </Title>
                      <Text align="center" mt="xs" size="xs" color="dimmed">
                        Don&apos;t have an account?{" "}
                        <Anchor
                          onClick={() => {
                            setTab("register");
                          }}
                          weight={700}
                          href="#register"
                          color="dimmed"
                        >
                          {" "}
                          Register
                        </Anchor>
                      </Text>
                      <Stack p={"xl"}>
                        <TextInput placeholder="Email" />
                        <TextInput placeholder="Password" />
                        <Button mt={20} color="dark" variant="filled" fullWidth>
                          {" "}
                          Sign in
                        </Button>

                        <Anchor
                          onClick={() => {
                            setTab("forgot-password");
                          }}
                          color="dimmed"
                          href="#forgot-password"
                          mt={20}
                          size="xs"
                          align="center"
                        >
                          Forgot your password?
                        </Anchor>
                      </Stack>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Center>
          </Fade>
        ) : tab == "forgot-password" ? (
          <Fade
            duration={1500}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Center key={nanoid()} id="forgot-password" h="100%">
              <Paper p={0} w="100%" maw={900} h="100%" mah={500}>
                <Grid w="100%">
                  <MediaQuery
                    smallerThan={576}
                    styles={{
                      display: "none",
                    }}
                  >
                    <Grid.Col span={12} xs={6}>
                      <Box
                        h={500}
                        sx={{
                          position: "relative",
                        }}
                      >
                        <EdtingImage
                          priority
                          fill
                          src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80"
                        />
                        <Paper
                          radius="xs"
                          p="md"
                          w={"100%"}
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                          }}
                        >
                          <Group position="center">
                            <Text size="xs">
                              Photo by{" "}
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                ml={1}
                                mr={4}
                                href="https://unsplash.com/@martinadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Martin Adams
                              </Anchor>
                              on
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                mr={4}
                                ml={4}
                                href="https://unsplash.com/photos/n0kwms_G_cw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Unsplash
                              </Anchor>
                            </Text>
                          </Group>
                        </Paper>
                      </Box>
                    </Grid.Col>
                  </MediaQuery>
                  <Grid.Col span={12} xs={6}>
                    <Center id="forgot-password">
                      <Box maw={400} w="100%" mt={50}>
                        <Title
                          transform="capitalize"
                          align="center"
                          mt="xl"
                          order={4}
                        >
                          Forgot Password
                        </Title>
                        <Text align="center" mt="xs" size="xs" color="dimmed">
                          Re-called the password ?{" "}
                          <Anchor
                            onClick={() => {
                              setTab("sign-in");
                            }}
                            weight={700}
                            href="#sign-in"
                            color="dimmed"
                          >
                            {" "}
                            Sign in
                          </Anchor>
                        </Text>
                        <Stack p={"xl"}>
                          <TextInput placeholder="Recovery Email" />
                          <Button
                            mt={20}
                            color="dark"
                            variant="filled"
                            fullWidth
                          >
                            {" "}
                            Send Recovery Link
                          </Button>

                          <Text align="center" mt="xs" size="xs" color="dimmed">
                            Don&apos;t have an account ?{" "}
                            <Anchor
                              weight={700}
                              href="#register"
                              color="dimmed"
                              onClick={() => {
                                setTab("register");
                              }}
                            >
                              {" "}
                              Register
                            </Anchor>
                          </Text>
                        </Stack>
                      </Box>
                    </Center>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Center>
          </Fade>
        ) : tab == "register" ? (
          <Fade
            duration={1500}
            style={{
              height: "100%",
              width: "100%",
            }}
          >
            <Center key={nanoid()} id="register" h="100%">
              <Paper p={0} w="100%" maw={900} h="100%" mah={500}>
                <Grid w="100%">
                  <MediaQuery
                    smallerThan={576}
                    styles={{
                      display: "none",
                    }}
                  >
                    <Grid.Col span={12} xs={6}>
                      <Box
                        h={500}
                        sx={{
                          position: "relative",
                        }}
                      >
                        <EdtingImage
                          priority
                          style={{}}
                          fill
                          src="https://images.unsplash.com/photo-1529412828225-7f808a92c04a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1535&q=80"
                        />
                        <Paper
                          radius="xs"
                          p="md"
                          w={"100%"}
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                          }}
                        >
                          <Group position="center">
                            <Text size="xs">
                              Photo by{" "}
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                ml={1}
                                mr={4}
                                href="https://unsplash.com/@martinadams?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Martin Adams
                              </Anchor>
                              on
                              <Anchor
                                color={
                                  colorScheme == "dark" ? "gray.3" : "dark"
                                }
                                weight={700}
                                size="xs"
                                mr={4}
                                ml={4}
                                href="https://unsplash.com/photos/n0kwms_G_cw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                              >
                                Unsplash
                              </Anchor>
                            </Text>
                          </Group>
                        </Paper>
                      </Box>
                    </Grid.Col>
                  </MediaQuery>
                  <Grid.Col span={12} xs={6}>
                    <Center w="100%" h="100%">
                      <Box maw={400} w="100%">
                        <Title
                          transform="capitalize"
                          align="center"
                          mt="xl"
                          order={4}
                        >
                          Register
                        </Title>
                        <Text align="center" mt="xs" size="xs" color="dimmed">
                          Already have an account?{" "}
                          <Anchor
                            onClick={() => {
                              setTab("sign-in");
                            }}
                            weight={700}
                            href="#sign-in"
                            color="dimmed"
                          >
                            {" "}
                            Sign in
                          </Anchor>
                        </Text>
                        <Stack my="md" p={"xl"}>
                          <TextInput placeholder="Email" />
                          <TextInput placeholder="Password" />
                          <TextInput placeholder="Repeat Password" />
                          <Button
                            mt={20}
                            color="dark"
                            variant="filled"
                            fullWidth
                          >
                            {" "}
                            Register
                          </Button>

                          <Anchor
                            onClick={() => {
                              setTab("forgot-password");
                            }}
                            color="dimmed"
                            href="#forgot-password"
                            mt={20}
                            size="xs"
                            align="center"
                          >
                            Forgot your password?
                          </Anchor>
                        </Stack>
                      </Box>
                    </Center>
                  </Grid.Col>
                </Grid>
              </Paper>
            </Center>
          </Fade>
        ) : null}
      </Paper>
    </AppWrapper>
  );
};

export default Signin;
