import styled from "styled-components";

export const Container = styled.article`
  opacity: ${(props) => props.removed ? 0.5 : 1};
  color: ${(props) => props.removed ? '#ff0000' : '#fff'}
`;

export const SubTitle = styled.small`
  opacity: 0.3;
  color: red;
  background-color: yellow
`;