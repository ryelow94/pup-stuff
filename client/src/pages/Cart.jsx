import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive"

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-wight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin-right: 10px;
`;

const Bottom = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weght: 200;
  ${mobile({ marginBottom: "20px" })};

`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border-width: 0.5px;
  border-style: solid;
  border-color: teal;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

export const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR STUFF</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Stuff(2)</TopText>
            <TopText>Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetails>
                <Image src="https://media.istockphoto.com/vectors/leash-icon-on-transparent-background-vector-id1282547902?k=20&m=1282547902&s=170667a&w=0&h=G8tSjBlUatalYsyj-IizZlx5WCEfGhqWPsTU_m6NJxQ=" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Leash
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>1234
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size: </b>Small
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice> $ 40</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetails>
                <Image src="https://s.yimg.com/aah/gundog/wig-wag-small-dog-collar-emerald-green-90.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Collar
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>1243
                  </ProductId>
                  <ProductColor color="green" />
                  <ProductSize>
                    <b>Size: </b>Small
                  </ProductSize>
                </Details>
              </ProductDetails>
              <PriceDetails>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice> $ 40</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary: </SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice> $ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice> $ 10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount: </SummaryItemText>
              <SummaryItemPrice> $ -8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice> $ 82</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>ORDER</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
