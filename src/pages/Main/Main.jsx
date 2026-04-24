import React, { useState } from "react";
import styled from "styled-components";

import img1 from "../../assets/images/clothes_image1.png"
import img2 from "../../assets/images/clothes_image2.png"
import img3 from "../../assets/images/clothes_image3.png"
import img4 from "../../assets/images/clothes_image4.png"
import img5 from "../../assets/images/shoes_image1.png"
import arrowIcon from "../../assets/images/arrow_image1.png";
import arrowIcon2 from "../../assets/images/arrow_image2.png";
import arrowIcon3 from "../../assets/images/arrow_image3.png";

const MainContainer = styled.div`
padding: 40px 166px;
`;

const FilterContainer = styled.div`
display: flex;
gap: 12px;
margin-bottom:61px;
justify-content: space-between;
`;

const FilterLeft = styled.div`
  display: flex;
  gap: 13px;
`;

const FilterButton = styled.button`
display: flex;
align-items: center;
gap: 6px;
padding: 8px 16px;
background-color: #F2F2F2;
border: none;
border-radius: 20px;
font-size: 14px;
color: #616161;

&:hover {
    background-color: #ebe0e0;
}

&::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 6px;
    background-image: url(${arrowIcon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 1px;
}
`;

const SortWrapper = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  background-color: white;
  min-width: 130px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 1000;

  div {
    padding: 7px 10px;
    font-size: 14px;
    color: #A7A7A7;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    &.active { 
    color: #333; 
    font-weight: 500; 
    }

    &.active::after {
    content: "";
    display: inline-block;
    width: 14px; 
    height: 14px; 
    background-image: url(${arrowIcon3});
    background-size: contain; 
    background-repeat: no-repeat; 
    background-position: center;
  }
}
`;

const SortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #616161;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url(${arrowIcon2});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const ProductGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 20px;
margin-top: 40px;
`;

const Card = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

const ImageBox = styled.div`
width: 181px;
height: 237px;
border-radius: 8px;
overflow: hidden;
img{    
width: 100%;
height: 100%;
object-fit: cover;
}
`;

