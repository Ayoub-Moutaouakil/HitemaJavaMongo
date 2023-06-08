import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #61dafb;
  display: flex;
  min-height: 10vh;
  width: 100%;
`;

export const HeaderWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const HeaderLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 30px;
`;

export const Navigation = styled.nav`
    border-bottom-width: "solid 1px";
    padding-bottom: "1rem";
`;

export const HeaderRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 30px;
`;

export const HeaderSignatureText = styled.h1`
    font-size: 30px
`