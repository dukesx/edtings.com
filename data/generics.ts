import {
  Cloud,
  GlobeSimple,
  Heartbeat,
  MaskHappy,
  PersonSimpleRun,
  Pill,
  StarHalf,
  Terminal,
} from "phosphor-react";
import { AppNavbarLinks } from "../types/generics";

export const HOME_NAV_DATA = [
  {
    title: "technology",
    href: "#technology",
    icon: Cloud,
    color: "gray",
    path: "technology",
  },
  {
    title: "reviews",
    href: "#reviews",
    icon: StarHalf,
    color: "gray",
    path: "reviews",
  },
  {
    title: "programming",
    href: "#programming",
    icon: Terminal,
    color: "gray",
    path: "programming",
  },
  {
    title: "lifestyle",
    href: "#lifestyle",
    icon: MaskHappy,
    color: "gray",
    path: "lifestyle",
  },
  {
    title: "general health",
    href: "#general-health",
    icon: Heartbeat,
    color: "gray",
    path: "general-health",
  },
  {
    title: "physiotherapy",
    href: "#physiotherapy",
    icon: PersonSimpleRun,
    color: "gray",
    path: "physiotherapy",
  },
  {
    title: "medicine",
    href: "#medicine",
    icon: Pill,
    color: "gray",
    path: "medicine",
  },
];

export const DEFAULT_NAV_DATA: Array<AppNavbarLinks> = [
  {
    title: "home",
    href: "/",
    icon: GlobeSimple,
    color: "gray",
    path: "home",
  },
  {
    title: "technology",
    href: "/tag/technology",
    icon: Cloud,
    color: "gray",
    path: "technology",
  },
  {
    title: "reviews",
    href: "/tag/reviews",
    icon: StarHalf,
    color: "gray",
    path: "reviews",
  },
  {
    title: "programming",
    href: "/tag/programming",
    icon: Terminal,
    color: "gray",
    path: "programming",
  },
  {
    title: "lifestyle",
    href: "/tag/lifestyle",
    icon: MaskHappy,
    color: "gray",
    path: "lifestyle",
  },
  {
    title: "general health",
    href: "/tag/general-health",
    icon: Heartbeat,
    color: "gray",
    path: "general-health",
  },
  {
    title: "physiotherapy",
    href: "/tag/physiotherapy",
    icon: PersonSimpleRun,
    color: "gray",
    path: "physiotherapy",
  },
  {
    title: "medicine",
    href: "/tag/medicine",
    icon: Pill,
    color: "gray",
    path: "medicine",
  },
];
