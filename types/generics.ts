import { MantineColor } from "@mantine/core";
import { IconProps } from "@phosphor-icons/react";
import React, { CSSProperties, ReactNode } from "react";

export interface GradientGeneratorArgs {
  color1: MantineColor;
  color2: MantineColor;
  opacity?: number;
}

export interface AppWrapperProps {
  admin?: boolean;
  logo?: ReactNode;
  children: ReactNode;
  path?: string;
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
    asideLinks?: Array<AppNavbarLinks>;
    asideTitle?: string;
    asidePosition?: "fixed" | "static" | "sticky" | "unset" | "relative";
    render?: ReactNode;
  };
  headerProps?: {
    headerLinks?: Array<AppNavbarLinks>;
    headerPosition?:
      | "fixed"
      | "static"
      | "sticky"
      | "unset"
      | "relative"
      | "absolute";
    headerColor?: MantineColor;
  };
  modalProps?: {
    opacity: number;
    blurIntensity: number;
  };
  drawerProps?: {
    opacity: number;
    blurIntensity: number;
  };
}

export interface AdminWrapperProps {
  path: string;
  children: any;
}
export interface AppNavbarProps {
  navbar?: boolean;
  admin?: boolean;
  setNavbar?: any;
  path?: string;
  links?: Array<AppNavbarLinks>;
  title?: string;
}

export interface EditorOutput {
  data: { type: "doc"; content: [] };
  words: number;
}

export interface AppNavbarLinks {
  title: string;
  count?: number;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  color?: MantineColor;
  path: string;
  active?: boolean;
  type?: "default" | "React Node";
  render?: ReactNode;
  subLinks?: Array<AppNavbarLinks>;
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
  widthWise?: boolean;
}

export interface EdtingsTagPickerProps {
  table: string;
}
