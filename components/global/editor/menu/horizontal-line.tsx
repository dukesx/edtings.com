import { ActionIcon, Menu, Text, ThemeIcon, Tooltip } from "@mantine/core";
import { ArrowsOutLineVertical } from "@phosphor-icons/react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorHorizontalLine = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Menu.Item
      onClick={() => {
        editor
          .chain()
          .focus()
          .insertContent({ type: "afridi-dev-editor-divider" })
          .run();

        editor.commands.enter();
      }}
      icon={
        <ThemeIcon
          size={"lg"}
          variant="outline"
          sx={{
            border: 0,
          }}
          color={colorScheme == "dark" ? "gray.1" : "dark"}
          radius="xl"
        >
          <ArrowsOutLineVertical size={16} />
        </ThemeIcon>
      }
    >
      <Text
        color={colorScheme == "dark" ? "gray.1" : "dark"}
        size="xs"
        weight={600}
      >
        Add Horizontal line
      </Text>
    </Menu.Item>
  );
};

export default AfridiDevEditorHorizontalLine;
