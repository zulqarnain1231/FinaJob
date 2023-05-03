import "../styles/globals.css";
import "../styles/PhoneInput.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import { AuthProvider } from "../hooks/useAuth";
import { CookiesProvider } from "react-cookie";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </CookiesProvider>
  );
}
