import { Card, Center, Container, Loader, Stack, Text } from "@mantine/core";
import { Suspense, useState } from "react";
import TextEditor from "../../components/global/editor/editor";
import AppWrapper from "../../components/global/wrapper";

const CreateArticle = () => {
  const [value, setValue] = useState("");
  return (
    <AppWrapper
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "",
        navbarLinks: [],
      }}
      padding={false}
      path="create"
    >
      <Container bg="transparent" size={800}>
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

export default CreateArticle;
