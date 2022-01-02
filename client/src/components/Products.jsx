import styled from "styled-components";
import { popularProducts } from "../data";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async (products) => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:4000/api/products?category=${category}`
            : "http://localhost:4000/api/products?"
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filter]);
  useEffect(() => {
    if(sort==="newest"){
      setFilteredProducts(prev=>
        [...prev].sort((a,b)=>a.createdAt-b.createdAt))
    } else if(sort==="asc"){
      setFilteredProducts((prev)=> 
      [...prev].sort((a,b)=>a.price-b.price))
    } else {
      setFilteredProducts((prev)=> 
      [...prev].sort((a,b)=>b.createdAt-a.createdAt))
    }
  },[sort])
  return (
    <Container>
    {category
      ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
      : products
          .slice(0, 8)
          .map((item) => <Product item={item} key={item.id} />)}
  </Container>
  );
};
