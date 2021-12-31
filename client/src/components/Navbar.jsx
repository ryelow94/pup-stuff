import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px, 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 12px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchOutlined style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>PUP STUFF</Logo>
        </Center>
        <Right>
          <MenuItem>SIGN UP</MenuItem>
          <MenuItem>LOG IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};
