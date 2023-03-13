import {
  ActionIcon,
  Box,
  Button,
  Card,
  ColorScheme,
  Divider,
  Group,
  MantineTheme,
  Menu,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Editor } from "@tiptap/react";
import { CloudArrowUp, Image, Upload, X } from "@phosphor-icons/react";
import { useState } from "react";

export interface AfridiDevEditorMenuProps {
  editor: Editor;
  theme: MantineTheme;
  colorScheme: ColorScheme;
}

const AfridiDevEditorImageUpload = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  const [imageUploadMenuOpened, setImageUploadMenuOpened] = useState(false);
  const [url, setUrl] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <Menu
      withArrow
      opened={imageUploadMenuOpened}
      onClose={() => setImageUploadMenuOpened(false)}
      closeOnClickOutside
      closeOnEscape
      closeOnItemClick
      position="bottom"
    >
      <Menu.Target>
        <Tooltip label="Insert Image">
          <ActionIcon
            onClick={() => setImageUploadMenuOpened(true)}
            variant="subtle"
            color="gray"
            radius="xl"
            size="lg"
          >
            <CloudArrowUp
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
        <Stack spacing={0} align="center">
          <Group px={5} mt="sm" spacing="xl">
            <Stack spacing={0}>
              <Text size="xs">
                {!checked
                  ? "Insert Image from The Web"
                  : "Upload Image from Device"}
              </Text>
            </Stack>
            <Switch
              mx="auto"
              size="lg"
              color="blue"
              checked={checked}
              onChange={(event) => setChecked(event.currentTarget.checked)}
              onLabel="Upload"
              offLabel="From Url"
            />
          </Group>

          {!checked ? (
            <Card>
              <Textarea
                onChange={(e: any) => {
                  setUrl(e.target.value);
                }}
                required
                minRows={4}
                label="URL"
                description="Insert image from Url"
              />
              <Button
                onClick={() => {
                  editor.commands.setImage({
                    src: url!,
                    alt: "Sample image",
                    title: "sample",
                  });
                  setImageUploadMenuOpened(false);
                }}
                color="blue"
                fullWidth
                mt="xl"
              >
                Insert Image
              </Button>
            </Card>
          ) : (
            <Dropzone
              accept={IMAGE_MIME_TYPE}
              multiple={false}
              maxSize={1000000}
              onDrop={async (files) => {
                setImageUploadMenuOpened(false);
                await Promise.all(
                  files.map(async (filer) => {
                    const reader = new FileReader();

                    reader.addEventListener(
                      "load",
                      () => {
                        editor
                          .chain()
                          .insertContent({
                            type: "afridi-dev-editor-loader",
                            attrs: {
                              title: "Uploading Image....",
                              image: reader.result,
                            },
                          })
                          .run();
                        editor.commands.blur();
                      },
                      false
                    );

                    var fileer = reader.readAsDataURL(filer);

                    const form = new FormData();
                    form.append("file", filer);
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_FUNCTIONS_URL}/upload/image/form`,
                      {
                        method: "POST",
                        body: form,
                      }
                    );

                    const result = await res.json();

                    if (result) {
                      editor
                        .chain()
                        .focus()
                        .insertContent({
                          type: "afridi-dev-editor-image",
                          attrs: {
                            src:
                              "https://ik.imagekit.io/afrididotdev/tr:w-900" +
                              result.file.url.split("tr:n-400x")[1],
                          },
                        })
                        .run();

                      editor.commands.enter();
                      editor.commands.focus("end");
                    } else {
                      editor.commands.insertContent(" ");
                    }
                  })
                );
              }}
              onReject={(files) => console.log("rejected files", files)}
            >
              <Stack
                // position="center"
                align="center"
                spacing="xl"
                style={{ minHeight: 220, pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <ThemeIcon variant="light" size={100}>
                    <Upload
                      size={100}
                      color={
                        theme.colors[theme.primaryColor][
                          theme.colorScheme === "dark" ? 4 : 6
                        ]
                      }
                    />
                  </ThemeIcon>
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <X
                    size={50}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <ThemeIcon variant="light" color="gray" size={100}>
                    <Image size={50} />
                  </ThemeIcon>
                </Dropzone.Idle>

                <div>
                  <Text lineClamp={2} size="sm" weight={700} inline>
                    Drag an image here or click to select a file
                  </Text>
                  <Text size="xs" color="dimmed" inline mt={15}>
                    File must be (JPG/GIF/PNG/SVG/WEBP) and should not exceed
                    1MB
                  </Text>
                </div>
              </Stack>
            </Dropzone>
          )}
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AfridiDevEditorImageUpload;
