import React from 'react';
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Form = () => {
    return (
        <div>
            <Input defaultValue="Заголовок" type="text" />
            <Input defaultValue="Текст" type="text" inputColor="rebeccapurple" />
        </div>
    );
};


export default Form;