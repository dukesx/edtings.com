import { ActionIcon, Group, Menu, Tooltip } from "@mantine/core";
import {
  TextH,
  TextHFive,
  TextHFour,
  TextHOne,
  TextHSix,
  TextHThree,
  TextHTwo,
} from "@phosphor-icons/react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorHeadersSize = ({
  editor,
  theme,
  colorScheme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Menu>
      <Menu.Target>
        <Tooltip label="Header Size">
          <ActionIcon
            variant={editor.isActive("heading") ? "filled" : "subtle"}
            color={editor.isActive("heading") ? "blue" : "gray"}
            radius="xl"
            size="lg"
          >
            <TextH
              color={
                editor.isActive("heading")
                  ? theme.white
                  : colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={18}
            />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Group spacing={6} noWrap>
          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 1 }).run()}
          >
            <TextHOne
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />{" "}
          </Menu.Item>

          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 2 }).run()}
          >
            <TextHTwo
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />
          </Menu.Item>

          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 3 }).run()}
          >
            <TextHThree
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />{" "}
          </Menu.Item>

          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 4 }).run()}
          >
            <TextHFour
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />{" "}
          </Menu.Item>

          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 5 }).run()}
          >
            <TextHFive
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />{" "}
          </Menu.Item>

          <Menu.Item
            onClick={() => editor.chain().toggleHeading({ level: 6 }).run()}
          >
            <TextHSix
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={20}
            />{" "}
          </Menu.Item>
        </Group>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorHeadersSize;
