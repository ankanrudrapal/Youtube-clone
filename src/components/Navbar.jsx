import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 23px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

const Input = styled.input`
  border: none;
  font-size: 18px;
  padding: 0px 20px;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
`;

const Icon = styled.div`
  padding-right: 15px;
  padding-top: 5px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 7px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.textSoft};
  color: #065ed1;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 500;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <Icon>
            <SearchOutlined />
          </Icon>
        </Search>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
