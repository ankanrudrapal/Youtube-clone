import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 30px 50px;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};

`;

const Button = styled.button`
  border-radius: 5px;
  border: none;
  padding: 8px 16px;
  font-size: 17px;
  font-weight: 500;
  cursor: pointer;
  background-color: #266bc5;
  color: ${({ theme }) => theme.bg};
`;

const Register = styled.div`
  color: #09ee09;
  font-weight: 500;
  font-size: 18px;
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to MyTube</SubTitle>
        <Input placeholder="Email or phone" />
        <Input type="password" placeholder="Enter your password" />
        <Button>Sign in</Button>
        <SubTitle>Don't you have an account?</SubTitle>
        <Register>Create account</Register>
      </Wrapper>
      <More>
        Enlish (UK)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default Signin;
