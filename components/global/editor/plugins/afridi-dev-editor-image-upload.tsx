import {
  Button,
  Group,
  rem,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { modals } from "@mantine/modals";
import {
  Image,
  MonitorPlay,
  Upload,
  Video,
  X,
  YoutubeLogo,
} from "@phosphor-icons/react";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { readableBytes } from "../../../../utils/basic";

export default Node.create({
  name: "afridi-dev-editor-image-upload",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(MantineUploadImage);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-image-upload",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-image-upload",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});

const MantineUploadImage = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <NodeViewWrapper>
      <Dropzone
        radius="md"
        onDrop={async (files: any) => {
          const form = new FormData();
          form.append("file", files[0]);

          const upload = await fetch("/api/images/upload", {
            method: `POST`,
            body: form,
          });

          const jso = await upload.json();
          const data = jso.data;
          console.log(data);
        }}
        onReject={(files) => {
          console.log("rejected files", files);
          modals.open({
            id: "uploadError",
            centered: true,
            withCloseButton: false,
            title: "Error:" + " " + files[0].errors[0].code,
            children: (
              <Stack>
                <Text size="sm">
                  {files[0].errors[0].message.includes("larger")
                    ? "File is larger than " +
                      readableBytes(
                        parseInt(
                          files[0].errors[0].message.split("larger than")[1]
                        )
                      )
                    : files[0].errors[0].message}
                </Text>
                <Button onClick={() => modals.closeAll()} color="red">
                  Okay
                </Button>
              </Stack>
            ),
          });
        }}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: rem(220), pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <Upload size="3.2rem" />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <X size="3.2rem" />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <Group spacing={4}>
              <Image weight={"thin"} size="3.2rem" />
              <Text size={40}>/</Text>
              <Video weight={"thin"} size="3.2rem" />
            </Group>
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images/videos here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like,{" "}
              <Text
                underline
                color={colorScheme == "dark" ? "gray" : "dark"}
                weight={600}
                component="span"
              >
                each file should not exceed 50MB
              </Text>
            </Text>
          </div>
        </Group>
      </Dropzone>
    </NodeViewWrapper>
  );
};
