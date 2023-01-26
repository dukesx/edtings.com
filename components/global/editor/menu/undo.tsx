import { ActionIcon, Tooltip } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons";
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
        <IconArrowBack
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
