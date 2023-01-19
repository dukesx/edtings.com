import {
  ActionIcon,
  Anchor,
  Box,
  Group,
  MantineColor,
  MediaQuery,
  Navbar,
  NavLink,
  Stack,
  Text,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import {
  AngularLogo,
  Archive,
  Atom,
  Cloud,
  FileVue,
  GlobeSimple,
  Heartbeat,
  Hexagon,
  IconProps,
  MagnifyingGlass,
  MaskHappy,
  PersonSimpleRun,
  Pill,
  Prescription,
  StarHalf,
  Terminal,
  X,
} from "phosphor-react";
import { createRef, ReactNode, Ref, useEffect, useState } from "react";
import { AppNavbarLinks, AppNavbarProps } from "../../types/generics";
import { nanoid } from "nanoid";
import Link from "next/link";
// @ts-ignore
import ScrollSpy from "react-scrollspy-navigation";

const AppNavbar = ({
  navbar,
  setNavbar,
  path,
  links,
  title,
}: AppNavbarProps) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const router = useRouter();

  return (
    <Stack
      mt={50}
      spacing={4}
      ml={50}
      sx={(theme) => ({
        [theme.fn.smallerThan(1200)]: {
          marginLeft: 0,
          marginTop: 30,
        },
      })}
    >
      <MediaQuery
        largerThan={1000}
        styles={{
          display: "none",
        }}
      >
        <Group mb="xl" position="apart">
          <Text
            sx={(theme) => ({
              [theme.fn.smallerThan(1000)]: {
                marginLeft: 0,
              },
            })}
            weight={700}
          >
            {title ?? "Categories"}
          </Text>

          <ActionIcon
            variant="transparent"
            color="dark"
            mr="xl"
            mb={1}
            onClick={() => setNavbar(false)}
          >
            <X />
          </ActionIcon>
        </Group>
      </MediaQuery>
      <Stack
        spacing={4}
        sx={(theme) => ({
          marginRight: "0px",
          [theme.fn.smallerThan(1000)]: {
            marginRight: 50,
          },
        })}
      >
        <ScrollSpy className="active-nav" duration={100}>
          {links
            ? links.map((mapped) => {
                var ref = createRef<any>();
                return (
                  <NavLink
                    ref={ref}
                    component={Link}
                    href={mapped.href}
                    key={nanoid()}
                    active={path == mapped.path ?? false}
                    label={mapped.title}
                    color={mapped.color}
                    styles={() => ({
                      label: {
                        textTransform: "capitalize",
                        fontWeight: 500,
                        color:
                          colorScheme == "dark"
                            ? theme.colors.gray[5]
                            : theme.colors.gray[7],
                      },
                      root: {
                        borderRadius: theme.radius.sm,
                      },
                    })}
                    icon={
                      <ThemeIcon
                        color={
                          colorScheme == "dark"
                            ? mapped.color + ".4"
                            : mapped.color + ".7"
                        }
                        variant="light"
                        sx={{
                          backgroundColor: "transparent",
                        }}
                      >
                        <mapped.icon size={25} />
                      </ThemeIcon>
                    }
                  />
                );
              })
            : null}
        </ScrollSpy>
      </Stack>
    </Stack>
  );
};

export default AppNavbar;
