/* eslint-disable react/display-name */
/* eslint-disable react/jsx-key */
import { Card, Divider, Stack, Text } from "@mantine/core";
import { forwardRef, Fragment } from "react";

export default forwardRef((props: any, ref) => {
  return (
    <Card py={8} withBorder>
      <Stack>
        {props.items.map((mapped: any) => {
          return (
            <Stack
              spacing={1}
              onClick={async () => {
                props.command({
                  id: mapped.id,
                  label: mapped.full_name,
                  avatar: mapped.dp,
                  username: mapped.username,
                  bio: mapped.bio,
                });
              }}
            >
              <Text size="xs">{mapped.full_name}</Text>
              <Text color="dimmed" size="xs">
                @{mapped.username}
              </Text>
            </Stack>
          );
        })}
      </Stack>
    </Card>
  );
});
