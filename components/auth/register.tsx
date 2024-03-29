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
  useMantineTheme,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Slide from "react-reveal/Slide";
import EdtingImage from "../global/image";

const RegisterComponent = ({ tab, setTab, placeholder }: any) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Slide
      left
      duration={1000}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Center key={nanoid()} id="register" h="calc(100vh - 50px)">
        <Paper
          bg="transparent"
          radius="xs"
          sx={(theme) => ({
            ["@media (min-width: 300px) and (max-width: 1200px)"]: {
              maxHeight: "100%",
            },
          })}
          p={0}
          w="100%"
          h="100%"
        >
          <Grid
            h="100%"
            w="100%"
            sx={(theme) => ({
              ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                margin: 0,
              },
            })}
          >
            <Grid.Col
              w="100%"
              span={12}
              xs={12}
              sm={12}
              md={12}
              lg={6}
              sx={(theme) => ({
                ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                  padding: 0,
                },
              })}
            >
              <Box
                pos="relative"
                w="100%"
                h={"100%"}
                sx={(theme) => ({
                  position: "relative",
                  ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                    minHeight: 400,
                  },
                })}
              >
                <EdtingImage
                  placeholder={placeholder}
                  fill
                  src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                />
                <Paper
                  radius="xs"
                  p="md"
                  w={"100%"}
                  sx={{
                    position: "absolute",
                    bottom: -20,
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
                        href="https://unsplash.com/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      >
                        Austin Distel
                      </Anchor>
                      on
                      <Anchor
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
                        weight={700}
                        size="xs"
                        mr={4}
                        ml={4}
                        href="https://unsplash.com/photos/VwsuhJ9uee4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      >
                        Unsplash
                      </Anchor>
                    </Text>
                  </Group>
                </Paper>
              </Box>
            </Grid.Col>
            <Grid.Col span={12} xs={12} sm={12} md={12} lg={6}>
              <Center
                w="100%"
                h="100%"
                sx={(theme) => ({
                  ["@media (min-width: 300px) and (max-width: 1200px)"]: {
                    maxHeight: 400,
                  },
                })}
              >
                <Stack
                  mt={50}
                  align="center"
                  w="100%"
                  sx={(theme) => ({
                    ["@media (min-width: 300px) and (max-width: 1000px)"]: {
                      marginTop: 0,
                      height: "100%",
                    },
                  })}
                >
                  <Box maw={400} w="100%">
                    <Title
                      transform="capitalize"
                      align="center"
                      mt={"xl"}
                      order={4}
                    >
                      Register
                    </Title>
                    <Text
                      align="center"
                      mt="xs"
                      size="xs"
                      color={
                        colorScheme == "dark"
                          ? theme.colors.gray[4]
                          : theme.colors.gray[6]
                      }
                    >
                      Already have an account?{" "}
                      <Anchor
                        onClick={() => {
                          setTab("sign-in");
                        }}
                        weight={700}
                        href="#"
                        color="dimmed"
                      >
                        {" "}
                        Sign in
                      </Anchor>
                    </Text>
                    <Stack mt="xl" p={"xl"}>
                      <TextInput
                        sx={(theme) => ({
                          input: {
                            "&::placeholder": {
                              color:
                                colorScheme == "dark"
                                  ? theme.colors.gray[4]
                                  : theme.colors.gray[5],
                            },
                          },
                        })}
                        placeholder="Email"
                      />
                      <TextInput
                        sx={(theme) => ({
                          input: {
                            "&::placeholder": {
                              color:
                                colorScheme == "dark"
                                  ? theme.colors.gray[4]
                                  : theme.colors.gray[5],
                            },
                          },
                        })}
                        placeholder="Password"
                      />
                      <TextInput
                        sx={(theme) => ({
                          input: {
                            "&::placeholder": {
                              color:
                                colorScheme == "dark"
                                  ? theme.colors.gray[4]
                                  : theme.colors.gray[5],
                            },
                          },
                        })}
                        placeholder="Repeat Password"
                      />
                      <Button mt={20} color="dark.7" variant="filled" fullWidth>
                        {" "}
                        Register
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
                  </Box>
                </Stack>
              </Center>
            </Grid.Col>
          </Grid>
        </Paper>
      </Center>
    </Slide>
  );
};

export default RegisterComponent;
