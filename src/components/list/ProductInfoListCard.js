import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { priceFormat } from "../../utils/format";

const CardWrapper = styled.div`
  justify-content: center;
  padding-bottom: 40px;
  height: auto;

  @media (max-width: 690px) {
    /* width: 200px; */
    width: 100%;
    /* margin: 0 5%; */
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    /* width: 230px; */
    width: 100%;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 100%;
    height: auto;
  }
`;

const ListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: auto;
  cursor: pointer;
  @media (max-width: 690px) {
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
  }
  // 모니터
  @media (min-width: 891px) {
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: none;
  aspect-ratio: 1/1;
  margin: auto;
  @media (max-width: 690px) {
    width: 200px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 210px;
  }
  // 모니터
  @media (min-width: 891px) {
    width: 220px;
    height: auto;
  }
`;

const ImageItself = styled.img`
  display: block;
  border-radius: 15px;
  border: 1px solid silver;
  object-fit: cover;
  aspect-ratio: 1/1;
  width: 100%;
  @media (max-width: 690px) {
    /* margin: 0 5%; */
    width: 200px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    width: 210px;
    /* margin: 0 2%; */
  }
  // 모니터
  @media (min-width: 891px) {
    width: 220px;
    /* margin: 0 2%; */
  }
`;

const LettersWrapper = styled.div`
  @media (max-width: 690px) {
    font-size: 16px;
    margin: 10px 0;
    padding-left: 3%;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    font-size: 17px;
    margin: 15px 0;
    padding-left: 5%;
  }
  // 모니터
  @media (min-width: 891px) {
    margin-left: 10%;
  }
`;

const ProductTitle = styled.p`
  text-overflow: ellipsis;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  @media (max-width: 690px) {
    font-size: 16px;
    margin: 10px 0;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    font-size: 17px;
    margin: 15px 0;
  }
  // 모니터
  @media (min-width: 891px) {
    font-size: 18px;
    margin: 17px 0;
  }
`;

const ProductPrice = styled.p`
  font-weight: bold;
  @media (max-width: 690px) {
    margin-bottom: 8px;
    font-size: 15px;
  }
  // 아이패드 (모바일 버전)
  @media (min-width: 691px) and (max-width: 890px) {
    margin-bottom: 9px;
  }
  // 모니터
  @media (min-width: 891px) {
    margin-bottom: 10px;
  }
`;

const InterestedWrapped = styled.div`
  display: flex;
  color: #858e96;
  font-size: 13px;
`;

const Interested = styled.p``;

const Chats = styled.p``;

const ProductInfoListCard = ({ data, maxWidth }) => {
  const navigate = useNavigate();
  const { id, title, price } = data;

  return (
    <CardWrapper
      maxWidth={maxWidth}
      onClick={() => {
        navigate(`/product/detail`, { state: { productId: id } });
      }}
    >
      <ListCardWrapper>
        <ImageWrapper>
          <ImageItself
            src={`../../../assets/images/sMarketLogo.png`}
            alt="image"
          />
        </ImageWrapper>
        <LettersWrapper>
          <ProductTitle>{title}</ProductTitle>
          {/* <ProductPrice>{priceFormat(price)}</ProductPrice> */}

          <InterestedWrapped>
            {/* <Chats> 채팅 {chatRoom.length}</Chats> */}
          </InterestedWrapped>
        </LettersWrapper>
      </ListCardWrapper>
    </CardWrapper>
  );
};

export default ProductInfoListCard;
