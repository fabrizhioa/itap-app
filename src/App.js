import { Route, Routes } from "react-router-dom";

//pages
import Products from "./pages/Products";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

//components
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" end element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/product-page/:id" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
