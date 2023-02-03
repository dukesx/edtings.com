/* eslint-disable react-hooks/exhaustive-deps */
import { Gif } from "@giphy/react-components";
import { Box, Card, Group, useMantineColorScheme } from "@mantine/core";
import {
  mergeAttributes,
  Node,
  NodeViewWrapper,
  ReactNodeViewRenderer,
} from "@tiptap/react";
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from "@giphy/react-components";
import { useContext, useState } from "react";
import { IGif } from "@giphy/js-types";

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
  const [gif, setGif] = useState<IGif>();

  const Components = () => {
    const { fetchGifs, searchKey } = useContext(SearchContext);

    return (
      <div>
        <SearchBar />
        <SuggestionBar />
        <Grid
          key={searchKey}
          columns={600 < 400 ? 2 : 4}
          width={600}
          fetchGifs={fetchGifs}
          noLink
          onGifClick={(gif, e) => {
            setGif(gif);
            props.updateAttributes({
              gif: gif.id,
            });
          }}
        />
      </div>
    );
  };

  return (
    <NodeViewWrapper>
      {gif ? (
        <Group my="xl" position="center">
          <Gif
            noLink
            gif={gif}
            //@ts-ignore
            width={"100%"}
            style={{
              maxWidth: "600px",
              margin: "auto",
            }}
          />
        </Group>
      ) : (
        <SearchContextManager
          shouldDefaultToTrending
          shouldFetchChannels={false}
          apiKey="bb0u3kOf9vefSuNmoZimP7UqgmzBMuCL"
        >
          <Components />
        </SearchContextManager>
      )}
    </NodeViewWrapper>
  );
};
