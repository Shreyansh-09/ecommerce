import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { WishListPage } from "./pages/WishListPage";
import { CartPage } from "./pages/CartPage";
import { AboutPage } from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<WishListPage />}></Route>
        <Route path="/about/:productId" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
