import styled from "styled-components";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...rest }: ButtonProps) {
  return <Btn {...rest}>{children}</Btn>;
}

const Btn = styled.button`
  background: unset;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  color: var(--white);
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 0.5s ease-in-out;
  
  &.solid, &:hover {
    background: var(--white);
    color: var(--dark-text);
  }

  &.block {
    width: 100%;
  }
`;
