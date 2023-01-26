import { Card, Menu, Text } from "@mantine/core";
import { useState } from "react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorFontFamily = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  const [fontFamily, setFontFamily] = useState("Font Family");
  return (
    <Menu withArrow>
      <Menu.Target>
        <Card py={4} px="lg">
          <Text size="sm">{fontFamily}</Text>
        </Card>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={() => {
            setFontFamily("Inter");
            editor.chain().focus().setFontFamily("Inter").run();
          }}
        >
          Inter
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            setFontFamily("Sans-Serif");
            editor.chain().focus().setFontFamily("sans-serif").run();
          }}
        >
          Sans Serif
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            setFontFamily("Source Code Pro");
            editor.chain().focus().setFontFamily("Source Code Pro").run();
          }}
        >
          Source Code Pro
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            setFontFamily("Serif");
            editor.chain().focus().setFontFamily("serif").run();
          }}
        >
          Serif
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorFontFamily;
