import { RootState } from "../_store";

export type SidebarSelector = (state: RootState) => RootState["sidebar"];
