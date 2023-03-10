import { ActionIcon, Tooltip } from "@mantine/core";
import { HighlighterCircle } from "@phosphor-icons/react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorHighlight = ({
  colorScheme,
  editor,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Highlight text">
      <ActionIcon
        variant={editor.isActive("highlight") ? "filled" : "subtle"}
        color={editor.isActive("highlight") ? "yellow.4" : "gray"}
        onClick={() => {
          editor.chain().focus().toggleHighlight({ color: "#FFD43B" }).run();
        }}
        radius="xl"
        size="lg"
      >
        <HighlighterCircle
          color={
            editor.isActive("highlight")
              ? theme.colors.gray[8]
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

export default AfridiDevEditorHighlight;
