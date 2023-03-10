import styled, { css } from "styled-components";

const Nav = styled.div`
  background-color: #f2f2f2;
  height: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 262.5px;
    object-fit: cover;
  }
  ${(props) =>
    props.mode === "false" &&
    css`
      background: #171823;
      color: white;
    `};
`;
const Main = styled.div`
  max-width: 560px;
  position: relative;
  z-index: 1;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
  padding-top: 70px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 15px;
    margin-bottom: 24px;
    color: #ffffff;
  }
`;

const FormStyled = styled.form`
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  padding: 20px 24px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;

  input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
  }
  ${(props) =>
    props.mode === "false" &&
    css`
      background: #25273d;
      box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
      input {
        background: #25273d;
        color: white;
      }
    `};
`;

const ListStyled = styled.li`
  padding: 20px 24px;
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e3e4f1;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.25px;

  color: #494c6b;

  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
  }
  span {
    cursor: pointer;
  }
  ${(props) =>
    props.mode === "false" &&
    css`
      color: white;
      button {
        color: white;
      }
    `};
`;

const ButtonsStyled = styled.div`
  padding: 20px 24px;
  /* padding-top: 0; */
  display: flex;
  justify-content: space-between;
  .controlBtn {
    margin-left: 19px;
  }
  button {
    background-color: inherit;
    border: none;
    &:hover {
      color: #3a7cfd;
      cursor: pointer;
    }
  }
  ${(props) =>
    props.mode === "false" &&
    css`
      button {
        color: white;
      }
    `};
  position: relative;
  @media (max-width: 410px) {
    div {
      position: absolute;
      top: 100px;
      background: #ffffff;
      box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
      padding: 20px 24px;
      border-radius: 5px;
      width: 100%;
      left: 0;
      display: flex;
      justify-content: center;
      ${(props) =>
        props.mode === "false" &&
        css`
          background: #25273d;
          box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
        `};
    }
  }
`;
const ListWrapper = styled.div`
  /* padding: 20px 24px; */
  background: #ffffff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  ${(props) =>
    props.mode === "false" &&
    css`
      background: #25273d;
      box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
    `};
  .clicked {
    color: #3a7cfd;
  }
`;

const BtnStyled = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: inherit;
  display: flex;
  cursor: pointer;
  border: 1px solid #e3e4f1;
  .img {
    width: 24px;
    height: 24px;
    position: relative;
  }
`;

const TitleStyled = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icons {
    position: relative;
    width: 25px;
    cursor: pointer;
    height: 26px;
  }
`;

export {
  Nav,
  TitleStyled,
  Main,
  FormStyled,
  ListStyled,
  ButtonsStyled,
  ListWrapper,
  BtnStyled,
};
