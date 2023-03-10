import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Stack,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { Link, LinkBreak } from "@phosphor-icons/react";
import { useState } from "react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorLink = ({
  editor,
  theme,
  colorScheme,
}: AfridiDevEditorMenuProps) => {
  const [menu, setMenu] = useState(false);
  const [link, setLink] = useState(null);
  return (
    <Menu opened={menu} onClose={() => setMenu(false)}>
      <Menu.Target>
        <Tooltip label={editor.isActive("link") ? "Unlink" : "Link"}>
          <ActionIcon
            variant={editor.isActive("link") ? "filled" : "subtle"}
            color={editor.isActive("link") ? "blue" : "gray"}
            onClick={() => {
              if (editor.isActive("link")) {
                editor.commands.unsetLink();
              } else {
                if (!editor.isActive("heading")) {
                  setMenu(true);
                }
              }
            }}
            radius="xl"
            size={"lg"}
          >
            {editor.isActive("link") ? (
              <LinkBreak
                color={
                  editor.isActive("link")
                    ? theme.white
                    : colorScheme == "dark"
                    ? theme.colors.gray[4]
                    : theme.colors.gray[8]
                }
                size={18}
              />
            ) : (
              <Link
                color={
                  editor.isActive("link")
                    ? theme.white
                    : colorScheme == "dark"
                    ? theme.colors.gray[4]
                    : theme.colors.gray[8]
                }
                size={18}
              />
            )}
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Group spacing={0}>
          <TextInput
            onChange={(e: any) => {
              setLink(e.target.value);
            }}
            placeholder="http://"
          />
          <ActionIcon
            onClick={() => {
              editor
                .chain()
                .focus()
                .setLink({ href: link!, target: "_blank" })
                .run();

              setMenu(false);
            }}
            ml={8}
            size="md"
            variant="light"
            color="blue"
          >
            <Link size={16} />
          </ActionIcon>
        </Group>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorLink;
