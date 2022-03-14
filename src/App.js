import React from "react";
import styled from "styled-components";
import Form from "./Form";

const AppWrapper = styled.div`
    width: 100%;
    min-height:100vh;
    padding: 2rem;
    background: black;
    color: white;
`

const App = () => {
  return (
      <AppWrapper>
          <Form></Form>
      </AppWrapper>
  );
};

export default App;
