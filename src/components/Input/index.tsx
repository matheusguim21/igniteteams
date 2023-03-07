import { Container } from "./styles";
import { TextInputProps} from 'react-native'
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  placeholder:string;
}

export function Input( {placeholder ,...rest}:Props){
  const {COLORS} = useTheme()
  return(
    <Container 
    placeholder={placeholder}
    placeholderTextColor={COLORS.GRAY_300}
    {...rest}>
      
    </Container>

  )
}