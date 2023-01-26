/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */

import {
  useEditor,
  EditorContent,
  BubbleMenu,
  ReactRenderer,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  ActionIcon,
  Box,
  Button,
  Card,
  Divider,
  Group,
  Loader,
  LoadingOverlay,
  Menu,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import React, { Fragment, useEffect, useState } from "react";
import {
  IconBold,
  IconBrandUnsplash,
  IconItalic,
  IconMarkdown,
} from "@tabler/icons";
import CharacterCount from "@tiptap/extension-character-count";
import Underline from "@tiptap/extension-underline";
import FontFamily from "@tiptap/extension-font-family";
import TextStyle from "@tiptap/extension-text-style";
import AfridiDevEditorDivider from "./plugins/afridi-dev-editor-divider";
import AfridiDevEditorLoader from "./plugins/afridi-dev-editor-loader";
import AfridiDevEditorImage from "./plugins/afridi-dev-editor-image";
import AfridiDevEditorUndo from "./menu/undo";
import AfridiDevEditorImageUpload from "./menu/image-upload";
import AfridiDevEditorEmojiSelector from "./menu/emoji-selector";
import AfridiDevEditorHorizontalLine from "./menu/horizontal-line";
import AfridiDevEditorOrderedList from "./menu/ordered-list";
import AfridiDevEditorBulletList from "./menu/bullet-list";
import AfridiDevEditorHeadersSize from "./menu/headers-size";
import AfridiDevEditorFontFamily from "./menu/font-family";
import AfridiDevEditorInsertCodeBlock from "./menu/code-block";
import AfridiDevEditorCode from "./menu/code";
import afridiDevEditorCodeBlock from "./plugins/afridi-dev-editor-code-block";
import AfridiDevEditorInsertRowBelow from "./menu/paragraph";
import Highlight from "@tiptap/extension-highlight";
import AfridiDevEditorHighlight from "./menu/highlight";
import AfridiDevEditorUnderline from "./menu/underline";
import AfridiDevEditorQuote from "./plugins/afridi-dev-editor-quote";
import AfridiDevEditorBlockquoteMenu from "./menu/blockquote";
import AfridiDevEditorEmbeds from "./plugins/afridi-dev-editor-embeds";
import Link from "@tiptap/extension-link";
import AfridiDevEditorInsertEmbeds from "./menu/embeds";
import Script from "next/script";
import Mention from "@tiptap/extension-mention";
import tippy from "tippy.js";
import AfridiDevEditorMentionsDropdown from "./plugins/afridi-dev-editor-mentions-dropdown";
import AfridiDevEditorGiphySelector from "./menu/giphy";
import AfridiDevEditorGiphy from "./plugins/afridi-dev-editor-giphy";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import AfridiDevEditorLink from "./menu/link";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import {
  ArrowsOutLineVertical,
  Article,
  Plus,
  Link as Linker,
  TextAa,
  TextH,
  BracketsAngle,
  TextHOne,
  TextHSix,
  TextItalic,
  TextBolder,
  TextUnderline,
  Quotes,
  TextHFour,
  TextHThree,
} from "phosphor-react";
import { Fade } from "react-awesome-reveal";
import AfridiDevEditorUnsplash from "./plugins/unsplash";

/**
 *  @property {String}   value
 *  @property {Function} setValue
 *  @property {String}   height - in integer
 *  @property {Boolean}  html
 *  @property {Boolean}  noToolbar
 *  @property {Booelan}  basic
 */
export interface AfridiDevEditorProps {
  setValue: Function;
  value?: any;
  placeholder?: string;
  basic?: boolean;
  isScrollable?: boolean | false;
  height?: number;
  html?: boolean;
  noToolbar?: boolean | false;
}

export const TextEditor = ({
  setValue,
  value,
  basic,
  isScrollable,
  height,
  placeholder,
  noToolbar = false,
  html,
}: AfridiDevEditorProps) => {
  var editorRef: any = React.createRef();
  const { colorScheme } = useMantineColorScheme();
  const [loadingSpinner, setLoadingSpinner] = useState(false);
  const theme = useMantineTheme();
  const { supabaseClient, session, isLoading } = useSessionContext();
  const [floating, setFloating] = useState(true);

  const CustomMentions = Mention.extend({
    addAttributes: () => {
      return {
        id: {
          default: null,
          parseHTML: (element) => element.getAttribute("data-id"),
          renderHTML: (attributes) => {
            if (!attributes.id) {
              return {};
            }

            return {
              "data-id": attributes.id,
            };
          },
        },

        label: {
          default: null,
          parseHTML: (element) => element.getAttribute("data-label"),
          renderHTML: (attributes) => {
            if (!attributes.label) {
              return {};
            }

            return {
              "data-label": attributes.label,
            };
          },
        },

        bio: {
          default: null,
          parseHTML: (element) => element.getAttribute("data-label"),
          renderHTML: (attributes) => {
            if (!attributes.bio) {
              return {};
            }

            return {
              "data-label": attributes.bio,
            };
          },
        },

        avatar: {
          default: null,
          parseHTML: (element) => element.getAttribute("data-id"),
          renderHTML: (attributes) => {
            if (!attributes.avatar) {
              return {};
            }

            return {
              "data-avatar": attributes.avatar,
            };
          },
        },

        username: {
          default: null,
          parseHTML: (element) => element.getAttribute("data-id"),
          renderHTML: (attributes) => {
            if (!attributes.username) {
              return {};
            }

            return {
              "data-username": attributes.username,
            };
          },
        },
      };
    },
  });

  // useEffect(() => {
  //   if (!value && editor) {
  //     editor.commands.clearContent();
  //   }
  // }, [value]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ codeBlock: false }),
      CharacterCount,
      Underline,
      FontFamily,
      TextStyle,
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: "default-image",
        },
      }),
      AfridiDevEditorDivider,
      AfridiDevEditorUnsplash,
      AfridiDevEditorLoader,
      AfridiDevEditorImage,
      afridiDevEditorCodeBlock,
      Highlight.configure({ multicolor: true }),
      AfridiDevEditorQuote,
      AfridiDevEditorEmbeds,
      //@ts-ignore
      Link.configure({
        autolink: true,
        openOnClick: true,
        linkOnPaste: true,
        HTMLAttributes: {
          className: "cursor-pointer",
          style: "cursor:pointer",
        },
      }),
      CustomMentions.configure({
        HTMLAttributes: {
          class: "mention",
        },

        renderLabel({ options, node }) {
          return `${options.suggestion.char}${
            node.attrs.label ?? node.attrs.id
          }`;
        },

        suggestion: {
          //@ts-ignore
          items: async ({ editor, query }: any) => {
            const { data, error } = await supabaseClient
              .from("authors")
              .select(
                `
            id,
            username,
            full_name,
            email,
            dp,
            bio
            `
              )
              .ilike("full_name", `%${query}%`);
            return data;
          },
          render: () => {
            let component: any;
            let popup: any;

            return {
              onStart: (props: any) => {
                if (!props.editor.isActive("heading")) {
                  component = new ReactRenderer(
                    AfridiDevEditorMentionsDropdown,
                    {
                      props,
                      editor: props.editor,
                    }
                  );

                  if (!props.clientRect) {
                    return;
                  }

                  popup = tippy("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                  });
                }
              },

              onUpdate(props: any) {
                component.updateProps(props);

                if (!props.clientRect) {
                  return;
                }

                popup[0].setProps({
                  getReferenceClientRect: props.clientRect,
                });
              },

              onKeyDown(props: any) {
                if (props.event.key === "Escape") {
                  popup[0].hide();

                  return true;
                }

                return component.ref?.onKeyDown(props);
              },

              onExit() {
                popup[0].destroy();
                component.destroy();
              },
            };
          },
        },
      }),
      AfridiDevEditorGiphy,
      Placeholder.configure({
        placeholder: placeholder ?? "Let's write something awsum!",
      }),
    ],
    content: value ? value.data : "",
    autofocus: true,
    enablePasteRules: true,
    onUpdate: ({ editor }) => {
      if (html) {
        const html = editor.getHTML();
        setValue({
          data: html,
          words: editor.storage.characterCount.words(),
        });
      } else {
        const json = editor.getJSON();
        setValue({
          data: json,
          words: editor.storage.characterCount.words(),
        });
      }
    },
  });

  return (
    <Stack spacing={0}>
      <Script
        src="https://cdn.iframe.ly/embed.js?api_key=4a589c2e0d46bd4afc5d8c"
        strategy="afterInteractive"
      />
      <LoadingOverlay
        loader={
          <Stack align="center">
            <Loader variant="bars" color="blue" />
            <Text weight={600}>Uploading Image</Text>
          </Stack>
        }
        visible={loadingSpinner}
        overlayBlur={2}
      />
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{
            arrow: true,
            duration: 100,
            hideOnClick: true,
          }}
        >
          <Card shadow="xl" bg="dark" p={8}>
            <Group noWrap spacing={1}>
              <ActionIcon
                variant={editor.isActive("bold") ? "transparent" : "subtle"}
                color={
                  editor.isActive("bold")
                    ? "blue.6"
                    : colorScheme == "dark"
                    ? "dark"
                    : "gray.1"
                }
                onClick={() => editor.chain().focus().toggleBold().run()}
                radius="xl"
                size="lg"
                sx={(theme) => ({
                  [":hover"]: {
                    color: editor.isActive("bold")
                      ? theme.colors.blue[6]
                      : colorScheme == "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.dark[6],
                  },
                })}
              >
                <TextBolder weight="bold" size={18} />
              </ActionIcon>

              <ActionIcon
                variant={editor.isActive("italic") ? "transparent" : "subtle"}
                color={
                  editor.isActive("italic")
                    ? "blue.6"
                    : colorScheme == "dark"
                    ? "dark"
                    : "gray.1"
                }
                onClick={() => editor.chain().focus().toggleItalic().run()}
                radius="xl"
                size="lg"
                sx={(theme) => ({
                  [":hover"]: {
                    color: editor.isActive("italic")
                      ? theme.colors.blue[6]
                      : colorScheme == "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.dark[6],
                  },
                })}
              >
                <TextItalic weight="bold" size={18} />
              </ActionIcon>

              <ActionIcon
                variant={
                  editor.isActive("underline") ? "transparent" : "subtle"
                }
                color={
                  editor.isActive("underline")
                    ? "blue.6"
                    : colorScheme == "dark"
                    ? "dark"
                    : "gray.1"
                }
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                radius="xl"
                size="lg"
                sx={(theme) => ({
                  [":hover"]: {
                    color: editor.isActive("underline")
                      ? theme.colors.blue[6]
                      : colorScheme == "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.dark[6],
                  },
                })}
              >
                <TextUnderline weight="bold" size={18} />
              </ActionIcon>
              <Divider
                my="auto"
                mx={4}
                sx={{
                  height: 28,
                }}
                color={colorScheme == "dark" ? "dark.4" : "dark.3"}
                orientation="vertical"
              />

              <ActionIcon
                variant={
                  editor.isActive("heading", { level: 1 })
                    ? "transparent"
                    : "subtle"
                }
                color={
                  editor.isActive("heading", { level: 1 })
                    ? "blue.6"
                    : colorScheme == "dark"
                    ? "dark"
                    : "gray.1"
                }
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                radius="xl"
                size="lg"
                sx={(theme) => ({
                  [":hover"]: {
                    color: editor.isActive("heading", { level: 1 })
                      ? theme.colors.blue[6]
                      : colorScheme == "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.dark[6],
                  },
                })}
              >
                <TextHOne weight="bold" size={18} />
              </ActionIcon>

              <ActionIcon
                variant={
                  editor.isActive("heading", { level: 3 })
                    ? "transparent"
                    : "subtle"
                }
                color={
                  editor.isActive("heading", { level: 3 })
                    ? "blue.6"
                    : colorScheme == "dark"
                    ? "dark"
                    : "gray.1"
                }
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                radius="xl"
                size="lg"
                sx={(theme) => ({
                  [":hover"]: {
                    color: editor.isActive("heading", { level: 3 })
                      ? theme.colors.blue[6]
                      : colorScheme == "dark"
                      ? theme.colors.gray[0]
                      : theme.colors.dark[6],
                  },
                })}
              >
                <TextHThree weight="bold" size={18} />
              </ActionIcon>
            </Group>
          </Card>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{
            arrow: true,
            duration: 100,
            hideOnClick: true,
            zIndex: 100,
          }}
        >
          <Box
            sx={(theme) => ({
              marginLeft: "-50px",
              [`@media (min-width: 600px) and (max-width: 900px)`]: {
                marginLeft: -45,
              },
            })}
          >
            <Menu
              opened={floating}
              onClose={() => setFloating(false)}
              position="right"
              zIndex={4000}
            >
              <Menu.Target>
                <ActionIcon
                  radius="xl"
                  color={colorScheme == "dark" ? "blue" : "dark"}
                  variant="filled"
                  onClick={() => {
                    setFloating(true);
                  }}
                >
                  <Plus />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown
                bg="transparent"
                sx={{
                  border: "none",
                }}
              >
                <Group spacing="xs">
                  <Tooltip label="Add Image from Unsplash">
                    <ActionIcon
                      onClick={() => {
                        editor.commands.insertContent({
                          type: "afridi-dev-editor-unsplash",
                        });
                        editor.commands.enter();
                      }}
                      size="lg"
                      variant="filled"
                      color={"dark"}
                      sx={(theme) => ({
                        backgroundColor:
                          colorScheme == "dark"
                            ? theme.white
                            : theme.colors.dark[8],
                        color:
                          colorScheme == "dark"
                            ? theme.colors.dark[8]
                            : theme.white,
                        [":hover"]: {
                          backgroundColor:
                            colorScheme == "dark"
                              ? theme.white
                              : theme.colors.dark[8],
                        },
                      })}
                      radius="xl"
                    >
                      <IconBrandUnsplash size={18} />
                    </ActionIcon>
                  </Tooltip>

                  <AfridiDevEditorHorizontalLine
                    colorScheme={colorScheme}
                    editor={editor}
                    theme={theme}
                  />

                  <AfridiDevEditorInsertEmbeds
                    colorScheme={colorScheme}
                    editor={editor}
                    theme={theme}
                  />
                </Group>
              </Menu.Dropdown>
            </Menu>
          </Box>
        </FloatingMenu>
      )}
      {
        //@ts-ignore
      }
      <Paper
        //@ts-ignore
        component={isScrollable == true ? ScrollArea : "div"}
        mih={"100vh"}
        style={{
          height: height ?? "100%",
        }}
      >
        <EditorContent height={"100%"} editor={editor} />
      </Paper>

      <Group mt="xl">
        <Group spacing={5}>
          <Text color="dimmed" size="sm">
            Supports
          </Text>
          <IconMarkdown color={theme.colors.gray[5]} strokeWidth={1.5} />
        </Group>

        <Divider />
        <Text color="dimmed" size="sm">
          {editor && editor.storage.characterCount.characters()} characters
        </Text>
        <Divider />
        <Text color="dimmed" size="sm">
          {editor && editor.storage.characterCount.words()} words
        </Text>
      </Group>
    </Stack>
  );
};

export default TextEditor;
