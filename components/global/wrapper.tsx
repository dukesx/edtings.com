import {
  ActionIcon,
  Anchor,
  AppShell,
  Aside,
  Badge,
  Box,
  Burger,
  Button,
  Card,
  Container,
  Drawer,
  Footer,
  Group,
  Header,
  MediaQuery,
  Modal,
  Navbar,
  NavLink,
  ScrollArea,
  Stack,
  Tabs,
  Text,
  ThemeIcon,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { nanoid } from "nanoid";
import Link from "next/link";
import {
  ArrowRight,
  MoonStars,
  SignIn,
  Sun,
  UserPlus,
} from "@phosphor-icons/react";
import { Fragment, useState } from "react";
import { serif } from "../../pages/_app";
import { AppWrapperProps } from "../../types/generics";
import AppNavbar from "./navbar";
import { generateGradient, generateGradient2 } from "../../utils/basic";
import lightOrDarkColor from "@check-light-or-dark/color";
import { Carousel } from "@mantine/carousel";

const AppWrapper = ({
  logo,
  children,
  navbar = true,
  header = true,
  aside = false,
  footer = false,
  padding = true,
  path,
  navbarProps = {
    navbarPosition: "fixed",
    navbarLinks: [],
    navbarTitle: "Categories",
  },
  asideProps = {
    asidePosition: "fixed",
    asideLinks: [],
    asideTitle: "",
    render: null,
  },
  headerProps = {
    headerPosition: "static",
    headerLinks: [],
  },
  modalProps = {
    blurIntensity: 0,
    opacity: 0,
  },
  drawerProps = {
    blurIntensity: 0,
    opacity: 0,
  },
  admin,
}: AppWrapperProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell
      data-shell
      fixed={false}
      padding={padding == true ? "md" : 0}
      styles={{
        main: {
          width: "100%",
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
        },
        body: {
          height: "100%",
        },
        root: {
          background: headerProps.headerColor
            ? headerProps.headerColor
            : colorScheme == "dark"
            ? theme.colors.dark[8]
            : theme.white,
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        header == true ? (
          <Container px="0px" size="100vw">
            <Container px={0} size="md">
              <Header
                mx="auto"
                maw={"80%"}
                zIndex={2000}
                fixed={false}
                withBorder={false}
                height={{ base: 60, md: 50 }}
                p="md"
                bg="transparent"
                sx={(theme) => ({
                  position: headerProps.headerPosition,
                  backgroundColor: "transparent",
                  [theme.fn.smallerThan("lg")]: {
                    maxWidth: "100%",
                  },
                })}
              >
                <Group
                  noWrap
                  h="100%"
                  sx={(theme) => ({
                    alignItems: "center",
                    alignContent: "center",
                  })}
                  position="apart"
                >
                  <MediaQuery largerThan="md" styles={{ display: "none" }}>
                    <ThemeIcon size="lg" radius="xl" variant="filled">
                      <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size={12}
                        color={theme.white}
                      />
                    </ThemeIcon>
                  </MediaQuery>
                  {logo ? (
                    logo
                  ) : (
                    <Anchor
                      href="/"
                      variant="text"
                      style={{
                        textDecoration: "none",
                      }}
                      component={Link}
                    >
                      <Group noWrap spacing={3}>
                        <Group noWrap ml={6} mt={0} spacing={8}>
                          <Text
                            color={
                              headerProps.headerColor
                                ? lightOrDarkColor(headerProps.headerColor) ==
                                  "light"
                                  ? colorScheme == "dark"
                                    ? "gray.4"
                                    : "dark"
                                  : "gray.1"
                                : colorScheme == "dark"
                                ? "gray.4"
                                : "dark"
                            }
                            sx={{
                              fontFamily: serif.style.fontFamily,
                            }}
                            size="xl"
                            weight={400}
                          >
                            Edtings
                          </Text>
                          <MediaQuery
                            smallerThan={400}
                            styles={{ display: "none" }}
                          >
                            <Group spacing={7} noWrap>
                              <Text
                                color={
                                  headerProps.headerColor
                                    ? lightOrDarkColor(
                                        headerProps.headerColor
                                      ) == "light"
                                      ? colorScheme == "dark"
                                        ? "gray.4"
                                        : "dark"
                                      : "gray.1"
                                    : colorScheme == "dark"
                                    ? "gray.4"
                                    : "dark"
                                }
                                mt={2}
                              >
                                /
                              </Text>

                              <Text
                                color={
                                  headerProps.headerColor
                                    ? lightOrDarkColor(
                                        headerProps.headerColor
                                      ) == "light"
                                      ? colorScheme == "dark"
                                        ? "gray.4"
                                        : "dark"
                                      : "gray.1"
                                    : colorScheme == "dark"
                                    ? "gray.4"
                                    : "dark"
                                }
                                mt={2}
                                size={11}
                              >
                                The Editor&apos;s Platform
                              </Text>
                            </Group>
                          </MediaQuery>
                        </Group>
                      </Group>
                    </Anchor>
                  )}

                  <Group noWrap>
                    {headerProps && headerProps.headerLinks && (
                      <Group position="right" maw={300}>
                        {headerProps &&
                          headerProps.headerLinks &&
                          headerProps.headerLinks.map((mapped) => {
                            return (
                              <Fragment key={nanoid()}>
                                {mapped.render}
                              </Fragment>
                            );
                          })}
                      </Group>
                    )}

                    <ActionIcon
                      radius="xl"
                      variant="filled"
                      size="md"
                      color={colorScheme == "light" ? "dark" : "dark"}
                      onClick={() => toggleColorScheme()}
                    >
                      {colorScheme == "dark" ? (
                        <Sun size={15} weight="duotone" />
                      ) : (
                        <MoonStars weight="duotone" />
                      )}
                    </ActionIcon>
                    <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                      <Button
                        color={colorScheme == "dark" ? "pink" : "indigo"}
                        component={Link}
                        variant="gradient"
                        gradient={{
                          from: colorScheme == "dark" ? "pink" : "indigo.5",
                          to: colorScheme == "dark" ? "grape" : "blue",
                        }}
                        href="/sign-in"
                        px="md"
                        h={30}
                        radius="xl"
                        styles={{
                          label: {
                            fontSize: 12,
                          },
                        }}
                      >
                        Sign in
                      </Button>
                    </MediaQuery>

                    <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                      <ActionIcon
                        size="lg"
                        variant="gradient"
                        gradient={{
                          from: colorScheme == "dark" ? "pink.5" : "indigo.4",
                          to: colorScheme == "dark" ? "grape" : "blue",
                        }}
                        radius="xl"
                        component={Link}
                        href="/sign-in"
                      >
                        <SignIn size={16} />
                      </ActionIcon>
                    </MediaQuery>
                  </Group>
                </Group>
              </Header>
            </Container>
          </Container>
        ) : undefined
      }
      navbar={
        <MediaQuery
          smallerThan={1000}
          styles={{
            display: "none",
          }}
        >
          <Navbar
            pt={32}
            pr={32}
            hiddenBreakpoint={navbar == false ? 8000 : "md"}
            hidden={!opened}
            withBorder={true}
            width={{
              xs: 0,
              sm: 0,
              md: navbar == false ? 0 : 370,
              lg: navbar == false ? 0 : 420,
            }}
            sx={(theme) => ({
              position: navbarProps.navbarPosition,
              paddingTop: 50,
              paddingRight: 0,
              paddingLeft: 50,
              [theme.fn.smallerThan(1000)]: {
                padding: 0,
              },
            })}
          >
            <Navbar.Section>
              <AppNavbar
                admin={admin}
                links={navbarProps.navbarLinks}
                path={path}
              />
            </Navbar.Section>
            <Navbar.Section
              sx={{
                position: "absolute",
                bottom: "calc(100% - 88vh)",
              }}
            >
              <MediaQuery
                smallerThan={1000}
                styles={{
                  display: "none",
                }}
              >
                <Group maw={350} px="xl" spacing="sm">
                  <Anchor color="dimmed" size="xs">
                    About
                  </Anchor>
                  <Anchor color="dimmed" size="xs">
                    Press & Media
                  </Anchor>
                  <Anchor color="dimmed" size="xs">
                    Terms of service
                  </Anchor>
                  <Anchor color="dimmed" size="xs">
                    Privacy Policy
                  </Anchor>
                  <Anchor color="dimmed" size="xs">
                    FAQ
                  </Anchor>
                  <Anchor color="dimmed" size="xs">
                    Acknowledgements
                  </Anchor>
                </Group>
              </MediaQuery>
            </Navbar.Section>
          </Navbar>
        </MediaQuery>
      }
      aside={
        aside == true ? (
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside
              height="100%"
              sx={{
                position: asideProps.asidePosition ?? "sticky",
              }}
              p="md"
              hiddenBreakpoint="sm"
              width={{ sm: 300, md: 350, lg: 500 }}
            >
              {asideProps.render ? asideProps.render : null}
            </Aside>
          </MediaQuery>
        ) : undefined
      }
      footer={
        footer == true ? (
          <Footer height={60} p="md">
            Application footer
          </Footer>
        ) : undefined
      }
    >
      <MediaQuery
        query="(max-width: 500px) and (min-width: 300px)"
        styles={{
          display: "none",
        }}
      >
        <Modal
          overlayProps={{
            blur: modalProps.blurIntensity,
            opacity: modalProps.opacity,
          }}
          centered
          withCloseButton={false}
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            content: {
              padding: "0 !important",
              paddingBottom: "50px !important",
              paddingLeft: "50px !important",
            },
          }}
          size="sm"
        >
          <AppNavbar
            title={navbarProps.navbarTitle}
            links={navbarProps.navbarLinks}
            path={path}
            navbar={opened}
            setNavbar={setOpened}
          />
        </Modal>
      </MediaQuery>

      <MediaQuery
        largerThan={500}
        styles={{
          display: "none",
        }}
      >
        <Drawer
          overlayProps={{
            blur: drawerProps.blurIntensity,
            opacity: drawerProps.opacity,
          }}
          padding={0}
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            content: {
              borderRadius: theme.radius.sm,
              paddingLeft: "30px !important",
              height: "unset",
              paddingBottom: "30px !important",
            },
          }}
          withCloseButton={false}
        >
          <AppNavbar
            title={navbarProps.navbarTitle}
            links={navbarProps.navbarLinks}
            path={path}
            navbar={opened}
            setNavbar={setOpened}
          />
        </Drawer>
      </MediaQuery>
      {children}
    </AppShell>
  );
};

export default AppWrapper;
