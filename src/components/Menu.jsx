import {
  AccountCircleOutlined,
  ArticleOutlined,
  ExploreOutlined,
  FeedbackOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  HistoryOutlined,
  Home,
  LibraryMusicOutlined,
  LiveTvOutlined,
  MovieOutlined,
  SettingsBrightnessOutlined,
  SettingsOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyTube from "../img/ulogo.png";

const Container = styled.div`
  flex: 1.2;
  background-color: ${({ theme }) => theme.bgLighter};
  top: 0;
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  position: sticky;

  &:hover {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 9px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: gray;
      border-radius: 5px;
    }
  }
`;

const Wrapper = styled.div`
  padding: 15px 22px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const SignIn = styled.div`
  font-size: 15px;
`;

const Button = styled.button`
  padding: 7px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textSoft};
  color: #065ed1;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 20px;
`;


const Section = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={MyTube} />
            MyTube
          </Logo>
          <Item>
            <Home />
            Home
          </Item>
        </Link>
        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <SignIn>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlined />
              Sign In
            </Button>
          </Link>
        </SignIn>
        <Hr />
        <Title>BEST OF MYTUBE</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report history
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item>
          <FeedbackOutlined />
          Send feedback
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Hr />
          <Section>&copy; 2023 ANKAN</Section>
      </Wrapper>
    </Container>
  );
};

export default Menu;
