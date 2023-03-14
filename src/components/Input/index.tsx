import { Container } from "./styles";
import { TextInputProps, TextInput} from 'react-native'
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  placeholder:string;
  inputRef?: React.RefObject<TextInput>
}

export function Input( {inputRef,placeholder ,...rest}:Props){
  const {COLORS} = useTheme()
  return(
    <Container 
    ref={inputRef}
    placeholder={placeholder}
    placeholderTextColor={COLORS.GRAY_300}
    {...rest}>
      
    </Container>

  )
}