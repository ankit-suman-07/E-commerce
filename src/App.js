import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Shop } from "./pages/Shop/Shop";
import { Cart } from "./pages/Cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;