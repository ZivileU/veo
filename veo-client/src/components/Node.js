import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  border: ${(props) =>
    props.name ? "2px solid #28a8df" : "2px dotted #28a8df"};
  border-radius: 4px;
  font-size: 16px;
  min-width: 120px;
  max-width: 180px;
  color: #4f4f4f;
  margin: 16px;
  text-align: center;
`;

const Title = styled.div`
  background-color: #28a8df;
  color: #383838;
  font-weight: 600;
  font-size: 18px;
  padding: 8px;
`;

const Name = styled.div`
  padding: 8px;
`;

const StyledSpan = styled.span`
  width: 120px;
  font-size: 58px;
`;

const Node = ({ name, title }) => {
  if (!name && !title)
    return (
      <Wrapper>
        <StyledSpan>+</StyledSpan>
      </Wrapper>
    );

  return (
    <Wrapper name>
      <Title>{title}</Title>
      <Name>{name}</Name>
    </Wrapper>
  );
};

Node.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Node;
