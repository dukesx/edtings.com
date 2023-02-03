import { AfridiDevEditorMenuProps } from "./image-upload";
import { useContext, useState } from "react";
import { ActionIcon, Menu, ScrollArea, Tooltip } from "@mantine/core";
import { IGif } from "@giphy/js-types";
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from "@giphy/react-components";
import Giphy from "../../../../public/giphy.svg";
import Image from "next/image";
import { Gif } from "phosphor-react";

// the search experience consists of the manager and its child components that use SearchContext
const SearchExperience = (props: any) => (
  <SearchContextManager apiKey={"bb0u3kOf9vefSuNmoZimP7UqgmzBMuCL"}>
    <Components editor={props.editor} setGiphyOpened={props.setGiphyOpened} />
  </SearchContextManager>
);

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
const Components = (props: any) => {
  const { fetchGifs, searchKey } = useContext(SearchContext);
  return (
    <div>
      <SearchBar />
      <ScrollArea
        style={{
          width: 400,
        }}
      >
        <SuggestionBar />
      </ScrollArea>
      <Grid
        onGifClick={(gif: IGif, e) => {
          props.setGiphyOpened(false);
          props.editor.commands.insertContent({
            type: "afridi-dev-editor-gif",
            attrs: {
              gif: gif,
            },
          });
          props.editor.commands.enter();
        }}
        noLink
        key={searchKey}
        columns={3}
        width={400}
        fetchGifs={fetchGifs}
      />
    </div>
  );
};

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key

const AfridiDevEditorGiphySelector = ({
  editor,
  colorScheme,
  theme,
}: AfridiDevEditorMenuProps) => {
  const [giphyOpened, setGiphyOpened] = useState(false);
  return (
    <Tooltip label="Insert a GIF">
      <ActionIcon
        onClick={() => {
          editor.commands.insertContent({
            type: "afridi-dev-editor-gif",
          });
          editor.commands.enter();
        }}
        size={"lg"}
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
        <Gif
          color={
            colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
          }
          size={colorScheme == "dark" ? 20 : 20}
        />
      </ActionIcon>
    </Tooltip>
  );
};

export default AfridiDevEditorGiphySelector;
