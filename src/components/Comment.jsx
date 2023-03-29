import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
    font-size: 17px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 15px;
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src='https://demoskop.se/wp-content/uploads/2021/10/user.png' />
        <Details>
            <Name>
                Someone <Date>1 day ago</Date>
            </Name>
            <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fuga odit rerum deserunt aperiam pariatur qui alias. Suscipit, alias eos.</Text>
        </Details>
    </Container>
  )
}

export default Comment;