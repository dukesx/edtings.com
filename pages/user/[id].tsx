import {
  Container,
  Paper,
  SimpleGrid,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { HandWaving, Newspaper } from "phosphor-react";
import ArticleCardWithBGSmall from "../../components/articles/cards/with-bg-small";
import AppWrapper from "../../components/global/wrapper";
import { generateGradient } from "../../utils/basic";
import UserPageSection from "../../components/user/section";
import { GetServerSidePropsContext } from "next";
import { getPlaiceholder } from "plaiceholder";

const ABC = ({ placeholder }: any) => {
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
            cover: {
              src: "https://unsplash-cache.edtings.com/photo-1596536220655-21429cf12ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              placeholder: placeholder,
            },
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

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const { base64 } = await getPlaiceholder(
    "https://unsplash-cache.edtings.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&fit=faces&w=300&q=100&ar=1:1"
  );

  return {
    props: {
      placeholder: base64,
    },
  };
};
