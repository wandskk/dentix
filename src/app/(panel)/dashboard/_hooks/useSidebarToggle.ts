import { useAppDispatch } from "./useSidebar";
import { toggleSidebar } from "../_store/_sidebar/sidebarActions";

export function useSidebarToggle() {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return { handleToggle };
}
