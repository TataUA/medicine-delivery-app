import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 30px 30px 30px;
  background-color: var(--white);
  color: var(--text);
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 30px;

  > nav {
    display: flex;
    width: 100%;
  }
`;

export const Link = styled(NavLink)`
  color: var(--blue);
  font-weight: 600;
  font-size: 22px;
  padding: 5px 30px;
  border-right: 3px solid var(--border);

  &:last-child {
    border-right: none;
  }

  &.active {
    color: var(--blue-active);
    text-decoration: underline;
    transition: var(--transition);
  }
`;
