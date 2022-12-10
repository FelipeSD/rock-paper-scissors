import styled from "styled-components";

export default function Footer() {
  return (
    <FooterDiv>
      <span className="mt-4">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </span>
      <span>
        Coded by <a href="http://github.com/FelipeSD">Felipe SD</a>.
      </span>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  margin-top: auto;
  background: var(--dark-blue);
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 11px;
  gap: 0.5rem;
`;
