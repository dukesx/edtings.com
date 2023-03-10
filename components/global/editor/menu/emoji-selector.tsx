import { ActionIcon, Menu, Tooltip } from "@mantine/core";
import { useState } from "react";
import { AfridiDevEditorMenuProps } from "./image-upload";
import Picker from "@emoji-mart/react";
import { Smiley } from "@phosphor-icons/react";

const AfridiDevEditorEmojiSelector = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  const [emojiMenuOpened, setEmojiMenuOpened] = useState(false);
  return (
    <Menu
      onClose={() => {
        setEmojiMenuOpened(false);
      }}
      opened={emojiMenuOpened}
    >
      <Menu.Target>
        <Tooltip label="Emoji">
          <ActionIcon
            variant="subtle"
            color="gray"
            radius="xl"
            size="lg"
            onClick={() => setEmojiMenuOpened(!emojiMenuOpened)}
          >
            <Smiley
              color={
                colorScheme == "dark"
                  ? theme.colors.gray[4]
                  : theme.colors.gray[8]
              }
              size={24}
            />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>
        <Picker
          theme={colorScheme}
          height="100px"
          perLine={8}
          searchPosition="none"
          maxFrequentRows={0}
          previewPosition="none"
          data={async () => {
            const response = await fetch(
              "https://cdn.jsdelivr.net/npm/@emoji-mart/data"
            );

            return response.json();
          }}
          onEmojiSelect={(data: any) => {
            editor.chain().insertContent(data.native).run();
          }}
        />
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorEmojiSelector;
