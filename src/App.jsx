import HomeView from "./views/HomeView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "@/components/NavBar/NavBar";
import Search from "@/components/NavBar/Search/Search";
import LoginView from './views/LoginView';
import ShopFooter from "@/components/Footer/ShopFooter";
import ErrorView from "./views/ErrorView";
import CartView from "./views/CartView";
import DeliveryView from "./views/DeliveryView";
import "react-loading-skeleton/dist/skeleton.css";
import { useState,useEffect } from "react";
import { useGlobalContext } from "@/components/GlobalContext/GlobalContext";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./components/Modals/Modal";
import CancelOrder from "./components/Modals/CancelOrder";
import "react-toastify/dist/ReactToastify.css";
import RequestCookie from "./components/CookieBanner/CookieBanner";

function App() {
  let { store } = useGlobalContext();
  let { modal } = useGlobalContext();
  useEffect(() => {
    if (store.state.products.length > 0) return;
    store.getProducts();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <BrowserRouter>
        <header>
        <NavBar onSearch={(term) => setSearchTerm(term)} />
        </header>
        <Routes>
          <Route path="/" element={<HomeView searchTerm={searchTerm} />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/delivery" element={<DeliveryView />} />
          <Route path="*" element={<ErrorView />} />
        </Routes>
        <footer>
          <ShopFooter></ShopFooter>
        </footer>
      </BrowserRouter>
      {modal.opened && (
        <Modal
          header={modal.isRegister ? "Create Account" : "Login"}
          submitAction="/"
          buttonText={modal.isRegister ? "Create Account" : "Login"}
          isRegister={modal.isRegister}
        />
      )}
      {modal.isCancelModal && <CancelOrder></CancelOrder>}
      <ToastContainer />
      {/* <RequestCookie /> */}
    </div>
  );
}

export default App;
