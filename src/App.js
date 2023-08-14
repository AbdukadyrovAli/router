import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import "./App.css";
import { Mycard } from "./pages/Mycard";
import { Myorder } from "./pages/Myorder";
import { ProductDetails } from "./pages/ProductDetails";
import { Products } from "./pages/Products";

function App() {
  const navigate = useNavigate();
  const clickHanled = () => {
    navigate('/');
  };
  return (
    <div>
      <Header>
        <h1 onClick={clickHanled}>iStore</h1>
        <NavCont>
          <NavLink to="/products" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            My Cart
          </NavLink>
          <NavLink to="/orders" activeClassName="active">
            My Orders
          </NavLink>
          {/* <NavLink to='/'/> */}
        </NavCont>
      </Header>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Главная страница</h1>
            </div>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Mycard />} />
        <Route path="/orders" element={<Myorder />} />
      </Routes>
    </div>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  align-items: center;
  background-color: #2f80cf;
  color: #fff;
  h1 {
    margin-left: 3rem;
    cursor: pointer;
  }
`;
const NavCont = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 3rem;
  margin-right: 3rem;
  font-weight: medium;
  color: #fff;
  & a {
    color: #fff;
    text-decoration: none;
  }
  a.active{
  color: black;
  font-size: large;
}
`;
