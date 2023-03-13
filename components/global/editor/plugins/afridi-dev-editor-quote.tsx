import {
  Blockquote,
  Divider,
  Group,
  Stack,
  Textarea,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import { Quotes } from "@phosphor-icons/react";

export default Node.create({
  name: "afridi-dev-editor-blockquote",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(MantineQuote);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-quote",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-quote",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addAttributes() {
    return {
      quote: {
        default: null,
      },
      cite: {
        default: null,
      },
    };
  },
});

const MantineQuote = (props: any) => {
  const theme = useMantineTheme();
  return (
    <NodeViewWrapper>
      <Stack mt="xl">
        <Textarea
          autosize
          minRows={1}
          onChange={(e) => props.updateAttributes({ quote: e.target.value })}
          placeholder="Quote"
          styles={{
            input: {
              marginLeft: "50px",
              paddingLeft: 0,
            },
            icon: {
              paddingLeft: 15,
            },
          }}
          icon={
            <Quotes
              style={{
                transform: "scale(-1,-1) rotate(2deg)",
              }}
              size={30}
            />
          }
        >
          {props.node.attrs.quote}
        </Textarea>
        <Group>
          <Divider />
          <TextInput
            defaultValue={props.node.attrs.cite ?? ""}
            styles={{
              input: {
                fontStyle: "italic",
                color: theme.colors.gray[6],
              },
            }}
            onChange={(e) => props.updateAttributes({ cite: e.target.value })}
            placeholder="Cite"
          />
        </Group>
      </Stack>
    </NodeViewWrapper>
  );
};
