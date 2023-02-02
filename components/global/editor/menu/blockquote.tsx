import { ActionIcon, Tooltip } from "@mantine/core";
import { IconBlockquote, IconList, IconQuote } from "@tabler/icons-react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorBlockquoteMenu = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Blockquote">
      <ActionIcon
        variant={
          editor.isActive("afridi-dev-editor-blockquote") ? "filled" : "subtle"
        }
        color={
          editor.isActive("afridi-dev-editor-blockquote") ? "blue" : "gray"
        }
        onClick={() => {
          editor
            .chain()
            .focus()
            .insertContent({ type: "afridi-dev-editor-blockquote" })
            .run();
          editor.commands.enter();
        }}
        radius="xl"
        size={"lg"}
      >
        <IconQuote
          color={
            editor.isActive("afridi-dev-editor-blockquote")
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

export default AfridiDevEditorBlockquoteMenu;
