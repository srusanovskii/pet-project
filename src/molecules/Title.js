import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000000;
`
const Wrapper = styled.section`
  padding: 4em;
  background: #ffffff;
`

const TitleName = ({todos}) => {
    return (
        <Wrapper>
            <Title>
                ToDo
            </Title>
            <Title>Число задач {todos.length}</Title>
        </Wrapper>
    );
};
export default TitleName;