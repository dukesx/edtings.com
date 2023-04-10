import { Carousel, Embla } from "@mantine/carousel";
import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Center,
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
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { sampleArticles } from "../../data/samples";
import { serif } from "../../pages/_app";
import EdtingImage from "../global/image";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const SecondHomepageSection = () => {
  const [tweenValues, setTweenValues] = useState<number[]>([]);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  //
  //
  //

  const onScroll = useCallback(() => {
    if (!embla) return;

    const engine = embla.internalEngine();
    const scrollProgress = embla.scrollProgress();

    const styles = embla.scrollSnapList().map((scrollSnap, index) => {
      if (!embla.slidesInView().includes(index)) return 0;
      let diffToTarget: any = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target().get();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [embla, setTweenValues]);

  useEffect(() => {
    if (!embla) return;

    onScroll();
    embla.on("scroll", () => {
      flushSync(() => onScroll());
    });
    embla.on("reInit", onScroll);
  }, [embla, onScroll]);

  //
  return (
    <Container size="100%" px={0} pb={10}>
      <Center mt={0} pt={60} w="100%">
        <Stack px="xl" spacing={8}>
          <Title
            sx={(theme) => ({
              fontFamily: serif.style.fontFamily,
              [theme.fn.smallerThan(400)]: {
                fontSize: `calc(${theme.fontSizes.xl} * 1.5)`,
              },
            })}
            weight={400}
            transform="uppercase"
            ml="xl"
          >
            Trending Stories
          </Title>
        </Stack>
      </Center>
      <Box pos="relative" py={"xl"}>
        <Group
          px={"xl"}
          bg={colorScheme == "dark" ? "dark.5" : "gray.0"}
          py={10}
          mx="auto"
          left={0}
          w="100%"
          maw={380}
          right={0}
          pos="absolute"
          bottom={20}
          position="apart"
          sx={{
            borderRadius: theme.radius.xl,
            zIndex: 1,
          }}
        >
          <ActionIcon
            onClick={() => embla?.scrollPrev()}
            sx={{
              "&:active": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
              },
              "&:hover": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
              },
            }}
            color="dark"
            mr={0}
            variant="filled"
          >
            <CaretLeft />
          </ActionIcon>
          <ActionIcon
            onClick={() => embla?.scrollNext()}
            sx={{
              "&:active": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
              },
              "&:hover": {
                backgroundColor:
                  colorScheme == "dark"
                    ? theme.colors.pink[6]
                    : theme.colors.indigo[6],
              },
            }}
            variant="filled"
            color="dark"
          >
            <CaretRight />
          </ActionIcon>
        </Group>
        <Suspense>
          <Carousel
            withIndicators={true}
            getEmblaApi={setEmbla}
            withControls={false}
            //@ts-ignore
            plugins={[autoplay.current, wheel.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            mt="xl"
            height={760}
            slideSize="27%"
            align="center"
            slideGap="xs"
            loop={true}
            breakpoints={[
              {
                slideSize: "20%",
                maxWidth: 400,
                slideGap: "md",
              },
              {
                slideSize: "20%",
                maxWidth: "xl",
                slideGap: "xl",
              },
            ]}
            styles={{
              indicator: {
                backgroundColor: theme.colors.dark[1],
                width: 10,
                height: 10,
                zIndex: 2,
                ["&[data-active]"]: {
                  backgroundColor:
                    colorScheme == "dark"
                      ? theme.colors.pink[6]
                      : theme.colors.indigo[6],
                },
              },
            }}
          >
            {sampleArticles.map((mapped, index) => (
              <Carousel.Slide key={"secondHomepageSection" + index}>
                <Card
                  bg="transparent"
                  w={450}
                  radius="xs"
                  withBorder
                  // maw={350}
                  style={{
                    ...(tweenValues.length && {
                      opacity: tweenValues[index],
                    }),
                    borderTop: 0,
                    borderBottom: 0,
                    borderRight: 0,
                  }}
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                  })}
                >
                  <Stack align="center">
                    <EdtingImage
                      widthWise
                      src={mapped.cover}
                      width={400}
                      height={400}
                      style={{
                        borderRadius: "20px 20px 20px 20px",
                      }}
                    />
                    <Stack w="100%" align="start" p="xl">
                      <Group>
                        <Badge
                          p="sm"
                          sx={{
                            fontWeight: 600,
                            fontSize: 10,
                          }}
                          color={colorScheme == "dark" ? "gray" : "dark"}
                          variant="outline"
                        >
                          {mapped.category}
                        </Badge>

                        <Text size="xs" color="dimmed">
                          {mapped.readTime}
                        </Text>
                      </Group>
                      <Title order={3} lineClamp={3}>
                        {mapped.title}
                      </Title>
                      <Text lineClamp={3}>{mapped.description}</Text>
                    </Stack>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Suspense>
      </Box>
    </Container>
  );
};

export default SecondHomepageSection;
