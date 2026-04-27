import React, { useState } from "react";
import * as S from "./Main.style";
import { products } from "./Main.data";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState('정렬순');
  const [openModalType, setOpenModalType] = useState(null);

  const closeModal = () => {
    setOpenModalType(null);
    setIsSortOpen(false); 
  };

  return (
    <S.MainContainer>
      <S.FilterContainer>
        <S.FilterLeft>
          <S.FilterButton onClick={() => setOpenModalType('gender')}>성별</S.FilterButton>
          <S.FilterButton onClick={() => setOpenModalType('color')}>색상</S.FilterButton>
          <S.FilterButton onClick={() => setOpenModalType('size')}>사이즈</S.FilterButton>
          <S.FilterButton onClick={() => setOpenModalType('price')}>가격대</S.FilterButton>
          <S.FilterButton onClick={() => setOpenModalType('category')}>종류</S.FilterButton>
        </S.FilterLeft>
        <S.SortWrapper>
          <S.SortButton onClick={() => setIsSortOpen(!isSortOpen)}>정렬순</S.SortButton>
          {isSortOpen && (
            <S.DropdownContent>
              {['기본 정렬순', '평점 높은순', '리뷰 많은순'].map((type) => (
                <div 
                  key={type} 
                  className={sortType === type ? 'active' : ''}
                  onClick={() => { setSortType(type); setIsSortOpen(false); }}
                >
                  {type}
                </div>
              ))}
            </S.DropdownContent>
          )}
        </S.SortWrapper>
      </S.FilterContainer>

      <S.ProductGrid>
        {products.map((item) => (
          <S.Card key={item.itemId} onClick={() => navigate(`/product/${item.id}`)}>
             <S.ImageBox> 
              <img src={item.imageUrl} alt={item.name} />
            </S.ImageBox>
            <S.Info>
              <div className="name">{item.name}</div>
              <div className="price">{item.price}</div>
              <div className="review">리뷰 {item.reviewcount  }</div>
            </S.Info>
          </S.Card>
        ))}
      </S.ProductGrid>
      
      {openModalType === 'gender' && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <span>성별</span>
              <button onClick={closeModal}>&times;</button>
            </S.ModalHeader>
            <S.ModalBody>
              <button onClick={closeModal}>남성</button>
              <button onClick={closeModal}>여성</button>
              <button onClick={closeModal}>남녀공용</button>
            </S.ModalBody>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

      {openModalType === 'color' && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <span>색상</span>
              <button onClick={closeModal}>&times;</button>
            </S.ModalHeader>
            <S.ColorGrid>
              {["red", "pink", "blue", "black", "gray", "denim", "multi", "rainbow", "holographic"].map((c) => (
                <button key={c} onClick={closeModal}>{c}</button>
              ))}
            </S.ColorGrid>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

     {openModalType === 'size' && (
        <S.ModalOverlay onClick={closeModal}>
            <S.ModalContent onClick={(e) => e.stopPropagation()}>
                <S.ModalHeader>
                    <span>사이즈</span>
                        <button onClick={closeModal}>&times;</button>
                </S.ModalHeader>
                <S.SizeGroup>
        {["9", "10"].map((s) => (
          <button key={s} onClick={closeModal}>{s}</button>
        ))}
        </S.SizeGroup>
         <S.SizeGroup>
        {["S", "M", "L", "XL"].map((s) => (
          <button key={s} onClick={closeModal}>{s}</button>
        ))}
        </S.SizeGroup>
        </S.ModalContent>
        </S.ModalOverlay>
      )}

      {openModalType === 'price' && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <span>가격대</span>
              <button onClick={closeModal}>&times;</button>
            </S.ModalHeader>
            <S.PriceGroup>
              {["0~30", "31~60", "60~90"].map((p) => (
                <button key={p} onClick={closeModal}>{p}</button>
              ))}
            </S.PriceGroup>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      {openModalType === 'category' && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <span>종류</span>
              <button onClick={closeModal}>&times;</button>
            </S.ModalHeader>
            <S.CategoryGroup>
              {["의류", "신발"].map(cat => <button key={cat} onClick={closeModal}>{cat}</button>)}
            </S.CategoryGroup>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.MainContainer>
  );
}

