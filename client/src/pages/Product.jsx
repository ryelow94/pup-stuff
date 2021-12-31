import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px, 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px, 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px, 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 5px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${props=>props.color};
    border-width: .25px;
    border-style: solid;
    border-color: black;
    margin:5px; 5px;
    margin-right: 5px;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`
const FilterSizeOption= styled.option`

`
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    margin-top:10px;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border-width: .25px;
    border-color: teal;
    border-style: solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px, 5px;

`
const Button = styled.button`
    padding: 15px;
    border-width: 2px;
    border-color: teal;
    border-style: solid;
    background-color: white;
    cursor: pointer;
    font-weight:500;

    &:hover{
        background-color:#f8f4f4;
    }

`

export const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src="https://www.freeiconspng.com/thumbs/dog-collar/red-leather-dog-collar-belt-images-1.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Collar</Title>
          <Desc>This is the description of the product</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
              <Filter>
                  <FilterTitle>
                      Color
                  </FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="white"/>
                  <FilterColor color="red"/>
              </Filter>
              <Filter>
                  <FilterTitle>
                      <FilterSize>
                          <FilterSizeOption> Small</FilterSizeOption>
                          <FilterSizeOption>Large</FilterSizeOption>
                      </FilterSize>
                  </FilterTitle>
              </Filter>
          </FilterContainer>
          <AddContainer>
              <AmountContainer>
                 <Add style={{cursor:"pointer"}} />
                 <Remove style={{cursor:"pointer"}}  />
                 <Amount>1</Amount>
              </AmountContainer>
              <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
