import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../_types";
import { openMobileSheet, closeMobileSheet, toggleSidebar } from "../_store/_sidebar/sidebarActions";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSidebar = () => {
  const dispatch = useAppDispatch();
  
  const isCollapsed = useAppSelector(
    (state: RootState) => state.sidebar.isCollapsed
  );
  const isMobileSheetOpen = useAppSelector(
    (state: RootState) => state.sidebar.isMobileSheetOpen
  );

  const openMobileSheetHandler = () => dispatch(openMobileSheet());
  const closeMobileSheetHandler = () => dispatch(closeMobileSheet());
  const toggleSidebarHandler = () => dispatch(toggleSidebar());

  return { 
    isCollapsed, 
    isMobileSheetOpen,
    openMobileSheet: openMobileSheetHandler,
    closeMobileSheet: closeMobileSheetHandler,
    toggleSidebar: toggleSidebarHandler
  };
};
