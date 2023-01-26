import { Card, Container, Text } from "@mantine/core";
import { useState } from "react";
import TextEditor from "../../components/global/editor/editor";
import AppWrapper from "../../components/global/wrapper";

const CreateArticle = () => {
  const [value, setValue] = useState("");
  return (
    <AppWrapper
      navbar={false}
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "",
        navbarLinks: [],
      }}
      padding={false}
      path="create"
    >
      <Container size="md">
        <TextEditor
          placeholder="Let's Write Something 🤓"
          setValue={setValue}
        />
      </Container>
    </AppWrapper>
  );
};

export default CreateArticle;
