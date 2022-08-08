import React from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Catalog from "./pages/Catalog/Catalog";
import Iphone from "./pages/Catalog/components/Iphone/Iphone";
import "./App.css";
import Product from "./pages/Catalog/Product/Product";
import Watch from "./pages/Catalog/components/Watch/Watch";

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Main pageName="Главная" />} />
				<Route path="/about" element={<About/>} />
				<Route path="/contacts" element={<Contacts pageContacs="Контакты" />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/catalog/iphone" element={<Iphone />} />
				<Route path="/catalog/watch" element={< Watch/>} />
				<Route path="/product/:id" element={<Product />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
