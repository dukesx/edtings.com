import {
  Blockquote,
  Code,
  Divider,
  Group,
  List,
  Mark,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Fragment } from "react";
import { nanoid } from "nanoid";
import { Prism } from "@mantine/prism";
import EditorRendererParagraph from "./blocks/paragraph";
import EditorRendererListItem from "./blocks/list";
import EditorRendererEmbeds from "./blocks/embeds";
import dracula from "prism-react-renderer/themes/dracula";
import github from "prism-react-renderer/themes/github";
import { Gif } from "@giphy/react-components";
import EditorRendererHeading from "./blocks/heading";
import EdtingImage from "../../image";

// import duotoneLight from "prism-react-renderer/themes/duotoneLight";

interface AfridiDevEditorRendererProps {
  data: any;
  className?: string;
}

const AfridiDevEditorRenderer = ({
  data,
  className,
}: AfridiDevEditorRendererProps) => {
  var newData = data && JSON.parse(data);
  return (
    <div className={className}>
      {newData.content &&
        newData.content.map((data2: any) => {
          if (data2.type == "heading" && data2.content) {
            return (
              <Group spacing={"xs"} key={nanoid()}>
                <EditorRendererHeading
                  level={data2.attrs.level}
                  data={data2.content}
                />
              </Group>
            );
          }

          if (data2.type == "afridi-dev-editor-divider") {
            return (
              <Divider
                labelProps={{
                  color: "dimmed",
                  size: "sm",
                  weight: 400,
                }}
                my="xl"
                label="Div"
                labelPosition="center"
                key={nanoid()}
              />
            );
          }
          if (data2.type == "afridi-dev-editor-gif") {
            return <Gif width={350} key={nanoid()} gif={data2.attrs.gif} />;
          }
          if (data2.type == "paragraph") {
            return (
              <Text key={nanoid()} component="p">
                <EditorRendererParagraph data={data2} key={nanoid()} />
              </Text>
            );
          }

          if (data2.type == "afridi-dev-editor-blockquote") {
            return (
              <Blockquote my="xl" key={nanoid()} cite={data2.attrs.cite}>
                {data2.attrs.quote}
              </Blockquote>
            );
          }

          if (data2.type == "bulletList") {
            return (
              <List spacing="xs" type="unordered" my="sm" key={nanoid()}>
                {data2.content &&
                  data2.content.map(
                    (list: { type: string; content: any[] }) => {
                      if (list.type == "listItem") {
                        return (
                          <EditorRendererListItem
                            type="unordered"
                            order={1}
                            key={nanoid()}
                            data={list}
                          />
                        );
                      }

                      if (list.type == "bulletList") {
                        return (
                          list.content &&
                          list.content.map((lister: any) => {
                            return (
                              <EditorRendererListItem
                                type="unordered"
                                order={2}
                                key={nanoid()}
                                data={lister}
                              />
                            );
                          })
                        );
                      }
                    }
                  )}
              </List>
            );
          }

          if (data2.type == "orderedList") {
            return (
              <List spacing="xs" type="ordered" my="sm" key={nanoid()}>
                {data2.content &&
                  data2.content.map(
                    (list: { type: string; content: any[] }) => {
                      if (list.type == "listItem") {
                        return (
                          <EditorRendererListItem
                            type="ordered"
                            order={1}
                            key={nanoid()}
                            data={list}
                          />
                        );
                      }

                      if (list.type == "ordererdList") {
                        return (
                          list.content &&
                          list.content.map((lister: any) => {
                            return (
                              <EditorRendererListItem
                                type="ordered"
                                order={2}
                                key={nanoid()}
                                data={lister}
                              />
                            );
                          })
                        );
                      }
                    }
                  )}
              </List>
            );
          }

          if (data2.type == "afridi-dev-editor-image") {
            return (
              <Stack key={nanoid()} my="md">
                <div
                  style={{
                    width: data2.attrs.size == "landscape" ? "100%" : 400,
                    height: 400,
                  }}
                >
                  <EdtingImage
                    style={{
                      borderRadius: "10px",
                    }}
                    priority
                    fill
                    src={data2.attrs.src.split("w-900/")[1]}
                    key={nanoid()}
                  />
                </div>
                {data2.attrs.alt && (
                  <Fragment>
                    <Text color="dimmed" align="center">
                      {data2.attrs.alt}
                    </Text>
                  </Fragment>
                )}
              </Stack>
            );
          }

          if (data2.type == "afridi-dev-editor-code-block") {
            return (
              <Prism
                my="xl"
                getPrismTheme={(_theme: any, colorScheme: string) =>
                  colorScheme == "dark" ? dracula : github
                }
                withLineNumbers
                key={nanoid()}
                language={data2.attrs.language.toLowerCase()}
              >
                {data2.attrs.code}
              </Prism>
            );
          }

          if (data2.type == "afridi-dev-editor-embed") {
            return (
              <EditorRendererEmbeds key={nanoid()} src={data2.attrs.src} />
            );
          }
        })}
    </div>
  );
};

export default AfridiDevEditorRenderer;
