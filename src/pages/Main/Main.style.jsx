import arrowIcon from "../../assets/images/arrow_image1.png";
import arrowIcon2 from "../../assets/images/arrow_image2.png";
import arrowIcon3 from "../../assets/images/arrow_image3.png";

import styled from "styled-components";

export const MainContainer = styled.div`
padding: 40px 160px;
`;

export const FilterContainer = styled.div`
display: flex;
margin-bottom:61px;
justify-content: space-between;
`;

export const FilterLeft = styled.div`
  display: flex;
  gap: 13px;
`;

export const FilterButton = styled.button`
display: flex;
align-items: center;
gap: 5px;
padding: 8px 16px;
border: none;
border-radius: 20px;
color: #616161;
background-color: #F2F2F2;
font-family: Pretendard;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;

&::after {
    content: "";
    width: 10px;
    height: 5px;
    aspect-ratio: 2/1;
    background-image: url(${arrowIcon});
    background-position: center;
}
`;

export const SortWrapper = styled.div`
  position: relative;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: white;
  min-width: 130px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 8px;

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

export const SortButton = styled.div`
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

export const ProductGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: 20px;
margin-top: 40px;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;

export const ImageBox = styled.div`
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

export const Info = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
.name {font-size: 11px; color: #333333;}
.price {font-size: 11px; font-weight: 400; color: #000000;}
.review {font-size: 11px; color: #A7A7A7;}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 320px;
  padding: 24px;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const ModalHeader = styled.div`
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

export const ModalBody = styled.div`
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

export const ColorGrid = styled.div`
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

export const SizeGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  justify-content: flex-start;
  
  button {
    min-width: 45px;
    padding: 10px 12px;
    border: none;
    border-radius: 20px;
    background-color: #f4f4f4;
    color: #616161;
}
`;

export const PriceGroup = styled.div`
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

export const CategoryGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  button {
    padding: 10px 24px;
    border: none; border-radius: 20px;
    background-color: #f4f4f4; color: #616161;
  }
`;