import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`

  width:95%;
  height:90px;
  margin:0 auto 12px auto;
  flex-direction:row;
  align-items:center;
  

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius: 8px;

  padding:20px;

  
`

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.GRAY_200};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  

`
export const Icon = styled(UsersThree).attrs(({theme}) => ({
  size:32,
  color:theme.COLORS.GREEN_700,
  weight:'fill',
  
}))`
  margin-right:20px;

`
  