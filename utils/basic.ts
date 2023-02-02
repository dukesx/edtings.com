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
    colorScheme == "dark" ? theme.black : theme.white,
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
      theme.fn.themeColor(color1, colorScheme == "dark" ? 8 : 4),
      opacity
    ),
    theme.fn.rgba(
      theme.fn.themeColor(color2, colorScheme == "dark" ? 8 : 4),
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
