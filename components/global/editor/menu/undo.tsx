import { ActionIcon, Tooltip } from "@mantine/core";
import { ArrowArcLeft } from "phosphor-react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorUndo = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Undo">
      <ActionIcon
        disabled={editor && !editor.can().undo()}
        variant="subtle"
        color="gray"
        radius="xl"
        size={32}
        onClick={() => editor.chain().undo().run()}
      >
        <ArrowArcLeft
          color={
            colorScheme == "dark" ? theme.colors.gray[4] : theme.colors.gray[8]
          }
          size={30}
        />
      </ActionIcon>
    </Tooltip>
  );
};

export default AfridiDevEditorUndo;
