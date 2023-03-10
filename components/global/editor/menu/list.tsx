import { ActionIcon, Group, Menu, Stack, Text } from "@mantine/core";
import { ListBullets } from "@phosphor-icons/react";
import AfridiDevEditorBulletList from "./bullet-list";
import { AfridiDevEditorMenuProps } from "./image-upload";
import AfridiDevEditorOrderedList from "./ordered-list";

const AfridiDevEditorList = ({
  theme,
  colorScheme,
  editor,
}: AfridiDevEditorMenuProps) => {
  return (
    <Menu withArrow width={220}>
      <Menu.Target>
        <ActionIcon variant="subtle" color="gray" radius="xl" size="lg">
          <ListBullets
            color={
              colorScheme == "dark"
                ? theme.colors.gray[4]
                : theme.colors.gray[8]
            }
            size={18}
          />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Group position="center" noWrap>
          <Menu.Item>
            <Stack align="center">
              <AfridiDevEditorBulletList
                colorScheme={colorScheme}
                editor={editor}
                theme={theme}
              />

              <Text size="xs">Bullet</Text>
            </Stack>
          </Menu.Item>
          <Menu.Item>
            <Stack align="center">
              <AfridiDevEditorOrderedList
                colorScheme={colorScheme}
                editor={editor}
                theme={theme}
              />
              <Text size="xs">Numbered</Text>
            </Stack>
          </Menu.Item>
        </Group>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorList;
