import {
  Anchor,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Col,
  Container,
  Divider,
  Group,
  List,
  Loader,
  Modal,
  MultiSelect,
  Paper,
  ScrollArea,
  Select,
  SimpleGrid,
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
import { Fragment, Suspense, useEffect, useState } from "react";
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
  const [choosingPreview, setChoosingPreview] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

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

  console.log(value);

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
              minHeight: 500,
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
              <Paper pos="relative" h="100%" withBorder={false} w="100%">
                <Box
                  maw={{
                    [theme.fn.smallerThan(1000)]: 350,
                    xs: 400,
                  }}
                >
                  <Avatar
                    //@ts-ignore
                    component={choosingPreview ? ScrollArea : undefined}
                    radius="md"
                    styles={{
                      root: {
                        height: choosingPreview ? 300 : 200,
                        overflowX: "hidden",
                        width: "100%",
                      },
                      placeholder: {
                        border: "none",
                        justifyContent: choosingPreview ? "start" : "center",
                        alignItems: choosingPreview ? "start" : "center",
                        justifyItems: choosingPreview ? "start" : "center",
                      },
                    }}
                  >
                    {choosingPreview ? (
                      <SimpleGrid mih={400} pb="xl" spacing={5} cols={2}>
                        {value.data?.content
                          .filter(
                            (mapped: any) =>
                              mapped.type == "afridi-dev-editor-unsplash"
                          )
                          .map((mapped) => (
                            <Box
                              onClick={() => {
                                setPreviewImage(mapped["attrs"]["src"]);
                                setChoosingPreview(false);
                              }}
                            >
                              <EdtingImage
                                loading="eager"
                                src={mapped["attrs"]["src"]}
                                width={189}
                                widthWise
                                height={190}
                                style={{
                                  maxHeight: 200,
                                  objectPosition: "top",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              />
                            </Box>
                          ))}
                      </SimpleGrid>
                    ) : value.data?.content.filter(
                        (mapped: any) =>
                          mapped.type == "afridi-dev-editor-unsplash"
                      ).length &&
                      value.data?.content.filter(
                        (mapped: any) =>
                          mapped.type == "afridi-dev-editor-unsplash"
                      ).length >= 0 ? (
                      <Fragment>
                        <EdtingImage
                          loading="eager"
                          src={
                            previewImage ??
                            value.data?.content.filter(
                              (mapped: any) =>
                                mapped.type == "afridi-dev-editor-unsplash"
                            )[0]["attrs"]["src"]
                          }
                          width={500}
                          height={300}
                          style={{
                            objectPosition: "top",
                            objectFit: "contain",
                          }}
                        />
                        <Box pos="absolute">
                          <Button
                            onClick={() => setChoosingPreview(true)}
                            radius="lg"
                            size="sm"
                            color="dark"
                            variant="gradient"
                            gradient={{
                              from: "dark",
                              to: "gray",
                            }}
                          >
                            Change Preview Image
                          </Button>
                        </Box>
                      </Fragment>
                    ) : (
                      <Paper bg="transparent" px="xl">
                        <Text align="center" weight={600}>
                          Insert a High Quality image in the article to display
                          here
                        </Text>
                      </Paper>
                    )}
                  </Avatar>
                </Box>

                <Stack maw={400} mt="xl" pl={0} pr="xl" spacing="xs">
                  <Title order={6}>Description</Title>
                  <Text transform="lowercase" lineClamp={2} size="sm">
                    {value.data?.content.filter(
                      (mapped: any) =>
                        mapped.type == "paragraph" && mapped.content
                    ).length > 0
                      ? value.data?.content.filter(
                          (mapped: any) =>
                            mapped.type == "paragraph" && mapped.content
                        )[0]["content"][0]["text"]
                      : null}
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
                        story accordingly
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
