/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Card,
  Center,
  Divider,
  Group,
  Loader,
  LoadingOverlay,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { IconAlertCircle, IconBug, IconError404 } from "@tabler/icons";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDebouncedValue, useWindowEvent } from "@mantine/hooks";

export default Node.create({
  name: "afridi-dev-editor-embed",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(MantineEmbeds);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-embed",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-embed",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addAttributes: () => {
    return {
      src: {
        default: null,
      },
    };
  },
});

const MantineEmbeds = (props: any) => {
  const [loading, setLoading] = useState(false);
  const [embed, setEmbed] = useState<any>();
  const { colorScheme } = useMantineColorScheme();
  const [value, setValue] = useState("");
  const [debounced] = useDebouncedValue(value, 200);
  const getEmbeds = async () => {
    setLoading(true);

    const fetcher = await fetch(
      // `https://embeds.fitlive.health/iframely?url=${props.node.attrs.src}
      `https://iframe.ly/api/iframely?url=${value}&api_key=4a589c2e0d46bd4afc5d8c&theme=${colorScheme}`
    );
    //
    //
    //
    //
    //
    const res = await fetcher.json();
    //
    //
    //
    setEmbed(res);
    setLoading(false);
    props.editor.commands.focus();
    props.updateAttributes({
      src: debounced,
    });
    //
    //
    //
    //
  };

  useWindowEvent("keydown", (event) => {
    if (event.key == "Enter") {
      event.preventDefault();

      getEmbeds();
    }
  });

  return (
    <NodeViewWrapper>
      <Box my="xl">
        {loading ? (
          <Card
            maw={800}
            mx="auto"
            h={400}
            sx={(theme) => ({
              borderColor:
                colorScheme == "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.dark[8],
            })}
            withBorder
          >
            <Center h="100%">
              <Stack align="center">
                <Loader
                  size="sm"
                  variant="bars"
                  color={colorScheme == "dark" ? "gray.3" : "gray.8"}
                />
                <Text size="sm">Loading OEmbed</Text>
              </Stack>
            </Center>
          </Card>
        ) : //@ts-ignore
        embed && embed.html ? (
          //@ts-ignore
          <ScrollArea mx="auto" maw={800}>
            <div dangerouslySetInnerHTML={{ __html: embed.html }} />
          </ScrollArea>
        ) : embed && embed.meta ? (
          <Card radius="md" withBorder>
            {embed && embed.links.thumbnail ? (
              <Card.Section>
                <Image
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  src={embed && embed.links.thumbnail[0].href}
                  loader={({ src }) => src}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Card.Section>
            ) : null}
            <Stack mt="md">
              <Title order={5}>{embed && embed.meta.title}</Title>
              <Text lineClamp={2} size="sm" color="dimmed">
                {embed && embed.meta.description}
              </Text>
              <Group position="apart" mt="sm">
                <Image
                  alt=""
                  width={20}
                  height={20}
                  objectFit="cover"
                  src={embed && embed.links.icon[0].href}
                  loader={({ src }) => src}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <Text ml="auto" size="xs" color="dimmed">
                  {embed && embed.meta.site}
                </Text>
              </Group>
            </Stack>
          </Card>
        ) : (
          // <Card withBorder>
          //   <Center>
          //     <Stack align="center">
          //       <ThemeIcon radius="xl" size={100} color="red" variant="light">
          //         <IconBug size={40} />
          //       </ThemeIcon>
          //       <Text size="sm" weight={600} align="center">
          //         {embed && embed.error}
          //       </Text>
          //     </Stack>
          //   </Center>
          // </Card>
          <TextInput
            mx="auto"
            maw={700}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter URL and Press Enter"
          />
        )}
      </Box>
    </NodeViewWrapper>
  );
};
