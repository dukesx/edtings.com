import { Text } from "@mantine/core";
import { useRouter } from "next/router";
import {
  ChatsCircle,
  Gear,
  House,
  Newspaper,
  Shield,
  ShieldWarning,
  UserGear,
  UserMinus,
  UserPlus,
  Users,
} from "@phosphor-icons/react";
import AdminWrapper from "../../components/global/admin-wrapper";
import AppWrapper from "../../components/global/wrapper";

const Dashboard = () => {
  return (
    <AdminWrapper path="admin">
      <Text>Hello</Text>
    </AdminWrapper>
  );
};

export default Dashboard;
