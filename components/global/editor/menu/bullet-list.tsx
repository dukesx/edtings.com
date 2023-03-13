import { ActionIcon, Tooltip } from "@mantine/core";
import { List } from "@phosphor-icons/react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorBulletList = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Bullet list">
      <ActionIcon
        variant={editor.isActive("bulletList") ? "filled" : "subtle"}
        color={editor.isActive("bulletList") ? "blue" : "gray"}
        onClick={() => editor.chain().focus("end").toggleBulletList().run()}
        radius="xl"
        size={"lg"}
      >
        <List
          color={
            editor.isActive("bulletList")
              ? theme.white
              : colorScheme == "dark"
              ? theme.colors.gray[4]
              : theme.colors.gray[8]
          }
          size={18}
        />
      </ActionIcon>
    </Tooltip>
  );
};

export default AfridiDevEditorBulletList;
