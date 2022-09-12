import styled from "styled-components";

export const Container = styled.div`
  background-color: #0f0f0f;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  > svg {
    position: fixed;
    color: white;
    width: 25px;
    height: 25px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  .sideBarNavigation {
    align-items: center;
    text-align: center;
    height: 70%;
  }
  .sidebar{
    height: 80vh;
    font-family: 'Roboto', sans-serif;
  }
  .sidebar>li {
    cursor: pointer;
    list-style: none;
    margin-top: 3%;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 100%;
    }
  }
  .button {
    margin-left: 90%;
    margin-right: 10%;
    margin-top: 2%;
  }
`;

export const Content = styled.div`
  margin-top: 5%;
  align-items: flex-start;
`;