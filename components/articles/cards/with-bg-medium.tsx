import { Avatar, Box, Card, Center, Stack, Text, Tooltip } from "@mantine/core";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { ArticleCardWithBGMediumProps } from "../../../types/articles/cards";
import EdtingImage from "../../global/image";

const ArticleCardWithBGMedium = ({
  title,
  date,
  cover,
  authors,
  lazyLoadImages = false,
}: ArticleCardWithBGMediumProps) => {
  console.log(lazyLoadImages);
  return (
    <Card
      p={0}
      w={"100%"}
      maw={380}
      radius="md"
      h={400}
      sx={(theme) => ({
        position: "relative",
        [theme.fn.smallerThan(1200)]: {
          height: 370,
        },
        [theme.fn.smallerThan(600)]: {
          maxWidth: 350,
        },
      })}
    >
      <Card.Section>
        <EdtingImage
          loading={lazyLoadImages == true ? "lazy" : undefined}
          priority={lazyLoadImages == true ? false : true}
          style={{
            filter: "brightness(50%)",
          }}
          fill
          src={cover}
        />
      </Card.Section>
      <Center
        sx={{
          position: "absolute",
          height: "100%",
        }}
      >
        <Stack align="center">
          <Text size="md" weight={600} color="white">
            {format(date, "Do MMMM yyyy")}
          </Text>
          <Box
            h={250}
            sx={(theme) => ({
              [theme.fn.smallerThan(1200)]: {
                height: 190,
              },
            })}
          >
            <Text
              align="center"
              lineClamp={4}
              color="white"
              my="xl"
              mx="xl"
              weight={800}
              size={22}
            >
              {title}
            </Text>
          </Box>

          <Avatar.Group>
            {authors.map((mapped) => (
              <Tooltip label={mapped.name} key={nanoid()}>
                <Avatar size={40} radius="xl">
                  <EdtingImage
                    priority
                    height={45}
                    width={45}
                    avatar
                    src={mapped.dp}
                  />
                </Avatar>
              </Tooltip>
            ))}
          </Avatar.Group>
        </Stack>
      </Center>
    </Card>
  );
};

export default ArticleCardWithBGMedium;
