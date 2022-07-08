import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import NewPassword from "@pages/NewPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import Login from "@pages/Login";
import CreateAccount from "@pages/CreateAccount";
import MyAccount from "@pages/MyAccount";
import MyOrder from "@containers/MyOrder";
import ProductDetail from "@containers/ProductDetail";
import ShoppingCartItem from "@components/ShoppingCartItem";
import PasswordRecovery from "@pages/PasswordRecovery";
import SentEmail from "@pages/SentEmail";
import Checkout from "@pages/Checkout";
import Orders from "@pages/Orders";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import "@styles/global.css";


const App = () => {
    const initialState = useInitialState();
    return(
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact  path="/" element={<Home/> } />
                    <Route exact  path="/new-password" element={<NewPassword/> } />
                    <Route exact  path="/login" element={<Login/> } />
                    <Route exact  path="/create-account" element={<CreateAccount/> } />
                    <Route exact  path="/my-account" element={<MyAccount/> } />
                    <Route exact  path="/my-order" element={<MyOrder/> } />
                    <Route exact  path="/product-detail" element={<ProductDetail/> } />
                    <Route exact  path="/shopping-cart" element={<ShoppingCartItem/> } />
                    <Route exact  path="/password-recovery" element={<PasswordRecovery/> } />
                    <Route exact  path="/sent-email" element={<SentEmail/> } />
                    <Route exact  path="/checkout" element={<Checkout/> } />
                    <Route exact  path="/orders" element={<Orders/> } />
                    <Route path="*" element={<NotFound/> } />
                </Routes>
            </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;