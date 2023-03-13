import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Group,
  MantineColor,
  MediaQuery,
  Navbar,
  NavLink,
  ScrollArea,
  Stack,
  Text,
  ThemeIcon,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useRouter } from "next/router";
import { ArrowRight, CaretRight, X } from "phosphor-react";
import { createRef, Fragment } from "react";
import { AppNavbarProps } from "../../types/generics";
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
  admin,
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
        <Group mb={title ? "xl" : 0} position="apart">
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
      <ScrollArea.Autosize mah={520}>
        <Stack
          h="100%"
          spacing={4}
          sx={(theme) => ({
            marginRight: "0px",
            [theme.fn.smallerThan(1000)]: {
              marginRight: 50,
            },
          })}
        >
          <ScrollSpy offsetTop={100} className="active-nav" duration={100}>
            {links
              ? links.map((mapped) => {
                  var ref = createRef<any>();
                  return (
                    <NavLink
                      disableRightSectionRotation={
                        mapped.count && mapped.count > 0 ? true : false
                      }
                      rightSection={
                        mapped.count && mapped.count > 0 ? (
                          <Badge
                            styles={{
                              inner: {
                                fontWeight: 600,
                              },
                            }}
                            size="xs"
                            variant="filled"
                            color={colorScheme == "dark" ? "blue.9" : "dark"}
                          >
                            {mapped.count} missed
                          </Badge>
                        ) : (
                          <CaretRight size={13} />
                        )
                      }
                      defaultOpened={path?.includes(mapped.path) ?? false}
                      key={nanoid()}
                      ref={ref}
                      component={Link}
                      href={mapped.href}
                      active={
                        mapped.subLinks && mapped.subLinks.length > 0
                          ? false
                          : path?.includes(mapped.path)
                          ? true
                          : false
                      }
                      label={mapped.title}
                      color={mapped.color ?? "gray"}
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
                        mapped.icon ? (
                          <>
                            <ThemeIcon
                              color={
                                colorScheme == "dark"
                                  ? mapped.color + ".4"
                                  : mapped.color + ".7"
                              }
                              variant="light"
                            >
                              <mapped.icon size={25} />
                            </ThemeIcon>
                          </>
                        ) : null
                      }
                    >
                      {mapped.subLinks && mapped.subLinks.length > 0
                        ? mapped.subLinks.map((mapped2) => {
                            var ref2 = createRef<any>();
                            return (
                              <NavLink
                                ref={ref2}
                                component={Link}
                                href={(admin ? "/admin" : "") + mapped2.href}
                                key={nanoid(10)}
                                active={path == mapped2.path ?? false}
                                label={mapped2.title}
                                color={
                                  mapped2.color ? mapped2.color : mapped.color
                                }
                                styles={() => ({
                                  label: {
                                    // textTransform: "capitalize",
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
                                  mapped2.icon ? (
                                    <ThemeIcon
                                      color={
                                        colorScheme == "dark"
                                          ? (mapped2.color
                                              ? mapped2.color
                                              : mapped.color) + ".4"
                                          : (mapped2.color
                                              ? mapped2.color
                                              : mapped.color) + ".7"
                                      }
                                      variant="light"
                                      sx={{
                                        backgroundColor: "transparent",
                                      }}
                                    >
                                      <mapped2.icon
                                        weight="duotone"
                                        size={21}
                                      />
                                    </ThemeIcon>
                                  ) : null
                                }
                              />
                            );
                          })
                        : null}
                    </NavLink>
                  );
                })
              : null}
          </ScrollSpy>
        </Stack>
      </ScrollArea.Autosize>
    </Stack>
  );
};

export default AppNavbar;
