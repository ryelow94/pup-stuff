import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px, 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;

`
const Payment = styled.img `
    width: 50%;
`
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PUP STUFF</Logo>
        <Desc>
          This is going to be a description or something about the webpage. It
          will include some sort of information about the company or whatever
          else you want.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Collars</ListItem>
          <ListItem>Leashes</ListItem>
          <ListItem>Apparel</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Support</ListItem>
        </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem>
              <MailOutline style={{marginRight:"10px"}}/> pup-stuff@gmail.com
          </ContactItem>
          <ContactItem>
              <Phone style={{marginRight:"10px"}}/> +1 (111)-111-1111
          </ContactItem>
          <ContactItem>
              <Room style={{marginRight:"10px"}}/> 111 Somewhere Place, Portland OR 97211
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};
