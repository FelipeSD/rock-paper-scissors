import "../../styles/global.scss";
import type { AppProps } from "next/app";
import GameProvider from "../hooks/useGame";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
    </GameProvider>
  );
}
