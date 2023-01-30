import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`

  width: 100%;
  justify-content:center;
  align-items:center;
  margin-bottom:30px;


`

export const Title = styled.Text`

  font-size: ${({theme}) => theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.BOLD};
  color: ${({theme}) => theme.COLORS.WHITE};
`

export const Subtitle = styled.Text`

  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) => theme.COLORS.GRAY_300};

`