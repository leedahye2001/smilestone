import styled from "styled-components";

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f0;
  border-left: 1px solid #f0f0f0;
`;

const ChatProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.signColor};
  color: #ffff;
  div:nth-child(1) {
    display: flex;
    img {
      width: 44px;
      margin: 10px 10px 10px 20px;
      border-radius: 100%;
    }
    h1 {
      margin: auto 0px;
      font-weight: bold;
    }
  }
  div:nth-child(2) {
    @media (max-width: 890px) {
      svg {
        display: block !important;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    svg {
      display: none;
    }
  }
`;

const ChatListWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  #new {
    background-color: red !important;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  background-color: ${(props) => (props.isEnter ? "#f0f0f0" : "#ffff")};
  :hover {
    background-color: #f0f0f0;
  }
  .userImage {
    position: relative;
    img {
      width: 44px;
      border-radius: 100%;
      border: 0.5px solid silver;
    }
    svg {
      position: absolute;
      right: 0;
      color: ${(props) => props.theme.signColor};
    }
  }
  .userMiddle {
    width: 0px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 10px;
    .userInfo {
      span:nth-child(1) {
        font-weight: bold;
        font-size: 14px;
      }
      span:nth-child(2),
      span:nth-child(3) {
        font-size: 13px;
        margin-left: 6px;
        color: gray;
      }
    }
    .lastChat {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      color: #424242;
    }
  }
  .productImage {
    width: 44px;
    height: 44px;
    img {
      width: 100%;
      height: 100%;
      border: 0.5px solid silver;
      border-radius: 5px;
      object-fit: cover;
    }
  }
`;

const NotFoundWrapper = styled.div`
  display: ${(props) => (props.dropDown ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 100px;
  p {
    margin-top: 30px;
    color: gray;
  }
`;

export {
  MainWrapper,
  ChatProfile,
  ChatListWrapper,
  ItemWrapper,
  NotFoundWrapper,
};
