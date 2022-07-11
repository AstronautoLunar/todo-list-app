// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

export const Area = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  padding-top: 24px;

  z-index: 0;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;

  color: ${colors.percentage30};

  flex: 1;
`;


export const AreaCheckbox = styled.View`
  width: 30px;
  height: 30px;

  margin-right: 16px;

  border-radius: 200px;
  border: 2px solid ${colors.percentage10};
`;

export const PressArea = styled.Pressable``;