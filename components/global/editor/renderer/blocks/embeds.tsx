/* eslint-disable react-hooks/exhaustive-deps */
import {
  Card,
  Center,
  Group,
  Loader,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { IconBug } from "@tabler/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

const EditorRendererEmbeds = ({ src }: any) => {
  const [loading, setLoading] = useState(false);
  const [embed, setEmbed] = useState<any>();
  const { colorScheme } = useMantineColorScheme();
  const getEmbeds = async () => {
    setLoading(true);

    const fetcher = await fetch(
      // `https://embeds.fitlive.health/iframely?url=${props.node.attrs.src}
      `https://iframe.ly/api/iframely?url=${src}&api_key=4a589c2e0d46bd4afc5d8c&theme=${colorScheme}`
    );

    const res = await fetcher.json();

    setEmbed(res);

    setLoading(false);
  };
  useEffect(() => {
    getEmbeds();
  }, [src]);

  return (
    <div>
      {loading ? (
        <Card withBorder>
          <Center>
            <Stack align="center">
              <Loader variant="bars" color="blue" />
              <Text>Loading OEmbed</Text>
            </Stack>
          </Center>
        </Card>
      ) : //@ts-ignore
      embed && embed.html ? (
        //@ts-ignore

        <div dangerouslySetInnerHTML={{ __html: embed.html }} />
      ) : embed && embed.meta ? (
        <Card radius="md" withBorder>
          {embed && embed.links.thumbnail ? (
            <Card.Section>
              <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src={embed && embed.links.thumbnail[0].href}
                loader={({ src }) => src}
                style={{
                  objectFit: "cover",
                }}
              />
            </Card.Section>
          ) : null}
          <Stack mt="md">
            <Title order={5}>{embed && embed.meta.title}</Title>
            <Text lineClamp={2} size="sm" color="dimmed">
              {embed && embed.meta.description}
            </Text>
            <Group position="apart" mt="sm">
              <Image
                alt=""
                width={20}
                height={20}
                objectFit="cover"
                src={embed && embed.links.icon[0].href}
                loader={({ src }) => src}
                style={{
                  objectFit: "cover",
                }}
              />
              <Text ml="auto" size="xs" color="dimmed">
                {embed && embed.meta.site}
              </Text>
            </Group>
          </Stack>
        </Card>
      ) : (
        <Card withBorder>
          <Center>
            <Stack align="center">
              <ThemeIcon radius="xl" size={100} color="red" variant="light">
                <IconBug size={40} />
              </ThemeIcon>
              <Text size="sm" weight={600} align="center">
                {embed && embed.error}
              </Text>
            </Stack>
          </Center>
        </Card>
      )}
    </div>
  );
};

export default EditorRendererEmbeds;
