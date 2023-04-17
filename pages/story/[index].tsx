import {
  Anchor,
  Avatar,
  Badge,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import EdtingImage from "../../components/global/image";
import AppWrapper from "../../components/global/wrapper";
import Vector from "../../public/Vector.png";
import Image from "next/image";
import { sampleArticles } from "../../data/samples";
import { serif } from "../_app";
import { generateGradient } from "../../utils/basic";
import { Notches } from "@phosphor-icons/react";

const Story = () => {
  const para = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in euismod nisl. Aenean quis bibendum mi. Fusce dapibus, orci quis tempor suscipit, tortor libero sollicitudin sem, consequat dignissim odio risus et nibh. Aenean blandit sit amet sem id eleifend. Fusce iaculis, massa eu auctor varius, urna risus malesuada sapien, in consequat odio nisl vel libero. Mauris venenatis mollis orci sit amet dignissim. Proin ut justo vestibulum, pretium tortor eget, placerat leo. Sed ac turpis orci. Curabitur mi quam, dapibus vitae tellus sed, convallis finibus nisl. Praesent scelerisque tincidunt turpis, et vestibulum eros feugiat at. Quisque facilisis placerat nibh, non dictum turpis feugiat id.`,
    `Donec ut interdum orci. Phasellus volutpat ornare tincidunt. Vestibulum a erat leo. Praesent faucibus nulla vehicula elit placerat, blandit porta arcu maximus. Mauris vitae vestibulum libero. In hac habitasse platea dictumst. Aliquam bibendum, tellus non sollicitudin semper, nunc tortor feugiat nisl, nec venenatis leo metus vitae augue. Mauris imperdiet sem lacus, sit amet pulvinar massa placerat vel. Praesent maximus ultricies dictum. Donec sodales imperdiet tortor at sollicitudin.`,
    `Donec erat enim, viverra vel mauris non, tristique placerat dolor. Vestibulum vitae sem nisi. Aliquam dapibus fringilla arcu tincidunt hendrerit. Pellentesque at varius nisi. Maecenas lectus augue, consectetur nec odio pellentesque, sollicitudin faucibus turpis. Mauris imperdiet metus at sem pulvinar faucibus. Ut tincidunt tellus nulla, ac rhoncus enim aliquam sit amet. Nulla facilisi. Ut commodo, nibh at bibendum posuere, risus enim maximus enim, eu rhoncus turpis tellus sed orci. Vivamus ultricies congue dolor, commodo lacinia justo pellentesque vel. Nunc ornare sapien laoreet dolor tristique, eu condimentum risus semper. Phasellus ac metus justo. Ut non magna nisi. Aenean id lorem ex.`,
    `Duis venenatis feugiat imperdiet. Curabitur dignissim a velit nec iaculis. Mauris eu ante pellentesque, bibendum nisl nec, blandit magna. Aenean et turpis in neque viverra maximus sed quis libero. Ut nec lorem pharetra, hendrerit nisl ut, sollicitudin ligula. In tellus ligula, pretium sit amet congue fermentum, pulvinar non ipsum. Suspendisse potenti. Etiam porttitor, ex molestie mattis accumsan, urna purus dictum metus, vitae tempus ex ex at nunc. Quisque feugiat mi eu lorem consectetur interdum. Sed quis consequat enim, sollicitudin lobortis lacus. In vitae tortor nulla. Pellentesque ornare viverra fringilla. Nullam malesuada ante eget ipsum pharetra tempus.`,
    `In lacus diam, ornare in vehicula id, gravida vel quam. Etiam vulputate suscipit mauris, at sagittis odio tincidunt at. Integer gravida convallis nunc sed laoreet. Integer eget odio vel lacus commodo pulvinar vitae ut justo. Integer rutrum lectus turpis, ut placerat dolor maximus lacinia. Proin convallis ipsum nibh, vitae interdum odio blandit ac. Suspendisse potenti.`,
  ];
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppWrapper
      headerProps={
        {
          // headerPosition: "absolute",
          // headerColor: "gray.0",
        }
      }
      navbar={false}
      padding={false}
    >
      <Container
        sx={
          {
            //   ...generateGradient({
            //     color1: "blue",
            //     color2: "cyan",
            //     opacity: 0.2,
            //   }),
          }
        }
        size="100%"
        px={0}
      >
        <Group
          sx={{
            flexDirection: "row-reverse",
          }}
          noWrap
        >
          <Center p={90} h="100%" w="50%">
            <Stack align="start">
              <Group spacing="xs">
                <Badge px={0} variant="default">
                  <Anchor color={colorScheme == "dark" ? "gray" : "dark"}>
                    {sampleArticles[6].category}
                  </Anchor>
                </Badge>
                <ThemeIcon
                  radius="xl"
                  color={colorScheme == "dark" ? "dark.8" : "dark"}
                >
                  <Notches />
                </ThemeIcon>
                <Badge px={0} variant="default">
                  {sampleArticles[6].readTime}
                </Badge>
              </Group>
              <Title
                weight={400}
                sx={{
                  fontFamily: serif.style.fontFamily,
                }}
                lineClamp={3}
              >
                {sampleArticles[6].title}
              </Title>
              <Text color="gray" lineClamp={2} size="sm">
                {sampleArticles[6].description}
              </Text>

              <Group mt="xl" noWrap spacing="xs">
                <Avatar radius="xl" size={40}>
                  <EdtingImage
                    width={50}
                    height={50}
                    src={
                      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    }
                  />
                </Avatar>
                <Stack spacing={0}>
                  <Text size="sm" weight={600}>
                    Muhammad Afzaal Afridi
                  </Text>
                  <Text color="gray" lineClamp={2} size="xs">
                    CEO at Fitlive Physiotherapy & Wellness
                  </Text>
                </Stack>
              </Group>
            </Stack>
          </Center>
          <Card radius={0} pos="relative" w="50%" h={735}>
            <EdtingImage
              style={{
                borderRadius: 0,
              }}
              fill
              src={sampleArticles[6].cover}
            />
            <Box
              bg={theme.fn.rgba("dark", 0.1)}
              w="100%"
              h="100%"
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            ></Box>
          </Card>
        </Group>
        <Container mt={60} size="md">
          <Stack spacing={30}>
            <Container size="sm">
              <Stack>
                {para.map((mapped, index) =>
                  index < 2 ? <Text align="justify">{mapped}</Text> : null
                )}
              </Stack>
            </Container>

            <Stack align="center">
              <Card w="100%" h={550} radius="lg">
                <EdtingImage
                  style={{
                    borderRadius: 0,
                  }}
                  fill
                  src={sampleArticles[6].cover}
                />
              </Card>
              <Stack spacing={0}>
                <Text size="sm" weight={700}>
                  Figure:
                  <Text
                    // italic
                    ml={4}
                    weight={400}
                    // color="dark"
                    size="sm"
                    component="span"
                  >
                    Beautiful couple holding hands below stars
                  </Text>
                </Text>
                <Divider
                  color={colorScheme == "dark" ? "gray" : "dark"}
                  size="sm"
                />
              </Stack>
            </Stack>
            <Container size="sm">
              <Stack>
                {para.map((mapped) => (
                  <Text align="justify">{mapped}</Text>
                ))}
              </Stack>
            </Container>
          </Stack>
        </Container>
      </Container>
    </AppWrapper>
  );
};

export default Story;
