import styled from "styled-components/native";


export const Container = styled.View`
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