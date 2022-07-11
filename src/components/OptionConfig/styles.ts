// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

export const Area = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${colors.percentage30};
`;