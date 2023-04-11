import { Carousel, Embla } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Card,
  Container,
  Divider,
  Group,
  MediaQuery,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { nanoid } from "nanoid";
import { Suspense, useRef, useState } from "react";
import { sampleArticles } from "../../data/samples";
import { serif } from "../../pages/_app";
import { generateBottomFade } from "../../utils/basic";
import EdtingImage from "../global/image";

const FourthHomepageSection = () => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container px={0} py="xl" size="100%">
      <Group
        sx={(theme) => ({
          [theme.fn.smallerThan(400)]: {
            justifyContent: "center",
          },
        })}
        mt={20}
        pr="xl"
        position="center"
        spacing={40}
      >
        <Stack ml="xl" mb={-30} spacing={0}>
          <Title
            sx={(theme) => ({
              fontFamily: serif.style.fontFamily,
              [theme.fn.smallerThan(400)]: {
                fontSize: `calc(${theme.fontSizes.xl} * 1.5)`,
              },
            })}
            weight={400}
            transform="uppercase"
          >
            Featured Highlights
          </Title>
        </Stack>

        <Group mt={28} spacing="xs">
          <ActionIcon
            sx={{
              border: `1px solid ${
                colorScheme == "dark"
                  ? theme.colors.pink[6]
                  : theme.colors.indigo[6]
              }`,
              color:
                colorScheme == "dark"
                  ? theme.colors.pink[6]
                  : theme.colors.indigo[6],

              "&:hover": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
                color: theme.white,
                border: 0,
              },

              "&:active": {
                border: 0,
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
                color: theme.white,
              },
            }}
            onClick={() => embla?.scrollPrev()}
            color="dark"
            variant="default"
          >
            <CaretLeft weight="bold" />
          </ActionIcon>
          <ActionIcon
            sx={{
              border: `1px solid ${
                colorScheme == "dark"
                  ? theme.colors.pink[6]
                  : theme.colors.indigo[6]
              }`,
              color:
                colorScheme == "dark"
                  ? theme.colors.pink[6]
                  : theme.colors.indigo[6],
              "&:hover": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
                color: theme.white,
              },

              "&:active": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
                color: theme.white,
              },
            }}
            onClick={() => embla?.scrollNext()}
            color="dark"
            variant="default"
          >
            <CaretRight weight="bold" />
          </ActionIcon>
        </Group>
      </Group>

      <Carousel
        mb={20}
        //@ts-ignore
        plugins={[autoplay.current, wheel.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        mt="xl"
        getEmblaApi={setEmbla}
        slideSize="21%"
        withControls={false}
        align="center"
        slideGap="xs"
        loop={true}
        breakpoints={[
          {
            slideSize: "80%",
            maxWidth: 400,
            slideGap: "md",
          },
          {
            slideSize: "70%",
            maxWidth: "xs",
            slideGap: "xs",
          },
          {
            slideSize: "40%",
            maxWidth: "sm",
            slideGap: "xs",
          },
          {
            slideSize: "25%",
            maxWidth: "lg",
            slideGap: "xs",
          },
          {
            slideSize: "20%",
            maxWidth: "xl",
            slideGap: "xs",
          },
          {
            slideSize: "20.5%",
            maxWidth: 2000,
            slideGap: 0,
          },
          {
            slideSize: "30%",
            maxWidth: 2500,
            slideGap: 60,
          },
        ]}
      >
        {sampleArticles.map((mapped: any, index: number) => (
          <Carousel.Slide key={"thirdHomepageSection" + index}>
            <Card
              withBorder
              radius="lg"
              ml="xl"
              mt={40}
              p={0}
              h={400}
              w="100%"
              pos="relative"
              maw={280}
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  maxWidth: "100%",
                },
                [theme.fn.largerThan(1500)]: {
                  maxWidth: "100%",
                  height: 550,
                },
              })}
            >
              <Box
                h="100%"
                pos="absolute"
                w="100%"
                sx={{
                  zIndex: 1000,
                  ...generateBottomFade({
                    color1: "dark",
                    color2: "dark",
                  }),
                }}
              >
                <Stack
                  ml="xl"
                  pos="absolute"
                  sx={{
                    zIndex: 1000,
                  }}
                  top={30}
                >
                  <Avatar size={40}>
                    <EdtingImage
                      width={40}
                      avatar
                      height={40}
                      src={mapped.cover}
                    />
                  </Avatar>
                </Stack>
                <Stack spacing="sm" px="lg" pos="absolute" bottom={25}>
                  <Title
                    transform="capitalize"
                    lineClamp={2}
                    order={4}
                    color="white"
                  >
                    {mapped.title}
                  </Title>
                  <Text transform="capitalize" color="gray.3" size="sm">
                    {mapped.category}
                  </Text>
                </Stack>
              </Box>

              <EdtingImage fill src={mapped.cover} />
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

export default FourthHomepageSection;
