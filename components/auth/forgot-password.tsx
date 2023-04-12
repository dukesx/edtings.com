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

const ForgotPasswordComponent = ({ tab, setTab, placeholder }: any) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <Slide
      right
      duration={1000}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Center key={nanoid()} id="forgot-password" h="calc(100vh - 50px)">
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
                  src="https://unsplash-cache.edtings.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1930&q=80"
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
                        href="https://unsplash.com/@danny144?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                      >
                        Dan Nelson
                      </Anchor>
                      on
                      <Anchor
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
                        weight={700}
                        size="xs"
                        mr={4}
                        ml={4}
                        href="https://unsplash.com/photos/ah-HeguOe9k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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
                  sx={(theme) => ({
                    ["@media (min-width: 300px) and (max-width: 1000px)"]: {
                      marginTop: 0,
                    },
                  })}
                  w="100%"
                >
                  <Box maw={400} w="100%" mt={0}>
                    <Title
                      transform="capitalize"
                      align="center"
                      mt="xl"
                      order={4}
                    >
                      Forgot Password
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
                      Recalled the password ?{" "}
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
                    <Stack mt="sm" p={"xl"}>
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
                        placeholder="Recovery Email"
                      />
                      <Button mt={20} color="dark.7" variant="filled" fullWidth>
                        {" "}
                        Send Recovery Link
                      </Button>

                      <Text align="center" mt="xs" size="xs" color="dimmed">
                        Don&apos;t have an account ?{" "}
                        <Anchor
                          weight={700}
                          href="#"
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
                </Stack>
              </Center>
            </Grid.Col>
          </Grid>
        </Paper>
      </Center>
    </Slide>
  );
};

export default ForgotPasswordComponent;
