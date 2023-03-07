import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";


export const Container = styled(SafeAreaView)`
  flex:1;
  padding:23px;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  

`
export const Form = styled.View`
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  width:100%;
  max-height:56px;
  flex-direction:row;
  border-radius:6px;
  justify-content:center;
`