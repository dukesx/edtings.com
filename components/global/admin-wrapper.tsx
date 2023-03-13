import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import {
  ChartBar,
  ChatsCircle,
  Eye,
  Gear,
  House,
  Newspaper,
  Shield,
  ShieldWarning,
  UserGear,
  UserMinus,
  UserPlus,
} from "phosphor-react";
import { AdminWrapperProps } from "../../types/generics";
import AppWrapper from "./wrapper";
import useSWR from "swr";
import { fetcher } from "../../data/fetch/fetch";

const AdminWrapper = ({ children, path }: AdminWrapperProps) => {
  const router = useRouter();
  return (
    <AppWrapper
      admin
      navbarProps={{
        navbarPosition: "sticky",
        navbarLinks: [
          {
            title: "Administration",
            color: "gray",
            path: "admin",
            count: 0,
            href: "",
            subLinks: [
              {
                title: "Overview",
                icon: ChartBar,
                color: "orange",
                path: "admin",
                href: "/",
              },
            ],
          },
          {
            title: "Stories",
            color: "gray",
            path: "stories",
            count: 10,
            href: "",
            subLinks: [
              {
                title: "Add a Story",
                icon: Newspaper,
                color: "gray",
                path: "add-stories",
                href: "/stories/add",
              },
              {
                title: "Manage Stories",
                icon: Gear,
                color: "gray",
                path: "",
                href: "",
              },
            ],
          },
          {
            title: "Moderation",

            color: "gray",
            path: "moderation",
            href: "",
            subLinks: [
              {
                title: "Copyright Claims",
                color: "gray",
                path: "",
                href: "/moderation/copyright-claims",
              },
            ],
          },
          {
            title: "Comments",
            color: "gray",
            path: "comments",
            href: "",
            subLinks: [
              {
                title: "Manage Comments",
                icon: Gear,
                color: "gray",
                path: "",
                href: "",
              },
              {
                title: "Reported Comments",
                icon: ShieldWarning,
                color: "gray",
                path: "",
                href: "",
              },
            ],
          },

          {
            title: "Users",
            color: "gray",
            path: "users",
            href: "",
            subLinks: [
              {
                title: "Add User",
                icon: UserPlus,
                color: "gray",
                path: "",
                href: "",
              },
              {
                title: "Manage Users",
                icon: UserGear,
                color: "gray",
                path: "",
                href: "",
              },
              {
                title: "Complaints",
                icon: UserMinus,
                color: "gray",
                path: "",
                href: "",
              },
            ],
          },
          {
            title: "Settings",
            color: "gray",
            path: "settings",
            href: "",
            count: 100,
            subLinks: [
              {
                title: "General",
                icon: House,
                color: "gray",
                path: "",
                href: "",
              },
              {
                title: "Moderation",
                icon: Shield,
                color: "gray",
                path: "",
                href: "",
              },
              {
                title: "Comments",
                icon: ChatsCircle,
                color: "gray",
                path: "",
                href: "",
              },
            ],
          },
        ],
        navbarTitle: "Navigation",
      }}
      path={path}
    >
      {children}
    </AppWrapper>
  );
};

export default AdminWrapper;
