import { ActionIcon, Tooltip } from "@mantine/core";
import { TextT } from "@phosphor-icons/react";

import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorInsertRowBelow = ({
  editor,
  theme,
  colorScheme,
}: AfridiDevEditorMenuProps) => {
  return (
    <Tooltip label="Paragraph">
      <ActionIcon
        variant={
          editor.isActive("paragraph") &&
          !editor.isActive("bulletList") &&
          !editor.isActive("orderedList")
            ? "filled"
            : "subtle"
        }
        color={
          editor.isActive("paragraph") &&
          !editor.isActive("bulletList") &&
          !editor.isActive("orderedList")
            ? "blue"
            : "gray"
        }
        onClick={() => {
          if (editor.isActive("paragraph")) {
            editor.commands.enter();
            editor.commands.focus("end");
          } else {
            editor.chain().focus().setParagraph().run();
          }
        }}
        radius="xl"
        size={"lg"}
      >
        <TextT
          color={
            editor.isActive("paragraph") &&
            !editor.isActive("bulletList") &&
            !editor.isActive("orderedList")
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

export default AfridiDevEditorInsertRowBelow;
