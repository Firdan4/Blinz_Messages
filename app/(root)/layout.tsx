import React from "react";
import { SideBar } from "../components/SideBar";
import SideBarMenu from "../components/SideBarMenu";
import Container from "../components/Container";
import StoreProvider from "@/context/StoreProvider";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <main className="h-full">
        <SideBar>
          <Container label="Messages">
            <SideBarMenu />
            {children}
          </Container>
        </SideBar>
      </main>
    </StoreProvider>
  );
};

export default MainLayout;
