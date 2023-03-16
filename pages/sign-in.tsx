import { Paper, useMantineColorScheme } from "@mantine/core";

import AppWrapper from "../components/global/wrapper";
import { generateGradient } from "../utils/basic";
import { useState } from "react";
import { DEFAULT_NAV_DATA } from "../data/generics";
import SignInComponent from "../components/auth/sign-in";
import ForgotPasswordComponent from "../components/auth/forgot-password";
import RegisterComponent from "../components/auth/register";
import { getBase64ImageUrl } from "../data/blur";
import { getPlaiceholder } from "plaiceholder";

const Signin = ({ first, second, third }: any) => {
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
          height: "100%",
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
                  color1: "red",
                  color2: "cyan",
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
          <SignInComponent placeholder={first} tab={tab} setTab={setTab} />
        ) : tab == "forgot-password" ? (
          <ForgotPasswordComponent
            placeholder={second}
            tab={tab}
            setTab={setTab}
          />
        ) : tab == "register" ? (
          <RegisterComponent placeholder={third} tab={tab} setTab={setTab} />
        ) : null}
      </Paper>
    </AppWrapper>
  );
};

export default Signin;

export const getStaticProps = async () => {
  const { base64: first } = await getPlaiceholder(
    "https://unsplash-cache.edtings.com/photo-1588460789007-a79cfe129bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=75&max-w=600&max-h=600"
  );

  const { base64: second } = await getPlaiceholder(
    "https://unsplash-cache.edtings.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=75&max-w=600&max-h=600"
  );

  const { base64: third } = await getPlaiceholder(
    "https://unsplash-cache.edtings.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6000&q=80"
  );

  return {
    props: {
      first: first,
      second: second,
      third: third,
    },
  };
};
