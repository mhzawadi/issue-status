import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.hintText};
  font-size: 13px;
  text-decoration: none;
  transition: 0.3s;
  display: block;
  align-self: end;

  &:hover {
    opacity: 0.9;
  }
`;

export const Footer = () => (
  <footer id="myFooter">
    <div class="w3-container w3-theme-l1 horwood-bottom">
      <section class='copyright'>
        <p class='copyright-info'>&copy; Copyright 2004 - 2024</p>
      </section>
    </div>
  </footer>
);
