import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Code,
  Group,
  HoverCard,
  Mark,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import { At } from "phosphor-react";
import slugify from "slugify";
import EdtingImage from "../../../image";

const EditorRendererHeading = ({ data, level }: any) => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  const theme = useMantineTheme();

  return data.map((mapped: any, index: any) => {
    if (mapped.type == "mention") {
      return (
        <HoverCard
          key={nanoid()}
          width={320}
          shadow="md"
          withArrow
          position="top"
          openDelay={200}
          closeDelay={400}
        >
          <HoverCard.Target>
            <Badge
              mt="md"
              size="md"
              variant="dot"
              leftSection={<At size={16} color={theme.colors.blue[6]} />}
              color="blue"
              radius="xl"
              key={nanoid()}
            >
              <Text
                mt="sm"
                variant="link"
                weight={600}
                color={colorScheme == "dark" ? "gray.4" : "dark"}
                component={Link}
                href={`/author/${mapped.attrs.id}`}
                key={nanoid()}
              >
                {mapped.attrs.label}
              </Text>
            </Badge>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Group>
              <Avatar radius="xl">
                {mapped.attrs.avatar && (
                  <EdtingImage fill src={mapped.attrs.avatar ?? ""} />
                )}
              </Avatar>
              <Stack spacing={5}>
                <Text size="sm" weight={700} sx={{ lineHeight: 1 }}>
                  {mapped.attrs.label}
                </Text>
                <Anchor
                  href={`/author/${mapped.attrs.id}`}
                  color="dimmed"
                  size="xs"
                  sx={{ lineHeight: 1 }}
                >
                  @{mapped.attrs.username}
                </Anchor>
              </Stack>
            </Group>
            {mapped.attrs.bio ? (
              <Text size="xs" lineClamp={3}>
                <TypographyStylesProvider mt="sm">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: mapped.attrs.bio,
                    }}
                  />
                </TypographyStylesProvider>
              </Text>
            ) : (
              <Text color="dimmed" size="sm" mt="md">
                Interested in my work ? Check out my profile for more articles
              </Text>
            )}

            <Button
              onClick={() => router.push(`/author/${mapped.attrs.id}`)}
              mt="md"
              fullWidth
              size="xs"
              variant="light"
            >
              Visit Profile
            </Button>
          </HoverCard.Dropdown>
        </HoverCard>
      );
    }

    if (mapped.type == "text") {
      return (
        <Anchor
          id={`${slugify(mapped.text.toLowerCase())}`}
          variant="text"
          key={nanoid()}
          href={
            mapped.marks &&
            mapped.marks.filter((mark: any) => mark.type == "link").length > 0
              ? mapped.marks.filter((mark: any) => mark.type == "link")[0].attrs
                  .href
              : null
          }
          style={{
            cursor:
              mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "link"
              ).length > 0
                ? "pointer"
                : "auto",
          }}
        >
          <Title
            italic={
              mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "italic"
              ).length > 0 &&
              true
            }
            underline={
              mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "underline"
              ).length > 0 &&
              true
            }
            mt="sm"
            order={level}
            style={{
              fontFamily:
                mapped.marks &&
                mapped.marks.filter(
                  (mark: { type: string }) => mark.type == "textStyle"
                ).length > 0 &&
                mapped.marks.filter(
                  (mark: { type: string }) => mark.type == "textStyle"
                )[0].attrs.fontFamily,
            }}
            mx={1}
            variant={
              mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "link"
              ).length > 0
                ? "link"
                : "text"
            }
            color={
              mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "link"
              ).length > 0
                ? "blue"
                : "auto"
            }
            key={nanoid()}
          >
            {mapped.marks &&
            mapped.marks.filter(
              (mark: { type: string }) => mark.type == "highlight"
            ).length > 0 ? (
              <Mark>{mapped.text}</Mark>
            ) : mapped.marks &&
              mapped.marks.filter(
                (mark: { type: string }) => mark.type == "code"
              ).length > 0 ? (
              <Code>{mapped.text}</Code>
            ) : (
              mapped.text
            )}
          </Title>
        </Anchor>
      );
    }

    if (mapped.type == "hardBreak") {
      return <p key={nanoid()} />;
    }
  });
};

export default EditorRendererHeading;
