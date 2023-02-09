import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps ={
  isActive?:boolean;

}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`

 ${({theme, isActive}) => isActive && css`
    border-color: ${theme.COLORS.GREEN_700};
 
 `}

  border-radius:4px;
  margin-right:12px;
  
  height:38px;
  width:70px;
  align-items:center;
  justify-content:center;


`

export const Title = styled.Text<FilterStyleProps>`
  ${({theme, isActive}) => isActive && css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color:${theme.COLORS.WHITE};
  
  `}

  color: ${({theme}) => theme.COLORS.GRAY_300};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

`