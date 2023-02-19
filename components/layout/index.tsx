import { FC } from "react";
import { INavBarProps, NavBar } from "../navbar/index";
import styles from "./styles.module.scss";

export interface ILayoutProps {
  navbarData: INavBarProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  children,
}) => {
  return (
    <div className={styles.layout}>
      <NavBar {...navbarData} />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
