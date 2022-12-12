import "../styles/globals.css";
import type { AppProps } from "next/app";
import Box from "@mui/material/Box";
import Account from "mdi-material-ui/Account";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Component {...pageProps} />
      <Account />
    </Box>
  );
}
