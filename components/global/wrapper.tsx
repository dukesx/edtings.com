import {
  ActionIcon,
  Anchor,
  AppShell,
  Aside,
  Box,
  Burger,
  Button,
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
import Link from "next/link";
import {
  Archive,
  Hexagon,
  List,
  MagnifyingGlass,
  MoonStars,
  SignIn,
  Sun,
  Terminal,
} from "phosphor-react";
import { useState } from "react";
import { serif } from "../../pages/_app";
import { AppWrapperProps } from "../../types/generics";
import AppNavbar from "./navbar";

const AppWrapper = ({
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
}: AppWrapperProps) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell
      fixed={false}
      padding={padding == true ? "md" : 0}
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
        body: {
          height: "100%",
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      header={
        header == true ? (
          <>
            <Header
              zIndex={2000}
              fixed={false}
              withBorder
              height={{ base: 60, md: 70 }}
              p="md"
              sx={{
                position: headerProps.headerPosition,
              }}
            >
              <Group
                h="100%"
                sx={(theme) => ({
                  alignItems: "center",
                  alignContent: "center",
                  [theme.fn.largerThan(500)]: {},
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
                <Anchor href="/" variant="text" component={Link}>
                  <Group spacing={3}>
                    <ThemeIcon
                      sx={(theme) => ({
                        [theme.fn.smallerThan("sm")]: {
                          minWidth: 32,
                          minHeight: 32,
                          width: 32,
                          height: 32,
                        },
                      })}
                      size={"xl"}
                      radius="sm"
                    >
                      <Text
                        size={"xl"}
                        sx={(theme) => ({
                          fontFamily: serif.style.fontFamily,
                          textDecorationColor: theme.colors.blue[6],
                          [theme.fn.smallerThan("sm")]: {
                            fontSize: theme.fontSizes.xl,
                            fontWeight: 400,
                          },
                        })}
                        weight={400}
                      >
                        E
                      </Text>
                      <Box component="span" mt={-10} ml={3}>
                        <ThemeIcon
                          sx={(theme) => ({
                            [theme.fn.smallerThan("sm")]: {
                              width: 5,
                              height: 5,
                              minWidth: 5,
                              minHeight: 5,
                            },
                          })}
                          size={7}
                          color="blue"
                          variant="filled"
                        >
                          <div />
                        </ThemeIcon>
                      </Box>
                    </ThemeIcon>
                    <MediaQuery smallerThan="md" styles={{ display: "none" }}>
                      <Stack ml={6} mt={-4} spacing={0}>
                        <Text
                          sx={{
                            fontFamily: serif.style.fontFamily,
                          }}
                          size="xl"
                          weight={400}
                        >
                          Edtings
                        </Text>
                        <Text mt={-3} size={11} color="dimmed">
                          The Editor&apos;s Platform
                        </Text>
                      </Stack>
                    </MediaQuery>
                  </Group>
                </Anchor>

                <Group>
                  <ActionIcon
                    radius="xl"
                    size="lg"
                    color="gray"
                    onClick={() => toggleColorScheme()}
                  >
                    {colorScheme == "dark" ? <Sun /> : <MoonStars />}
                  </ActionIcon>
                  <MediaQuery smallerThan="xs" styles={{ display: "none" }}>
                    <Button
                      color={colorScheme == "dark" ? "dark.4" : "dark"}
                      component={Link}
                      href="/sign-in"
                    >
                      Sign in
                    </Button>
                  </MediaQuery>

                  <MediaQuery largerThan="xs" styles={{ display: "none" }}>
                    <ActionIcon
                      size="lg"
                      color="blue"
                      variant="filled"
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
          </>
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
            fixed={true}
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
              <AppNavbar links={navbarProps.navbarLinks} path={path} />
            </Navbar.Section>
            <Navbar.Section
              sx={{
                position: "absolute",
                bottom: "calc(100% - 580px)",
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
              sx={{
                position: asideProps.asidePosition,
              }}
              p="md"
              hiddenBreakpoint="sm"
              width={{ sm: 200, lg: 300 }}
            >
              <Text>Application sidebar</Text>
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
        smallerThan={500}
        styles={{
          display: "none",
        }}
      >
        <Modal
          overlayBlur={modalProps.blurIntensity}
          overlayOpacity={modalProps.opacity}
          centered
          withCloseButton={false}
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            modal: {
              padding: "0 !important",
              paddingBottom: "50px !important",
              paddingLeft: "50px !important",
            },
          }}
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
          overlayBlur={drawerProps.blurIntensity}
          overlayOpacity={drawerProps.opacity}
          padding={0}
          position="bottom"
          opened={opened}
          onClose={() => setOpened(false)}
          styles={{
            drawer: {
              borderRadius: theme.radius.sm,
              paddingLeft: "30px !important",
              height: "unset",
              paddingBottom: "30px !important",
            },
          }}
          withCloseButton={false}
        >
          <ScrollArea
            sx={{
              height: 340,
            }}
          >
            <AppNavbar
              title={navbarProps.navbarTitle}
              links={navbarProps.navbarLinks}
              path={path}
              navbar={opened}
              setNavbar={setOpened}
            />
          </ScrollArea>
        </Drawer>
      </MediaQuery>
      {children}
    </AppShell>
  );
};

export default AppWrapper;
