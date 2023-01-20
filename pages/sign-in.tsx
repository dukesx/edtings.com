import {
  Anchor,
  Box,
  Button,
  Card,
  Center,
  Container,
  Grid,
  Group,
  MediaQuery,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  CircleWavyQuestion,
  SignIn,
  UserCirclePlus,
  UserPlus,
} from "phosphor-react";
import EdtingImage from "../components/global/image";
import AppWrapper from "../components/global/wrapper";
import { generateGradient } from "../utils/basic";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { nanoid } from "nanoid";
import { DEFAULT_NAV_DATA } from "../data/generics";
import SignInComponent from "../components/auth/sign-in";
import ForgotPasswordComponent from "../components/auth/forgot-password";
import RegisterComponent from "../components/auth/register";

const Signin = () => {
  const { colorScheme } = useMantineColorScheme();
  const [tab, setTab] = useState("sign-in");
  return (
    <AppWrapper
      path="sign"
      padding={false}
      navbarProps={{
        navbarTitle: "Navigation",
        navbarPosition: "sticky",
        navbarLinks: [...DEFAULT_NAV_DATA],
      }}
    >
      <Paper
        pt={10}
        sx={() => ({
          height: "120.5%",
          ["@media (min-width: 300px) and (max-width: 1200px)"]: {
            paddingTop: 0,
          },
          ...generateGradient(
            tab == "sign-in"
              ? {
                  color1: "blue",
                  color2: "indigo",
                  opacity: 0.4,
                }
              : tab == "forgot-password"
              ? {
                  color1: "cyan",
                  color2: "blue",
                  opacity: 0.4,
                }
              : tab == "register"
              ? {
                  color1: "grape",
                  color2: "pink",
                  opacity: 0.4,
                }
              : {
                  color1: "blue",
                  color2: "indigo",
                  opacity: 0.4,
                }
          ),
        })}
      >
        {tab == "sign-in" ? (
          <SignInComponent tab={tab} setTab={setTab} />
        ) : tab == "forgot-password" ? (
          <ForgotPasswordComponent tab={tab} setTab={setTab} />
        ) : tab == "register" ? (
          <RegisterComponent tab={tab} setTab={setTab} />
        ) : null}
      </Paper>
    </AppWrapper>
  );
};

export default Signin;
