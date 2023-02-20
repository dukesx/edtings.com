import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { Check, HandWaving, Newspaper } from "phosphor-react";
import ArticleCardWithBGSmall from "../../components/articles/cards/with-bg-small";
import EdtingImage from "../../components/global/image";
import AppWrapper from "../../components/global/wrapper";
import { generateGradient } from "../../utils/basic";
import MediumLogo from "../../public/medium.svg";
import Medium2Logo from "../../public/medium-2.svg";
import TwitterLogo from "../../public/twitter.svg";
import YoutubeLogo from "../../public/youtube.svg";
import Image from "next/image";
import UserPageSection from "../../components/user/section";

const ABC = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      path="profile"
      padding={false}
      navbarProps={{
        navbarPosition: "sticky",
        navbarTitle: "Muhammad Afzaal Afridi",
        navbarLinks: [
          {
            color: "gray",
            href: "#welcome",
            active: true,
            icon: HandWaving,
            path: "welcome",
            title: "Welcome",
          },

          {
            color: "gray",
            href: "#published",
            icon: Newspaper,
            path: "published",
            title: "Published works",
          },
        ],
      }}
    >
      <Container
        sx={{
          ...generateGradient({
            color1: "blue",
            color2: "teal",
            opacity: 0.3,
          }),
        }}
        p={0}
        size="xl"
      >
        <UserPageSection
          followed={false}
          author={{
            cover:
              "https://unsplash-cache.edtings.com/photo-1596536220655-21429cf12ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            name: "Muhammad Afzaal Afridi",
            status: "administrator",
          }}
          stats={{
            articles: 10,
            followers: 10000,
            views: 2000000,
          }}
        />

        <Paper
          sx={(theme) => ({
            [theme.fn.smallerThan(1400)]: {
              padding: "24px 15px",
            },
          })}
          p="xl"
          id="published"
        >
          <Title mb="md" pt={10} order={3}>
            <Text
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  marginLeft: 0,
                },
              })}
              component="span"
              weight={800}
              mx="xl"
            >
              Published
            </Text>
          </Title>
          <SimpleGrid
            breakpoints={[
              { maxWidth: 500, cols: 1, spacing: "xl" },
              { maxWidth: 600, cols: 2, spacing: "xl" },
              { maxWidth: 800, cols: 2, spacing: "md" },
              { maxWidth: 1600, cols: 3, spacing: "md" },
              { maxWidth: 2000, cols: 4, spacing: "md" },
              { maxWidth: 3000, cols: 6, spacing: "md" },
              { maxWidth: 4000, cols: 7, spacing: "md" },
              { maxWidth: 6000, cols: 10, spacing: "md" },
              { maxWidth: 8000, cols: 12, spacing: "md" },
            ]}
            p="xl"
            spacing={"sm"}
            cols={3}
            sx={(theme) => ({
              [theme.fn.smallerThan(1400)]: {
                padding: "24px 0px",
              },
            })}
          >
            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />

            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />

            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />

            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />

            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />

            <ArticleCardWithBGSmall
              title="51 AI tools you should be using for life, programming,
                    content creation and everything else"
              cover="https://unsplash-cache.edtings.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
              date={Date.now()}
              authors={[
                {
                  name: "Afridi",
                  dp: "https://unsplash-cache.edtings.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
                {
                  name: "Maya",
                  dp: "https://unsplash-cache.edtings.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
                },
              ]}
            />
          </SimpleGrid>
        </Paper>
      </Container>
    </AppWrapper>
  );
};

export default ABC;
