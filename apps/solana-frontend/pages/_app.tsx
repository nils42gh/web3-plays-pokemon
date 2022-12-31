import { cache } from "@emotion/css";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import AnchorSetup from "../components/AnchorSetup";
import AppBar from "../components/AppBar";
import ProgramListenersSetup from "../components/ProgramListenersSetup";
import SolanaContext from "../contexts/SolanaContext";
import { store } from "../store";
import GlobalStyles from "./../styles/GlobalStyles";

const App = ({ Component, pageProps }: AppProps) => (
  <CacheProvider value={cache}>
    <GlobalStyles />
    <SolanaContext>
      <AnchorSetup />
      <Provider store={store}>
        <ProgramListenersSetup />
        <AppBar />
        <Component {...pageProps} />
      </Provider>
    </SolanaContext>
  </CacheProvider>
);

export default App;
