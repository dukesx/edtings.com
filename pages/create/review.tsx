import {
  ActionIcon,
  Avatar,
  Button,
  Card,
  Center,
  Container,
  Group,
  Input,
  Loader,
  Overlay,
  Rating,
  Select,
  Stack,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDebouncedState } from "@mantine/hooks";
import { nanoid } from "nanoid";
import {
  Cube,
  IconProps,
  MaskHappy,
  MaskSad,
  Minus,
  Placeholder,
  Plus,
  Smiley,
  SmileyMeh,
  SmileyNervous,
  SmileySad,
  SmileyWink,
  SmileyXEyes,
} from "@phosphor-icons/react";
import { Suspense, useEffect, useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import TextEditor from "../../components/global/editor/editor";
import AppWrapper from "../../components/global/wrapper";
import { DEFAULT_NAV_DATA } from "../../data/generics";
import { EditorOutput } from "../../types/generics";
import { serif } from "../_app";

const CreateReview = () => {
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
  const [title, setTitle] = useDebouncedState("", 200);
  const { colorScheme } = useMantineColorScheme();
  const [rating, setRating] = useState(0);
  const [overlay, setOverlay] = useState(false);
  var arr = DEFAULT_NAV_DATA;

  const getEmptyIcon = (value: number) => {
    const defaultProps = {
      size: 40,
      color: "gray",
    };
    switch (value) {
      case 1:
        return <SmileyXEyes {...defaultProps} />;
      case 2:
        return <SmileySad {...defaultProps} />;
      case 3:
        return <SmileyMeh {...defaultProps} />;
      case 4:
        return <Smiley {...defaultProps} />;
      case 5:
        return <SmileyWink {...defaultProps} />;
      default:
        return <SmileyMeh {...defaultProps} />;
    }
  };

  const getFullIcon = (value: number) => {
    const defaultProps: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    > = {
      //@ts-ignore
      size: 40,
      weight: "duotone",
    };
    const theme = useMantineTheme();

    switch (value) {
      case 1:
        return <SmileyXEyes {...defaultProps} color={theme.colors.red[7]} />;

      case 2:
        return <SmileySad {...defaultProps} color={theme.colors.orange[7]} />;

      case 3:
        return <SmileyMeh {...defaultProps} color={theme.colors.yellow[7]} />;

      case 4:
        return <Smiley {...defaultProps} color={theme.colors.lime[7]} />;

      case 5:
        return <SmileyWink {...defaultProps} color={theme.colors.green[7]} />;

      default:
        //@ts-ignore
        return <SmileyMeh {...defaultProps} />;
    }
  };

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
      navbar={false}
      padding={false}
      path="create"
      aside={true}
      asideProps={{
        render: (
          <Stack>
            <Text mt="xs" mb={20} weight={700}>
              Review Options
            </Text>
            <Input.Wrapper
              required
              label="Summary"
              description="Max length: 150 words"
              styles={{
                description: {
                  marginBottom: 10,
                },
              }}
            >
              <Textarea
                styles={{
                  input: {
                    borderTop: 0,
                    borderLeft: 0,
                    borderRight: 0,
                    borderRadius: 0,
                  },
                }}
                minRows={1}
                autosize
                maxLength={150}
                required
                placeholder="e.g Samsung's greatest and latest falls short of everything but the pricing"
              />
            </Input.Wrapper>

            <Stack spacing={"xs"} my="xl" align="center">
              <Text size="sm" transform="uppercase" weight={700}>
                Review Score
              </Text>

              <Group
                my="xl"
                sx={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                <Stack spacing={8}>
                  <ThemeIcon
                    radius="xl"
                    size={100}
                    color={
                      rating == 0
                        ? colorScheme == "dark"
                          ? "gray.7"
                          : "gray.7"
                        : rating > 3
                        ? "teal"
                        : rating < 3
                        ? "red"
                        : "orange"
                    }
                    variant={"light"}
                    sx={{
                      border: 0,
                      borderRadius: "100%",
                    }}
                  >
                    <Bounce triggerOnce={true}>
                      {rating == 0 ? (
                        <Cube key={"CUBE"} weight="duotone" size={80} />
                      ) : rating > 3 ? (
                        <MaskHappy
                          key={nanoid()}
                          weight={colorScheme == "dark" ? "fill" : "regular"}
                          size={80}
                        />
                      ) : rating < 3 ? (
                        <MaskSad
                          key={"SAD"}
                          weight={colorScheme == "dark" ? "fill" : "regular"}
                          size={80}
                        />
                      ) : (
                        <SmileyMeh
                          key={"MEH"}
                          weight={colorScheme == "dark" ? "fill" : "regular"}
                          size={80}
                        />
                      )}
                    </Bounce>
                  </ThemeIcon>
                  <Text
                    color={
                      rating > 0
                        ? colorScheme == "dark"
                          ? "gray"
                          : "dark"
                        : "dimmed"
                    }
                    weight={rating > 0 ? 800 : 500}
                    transform="uppercase"
                    align="center"
                    size="xs"
                  >
                    {rating == 0
                      ? "Pick a rating"
                      : rating > 3
                      ? "Awesome!"
                      : rating == 3
                      ? "Meh!"
                      : "Disappointed"}
                  </Text>
                  <Group spacing={8} position="center">
                    <Text
                      color={
                        rating == 0
                          ? colorScheme == "dark"
                            ? "gray.7"
                            : "gray.7"
                          : rating > 3
                          ? "teal"
                          : rating < 3
                          ? "red"
                          : "orange"
                      }
                      weight={800}
                      size="md"
                      align="center"
                    >
                      {rating != 0 ? rating * 20 : "-"}
                    </Text>
                    <Text
                      color={
                        rating == 0
                          ? colorScheme == "dark"
                            ? "gray.7"
                            : "gray.7"
                          : rating > 3
                          ? "teal"
                          : rating < 3
                          ? "red"
                          : "orange"
                      }
                      weight={800}
                      size="md"
                      align="center"
                    >
                      /
                    </Text>
                    <Text
                      color={
                        rating == 0
                          ? colorScheme == "dark"
                            ? "gray.7"
                            : "gray.7"
                          : rating > 3
                          ? "teal"
                          : rating < 3
                          ? "red"
                          : "orange"
                      }
                      weight={800}
                      size="md"
                      align="center"
                    >
                      100
                    </Text>
                  </Group>
                </Stack>
              </Group>

              <Rating
                value={rating}
                onChange={setRating}
                emptySymbol={getEmptyIcon}
                fullSymbol={getFullIcon}
                highlightSelectedOnly
              />
            </Stack>

            <Group
              mt="xl"
              sx={(theme) => ({
                [theme.fn.smallerThan("lg")]: {
                  flexWrap: "wrap",
                },
              })}
              noWrap
              w="100%"
            >
              <Stack w="100%" pb="xl">
                <Group px="xs" position="apart">
                  <Text transform="uppercase" size="xs" weight={700}>
                    The Good
                  </Text>
                  <ActionIcon
                    radius="xl"
                    size={24}
                    variant="filled"
                    color="dark"
                  >
                    <Plus />
                  </ActionIcon>
                </Group>
                <Textarea placeholder="Excellent price" />
              </Stack>

              <Stack w="100%" pb="xl">
                <Group px="xs" position="apart">
                  <Text transform="uppercase" size="xs" weight={700}>
                    The Bad
                  </Text>
                  <ActionIcon
                    radius="xl"
                    size={24}
                    variant="filled"
                    color="dark"
                  >
                    <Plus />
                  </ActionIcon>
                </Group>
                <Textarea placeholder="No Warranty" />
              </Stack>
            </Group>
          </Stack>
        ),
      }}
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

export default CreateReview;
