import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "../src/pages/ProductDetail/ProductDetail.jsx";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx"
import { products } from "../src/pages/Main/Main.data.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/add" element={<></>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;