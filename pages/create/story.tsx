import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Loader,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { Suspense, useEffect, useState } from "react";
import TextEditor from "../../components/global/editor/editor";
import AppWrapper from "../../components/global/wrapper";
import { DEFAULT_NAV_DATA } from "../../data/generics";
import { EditorOutput } from "../../types/generics";
import { serif } from "../_app";

const CreateStory = () => {
  const [value, setValue] = useDebouncedState<EditorOutput>(
    {
      data: {
        content: [],
        type: "doc",
      },
      words: 0,
    },
    200
  );
  const [progress, setProgress] = useState("");
  const theme = useMantineTheme();
  const [title, setTitle] = useState("");
  const { colorScheme } = useMantineColorScheme();
  var arr = DEFAULT_NAV_DATA;

  useEffect(() => {
    if (title.length > 0) {
      if (value.words > 0) {
        setProgress("Saving Draft.....");
        setTimeout(() => setProgress("Saved"), 1000);
        console.log(value);
      } else {
        setProgress("");
      }
    } else {
      setProgress("");
    }
  }, [value, title]);

  return (
    <AppWrapper
      headerProps={{
        headerLinks: [
          {
            color: "gray",
            path: "",
            href: "",
            title: "Saving",
            render: (
              <Text weight={500} color="dimmed" size="xs">
                {progress}
              </Text>
            ),
          },
          {
            color: "gray",
            path: "",
            href: "",
            title: "Changes Saved",
            render: (
              <Button
                styles={{
                  label: {
                    fontWeight: 600,
                  },
                }}
                disabled={progress === "Saved" ? false : true}
                color="dark"
                variant="filled"
                size="xs"
                radius="xl"
              >
                Publish
              </Button>
            ),
          },
        ],
      }}
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "",
        navbarLinks: arr,
      }}
      padding={false}
      path="create"
    >
      <Container bg="transparent" size={800}>
        <Textarea
          minRows={1}
          onChange={(e) => setTitle(e.target.value)}
          mt="xl"
          autosize
          variant="default"
          size="xl"
          styles={{
            input: {
              fontFamily: serif.style.fontFamily,
              fontWeight: 400,
              border: 0,
              [":focus"]: {
                borderLeftColor: `${
                  colorScheme == "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[4]
                }`,
              },

              ["::placeholder"]: {
                color:
                  colorScheme == "dark"
                    ? theme.colors.dark[3]
                    : theme.colors.gray[6],
              },
              color:
                colorScheme == "dark"
                  ? theme.colors.dark[1]
                  : theme.colors.gray[7],
              borderLeftWidth: colorScheme == "dark" ? 5 : 5,
              transition: "border 400ms ease-in-out",
              borderLeftStyle: "solid",
              borderLeftColor: "transparent",
              borderRadius: 0,
              background:
                colorScheme == "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[1],
              paddingLeft: 40,
              fontSize: 35,
              overflow: "hidden",
            },
          }}
          placeholder="Title"
        />
        <Suspense
          fallback={
            <Center h="100%" w="100%">
              <Stack>
                <Loader variant="bars" />
                <Text>Loading Editor</Text>
              </Stack>
            </Center>
          }
        >
          <TextEditor
            placeholder="Let's Write Something 🤓"
            setValue={setValue}
          />
        </Suspense>
      </Container>
    </AppWrapper>
  );
};

export default CreateStory;
