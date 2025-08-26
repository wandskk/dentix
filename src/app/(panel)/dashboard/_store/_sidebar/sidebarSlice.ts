import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SidebarState } from '../../_types/sidebar.types';

const initialState: SidebarState = {
  isCollapsed: true,
  isMobileSheetOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isCollapsed = action.payload;
    },
    openSidebar: (state) => {
      state.isCollapsed = false;
    },
    closeSidebar: (state) => {
      state.isCollapsed = true;
    },
    openMobileSheet: (state) => {
      state.isMobileSheetOpen = true;
    },
    closeMobileSheet: (state) => {
      state.isMobileSheetOpen = false;
    },
    toggleMobileSheet: (state) => {
      state.isMobileSheetOpen = !state.isMobileSheetOpen;
    },
  },
});

export const { 
  toggleSidebar, 
  setSidebarCollapsed, 
  openSidebar, 
  closeSidebar,
  openMobileSheet,
  closeMobileSheet,
  toggleMobileSheet
} = sidebarSlice.actions;
export default sidebarSlice.reducer;
