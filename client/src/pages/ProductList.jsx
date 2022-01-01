import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import { mobile } from "../responsive"

const Container = styled.div``;
const Title = styled.h1`
  margin: 0px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({width:"0px 20px", display: "flex", flexDirection:"column"})};
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin:"10px 0px"})};
`;
const Option = styled.option``;

export const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Collars</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Options:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort:</FilterText>
          <Select>
            <Option selected> Newest </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};
