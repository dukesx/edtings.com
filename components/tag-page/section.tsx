import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Anchor,
  Box,
  Center,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Link from "next/link";
import {
  BellSimple,
  BellSimpleRinging,
  HandPointing,
  Plus,
} from "phosphor-react";
import { HomepageCategorySectionProps } from "../../types/sections/homepage";
import { generateGradient } from "../../utils/basic";
import ArticleCardWithBGMedium from "../articles/cards/with-bg-medium";
import urlSlug from "url-slug";

const TagPageTrendingSection = ({
  title,
  gradient: { from, to },
  articles,
  subscribers,
  lazyLoadImages = false,
}: HomepageCategorySectionProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      id={urlSlug(title).toLowerCase()}
      sx={(theme) => ({
        height: 600,
        ...generateGradient({
          color1: from,
          color2: to,
        }),

        [theme.fn.smallerThan(1200)]: {
          height: 550,
        },
      })}
      p="sm"
    >
      <Center mt="xs" w="100%" h="100%">
        <Stack
          w="100%"
          m="xs"
          p="xs"
          sx={(theme) => ({
            [theme.fn.smallerThan(1000)]: {
              padding: 5,
              margin: 5,
            },
          })}
        >
          <Group
            sx={{
              alignItems: "center",
              alignContent: "center",
            }}
            position="apart"
          >
            <Title order={3} transform="uppercase" weight={800} size={20}>
              {title}
            </Title>
            <Box pos="relative">
              <Group>
                <Tooltip label="Subscribe for updates">
                  <Group spacing={8}>
                    <ActionIcon variant="filled" color="dark" radius="xl">
                      <BellSimple weight="duotone" />
                    </ActionIcon>
                    <Stack spacing={0}>
                      <Text size="xs">Subscribe</Text>
                      <Text color="dimmed" size="xs">
                        {Intl.NumberFormat("en-US", {
                          compactDisplay: "short",
                          notation: "compact",
                        }).format(100000) + " "}
                        followers
                      </Text>
                    </Stack>
                  </Group>
                </Tooltip>

                <Tooltip label="Unsubscribe">
                  <Group spacing={8}>
                    <ActionIcon variant="outline" radius="xl">
                      <BellSimpleRinging weight="duotone" />
                    </ActionIcon>
                    <Stack spacing={0}>
                      <Text size="xs" weight={400}>
                        Subscribed
                      </Text>
                      <Text color="dimmed" weight={400} size="xs">
                        {Intl.NumberFormat("en-US", {
                          compactDisplay: "short",
                          notation: "compact",
                        }).format(173768760) + " "}
                        followers
                      </Text>
                    </Stack>
                  </Group>
                </Tooltip>
              </Group>

              <HandPointing
                size={18}
                style={{
                  position: "absolute",
                  left: 8,
                  top: 32,
                }}
              />
            </Box>
          </Group>

          <Carousel
            mt="md"
            w="100%"
            height={460}
            withControls={false}
            loop
            align="start"
            withIndicators
            slideSize="33.3333%"
            slideGap="md"
            breakpoints={[
              {
                maxWidth: 400,
                slideSize: "100%",
              },
              {
                maxWidth: 500,
                slideSize: "80%",
              },

              {
                maxWidth: 700,
                slideSize: "50%",
              },
              {
                maxWidth: 1000,
                slideSize: "43%",
                slideGap: "xl",
              },

              {
                maxWidth: 1200,
                slideSize: "45%",
              },

              {
                maxWidth: 2000,
                slideSize: "34%",
              },
            ]}
            sx={(theme) => ({
              position: "relative",
              [theme.fn.smallerThan(1200)]: {
                height: 430,
              },
              cursor: "grab",
            })}
          >
            {articles.map((mapped) => (
              <Carousel.Slide>
                <ArticleCardWithBGMedium
                  lazyLoadImages={lazyLoadImages}
                  key={nanoid()}
                  title={mapped.title}
                  cover={mapped.cover}
                  date={mapped.date}
                  authors={mapped.authors}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Stack>
      </Center>
    </Box>
  );
};

export default TagPageTrendingSection;
