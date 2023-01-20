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
} from "@mantine/core";
import { nanoid } from "nanoid";
import { Fade } from "react-awesome-reveal";
import EdtingImage from "../global/image";

const SignInComponent = ({ tab, setTab }: any) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Fade
      duration={2500}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <Center key={nanoid()} id="sign-in" h="100%">
        <Paper
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
                    height: 600,
                  },
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
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
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
                        color={colorScheme == "dark" ? "gray.3" : "dark"}
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
            <Grid.Col span={12} xs={12} sm={12} md={12} lg={6}>
              <Stack w="100%" maw={400} mx="auto" mt={50}>
                <Title transform="capitalize" align="center" mt="xl" order={4}>
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
  );
};

export default SignInComponent;
