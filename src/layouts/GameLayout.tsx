import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Header from "../components/Header";
import ModalRules from "../components/ModalRules";
import { useGame } from "../hooks/useGame";

type GameLayoutProps = {
  children: React.ReactNode;
};
export default function GameLayout({ children }: GameLayoutProps) {
  const { gameName } = useGame();

  const [isOpen, setIsOpen] = useState(false);

  const openRules = () => {
    setIsOpen(true);
  };

  const closeRules = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <Head>
        <title>{gameName}</title>
        <meta name="description" content={gameName} />
        <link rel="icon" href="/images/icon-scissors.svg" />
      </Head>

      <ModalRules isOpen={isOpen} onClose={closeRules} />

      <Header />

      <Main>
        {children}

        <div className="d-flex justify-end mt-5">
          <Button onClick={openRules}>Rules</Button>
        </div>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  padding: 0 1rem;
  min-height: 100vh;
`;

const Main = styled.main`
  min-height: 500px;
`;
