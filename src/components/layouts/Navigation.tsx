import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <NavHeader>
      <Link href={"/"}>
        <Header>
          <a>Futurama</a>
        </Header>
      </Link>
      <MainCategoryWrap>
        <MainCategory>
          {ROUTES.map((routeObject: ROUTE) => {
            return (
              <li key={routeObject.LABEL}>
                <Link href={routeObject.PATH}>
                  <a>{routeObject.LABEL}</a>
                </Link>
              </li>
            );
          })}
        </MainCategory>
      </MainCategoryWrap>
    </NavHeader>
  );
};

const NavHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`;

const Header = styled.h1`
  font-size: 30px;
  cursor: pointer;
`;

const MainCategoryWrap = styled.div`
  display: flex;
`;

const MainCategory = styled.ul`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 200px;
  font-size: 20px;
  font-weight: 600;

  &:hover #kid {
    display: block;
    width: 100%;
    color: red;
  }
`;
