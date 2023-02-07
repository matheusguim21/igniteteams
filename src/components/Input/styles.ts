import styled from 'styled-components/native'
import {TextInput} from 'react-native'
export const Container = styled(TextInput)`
  flex:1;
  min-height:56px;
  max-height:56px;
  padding: 10px;
  border-radius:6px;

  font-size:${({theme}) => theme.FONT_SIZE.MD}px;

  background-color:${({theme}) => theme.COLORS.GRAY_700};
  color: ${({theme}) => theme.COLORS.WHITE};
  margin-bottom: 16px;


`