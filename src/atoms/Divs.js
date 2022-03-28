import styled from "styled-components";

export const FormDiv = styled.form`
  display: flex;
  justify-content: center;
`
export const StyledDiv = styled.div`
  display: flex;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: ${props => props.background};
  border: none;
  border-radius: 3px;
  color: black;
  width: 1000px;
`;