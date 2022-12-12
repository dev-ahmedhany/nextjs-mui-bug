import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box } from "@mui/material";
import { Person } from "@mui/icons-material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box>
      <Component {...pageProps} />
      <Person />
    </Box>
  );
}
