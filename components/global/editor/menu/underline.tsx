import { ActionIcon, Tooltip } from "@mantine/core";
import { TextUnderline } from "phosphor-react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorUnderline = ({
  colorScheme,
  editor,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <ActionIcon
      variant={editor.isActive("underline") ? "filled" : "subtle"}
      color={editor.isActive("underline") ? "blue" : "gray"}
      onClick={() => editor.chain().focus().toggleUnderline().run()}
      radius="xl"
      size="lg"
    >
      <TextUnderline
        color={
          colorScheme == "dark" ? theme.colors.gray[4] : theme.colors.gray[1]
        }
        size={18}
      />
    </ActionIcon>
  );
};

export default AfridiDevEditorUnderline;
