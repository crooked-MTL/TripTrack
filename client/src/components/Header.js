import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/TripTrack-Logo.png"
import {FiUser} from "react-icons/fi"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <MainDiv>
        <ContentContainer>
            <LogoDiv>
                <HomeLink to="/">
                <LogoImg src={Logo}/>
                </HomeLink>
            </LogoDiv>
            <UserDiv>
                <Button>SIGN UP</Button>
                <Button>LOG IN</Button>
                <FiUser style={iconstyling} size={35}/>
            </UserDiv>
        </ContentContainer>
        </MainDiv>
        </>
    );
};
const LogoImg=styled.img`
width:75%;
`;
const HomeLink=styled(NavLink)`

`
const Button=styled.button`
color: #F1FAEE;
min-width: 110px;
font-weight:bold;
background-color: var(--color-title-red);
border: 0px solid var(--color-highlight-aqua);
border-radius: 50px;
padding-left: 15px;
font-family: var(--font-heading);
padding-right: 15px;
font-size: 16px;
height: 35px;
margin:0 15px 0 0;
cursor: pointer;
transition: all 100ms ease-in-out;

&:hover{
    border:4px solid var(--color-highlight-aqua);
    
}
`;
const iconstyling = {
    padding: "4px",
    color: "var(--color-title-red)",
    border: "3px solid var(--color-title-red)",
    borderRadius: "50%",
    cursor:"pointer",
  };
const MainDiv=styled.div`
display: flex;
height: 60px;
background-color: var(--color-banner-blue);
`;
const ContentContainer=styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`;
const LogoDiv=styled.div`
`;

const Title=styled.h1`
color: var(--color-title-red);
font-size: 35px;
`;

const UserDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-right: 20px;
`;

export default Header;