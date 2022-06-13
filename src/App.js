import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import CheckOut from "./Component/CheckOut/CheckOut";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Navigation from "./Component/Navigation/Navigation";
import NotFound from "./Component/NotFound/NotFound";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Resister from "./Component/Resister/Resister";
function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/resister" element={<Resister></Resister>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
