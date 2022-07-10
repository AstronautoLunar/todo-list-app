// Core
import styled from "styled-components/native";

// Styles
import colors from "../../styles/colors";

// Utils
import showSizeApp from "../../utils/showSizeApp";

export const Area = styled.View`
  margin-top: 24px;

  width: ${showSizeApp("width") - 24}px;
  height: 64px;

  border: 2px solid ${colors.percentage30};

  border-radius: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AreaInput = styled.TextInput`
  flex: 1;

  padding-left: 16px;

  color: ${colors.percentage30};
`;

export const AreaButtonSend = styled.View`
  width: 80px;
  height: 100%;

  background-color: ${colors.percentage60};

  border-left-width: 2px;
  border-left-color: ${colors.percentage30};

  justify-content: center;
  align-items: center;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const PressArea = styled.Pressable``;