import styled from "styled-components/native";
import {CaretLeft} from 'phosphor-react-native'
export const Container = styled.View`
  width:100%;
  margin-top: 10%;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  padding: 10px 15px 10px 15px;
`
export const Logo =styled.Image`
  width:56px;
  height:65px;


`
export const BackButton = styled.TouchableOpacity`
  flex:1;
  
`

export const BackIcon = styled(CaretLeft).attrs(({theme})=> ({
  size:32,
  color:theme.COLORS.WHITE,


}))``