const Info = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
.name {font-size: 11px; color: #333333;}
.price {font-size: 11px; font-weight: 400; color: #000000;;}
.review {font-size: 11px; color: #A7A7A7;}
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 320px;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  span { font-size: 16px; font-weight: 700; }
  button {
    background: none;
    border: none;
    font-size: 24px;
    color: #ccc;
  }
`;

const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background-color: #f4f4f4;
    color: #616161;
    }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 12px; 
  justify-content: center;
  align-items: center;
  max-width: 250px; 
  margin: 0 auto;

  button {
    padding:10px 12px;
    border: none;
    border-radius: 20px;
    background-color: #f4f4f4;
    color: #616161;
  }
`;

const SizeGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  justify-content: flex-start;
  
  &:last-of-type {
    margin-bottom: 0;
  }

  button {
    min-width: 45px;
    padding: 10px 12px;
    border: none;
    border-radius: 20px;
    background-color: #f4f4f4;
    color: #616161;
}
`;

const PriceGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  button {
    padding: 10px 15px;
    border: none; border-radius: 20px;
    background-color: #F4F4F4;
    color: #616161;
    }
`;

const CategoryGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  button {
    padding: 10px 24px;
    border: none; border-radius: 20px;
    background-color: #f4f4f4; color: #616161;
  }
`;

export default function Main(){
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [sortType, setSortType] = useState('정렬순');
    const [openModalType, setOpenModalType] = useState(null);

    const closeModal = () => {
    setOpenModalType(null);
    setIsSortOpen(false);
    };

    const products = [
        { id:1,name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", review: "1,561", img: img1},
        { id:2,name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", review: "1,732", img: img2},
        { id:3,name: "아디다스 블랙 져지 2016", price: "255,000원", review: "781", img: img3},
        { id:4,name: "슈프림 후드집업 30 딥블루", price: "458,000원", review: "2,567", img: img4},
        { id:5,name: "나이키 에어 그레이 하운드 25", price: "235,000원", review: "231", img: img5},
        { id:6, name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", review: "1,561", img: img1 },
        { id:7, name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", review: "1,732", img: img2 },
        { id:8, name: "아디다스 블랙 져지 2016", price: "255,000원", review: "781", img: img3 },
        { id:9, name: "슈프림 후드집업 30 딥블루", price: "458,000원", review: "2,567", img: img4 },
        { id:10, name: "나이키 에어 그레이 하운드 25", price: "235,000원", review: "231", img: img5 },
    ];

   return (
    <MainContainer>
      <FilterContainer>
        <FilterLeft>
          <FilterButton onClick={() => setOpenModalType('gender')}>성별</FilterButton>
          <FilterButton onClick={() => setOpenModalType('color')}>색상</FilterButton>
          <FilterButton onClick={() => setOpenModalType('size')}>사이즈</FilterButton>
          <FilterButton onClick={() => setOpenModalType('price')}>가격대</FilterButton>
          <FilterButton onClick={() => setOpenModalType('category')}>종류</FilterButton>
        </FilterLeft>
        <SortWrapper>
          <SortButton onClick={() => setIsSortOpen(!isSortOpen)}>정렬순</SortButton>
          {isSortOpen && (
            <DropdownContent>
              {['기본 정렬순', '평점 높은순', '리뷰 많은순'].map((type) => (
                <div 
                  key={type} 
                  className={sortType === type ? 'active' : ''}
                  onClick={() => { setSortType(type); setIsSortOpen(false); }}
                >
                  {type}
                </div>
              ))}
            </DropdownContent>
          )}
        </SortWrapper>
      </FilterContainer>

      <ProductGrid>
        {products.map((item) => (
          <Card key={item.id}>
            <ImageBox>
              <img src={item.img} alt={item.name} />
            </ImageBox>
            <Info>
              <div className="name">{item.name}</div>
              <div className="price">{item.price}</div>
              <div className="review">리뷰 {item.review}</div>
            </Info>
          </Card>
        ))}
      </ProductGrid>
      {openModalType === 'gender' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <span>성별</span>
              <button onClick={closeModal}>&times;</button>
            </ModalHeader>
            <ModalBody>
              <button onClick={closeModal}>남성</button>
              <button onClick={closeModal}>여성</button>
              <button onClick={closeModal}>남녀공용</button>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {openModalType === 'color' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <span>색상</span>
              <button onClick={closeModal}>&times;</button>
            </ModalHeader>
            <ColorGrid>
              {["red", "pink", "blue", "black", "gray", "denim", "multi", "rainbow", "holographic"].map((c) => (
                <button key={c} onClick={closeModal}>{c}</button>
              ))}
            </ColorGrid>
          </ModalContent>
        </ModalOverlay>
      )}

     {openModalType === 'size' && (
        <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <span>사이즈</span>
                        <button onClick={closeModal}>&times;</button>
                </ModalHeader>
                <SizeGroup>
        {["9", "10"].map((s) => (
          <button key={s} onClick={closeModal}>{s}</button>
        ))}
        </SizeGroup>
         <SizeGroup>
        {["S", "M", "L", "XL"].map((s) => (
          <button key={s} onClick={closeModal}>{s}</button>
        ))}
        </SizeGroup>
        </ModalContent>
        </ModalOverlay>
      )}

      {openModalType === 'price' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <span>가격대</span>
              <button onClick={closeModal}>&times;</button>
            </ModalHeader>
            <PriceGroup>
              {["0~30", "31~60", "60~90"].map((p) => (
                <button key={p} onClick={closeModal}>{p}</button>
              ))}
            </PriceGroup>
          </ModalContent>
        </ModalOverlay>
      )}

      {openModalType === 'category' && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader><span>종류</span><button onClick={closeModal}>&times;</button></ModalHeader>
            <CategoryGroup>
              {["의류", "신발"].map(cat => <button key={cat} onClick={closeModal}>{cat}</button>)}
            </CategoryGroup>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
}