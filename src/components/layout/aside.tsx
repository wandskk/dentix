import clsx from "clsx";
import { CommonComponent } from "../interfaces";

export function Aside({ children, className, ...props }: CommonComponent) {
  return (
    <aside className={clsx(className)} {...props}>
      {children}
    </aside>
  );
}
