import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState} from "react";
import { publicRequest } from "../requestMethods"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Img = styled.img`
  object-fit: cover;
  ${mobile({ height: "200px" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px, 50px;
  ${mobile({ padding: "10px" })};
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
  ${mobile({ width: "100%" })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:${(props) => props.color};
    border-width: .25px;
    border-style: solid;
    border-color: black;
    margin:5px; 5px;
    margin-right: 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin-top: 10px;
  ${mobile({ width: "100%" })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border-width: 0.25px;
  border-color: teal;
  border-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px, 5px;
`;
const Button = styled.button`
  padding: 15px;
  border-width: 2px;
  border-color: teal;
  border-style: solid;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [ quantity, setQuantity]= useState(1);
  const [ color, setColor ] = useState("");
  const [ size, setSize] = useState("small");
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try{
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      }catch{}
    }
    getProduct();
  },[id])

  const handleQuantity = (type) => {
    if(type === "dec"){
      quantity > 1 && setQuantity(quantity-1)
    } else {
      setQuantity(quantity +1)
    }
  }
  const handleClick = () => {
    if(color==="" || size===""){
      alert("please choose a size and color before adding item to the cart")
    } else {
   dispatch(addProduct({...product, quantity, color:color, size:size}))
    }
  }
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) =><FilterColor key={c} color={c} onClick={()=>setColor(c)} />)}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e)=>setSize(e.target.value)}>
                 {product.size?.map((s)=><FilterSizeOption key={s}>{s}</FilterSizeOption>)}
                </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} onClick={()=>handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add style={{ cursor: "pointer" }} onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={()=> handleClick()}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};
