import { ActionIcon, Tooltip } from "@mantine/core";
import { ArrowsOutLineVertical } from "phosphor-react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorHorizontalLine = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Add a horizontal line">
      <ActionIcon
        onClick={() => {
          editor
            .chain()
            .focus()
            .insertContent({ type: "afridi-dev-editor-divider" })
            .run();

          editor.commands.enter();
        }}
        size="lg"
        variant="filled"
        color={"dark"}
        sx={(theme) => ({
          backgroundColor:
            colorScheme == "dark" ? theme.white : theme.colors.dark[8],
          color: colorScheme == "dark" ? theme.colors.dark[8] : theme.white,
          [":hover"]: {
            backgroundColor:
              colorScheme == "dark" ? theme.white : theme.colors.dark[8],
          },
        })}
        radius="xl"
      >
        <ArrowsOutLineVertical size={16} />
      </ActionIcon>
    </Tooltip>
  );
};

export default AfridiDevEditorHorizontalLine;
