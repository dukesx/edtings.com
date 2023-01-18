import { useEffect, useState } from "react";
import NextApp, { AppProps, AppContext } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { DM_Serif_Text, Inter } from "@next/font/google";
import "../styles/globals.css";

export const sans = Inter({
  subsets: ["latin"],
});

export const serif = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie("edtings-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });

    document.body.classList.remove(
      nextColorScheme == "dark" ? "light" : "dark"
    );
    document.body.classList.add(nextColorScheme);
  };

  useEffect(() => {
    document.body.classList.remove(colorScheme == "dark" ? "light" : "dark");
    document.body.classList.add(colorScheme);
  }, []);

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme: colorScheme,
            primaryColor: "dark",
            primaryShade: 6,
            fontFamily: sans.style.fontFamily,
            defaultRadius: "sm",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie("edtings-color-scheme", appContext.ctx) || "dark",
  };
};
