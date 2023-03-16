import {
  ActionIcon,
  Anchor,
  Blockquote,
  Box,
  Button,
  Card,
  Center,
  Divider,
  Group,
  Loader,
  MediaQuery,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDebouncedValue, useWindowEvent } from "@mantine/hooks";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { Fragment, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import AfridiEditorUnsplashSingleImage from "./unsplash-single-image";
import AfridiDevEditorUnsplashGridImage from "./unsplash-grid-image";
import { Placeholder, X } from "@phosphor-icons/react";
import { Unsplash as UnsplashLogo } from "@icons-pack/react-simple-icons";

export default Node.create({
  name: "afridi-dev-editor-unsplash",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(Unsplash);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-unsplash",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-unsplash",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      blurHash: {
        default: null,
      },
      credits: {
        default: {
          authorName: null,
          authorUsername: null,
        },
      },
    };
  },
});

const Unsplash = (props: any) => {
  const theme = useMantineTheme();
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<any>(null);
  const { colorScheme } = useMantineColorScheme();
  const [gridProps, setGridProps] = useState<any>(null);
  const [page, setPage] = useState(1);

  //
  //
  //
  const getPhotos = async (pager?: any) => {
    const fetcher = await fetch(
      `https://api.unsplash.com/search/photos?client_id=wJfdCZ1eIo3wcotiSDT0xNInM3mUXZ4yeUOPmwRd3Bg&page=1&query=${value}&per_page=9&page=${
        pager ? pager : 1
      }`
    );
    const data = await fetcher.json();
    setImages(data.results);
    setGridProps({
      total: data.total,
      total_pages: data.total_pages,
    });

    setLoading(false);
  };

  useWindowEvent("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      setLoading(true);
      getPhotos();
    }
  });

  useEffect(() => {
    setImage(null);
    if (debounced.length == 0) {
      setImages([]);
    }
  }, [debounced]);

  return (
    <NodeViewWrapper>
      <Stack mih={400} mx="auto" my="xl">
        <Stack mx="auto" w="100%" maw={800}>
          {!image && (
            <TextInput
              w="100%"
              mx="auto"
              rightSection={
                value.length > 0 && (
                  <Tooltip label="Clear">
                    <ActionIcon
                      onClick={() => setValue("")}
                      radius="xl"
                      size="sm"
                      variant="subtle"
                      color="gray"
                    >
                      <X size={14} />
                    </ActionIcon>
                  </Tooltip>
                )
              }
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter a search term and press enter"
            />
          )}
        </Stack>
        <Paper>
          {loading ? (
            <Card w="100%">
              <Center w="100%" h="100%">
                <Stack align="center" spacing={0}>
                  <Group position="center">
                    <ThemeIcon
                      size={70}
                      color="white"
                      sx={{
                        position: "relative",
                        borderRadius: "50%",
                      }}
                    >
                      <UnsplashLogo
                        height={35}
                        width={35}
                        className="animate"
                        color="black"
                      />
                    </ThemeIcon>
                  </Group>
                  <Title mt="xs" order={5} align="center">
                    Searching Unsplash
                  </Title>
                </Stack>
              </Center>
            </Card>
          ) : image ? (
            <Stack align="center">
              <Card
                p={0}
                style={{
                  aspectRatio: image.width / image.height,
                  maxWidth: 650,
                }}
              >
                <Box
                  sx={(theme) => ({
                    [theme.fn.smallerThan(600)]: {
                      ["img"]: {
                        width: "100%",
                        height: "100%",
                      },
                    },
                  })}
                >
                  <AfridiEditorUnsplashSingleImage
                    height={650 / (image.width / image.height)}
                    width={650}
                    src={image.urls.regular}
                    placeholder={image.blur_hash}
                    style={{
                      objectFit: "unset",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </Box>
              </Card>
              <Text color={colorScheme == "dark" ? "dimmed" : "dark"} size="xs">
                Photo by{" "}
                <Anchor
                  color={colorScheme == "dark" ? "dimmed" : "dark"}
                  weight={600}
                  href={`https://unsplash.com/@${image.user.username}?utm_source=edtings.com&utm_medium=referral`}
                >
                  {image.user.first_name +
                    " " +
                    (image.user.last_name ? image.user.last_name : "")}
                </Anchor>{" "}
                on{" "}
                <Anchor
                  color={colorScheme == "dark" ? "dimmed" : "dark"}
                  weight={600}
                  href="https://unsplash.com/?utm_source=edtings.com&utm_medium=referral"
                >
                  Unsplash
                </Anchor>
              </Text>
            </Stack>
          ) : images.length > 0 ? (
            <Fragment>
              {gridProps && (
                <Group
                  sx={(theme) => ({
                    [theme.fn.smallerThan(1000)]: {
                      maxWidth: 600,
                    },
                  })}
                  mx="auto"
                  maw={680}
                  pb="xl"
                  position="apart"
                >
                  {page > 1 ? (
                    <Text
                      size="xs"
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setPage(page - 1);
                        setImages([]);
                        getPhotos(page - 1);
                      }}
                      weight={500}
                    >
                      Prev
                    </Text>
                  ) : null}
                  <Text size="xs">{gridProps.total} Results</Text>
                  {
                    <Text
                      sx={{
                        cursor: "pointer",
                      }}
                      size="xs"
                      onClick={() => {
                        setPage(page + 1);
                        getPhotos(page + 1);
                      }}
                      weight={500}
                    >
                      Next
                    </Text>
                  }
                </Group>
              )}
              <Group
                maw={750}
                sx={(theme) => ({
                  display: "block",
                  columnGap: 2,
                  columns: 3,
                  [theme.fn.smallerThan(1000)]: {
                    columns: 3,
                  },
                })}
                spacing="xs"
                mx="auto"
              >
                {images.map((mapped: any, index: any) => {
                  return (
                    <Card
                      key={nanoid()}
                      className="hover-unsplash-card"
                      style={{
                        aspectRatio: mapped.width / mapped.height,
                      }}
                      p={0}
                      sx={() => ({
                        cursor: "pointer",
                        border: "4px solid transparent",
                        [":hover"]: {
                          outlineColor: "blue",
                          outlineWidth: 2,
                          borderColor: theme.colors.blue[6],
                        },
                      })}
                      onClick={async () => {
                        const fetcher = await fetch(
                          mapped.links.download_location +
                            "&client_id=wJfdCZ1eIo3wcotiSDT0xNInM3mUXZ4yeUOPmwRd3Bg"
                        );
                        setImage(mapped);
                        props.updateAttributes({
                          src: mapped.urls.regular.replaceAll(
                            "https://images.unsplash.com",
                            "https://unsplash-cache.edtings.com"
                          ),
                          blurHash: mapped.blur_hash,
                          credits: {
                            authorName:
                              mapped.user.first_name +
                              " " +
                              mapped.user.last_name,
                            authorUsername: mapped.user.username,
                          },
                        });
                      }}
                    >
                      <MediaQuery
                        largerThan={599}
                        styles={{
                          display: "none",
                        }}
                      >
                        <AfridiDevEditorUnsplashGridImage
                          key={nanoid()}
                          placeholder={mapped.blur_hash}
                          width={100}
                          height={100 / (mapped.width / mapped.height)}
                          src={mapped.urls.regular}
                        />
                      </MediaQuery>

                      <MediaQuery
                        smallerThan={600}
                        largerThan={1299}
                        styles={{
                          display: "none",
                        }}
                      >
                        <AfridiDevEditorUnsplashGridImage
                          key={nanoid()}
                          placeholder={mapped.blur_hash}
                          width={200}
                          height={200 / (mapped.width / mapped.height)}
                          src={mapped.urls.regular}
                        />
                      </MediaQuery>

                      <MediaQuery
                        smallerThan={1300}
                        styles={{
                          display: "none",
                        }}
                      >
                        <AfridiDevEditorUnsplashGridImage
                          key={nanoid()}
                          placeholder={mapped.blur_hash}
                          width={300}
                          height={300 / (mapped.width / mapped.height)}
                          src={mapped.urls.regular}
                        />
                      </MediaQuery>

                      <Box
                        className="hovered-unsplash-meta"
                        sx={(theme) => ({
                          display: "none",
                          bottom: 0,
                          position: "absolute",
                          background: theme.fn.rgba(theme.colors.dark[8], 0.5),
                          height: "100%",
                          width: "100%",
                        })}
                      >
                        <Anchor
                          href={mapped.user.links.html}
                          sx={{
                            bottom: 15,
                            position: "absolute",
                            left: 10,
                            color: "white",
                          }}
                          size="sm"
                        >
                          {`${mapped.user.first_name} ${
                            mapped.user.last_name ? mapped.user.last_name : ""
                          }`}
                        </Anchor>
                      </Box>
                    </Card>
                  );
                })}
              </Group>
            </Fragment>
          ) : (
            <Card w="100%">
              <Group position="center">
                <ThemeIcon
                  size={90}
                  color={colorScheme == "dark" ? "dark.7" : "gray.1"}
                  sx={{
                    position: "relative",
                    borderRadius: "50%",
                  }}
                >
                  <Placeholder color={theme.colors.dark[2]} size={70} />
                </ThemeIcon>
              </Group>
              <Title color="gray" mt="xs" order={3} align="center">
                Hmmmm
              </Title>
              <Text weight={500} color="gray" size="sm" mt="xs" align="center">
                Search something or retry searching
              </Text>
            </Card>
          )}
        </Paper>
      </Stack>
    </NodeViewWrapper>
  );
};
