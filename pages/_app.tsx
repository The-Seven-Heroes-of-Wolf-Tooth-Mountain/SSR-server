import "@/styles/globals.css";
import "@/styles/navbar-g.css";
import "@/styles/navbar.css";
import "@/styles/main.css";
// import "@/styles/article.css";
import type { AppProps } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";

const MyApp = (data: AppProps & ILayoutProps) => {
  const { Component, pageProps, navbarData } = data;
  return (
    <div>
      <Layout navbarData={navbarData}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
