import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import './App.css';
import Admin from "./pages/admin/admin";
import AdminCreateCategorie from "./pages/admin/pages/createCategorie";
import AdminCreateProduct from "./pages/admin/pages/createproduct";
import Dashboard from "./pages/admin/pages/dashborad";
import AdminGategorie from "./pages/admin/pages/Gategorie";
import AdminProduicts from "./pages/admin/pages/products";
import AdminToolsStore from "./pages/admin/pages/toolsStore";
import AdminCreateSaliderPic from "./pages/admin/pages/toolsStore/pages/SaliderPic/createSaliderPic";
import AdminShowSaliderPic from "./pages/admin/pages/toolsStore/pages/SaliderPic/showSaliderPic";
import AdminToolsRowsCreateRow from "./pages/admin/pages/toolsStore/pages/toolsRows/createRows";
import AdminToolsRowsShowRows from "./pages/admin/pages/toolsStore/pages/toolsRows/showRows";
import Card from "./pages/card/card";
import { Error } from "./pages/error/error";
import { Home } from "./pages/home/home";
import redux from "./redux/redux";

export default function App(){

  return(
    <BrowserRouter >
    <Provider store={redux}>
    <Routes >
      <Route path="/store/" element={<Home/>} />
      <Route path="/store/admin" element={<Admin/>} />
      <Route path="/store/admin/dashboard" exect element={<Dashboard/>} />
      <Route path="/store/admin/products" exect element={<AdminProduicts/>} />
      <Route path="/store/admin/products/create" exect element={<AdminCreateProduct/>} />
      <Route path="/store/admin/categorie/" element={<AdminGategorie/>}  />
      <Route path="/store/admin/categorie/create" element={<AdminCreateCategorie/>}  />
      <Route path="/store/admin/tools-store" element={<AdminToolsStore/>}/>
      <Route path="/store/admin/tools-store/salider-pic" element={<AdminShowSaliderPic/>}/>
      <Route path="/store/admin/tools-store/salider-pic/create" element={<AdminCreateSaliderPic/>}/>
      <Route path="/store/admin/tools-store/show-rows" element={<AdminToolsRowsShowRows/>}  />
      <Route path="/store/admin/tools-store/create-row" element={<AdminToolsRowsCreateRow/>}  />

      <Route path="/card" exect element={<Card/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </Provider>
    </BrowserRouter>
  )
}