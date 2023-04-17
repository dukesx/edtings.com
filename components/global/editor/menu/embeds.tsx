import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Modal,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";

import { BracketsAngle, Code } from "@phosphor-icons/react";
import { Fragment, useState } from "react";
import { AfridiDevEditorMenuProps } from "./image-upload";

const AfridiDevEditorInsertEmbeds = ({
  theme,
  colorScheme,
  editor,
}: AfridiDevEditorMenuProps) => {
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");
  return (
    <Menu.Item
      onClick={() => {
        editor.commands.insertContent({ type: "afridi-dev-editor-embed" });
        editor.commands.enter();
      }}
      icon={
        <ThemeIcon
          size={"lg"}
          variant="outline"
          sx={{
            border: 0,
          }}
          color={colorScheme == "dark" ? "gray.1" : "dark"}
          radius="xl"
        >
          <BracketsAngle size={16} />
        </ThemeIcon>
      }
    >
      <Text
        color={colorScheme == "dark" ? "gray.1" : "dark"}
        size="xs"
        weight={600}
      >
        Embed Facebook/Twitter
      </Text>
    </Menu.Item>
  );
};

export default AfridiDevEditorInsertEmbeds;
