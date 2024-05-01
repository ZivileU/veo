import styled from "styled-components";
import { employeeWithReports } from "../propTypes/employee";
import Node from "../components/Node";

const OutterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
`;

const Wrapper = styled.div`
  display: flex;
`;

const NodeList = ({ employee }) => {
  return (
    <OutterWrapper>
      {employee.reports && (
        <Wrapper>
          {employee.reports.map((report) => {
            return (
              <Node
                key={report.employeeID}
                name={report.name}
                title={report.title}
              />
            );
          })}
          <Node />
        </Wrapper>
      )}
    </OutterWrapper>
  );
};

NodeList.propTypes = {
  employee: employeeWithReports.isRequired,
};

export default NodeList;
