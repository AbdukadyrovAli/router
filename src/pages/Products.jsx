import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "../UI/Button";
export const DUMMY_PRODUCTS = [
  {
    title: "Смартфон Apple iPhone 14 Pro 256GB CA",
    price: "$500",
    id: "e1ndaskxe",
    image:
      "https://softech.kg/image/cache/296b69d253ff893ad55b7fabf3e031ed.jpg",
  },
  {
    title: "Смартфон Apple iPhone 13 256GB KH",
    price: "$400",
    id: "e242kjkx",
    image:
      "https://softech.kg/image/cache/a282da674bcc4003cfe99133ac1d52fd.jpg",
  },
  {
    title: "Смартфон Apple iPhone 14 Pro Max 1TB JP",
    price: "$600",
    id: "e3fpso1m",
    image:
      "https://softech.kg/image/cache/d871f069c929794a42d44fbe69c4c151.jpg",
  }
];
export const Products = () => {
  const navigate = useNavigate();
  const clickHanled = (phoneId) => {
    navigate(`/products/${phoneId}`);
  };
  return (
    <>
      <Container>
        {DUMMY_PRODUCTS.map((phone) => {
          return (
            <Div key={phone.id}>
              <ContDetals onClick={() => clickHanled(phone.id)}>
                <img src={phone.image} />
                <h1>{phone.title}</h1>
                <h1>{phone.price}</h1>
              </ContDetals>
            </Div>
          );
        })}
        {/* <Outlet/> */}
      </Container>
      <Button></Button>
      {/* <Button>Next</Button> */}
    </>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #fff; */
  /* border-radius: 50px; */
`;
const Container = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 5rem;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const ContDetals = styled.div`
  padding: 20px;
  width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 50px;
  box-shadow: 10px 10px 10px 10px;
  img {
    width: 300px;
  }
`;
