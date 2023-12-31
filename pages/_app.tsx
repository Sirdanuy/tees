import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId= "5028b32a34e845638cdcea196c1d4a46"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
