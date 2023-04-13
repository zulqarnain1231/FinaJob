import React, { Fragment, ReactNode } from "react";
import Navbar from "../components/Shared/Navigation/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Shared/Footer/Footer";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const Router = useRouter();

  const HideNavbar = () => {
    if (Router.pathname === "/" || Router.pathname === "/login" || Router.pathname === "/signup" || Router.pathname === "/forgetpassword")
      return true;
    else return false;
  }
  const HideFooter = () => {
    if (Router.pathname === "/login" || Router.pathname === "/signup" || Router.pathname === "/forgetpassword")
      return true;
    else return false;
  }

  return (
    <Fragment>
      {!HideNavbar() && <Navbar />}
      <main>{children}</main>
      {!HideFooter() && <Footer />}
    </Fragment>
  );
}
