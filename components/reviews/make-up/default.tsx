import {
  Anchor,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import AppWrapper from "../../global/wrapper";
import EdtingImage from "../../global/image";
import { format } from "date-fns";
import { serif, serifBody } from "../../../pages/_app";
import { Divide } from "@phosphor-icons/react";

const MakeUpReviewDefaulTemplate = () => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  return (
    <AppWrapper navbar={false}>
      <Container mt="xl" size="xl">
        <Stack mx="auto" align="center" spacing="xl" maw={800}>
          <Title align="center" weight={900}>
            15 Best Dry Brushes Of 2023 For Smooth, Exfoliated Skin And
            Lymphatic Drainage, Per Reviews
          </Title>

          <Text size="lg" align="center">
            Dry brushing offers many benefits, including skin exfoliation and
            increased circulation.
          </Text>

          <Group mt={-8}>
            <Group spacing={8}>
              <Avatar radius="xl">
                <EdtingImage
                  fill
                  src={
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                  }
                />
              </Avatar>
              <Text size="sm">By</Text>
              <Anchor
                color={colorScheme == "dark" ? "gray" : "dark"}
                href="#"
                size="sm"
                weight={700}
              >
                Lizzy Briskin
              </Anchor>
            </Group>

            <Group>
              <Text size="sm">
                Published: {format(Date.now(), "MMMM do, yyyy")}
              </Text>
            </Group>
          </Group>
        </Stack>

        <Box mt="xl" mx="auto" maw={"40.25rem"}>
          <Box>
            <EdtingImage
              src="https://images.unsplash.com/photo-1577466803092-390dead202bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              height={350}
              width={644}
              widthWise
            />
          </Box>

          <Stack maw={"40.25rem"} mx="auto" mt="xl">
            <Text
              weight={400}
              size="lg"
              sx={{
                fontFamily: serifBody.style.fontFamily,
              }}
            >
              You've probably heard a lot about all of the great benefits of{" "}
              <Anchor
                pos="relative"
                sx={{
                  fontFamily: serifBody.style.fontFamily,
                  zIndex: 10,
                  textDecoration: "none",
                  borderBottom: "2px solid transparent",
                  "&:hover": {
                    textDecoration: "none",
                    borderBottom: `2px solid ${theme.colors.orange[6]}`,
                    ".myDiv": {
                      height: 22,
                      zIndex: -1,
                      transition: "height 400ms ease-in-out",
                      opacity: 0.2,
                    },
                  },
                }}
                weight={500}
              >
                facial exfoliation
                <Box
                  className="myDiv"
                  pos="absolute"
                  h={2}
                  bottom={-2}
                  left={0}
                  right={0}
                  w={"100%"}
                  bg="orange"
                  maw="maw-content"
                />
              </Anchor>
              —but probably less about exfoliating the rest of your body,
              amirite? The skin that's not on your face deserves love, too.
              While you can definitely find chemical exfoliants to use all over
              your body, dry brushes are a more simple and equally effective way
              to get rid of dead skin cell buildup.
            </Text>
          </Stack>

          <Stack mt="xl" mx="auto">
            <Title mb="xs" order={3} weight={800}>
              See some of the best dry brushes below:
            </Title>
            <Group position="apart" noWrap>
              <Title
                size={40}
                sx={{
                  fontFamily: serif.style.fontFamily,
                }}
                weight={400}
                order={1}
              >
                1
              </Title>
              <EdtingImage
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1649948350-41ReUQHU92L._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                width={120}
                height={120}
              />
              <Stack maw={200} spacing={4}>
                <Text
                  weight={800}
                  transform="uppercase"
                  color="orange.7"
                  size="sm"
                >
                  Best Overall Dry Brush
                </Text>
                <Text weight={800}>Touch Me Boar Bristle Body Brush</Text>
                <Stack spacing={0} align="start" w="100%" maw="max-content">
                  <Anchor
                    pos="relative"
                    sx={{
                      fontFamily: serifBody.style.fontFamily,
                      zIndex: 10,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      "&:hover": {
                        textDecoration: "none",
                        borderBottom: `2px solid ${theme.colors.orange[6]}`,
                        ".myDiv": {
                          height: 22,
                          zIndex: -1,
                          transition: "height 400ms ease-in-out",
                          opacity: 0.2,
                        },
                      },
                    }}
                    weight={500}
                  >
                    Read More
                    <Box
                      className="myDiv"
                      pos="absolute"
                      h={2}
                      bottom={-2}
                      left={0}
                      right={0}
                      w={"100%"}
                      bg="orange"
                      maw="maw-content"
                    />
                  </Anchor>
                </Stack>
              </Stack>

              <Button
                variant="outline"
                sx={{
                  color: "black",
                  fontWeight: 700,
                }}
                px="xl"
                color="orange"
                radius="sm"
              >
                {Intl.NumberFormat("en-US", {
                  currency: "USD",
                  currencyDisplay: "symbol",
                  style: "currency",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(10)}{" "}
                at AMAZON
              </Button>
            </Group>

            <Group position="apart" noWrap>
              <Title
                size={40}
                weight={400}
                sx={{
                  fontFamily: serif.style.fontFamily,
                }}
                order={1}
              >
                2
              </Title>
              <EdtingImage
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679511389-41MdsHYzvfL._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=980:*"
                width={120}
                height={120}
              />
              <Stack pb="xl" maw={200} spacing={4}>
                <Text
                  weight={800}
                  transform="uppercase"
                  color="orange.7"
                  size="sm"
                >
                  BEST DRY BRUSH WITH A DETACHABLE HANDLE
                </Text>
                <Text weight={800}>Zen Me Boar Bristle Brush</Text>
                <Stack pos="relative" spacing={0} align="start" w="100%">
                  <Anchor
                    pos="relative"
                    sx={{
                      fontFamily: serifBody.style.fontFamily,
                      zIndex: 10,
                      textDecoration: "none",
                      borderBottom: "2px solid transparent",
                      "&:hover": {
                        textDecoration: "none",
                        borderBottom: `2px solid ${theme.colors.orange[6]}`,
                        ".myDiv": {
                          height: 22,
                          zIndex: -1,
                          transition: "height 400ms ease-in-out",
                          opacity: 0.2,
                        },
                      },
                    }}
                    weight={500}
                  >
                    Read More
                    <Box
                      className="myDiv"
                      pos="absolute"
                      h={2}
                      bottom={-2}
                      left={0}
                      right={0}
                      w={"100%"}
                      bg="orange"
                      maw="maw-content"
                    />
                  </Anchor>
                </Stack>
              </Stack>
              <Button
                color="orange"
                sx={{
                  color: "black",
                  fontWeight: 700,
                }}
                variant="outline"
                px="xl"
                radius="sm"
              >
                {Intl.NumberFormat("en-US", {
                  currency: "USD",
                  currencyDisplay: "symbol",
                  style: "currency",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(10)}{" "}
                at AMAZON
              </Button>
            </Group>
          </Stack>
        </Box>
      </Container>
    </AppWrapper>
  );
};

export default MakeUpReviewDefaulTemplate;
