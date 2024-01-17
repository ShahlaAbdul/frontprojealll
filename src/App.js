import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AddPage from "./Pages/AddPage/index";
import Basket from "./Pages/Basket/index";
import Wishlist from "./Pages/Wishlist/index";
import Detail from "./Pages/Detail";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/add" element={<AddPage></AddPage>} />
          <Route path="/basket" element={<Basket></Basket>} />
          <Route path="/wishlist" element={<Wishlist></Wishlist>} />
          <Route path="/detail" element={<Detail></Detail>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
