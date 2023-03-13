import {
  Divider,
  List,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { nanoid } from "nanoid";
import { WifiNone } from "@phosphor-icons/react";
import EditorRendererParagraph from "./paragraph";

const EditorRendererListItem = ({ data, order, type }: any) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    data.content &&
    data.content.map((listEntry: { type: string; content: any[] }) => {
      if (listEntry.type == "paragraph") {
        return (
          <List.Item
            my="xs"
            icon={
              type == "unordered" ? (
                <ThemeIcon
                  size={8}
                  variant={order > 1 ? "outline" : "filled"}
                  radius="xl"
                  color={colorScheme == "dark" ? "gray" : "dark"}
                >
                  <WifiNone color={colorScheme == "dark" ? "gray" : "dark"} />
                </ThemeIcon>
              ) : null
            }
            style={{
              marginLeft: ` ${order > 1 ? order * 1.5 : order}rem`,
            }}
            key={nanoid()}
          >
            <EditorRendererParagraph data={listEntry} key={nanoid()} />
          </List.Item>
        );
      }

      if (listEntry.type == "bulletList") {
        return (
          listEntry.content &&
          listEntry.content.map((listEntry2: { type: string }) => {
            if (listEntry2.type == "listItem") {
              return (
                <EditorRendererListItem
                  key={nanoid()}
                  type="unordered"
                  order={order + 1}
                  data={listEntry2}
                />
              );
            }
          })
        );
      }

      if (listEntry.type == "orderedList") {
        return (
          <List spacing="xs" type="ordered" key={nanoid()}>
            {listEntry.content &&
              listEntry.content.map((listEntry2: { type: string }) => {
                if (listEntry2.type == "listItem") {
                  return (
                    <EditorRendererListItem
                      key={nanoid()}
                      type="ordered"
                      order={order + 1}
                      data={listEntry2}
                    />
                  );
                }
              })}
          </List>
        );
      }
    })
  );
};

export default EditorRendererListItem;
