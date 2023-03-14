import { BottomContainer, Container, Input, LoginContainer, Text, BottomText, Button, ButtonText, WelcomeText} from "./styles";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import theme from "@theme/index";

export function Login() {
  return (
    <Container>
      <Header />
      <WelcomeText>Bem-Vindo</WelcomeText>
      <LoginContainer>
        <Text>Usuário</Text>
        <Input placeholder="Digite seu usuário" placeholderTextColor={theme.COLORS.GRAY_200} autoCompleteType={"username"}/>
        <Text>Senha</Text>
        <Input placeholder="Digite sua senha" placeholderTextColor={theme.COLORS.GRAY_200} secureTextEntry autoCompleteType="password"/>
        <BottomContainer>
          <ButtonIcon icon="radio-button-unchecked"/>
          <BottomText>Lembrar-me</BottomText>


        </BottomContainer>
        <Button><ButtonText>Entrar</ButtonText></Button>
        

      </LoginContainer>
    </Container>
  );
}