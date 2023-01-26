import {
  ActionIcon,
  Anchor,
  Blockquote,
  Button,
  Card,
  Center,
  Divider,
  Group,
  Loader,
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
import { IconBlockquote, IconQuote } from "@tabler/icons";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { Placeholder, SmileyXEyes, X } from "phosphor-react";
import { Fragment, useEffect, useState } from "react";
import EdtingImage from "../../image";
import UnsplashLogo from "../../../../public/unsplash.svg";
import Image from "next/image";

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
      blurhash: {
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
        <Stack mx="auto" w="100%" maw={700}>
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
                <Stack align="center">
                  <Group position="center">
                    <ThemeIcon
                      size={70}
                      color="white"
                      sx={{
                        position: "relative",
                        borderRadius: "50%",
                      }}
                    >
                      <Image
                        className="animate"
                        src={UnsplashLogo}
                        style={{}}
                        alt=""
                        width={50}
                        priority
                        height={50}
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
                maw={"100%"}
                h={"100%"}
                sx={{
                  position: "relative",
                }}
              >
                <EdtingImage
                  height={image.height / 4.5}
                  width={image.width / 4.5}
                  src={image.urls.regular}
                  placeholder={image.blur_hash}
                  style={{
                    aspectRatio: image.width / image.height,
                    objectFit: "unset",
                  }}
                />
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
                <Group maw={700} mx="auto" pb="xl" position="apart">
                  {page > 1 ? (
                    <Text
                      size="xs"
                      sx={{
                        cursor: "pointer",
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
              <Group position="center">
                {images.map((mapped: any) => {
                  return (
                    <Card
                      sx={(theme) => ({
                        [theme.fn.smallerThan(1000)]: {
                          width: 200,
                        },
                      })}
                      w={220}
                      p={0}
                      h="350px"
                      onClick={async () => {
                        const fetcher = await fetch(
                          mapped.links.download_location +
                            "&client_id=wJfdCZ1eIo3wcotiSDT0xNInM3mUXZ4yeUOPmwRd3Bg"
                        );
                        setImage(mapped);
                        props.updateAttributes({
                          src: mapped.urls.regular,
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
                      <EdtingImage
                        height={350}
                        width={mapped.width / 14}
                        src={mapped.urls.regular}
                        placeholder={mapped.blurHash}
                        style={{
                          aspectRatio: mapped.width / mapped.height,
                        }}
                      />
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
