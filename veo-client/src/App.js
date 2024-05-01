import styled from "styled-components";
import Node from "./components/Node";

const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;
`;

const App = () => {
  return (
    <AppStyled>
      <Node name="Tabby McTabbison" title="CEO" />
    </AppStyled>
  );
};

export default App;
