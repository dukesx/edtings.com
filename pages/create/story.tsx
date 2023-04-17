import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Group,
  Paper,
  Title,
  Tooltip,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import EdtingsEditor from "../../components/global/editor/editor";
import EdtingsPlayer from "../../components/global/player";
import AppWrapper from "../../components/global/wrapper";
import EdtingImage from "../../components/global/image";
import { generateGradient, generateGradient2 } from "../../utils/basic";
import { Question } from "@phosphor-icons/react";
import { serif } from "../_app";

const CreateStory = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <AppWrapper
      headerProps={{
        headerPosition: "absolute",
      }}
      padding={false}
      navbar={false}
    >
      <Container px={0} pt={80} h={"100vh"} size="100%" pos="relative">
        <Container
          pos="relative"
          sx={{
            zIndex: 10,
          }}
          h="100%"
        >
          <Paper
            pb="xl"
            radius={0}
            bg={colorScheme == "dark" ? "dark.7" : "gray.0"}
            p="xl"
          >
            <Group position="apart">
              <Title
                weight={400}
                sx={{
                  fontFamily: serif.style.fontFamily,
                }}
                order={3}
              >
                Create a Story
              </Title>

              <Group spacing="md" mt={-4}>
                <Button
                  mt={4}
                  variant={colorScheme == "dark" ? "outline" : "outline"}
                  sx={{
                    borderWidth: colorScheme == "dark" ? 0 : 0,
                    fontSize: 12,
                    background: "transparent",
                    fontWeight: 500,
                  }}
                  radius="xl"
                  color={colorScheme == "dark" ? "gray.3" : "dark"}
                >
                  Save draft
                </Button>
                <Button
                  variant="filled"
                  size="sm"
                  sx={{
                    border: 0,
                    fontSize: 13,
                    fontWeight: 500,
                  }}
                  radius="xl"
                  px="xl"
                  color={colorScheme == "dark" ? "gray.8" : "dark"}
                >
                  Publish Story
                </Button>
                <Tooltip label="Help">
                  <ActionIcon
                    radius="xl"
                    variant="filled"
                    color={colorScheme == "dark" ? "grape" : "blue"}
                    size="md"
                    sx={{
                      border: 0,
                    }}
                  >
                    <Question weight="fill" size={27} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
          </Paper>
          <EdtingsEditor setValue={() => {}} />
        </Container>
      </Container>
    </AppWrapper>
  );
};

export default CreateStory;
