import { useEffect, useState } from "react";
import NextApp, { AppProps, AppContext } from "next/app";
import { getCookie, setCookie } from "cookies-next";
import Head from "next/head";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Inter, Oswald, Lora, DM_Serif_Display } from "next/font/google";
import "../styles/globals.scss";
import {
  createBrowserSupabaseClient,
  Session,
} from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { Provider } from "react-wrap-balancer";
import { ModalsProvider } from "@mantine/modals";

export const sans = Inter({
  subsets: ["latin"],
});

export const condensed = Oswald({
  subsets: ["latin"],
});

export const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const serifBody = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

export default function App(
  props: AppProps<{
    initialSession: Session;
  }> & { colorScheme: ColorScheme }
) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

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
            defaultRadius: "md",
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <SessionContextProvider
              supabaseClient={supabaseClient}
              initialSession={pageProps.initialSession}
            >
              <Provider>
                <Component {...pageProps} />
                <Notifications />
              </Provider>
            </SessionContextProvider>
          </ModalsProvider>
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
