import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface SideBarState {
  isSidebarOpen: boolean;
}

const initialState: SideBarState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export const selectSidebarOpen = (state: RootState) =>
  state.sidebar.isSidebarOpen;
export default sidebarSlice.reducer;
