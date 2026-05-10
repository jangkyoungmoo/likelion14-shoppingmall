import { useState } from "react"; 
import styled from "styled-components";
import { productData } from "../../data/Products.jsx"; 
//import { MockData } from "../../data/MockData.jsx";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import FilterModal from "./FilterModal";
import sortIcon from "../../assets/images/arrow_image2.png";
import checkIcon from "../../assets/images/arrow_image1.png";
import SortDropdown from "./SortDropdown";

const MainContainer = styled.div`
  padding: 40px 160px;
`;

const FilterAndSortRow = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;           
  margin-bottom: 20px;           
`;

const SortSection = styled.div`
 
  span {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: #222;
    cursor: pointer;
    white-space: nowrap; 
    img {
      width: 12px;
      height: auto;
    }
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export default function Main() {
    const [modalType, setModalType] = useState(null);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedGender, setSelectedGender] = useState("전체");
    const displayedProducts = productData.filter(item => {
        if (selectedGender === "전체") return true;
        return item.gender === selectedGender;
    });

  return (
    <MainContainer>
      <FilterAndSortRow>
        <FilterBar 
          onGenderClick={() => setModalType("gender")}
          onColorClick={() => setModalType("color")}
          onSizeClick={() => setModalType("size")}
          onPriceClick={() => setModalType("price")}
          onCategoryClick={() => setModalType("category")}
        /> 
        <SortSection style={{ position: "relative" }}>
          <span onClick={() => setIsSortOpen(!isSortOpen)}>
            정렬순
            <img src={sortIcon} alt="정렬 아이콘" />
          </span>
          {isSortOpen && (
      <>
    
    <div 
      onClick={() => setIsSortOpen(false)} 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent", 
        zIndex: 90, 
      }}
    />
    
    
    <SortDropdown 
      currentSort={currentSort}
      onSelect={(name) => {
        setCurrentSort(name);
        setIsSortOpen(false); 
      }}
      checkIcon={checkIcon}
    />
  </>
)}
        </SortSection>
      </FilterAndSortRow>
      {modalType && (
        <FilterModal 
          type={modalType} 
          onClose={() => setModalType(null)}
          onSelect={(value) => {
                        setSelectedGender(value);
                        setModalType(null);
                    }}
        />
      )}
      <ProductGrid>
        {displayedProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
      </ProductGrid>
    </MainContainer>
  );
}