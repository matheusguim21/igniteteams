import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { UsersThree} from 'phosphor-react-native'


export const Container = styled(TouchableOpacity)`
  width:90%;
  height:90px;
  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  border-radius:10px;
  flex-direction:row;
  align-items:center;
  margin:0 auto 0 auto;
  margin-bottom:12px;
  padding:24px;
  

`
export const Title = styled.Text`
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  color: ${({theme}) => theme.COLORS.GRAY_200};
  text-align:center;


`

export const Icon = styled(UsersThree).attrs(({theme}) => ({

  size:32,
  color:theme.COLORS.GREEN_700,
  weight:'fill'


}))`

  margin-right:20px;

`