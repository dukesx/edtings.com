import { Avatar, Box, Card, Center, Stack, Text, Tooltip } from "@mantine/core";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import Link from "next/link";
import { ArticleCardWithBGSmallProps } from "../../../types/articles/cards";
import EdtingImage from "../../global/image";

const ArticleCardWithBGSmall = ({
  title,
  date,
  cover,
  authors,
  lazyLoadImages = false,
}: ArticleCardWithBGSmallProps) => {
  return (
    <Card
      mx="auto"
      sx={(theme) => ({
        position: "relative",
        [theme.fn.smallerThan(1200)]: {
          height: 330,
        },
      })}
      w={"100%"}
      maw={350}
      radius="md"
      h={350}
    >
      <Card.Section>
        <EdtingImage
          priority
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
            {format(date, "do MMMM yyyy")}
          </Text>
          <Box
            w="100%"
            sx={(theme) => ({
              [theme.fn.smallerThan(1200)]: {
                height: 170,
              },
            })}
            h={200}
          >
            <Text
              lineClamp={5}
              sx={(theme) => ({
                [theme.fn.smallerThan(1300)]: {
                  WebkitLineClamp: 4,
                },
              })}
              color="white"
              m="xl"
              weight={800}
              size={20}
            >
              {title}
            </Text>
          </Box>

          <Avatar.Group>
            {authors.map((mapped) => (
              <Tooltip key={nanoid()} label={mapped.name}>
                <Avatar component={Link} href="/user/1" size={"md"} radius="xl">
                  <EdtingImage
                    loading={lazyLoadImages == true ? "lazy" : "eager"}
                    priority={lazyLoadImages == true ? false : true}
                    height={40}
                    width={40}
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

export default ArticleCardWithBGSmall;
