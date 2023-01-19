import { MantineColor } from "@mantine/core";
import { IconProps } from "phosphor-react";
import { CSSProperties, ReactNode } from "react";

export interface GradientGeneratorArgs {
  color1: MantineColor;
  color2: MantineColor;
}

export interface AppWrapperProps {
  children: ReactNode;
  path: string;
  navbar?: boolean;
  header?: boolean;
  aside?: boolean;
  footer?: boolean;
  padding?: boolean;
  navbarProps?: {
    navbarLinks: Array<AppNavbarLinks>;
    navbarTitle: string;
    navbarPosition?: "fixed" | "static" | "sticky" | "unset" | "relative";
  };
  asideProps?: {
    asideLinks: Array<AppNavbarLinks>;
    asideTitle: string;
    asidePosition?: "fixed" | "static" | "sticky" | "unset" | "relative";
  };
  headerProps?: {
    headerLinks?: Array<AppNavbarLinks>;
    headerPosition?: "fixed" | "static" | "sticky" | "unset" | "relative";
  };
}
export interface AppNavbarProps {
  navbar?: boolean;
  setNavbar?: any;
  path: string;
  links?: Array<AppNavbarLinks>;
  title?: string;
}

export interface AppNavbarLinks {
  title: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  color: MantineColor;
  path: string;
  active?: boolean;
}

export interface EditingImageProps {
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  fill?: boolean;
  src: string;
  style?: CSSProperties;
  avatar?: boolean;
  priority?: boolean;
  placeholder?: string;
}
