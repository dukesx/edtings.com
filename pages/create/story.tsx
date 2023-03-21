import {
  Anchor,
  Avatar,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Group,
  List,
  Loader,
  Modal,
  MultiSelect,
  Paper,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDebouncedState, useDebouncedValue } from "@mantine/hooks";
import {
  ArrowBendRightDown,
  ArrowRight,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { Suspense, useEffect, useState } from "react";
import TextEditor from "../../components/global/editor/editor";
import EdtingImage from "../../components/global/image";
import EdtingsTagPicker from "../../components/global/tag-picker";
import AppWrapper from "../../components/global/wrapper";
import { DEFAULT_NAV_DATA } from "../../data/generics";
import { EditorOutput } from "../../types/generics";
import { serif } from "../_app";

const CreateStory = () => {
  const [value, setValue] = useDebouncedState<EditorOutput>(
    {
      data: {
        content: [],
        type: "doc",
      },
      words: 0,
    },
    200
  );
  const [progress, setProgress] = useState("");
  const theme = useMantineTheme();
  const [title, setTitle] = useDebouncedState("", 200);
  const { colorScheme } = useMantineColorScheme();
  const [saveModal, setSaveModal] = useState(false);

  var arr = DEFAULT_NAV_DATA;

  useEffect(() => {
    if (title.length > 0) {
      if (value.words > 0) {
        setProgress("Saving Draft.....");
        setTimeout(() => setProgress("Saved"), 1000);
      } else {
        setProgress("");
      }
    } else {
      setProgress("");
    }
  }, [value, title]);

  return (
    <AppWrapper
      headerProps={{
        headerLinks: [
          {
            color: "gray",
            path: "",
            href: "",
            title: "Saving",
            render: (
              <Text weight={500} color="dimmed" size="xs">
                {progress}
              </Text>
            ),
          },
          {
            color: "gray",
            path: "",
            href: "",
            title: "Changes Saved",
            render: (
              <Button
                onClick={() => setSaveModal(true)}
                styles={{
                  label: {
                    fontWeight: 600,
                  },
                }}
                disabled={progress === "Saved" ? false : true}
                color="dark"
                variant="filled"
                size="xs"
                radius="xl"
              >
                Publish
              </Button>
            ),
          },
        ],
      }}
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "",
        navbarLinks: arr,
      }}
      padding={false}
      path="create"
    >
      <Container bg="transparent" size={800}>
        <Textarea
          minRows={1}
          onChange={(e) => setTitle(e.target.value)}
          mt="xl"
          autosize
          variant="default"
          size="xl"
          styles={{
            input: {
              fontFamily: serif.style.fontFamily,
              fontWeight: 400,
              border: 0,
              [":focus"]: {
                borderLeftColor: `${
                  colorScheme == "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[4]
                }`,
              },

              ["::placeholder"]: {
                color:
                  colorScheme == "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[6],
              },
              color:
                colorScheme == "dark"
                  ? theme.colors.dark[1]
                  : theme.colors.gray[7],
              borderLeftWidth: colorScheme == "dark" ? 5 : 5,
              transition: "border 400ms ease-in-out",
              borderLeftStyle: "solid",
              borderLeftColor: "transparent",
              borderRadius: 0,
              background:
                colorScheme == "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              paddingLeft: 40,
              fontSize: 35,
              overflow: "hidden",
            },
          }}
          placeholder="Title"
        />
        <Modal
          closeOnClickOutside={false}
          radius="lg"
          opened={saveModal}
          onClose={() => {
            setSaveModal(false);
          }}
          styles={{
            inner: {
              [theme.fn.smallerThan(1000)]: {
                paddingLeft: 10,
                paddingRight: 10,
              },
            },

            body: {
              minHeight: 1000,
            },

            content: {
              boxShadow: "none",
            },

            title: {
              fontWeight: 700,
              fontSize: 14,
            },
          }}
          fullScreen
          size={"xl"}
          closeButtonProps={{
            ml: "auto",
            radius: "xl",
            mr: {
              xs: 20,
              md: "20%",
            },
            mt: 50,
            mb: "xl",
            size: "md",
          }}
          overlayProps={{
            blur: 4,
            bg: colorScheme == "dark" ? "dark.7" : "white",
          }}
        >
          <Paper maw={800} mx="auto">
            <Group spacing={"sm"}>
              <Title order={5} mb={0}>
                Publishing
              </Title>

              <ThemeIcon radius="xl">
                <ArrowRight size={14} />
              </ThemeIcon>
              <Title
                mt={4}
                maw={500}
                lineClamp={2}
                transform="capitalize"
                order={5}
                weight={600}
              >
                typeoverflow.com - A place to publish coding articles with
                DoFollow links
              </Title>
            </Group>

            <Group
              noWrap
              mt={40}
              w="100%"
              sx={{
                [theme.fn.smallerThan(500)]: {
                  flexWrap: "wrap",
                },
              }}
            >
              <Paper h="100%" withBorder={false} w="100%">
                <Avatar
                  radius="md"
                  styles={{
                    root: {
                      height: 200,
                      maxWidth: 400,
                      [theme.fn.smallerThan(1000)]: {
                        maxWidth: "350px",
                      },
                      width: "100%",
                    },
                    placeholder: {
                      border: "none",
                    },
                  }}
                >
                  <EdtingImage
                    loading="eager"
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80"
                    width={550}
                    height={200}
                  />
                </Avatar>

                <Stack maw={380} mt="xl" pl={0} pr="xl" spacing="xs">
                  <Title order={6}>Description</Title>
                  <Text transform="lowercase" lineClamp={2} size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla neque nunc, bibendum ut tristique at.
                  </Text>
                  <Divider />
                </Stack>
              </Paper>
              <Paper mb="auto" w="100%" maw={350}>
                <Stack mt={-10} h="100%">
                  <Group spacing={8}>
                    <Text>Publishing to:</Text>
                    <Anchor
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      href=""
                      weight={600}
                    >
                      Afx Afzaal
                    </Anchor>
                  </Group>
                  <Stack spacing={5}>
                    <Group spacing={5}>
                      <Text size="sm">Pick some tags so that</Text>
                      <ThemeIcon size="sm" radius="xl">
                        <ArrowBendRightDown size={12} />
                      </ThemeIcon>
                    </Group>
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
                      <List.Item>
                        Google can Index for{" "}
                        <Text component="span" weight={800}>
                          SEO
                        </Text>{" "}
                      </List.Item>
                      <List.Item>
                        We can{" "}
                        <Text component="span" weight={600} underline>
                          categorize
                        </Text>{" "}
                        story
                      </List.Item>
                    </List>
                  </Stack>

                  <EdtingsTagPicker table="tags" />
                  <Text my="xs" size="sm">
                    <Anchor
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      weight={600}
                      href=""
                    >
                      Learn more
                    </Anchor>{" "}
                    about how Publishing works. With this, you agree to our{" "}
                    <Anchor
                      size="sm"
                      color={colorScheme == "dark" ? "gray" : "dark"}
                      weight={600}
                      component="span"
                    >
                      Publishing Terms
                    </Anchor>
                  </Text>
                  <Group spacing="xl" noWrap w="100%">
                    <Button
                      color={colorScheme == "dark" ? "dark.5" : "dark"}
                      fullWidth
                    >
                      Publish
                    </Button>

                    <Anchor
                      weight={400}
                      size="sm"
                      color="gray.7"
                      w={150}
                      href=""
                    >
                      Save draft
                    </Anchor>
                  </Group>
                </Stack>
              </Paper>
            </Group>
          </Paper>
        </Modal>
        <Suspense
          fallback={
            <Center h="100%" w="100%">
              <Stack>
                <Loader variant="bars" />
                <Text>Loading Editor</Text>
              </Stack>
            </Center>
          }
        >
          <TextEditor
            placeholder="Let's Write Something 🤓"
            setValue={setValue}
          />
        </Suspense>
      </Container>
    </AppWrapper>
  );
};

export default CreateStory;
