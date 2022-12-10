import Image from "next/image";
import styled from "styled-components";
import { GameBoardEnum } from "../../domain/Game";
import { useGame } from "../hooks/useGame";

type ModalRules = {
  isOpen: boolean;
  onClose: () => void;
};
export default function ModalRules({ isOpen, onClose }: ModalRules) {
  const { gameBoard } = useGame();
  const imageRules =
    gameBoard === GameBoardEnum.Bonus
      ? "/images/image-rules-bonus.svg"
      : "/images/image-rules.svg";
  return (
    <Modal isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <h2>Rules</h2>
          <ModalClose onClick={onClose} />
        </ModalHeader>
        <ModalBody>
          <Image
            src={imageRules}
            width={350}
            height={300}
            alt="Scissors cuts paper, paper covers rock, rock crushes lizard, lizard
            poisons Spock, Spock smashes scissors, scissors decapitates lizard,
            lizard eats paper, paper disproves Spock, Spock vaporizes rock, rock crushes scissors."
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--dark-text);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: var(--white);
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 30rem;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  text-transform: uppercase;
`;

const ModalClose = styled.button`
  background-color: transparent;
  background-image: url("/images/icon-close.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 1rem;
  height: 1rem;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;
