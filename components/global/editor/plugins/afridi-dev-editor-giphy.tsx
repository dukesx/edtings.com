/* eslint-disable react-hooks/exhaustive-deps */
import { Gif } from "@giphy/react-components";
import { Card, useMantineColorScheme } from "@mantine/core";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";

export default Node.create({
  name: "afridi-dev-editor-gif",
  group: "block",
  addNodeView() {
    return ReactNodeViewRenderer(MantineEmbeds);
  },

  parseHTML() {
    return [
      {
        tag: "afridi-dev-editor-gif",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "afridi-dev-editor-gif",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addAttributes: () => {
    return {
      gif: {
        default: null,
      },
    };
  },
});

const MantineEmbeds = (props: any) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <NodeViewWrapper>
      <Card>
        <Gif width={300} gif={props.node.attrs.gif} />
      </Card>
    </NodeViewWrapper>
  );
};
