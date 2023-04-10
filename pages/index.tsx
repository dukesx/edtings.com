import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
  MediaQuery,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import EdtingImage from "../components/global/image";
import AppWrapper from "../components/global/wrapper";
import FirstHomepageSection from "../components/home/first-section";
import SecondHomepageSection from "../components/home/second-section";
import ThirdHomepageSection from "../components/home/third-section";
import LastHomepageSection from "../components/home/last-section";

// import { HOME_NAV_DATA } from "../data/generics";

const IndexPage = ({ blurhash }: { blurhash?: string }) => {
  return (
    <AppWrapper
      path=""
      navbar={false}
      headerProps={{
        headerPosition: "absolute",
        headerColor: "gray",
      }}
      padding={false}
    >
      <FirstHomepageSection />
      <SecondHomepageSection />
      <ThirdHomepageSection />
      <LastHomepageSection />
    </AppWrapper>
  );
};

export default IndexPage;
