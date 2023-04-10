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
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useRef } from "react";
import { sampleArticles } from "../../data/samples";
import EdtingImage from "../global/image";
//@ts-ignore
// import Slide from "react-reveal/Slide";
import { fadeToDark, fadeToWhite } from "../../utils/basic";
import { serif } from "../../pages/_app";
import { Slide } from "react-awesome-reveal";

const LastHomepageSection = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const wheel = useRef(WheelGesturesPlugin());
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      //   bg={colorScheme == "dark" ? "dark.8" : "gray.0"}
      pos="relative"
      size="100%"
      px={0}
    >
      <Slide duration={1000} direction="up">
        <Center mt={0} py="xl" w="100%">
          <Stack pt={40} px="xl" spacing={8}>
            <Title
              order={1}
              sx={(theme) => ({
                fontFamily: serif.style.fontFamily,
                [theme.fn.smallerThan(400)]: {
                  fontSize: `calc(${theme.fontSizes.xl} * 1.5)`,
                },
              })}
              weight={400}
              transform="uppercase"
            >
              And So Much More
            </Title>
          </Stack>
        </Center>
        <Box
          h={540}
          py={"xl"}
          //@ts-ignore
          sx={
            colorScheme == "dark"
              ? {
                  ...fadeToDark("100%"),
                }
              : {
                  ...fadeToWhite(),
                }
          }
        >
          <Carousel
            //@ts-ignore
            plugins={[autoplay.current, wheel.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            mt="xl"
            withControls={false}
            slideSize="25%"
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
              {
                slideSize: "25%",
                maxWidth: 1800,
                slideGap: 20,
              },
              {
                slideSize: "30%",
                maxWidth: 2400,
                slideGap: 40,
              },
            ]}
          >
            {sampleArticles.map((mapped: any, index: number) => (
              <Carousel.Slide key={"lastHomepageSection" + index}>
                <Card
                  radius="xl"
                  maw={350}
                  sx={(theme) => ({
                    [theme.fn.smallerThan(400)]: {
                      maxWidth: 330,
                    },
                    [theme.fn.largerThan(1500)]: {
                      maxWidth: "100%",
                    },
                  })}
                >
                  <Card.Section>
                    <EdtingImage
                      src={mapped.cover}
                      width={450}
                      height={350}
                      style={{
                        borderRadius: "30px 30px 0px 0px",
                      }}
                    />
                  </Card.Section>
                  <Stack p="xl">
                    <Title order={5} lineClamp={2}>
                      {mapped.title}
                    </Title>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Box>
      </Slide>
    </Container>
  );
};

export default LastHomepageSection;
