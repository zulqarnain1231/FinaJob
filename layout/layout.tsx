import React, { Fragment, ReactNode } from "react";
import Navbar from "../components/Shared/Navigation/Navbar";
import { useRouter } from "next/router";
import Footer from "../components/Shared/Footer/Footer";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const Router = useRouter();

  const HideNavbar = () => {
    if (
      Router.pathname === "/" ||
      Router.pathname === "/login" ||
      Router.pathname === "/signup" ||
      Router.pathname === "/forgetpassword"
    )
      return true;
    else return false;
  };
  const HideFooter = () => {
    if (
      Router.pathname === "/login" ||
      Router.pathname === "/signup" ||
      Router.pathname === "/forgetpassword"
    )
      return true;
    else return false;
  };

  return (
    <Fragment>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        pauseOnHover={false}
        hideProgressBar={false}
        pauseOnFocusLoss={false}
      />
      {!HideNavbar() && <Navbar />}
      <main>{children}</main>
      {!HideFooter() && <Footer />}
    </Fragment>
  );
}
