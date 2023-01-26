import {
  ActionIcon,
  Button,
  Group,
  Menu,
  Modal,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";

import {
  ArrowDown,
  BracketsAngle,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  PinterestLogo,
  RedditLogo,
  SpotifyLogo,
  TiktokLogo,
  TwitchLogo,
  TwitterLogo,
  YoutubeLogo,
} from "phosphor-react";
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
    <div>
      {/* <Modal
        zIndex={20000}
        size="xl"
        opened={visible}
        onClose={() => setVisible(false)}
      >
        <Stack w="100%" align="center">
          <Group mt="xl" align="center" position="center">
            <FacebookLogo
              weight="fill"
              size={30}
              color={theme.colors.blue[6]}
            />
            <TwitterLogo weight="fill" size={25} color={theme.colors.blue[4]} />
            <YoutubeLogo weight="fill" size={35} color={theme.colors.red[6]} />
            <InstagramLogo
              weight="fill"
              size={30}
              color={theme.colors.grape[4]}
            />
            <PinterestLogo
              weight="fill"
              color={theme.colors.red[6]}
              size={30}
            />
            <RedditLogo
              weight="fill"
              size={30}
              color={theme.colors.orange[5]}
            />
            <SpotifyLogo weight="fill" size={30} color={theme.colors.teal[5]} />

            <TiktokLogo
              weight="fill"
              color={
                colorScheme == "light" ? theme.colors.dark[4] : theme.white
              }
              size={30}
            />
            <GithubLogo
              weight="fill"
              color={
                colorScheme == "light" ? theme.colors.dark[4] : theme.white
              }
              size={28}
            />
            <TwitchLogo weight="fill" color={theme.colors.grape[6]} size={28} />
          </Group>

          <TextInput
            w="100%"
            maw="450px"
            onChange={(e) => setUrl(e.target.value)}
            pb="xl"
            placeholder="https://youtu.be/....."
            mt="xl"
            label="Embed URL"
            description="Paste your url here"
            size="sm"
          />

          <Button
            mb="xl"
            onClick={() => {
              editor.commands.focus("end");
              editor
                .chain()
                .focus()
                .insertContent({
                  type: "afridi-dev-editor-embed",
                  attrs: {
                    src: url,
                  },
                })
                .run();

              editor.commands.enter();
              editor.commands.enter();

              setVisible(false);
            }}
            leftIcon={<ArrowDown />}
            color="blue"
            variant="light"
            mx="auto"
          >
            Insert Embed
          </Button>
        </Stack>
      </Modal> */}
      <Tooltip label="Embed a link">
        <ActionIcon
          onClick={() => {
            editor.commands.insertContent({ type: "afridi-dev-editor-embed" });
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
          <BracketsAngle size={18} />
        </ActionIcon>
      </Tooltip>
    </div>
  );
};

export default AfridiDevEditorInsertEmbeds;
