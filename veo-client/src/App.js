import styled from "styled-components";
import NodeList from "./components/NodeList";
import Node from "./components/Node";
import organization from "./data/organization";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 32px;
`;

const App = () => {
  return (
    <AppStyled>
      <Node name={organization[0].name} title={organization[0].title} />
      <NodeList employee={organization[0]} />
      <NodeList employee={organization[0].reports[0]} />
      <NodeList employee={organization[0].reports[0].reports[0]} />
      <NodeList employee={organization[0].reports[0].reports[0].reports[0]} />
    </AppStyled>
  );
};

export default App;
