import styled from "styled-components";

import img1 from "../../assets/images/clothes_image1.png"
import img2 from "../../assets/images/clothes_image2.png"
import img3 from "../../assets/images/clothes_image3.png"
import img4 from "../../assets/images/clothes_image4.png"
import img5 from "../../assets/images/shoes_image1.png"
import arrowIcon from "../../assets/images/arrow_image1.png";
import arrowIcon2 from "../../assets/images/arrow_image2.png";
const FilterContainer = styled.div`
display: flex;
gap: 12px;
margin-bottom:30px;
justify-content: space-between;
`;

const FilterLeft = styled.div`
  display: flex;
  gap: 12px;
`;

const SortButton = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #616161;
  cursor: pointer;

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
cursor: pointer;
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

const MainContainer = styled.div`
padding: 40px 160px;
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
.price {font-size: 11px; font-weight: 400;}
.review {font-size: 11px; color: #A7A7A7;}
`;

export default function Main(){
    const products = [
        { id:1,name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", review: "1,561", img: img1},
        { id:2,name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", review: "1,732", img: img2},
        { id:3,name: "아디다스 블랙 져지 2016", price: "255,000원", review: "781", img: img3},
        { id:4,name: "슈프림 후드집업 30 딥블루", price: "458,000원", review: "2,567", img: img4},
        { id:5,name: "나이키 에어 그레이 하운드 25", price: "235,000원", review: "231", img: img5},
        { id: 6, name: "아이앱 스튜디오 25 후드 라이트 그레이", price: "145,000원", review: "1,561", img: img1 },
        { id: 7, name: "아이앱 스튜디오 25 후드 라이트 블루", price: "145,000원", review: "1,732", img: img2 },
        { id: 8, name: "아디다스 블랙 져지 2016", price: "255,000원", review: "781", img: img3 },
        { id: 9, name: "슈프림 후드집업 30 딥블루", price: "458,000원", review: "2,567", img: img4 },
        { id: 10, name: "나이키 에어 그레이 하운드 25", price: "235,000원", review: "231", img: img5 },
    ];
    return (
        <MainContainer>
            <FilterContainer>
                <FilterLeft>
                <FilterButton>성별</FilterButton>
                <FilterButton>색상</FilterButton>
                <FilterButton>사이즈</FilterButton>
                <FilterButton>가격대</FilterButton>
                <FilterButton>종류</FilterButton>
                </FilterLeft>
                <SortButton>정렬순</SortButton>
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
            </MainContainer>
    );
}