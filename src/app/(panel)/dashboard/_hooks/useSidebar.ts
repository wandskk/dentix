import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../_types";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSidebar = () => {
  const isCollapsed = useAppSelector(
    (state: RootState) => state.sidebar.isCollapsed
  );
  const isMobileSheetOpen = useAppSelector(
    (state: RootState) => state.sidebar.isMobileSheetOpen
  );
  return { isCollapsed, isMobileSheetOpen };
};
