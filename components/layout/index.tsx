import { FC } from "react";
import { INavBarProps, NavBar } from "../navbar/index";
import styles from "./styles.module.scss";
import Head from "next/head";
export interface ILayoutProps {
  navbarData: INavBarProps;
}

export const Layout: FC<ILayoutProps & { children: JSX.Element }> = ({
  navbarData,
  children,
}) => {
  return (
    <>
      <Head>
        <title>稀土掘金</title>
        <meta name="juejin" content="a static juejin station via SSR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <NavBar {...navbarData} />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
