import {
  ActionIcon,
  Avatar,
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import Image from "next/image";
import { Check, Rss } from "phosphor-react";
import { Fragment } from "react";
import { generateGradient } from "../../utils/basic";
import EdtingImage from "../global/image";
import YoutubeLogo from "../../public/youtube.svg";
import TwitterLogo from "../../public/twitter.svg";
import MediumLogo from "../../public/medium.svg";
import Medium2Logo from "../../public/medium-2.svg";
import { UserPageSectionProps } from "../../types/users/generics";

const UserPageSection = ({ stats, followed, author }: UserPageSectionProps) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Fragment>
      <Paper
        bg={"transparent"}
        pt={30}
        id="welcome"
        sx={(theme) => ({
          backgroundColor:
            colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        })}
      >
        <Stack
          sx={(theme) => ({
            alignItems: "center",
            alignContent: "center",
            height: "100%",
            justifyItems: "center",
            justifyContent: "center",
          })}
          align="center"
        >
          <Group
            sx={{
              position: "relative",
            }}
            position="center"
          >
            <Avatar
              sx={(theme) => ({
                borderRadius: "50%",
              })}
              radius="xl"
              size={300}
            >
              <EdtingImage
                avatar
                height={300}
                width={300}
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              />
            </Avatar>

            <Group
              spacing="xs"
              sx={{
                position: "absolute",
                bottom: -62,
              }}
            >
              <Tooltip label="@dukesx on Twitter">
                <ActionIcon
                  color={colorScheme == "dark" ? "gray.8" : "gray.1"}
                  variant="transparent"
                  radius="xl"
                  size="xl"
                >
                  <Image
                    priority
                    alt=""
                    width={35}
                    height={35}
                    src={TwitterLogo}
                  />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="@dukesx on Medium">
                <ActionIcon
                  color={"gray.1"}
                  variant={colorScheme == "dark" ? "filled" : "transparent"}
                  radius="xl"
                  size={35}
                >
                  <Image
                    priority
                    alt=""
                    width={colorScheme == "dark" ? 25 : 32}
                    height={colorScheme == "dark" ? 25 : 32}
                    src={colorScheme == "dark" ? Medium2Logo : MediumLogo}
                  />
                </ActionIcon>
              </Tooltip>

              <Tooltip label="@dukesx on Youtube">
                <ActionIcon
                  color={colorScheme == "dark" ? "gray.8" : "gray.1"}
                  variant="transparent"
                  radius="xl"
                  size="xl"
                >
                  <Image
                    priority
                    style={{
                      borderRadius: "100%",
                    }}
                    alt=""
                    width={35}
                    height={35}
                    src={YoutubeLogo}
                  />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Group>
          <Stack mt={45} p="xl" spacing={0}>
            <Title
              sx={(theme) => ({
                [theme.fn.smallerThan(600)]: {
                  marginLeft: 0,
                },
              })}
              order={4}
              transform="uppercase"
              weight={800}
              align="center"
            >
              {author.name}
            </Title>
            <Text
              transform="capitalize"
              my={8}
              align="center"
              color={colorScheme == "dark" ? "dimmed" : "gray.7"}
              size="sm"
              weight={500}
            >
              {author.status}
            </Text>
            {followed ? (
              <Button
                variant="outline"
                mt={6}
                color={colorScheme == "dark" ? "gray.3" : "dark"}
                leftIcon={<Check size={19} />}
              >
                Following
              </Button>
            ) : (
              <Button mt={6} color="dark" leftIcon={<Rss size={19} />}>
                Follow
              </Button>
            )}
          </Stack>
        </Stack>
      </Paper>
      <Paper
        bg="transparent"
        mt={20}
        px="xl"
        pb={50}
        sx={(theme) => ({
          backgroundColor:
            colorScheme == "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        })}
      >
        <Group
          noWrap
          spacing={50}
          position="center"
          px="xl"
          sx={(theme) => ({
            height: "100%",
            [theme.fn.smallerThan(400)]: {
              gap: 30,
            },
          })}
        >
          <Stack spacing={5} align="center">
            <Text transform="uppercase" size="md" weight={800}>
              Views
            </Text>
            <Text size="md">
              {Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stats.views)}{" "}
            </Text>
          </Stack>

          <Stack spacing={5} align="center">
            <Text transform="uppercase" size="md" weight={800}>
              Articles
            </Text>
            <Text size="md">{stats.articles}</Text>
          </Stack>

          <Stack spacing={5} align="center">
            <Text transform="uppercase" size="md" weight={800}>
              Followers
            </Text>
            <Text size="md">
              {Intl.NumberFormat("en-US", {
                notation: "compact",
                compactDisplay: "short",
              }).format(stats.followers)}{" "}
            </Text>
          </Stack>
        </Group>
      </Paper>
    </Fragment>
  );
};

export default UserPageSection;
