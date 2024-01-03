import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

import { IoChatboxEllipsesOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiProfileLine, RiLogoutCircleLine } from "react-icons/ri";

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/messages",
        active: pathname === "/messages",
        icon: IoChatboxEllipsesOutline,
      },
      {
        label: "Users",
        href: "/users",
        active: pathname === "/users",
        icon: FaRegUser,
      },
      {
        label: "Profile",
        href: "/profile",
        active: pathname === "/profile",
        icon: RiProfileLine,
      },
      {
        label: "Setting",
        href: "/settings",
        active: pathname === "/settings",
        icon: IoSettingsOutline,
      },
      {
        label: "Logout",
        href: "#",
        onClick: () => signOut(),
        icon: RiLogoutCircleLine,
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
