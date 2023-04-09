import { useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { GradientGeneratorArgs } from "../types/generics";

export const generateGradient = ({
  color1,
  color2,
  opacity = 0.2,
}: GradientGeneratorArgs) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  var generatedBg = `${theme.fn.linearGradient(
    180,
    colorScheme == "dark" ? theme.colors.dark[8] : theme.white,
    "transparent"
  )},${theme.fn.linearGradient(
    90,
    theme.fn.rgba(
      theme.fn.themeColor(color1, colorScheme == "dark" ? 8 : 4),
      opacity
    ),
    theme.fn.rgba(
      theme.fn.themeColor(color2, colorScheme == "dark" ? 8 : 4),
      opacity
    )
  )},linear-gradient(to right,hsla(0,0%,100%,0),hsla(0,0%,100%,.1) 
  10%,hsla(0,0%,100%,.1) 
  90%,hsla(0,0%,100%,0))`;
  return {
    backgroundImage: generatedBg,
    backgroundSize: "100% 100%,100% 100%,1440px 1px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };
};

export const generateBottomFade = ({
  color1,
  color2,
  opacity = 0.05,
}: GradientGeneratorArgs) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  var generatedBg = `${theme.fn.linearGradient(
    180,
    "transparent",
    theme.fn.rgba("dark", 0.8)
  )},${theme.fn.linearGradient(
    90,
    theme.fn.rgba(
      theme.fn.themeColor(color1, colorScheme == "dark" ? 8 : 4),
      opacity
    ),
    theme.fn.rgba(
      theme.fn.themeColor(color2, colorScheme == "dark" ? 8 : 4),
      opacity
    )
  )},linear-gradient(to right,hsla(0,0%,100%,0),hsla(0,0%,100%,.1) 
  10%,hsla(0,0%,100%,.1) 
  90%,hsla(0,0%,100%,0))`;
  return {
    backgroundImage: generatedBg,
    backgroundSize: "100% 100%,100% 100%,1440px 1px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };
};

export const generateGradient2 = ({
  color1,
  color2,
  opacity = 0.2,
}: GradientGeneratorArgs) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  var generatedBg = `${theme.fn.linearGradient(
    180,
    // theme.fn.rgba("dark", 0.6),
    "transparent",
    "transparent"
  )},${theme.fn.linearGradient(
    90,
    theme.fn.rgba(
      theme.fn.themeColor(color1, colorScheme == "dark" ? 7 : 4),
      opacity
    ),
    theme.fn.rgba(
      theme.fn.themeColor(color2, colorScheme == "dark" ? 7 : 4),
      opacity
    )
  )},linear-gradient(to right,hsla(0,0%,100%,0),hsla(0,0%,100%,.1) 
  10%,hsla(0,0%,100%,.1) 
  90%,hsla(0,0%,100%,0)),${theme.fn.linearGradient(
    0,
    // theme.fn.rgba("dark", 0.6),
    "transparent",
    "transparent"
  )}`;
  return {
    backgroundImage: generatedBg,
    backgroundSize: "100% 100%,100% 100%,1440px 1px",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
  };
};

export const readableBytes = (bytes: any) => {
  var i = Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  return parseInt((bytes / Math.pow(1024, i)).toFixed(2)) * 1 + " " + sizes[i];
};

export const fadeToDark = (opacity?: string) => {
  return {
    "&:after": {
      content: `''`,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(to bottom, transparent 0%, black ${
        opacity ?? "100%"
      })`,
    },
  };
};

export const fadeToWhite = () => {
  return {
    WebkitMaskImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))`,
    maskImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0))`,
  };
};
