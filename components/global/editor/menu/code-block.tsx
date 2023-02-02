import { ActionIcon, Tooltip } from "@mantine/core";
import { Code, CodeSimple } from "phosphor-react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorInsertCodeBlock = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Code Block">
      <ActionIcon
        variant="subtle"
        color="gray"
        onClick={() => {
          editor
            .chain()
            .insertContent({
              type: "afridi-dev-editor-code-block",
              attrs: {
                language: "typescript",
              },
            })
            .run();

          editor.commands.enter();
        }}
        radius="xl"
        size={"lg"}
      >
        <CodeSimple
          color={
            colorScheme == "dark" ? theme.colors.gray[4] : theme.colors.gray[8]
          }
          size={18}
        />
      </ActionIcon>
    </Tooltip>
  );
};

export default AfridiDevEditorInsertCodeBlock;
