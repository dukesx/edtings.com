import {
  Box,
  Center,
  Grid,
  Group,
  MediaQuery,
  Anchor,
  Paper,
  Text,
  Stack,
  Title,
  TextInput,
  Button,
  useMantineColorScheme,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import EdtingImage from "../global/image";
import GoogleLogo from "../../public/google.svg";
import Image from "next/image";
import FacebookLogo from "../../public/facebook.svg";
import NotionLogo from "../../public/notion.svg";
import AppleLogo from "../../public/apple-logo.svg";
import { useSessionContext } from "@supabase/auth-helpers-react";

const SignInComponent = ({ tab, setTab, placeholder }: any) => {
  const { colorScheme } = useMantineColorScheme();
  const { session, supabaseClient } = useSessionContext();
  return (
    <Slide
      up
      duration={1000}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Center h="calc(100vh - 50px)" key={nanoid()} id="sign-in">
        <Paper
          radius="xs"
          sx={(theme) => ({
            ["@media (min-width: 300px) and (max-width: 1200px)"]: {
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
              ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                margin: 0,
              },
            })}
          >
            <Grid.Col
              sx={(theme) => ({
                ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                  padding: 0,
                },
              })}
              span={12}
              xs={12}
              sm={12}
              md={12}
              lg={6}
            >
              <Box
                h={500}
                sx={(theme) => ({
                  position: "relative",
                  ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                    height: 300,
                  },
                  ["@media (min-width: 600px) and (max-width: 1200px)"]: {
                    height: 500,
                  },
                })}
              >
                <EdtingImage
                  placeholder={placeholder}
                  fill
                  src="https://unsplash-cache.edtings.com/photo-1588460789007-a79cfe129bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
                        weight={700}
                        size="xs"
                        ml={1}
                        mr={4}
                        href="https://unsplash.com/@kbendakhlia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      >
                        Karim Ben Van
                      </Anchor>
                      on
                      <Anchor
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
                        weight={700}
                        size="xs"
                        mr={4}
                        ml={4}
                        href="https://unsplash.com/photos/F2reN77g_gg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      >
                        Unsplash
                      </Anchor>
                    </Text>
                  </Group>
                </Paper>
              </Box>
            </Grid.Col>
            <Grid.Col span={12} xs={12} sm={12} md={12} lg={6}>
              <Stack
                mt={25}
                spacing={0}
                w="100%"
                maw={400}
                mx="auto"
                sx={(theme) => ({
                  ["@media (min-width: 300px) and (max-width: 1000px)"]: {
                    marginTop: 0,
                  },
                })}
              >
                <Title transform="capitalize" align="center" mt="xl" order={4}>
                  Sign in
                </Title>
                <Text align="center" mt="xs" size="xs" color="dimmed">
                  Don&apos;t have an account?{" "}
                  <Anchor
                    onClick={(e) => {
                      setTab("register");
                    }}
                    weight={700}
                    href="#"
                    color="dimmed"
                  >
                    {" "}
                    Register
                  </Anchor>
                </Text>

                <Group mt="lg" position="center">
                  <Tooltip label="Sign in with Google">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      radius="xl"
                      color="gray.0"
                    >
                      <Image
                        priority
                        alt=""
                        src={GoogleLogo}
                        width={22}
                        height={22}
                      />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Sign in with Facebook">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      radius="xl"
                      color="gray.0"
                    >
                      <Image
                        priority
                        alt=""
                        src={FacebookLogo}
                        width={24}
                        height={24}
                      />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label="Sign in with Notion">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      radius="xl"
                      color="gray.0"
                    >
                      <Image
                        priority
                        alt=""
                        src={NotionLogo}
                        width={24}
                        height={24}
                      />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Sign in with Apple">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      radius="xl"
                      color="gray.0"
                    >
                      <Image
                        priority
                        alt=""
                        src={AppleLogo}
                        width={21}
                        height={21}
                      />
                    </ActionIcon>
                  </Tooltip>
                </Group>

                <Stack mt={0} p={"xl"}>
                  <TextInput placeholder="Email" />
                  <TextInput placeholder="Password" />
                  <Button mt={15} color="dark" variant="filled" fullWidth>
                    {" "}
                    Sign in
                  </Button>

                  <Anchor
                    onClick={() => {
                      setTab("forgot-password");
                    }}
                    color="dimmed"
                    href="#"
                    mt={10}
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
    </Slide>
  );
};

export default SignInComponent;
