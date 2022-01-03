import styled from "@emotion/styled";
import Link from "next/link";
import { ROUTES } from "../../constants";
import { MEDIA_QUERY_END_POINT, PALLETS } from "../../constants";

interface ROUTE {
  ID: number;
  PATH: string;
  LABEL: string;
}

export const Navigation = () => {
  return (
    <NavHeader>
      <Link href={"/"} passHref>
        <Header>
          <a>
            <Logo src="/image/title.png" alt="Futurama logo" />
          </a>
        </Header>
      </Link>
      <MainCategory>
        {ROUTES.map((routeObject: ROUTE) => {
          return (
            <NavButton key={routeObject.LABEL}>
              <Link href={routeObject.PATH} passHref>
                <a>{routeObject.LABEL}</a>
              </Link>
            </NavButton>
          );
        })}
      </MainCategory>
    </NavHeader>
  );
};

const Logo = styled.img`
  width: 30vw;
  transition: 0.5s;
  margin-top: 40px;

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 60vw;
  }
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Header = styled.h1`
  font-size: 30px;
  cursor: pointer;
`;

const MainCategory = styled.ul`
  width: 80%;
  display: flex;
  justify-content: center;
  /* width: 100vw; */
  margin-top: 50px;
  font-size: 30px;
  font-weight: 600;

  & > li {
    padding: 5px 10px 7px;
    border-radius: 20px;
    background-color: ${PALLETS.GREEN};
  }

  & > li + li {
    margin-left: 30px;
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    & > li {
      padding: 3px 8px 5px;
      border-radius: 15px;
      font-size: 25px;
    }

    & > li + li {
      margin-left: 20px;
    }
  }

  @media (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    & > li {
      padding: 1px 6px 3px;
      border-radius: 10px;
      font-size: 20px;
    }

    & > li + li {
      margin-left: 15px;
    }
  }

  @media (max-width: 639px) {
    display: none;
  }
`;

const NavButton = styled.li`
  color: #fff;
  box-shadow: ${PALLETS.SHADOW};

  &:hover {
    background-color: #ff6a49;
  }
`;
