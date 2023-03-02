import { BottomContainer, Container, Input, LoginContainer, Text, BottomText, Button, ButtonText } from "./styles";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import theme from "@theme/index";

export function Login() {
  return (
    <Container>
      <Header />
      <LoginContainer>
        <Text>Usuário</Text>
        <Input placeholder="Digite seu usuário" placeholderTextColor={theme.COLORS.GRAY_200} autoComplete={"username"}/>
        <Text>Senha</Text>
        <Input placeholder="Digite sua senha" placeholderTextColor={theme.COLORS.GRAY_200} secureTextEntry autoComplete="password"/>
        <BottomContainer>
          <ButtonIcon icon="check-circle"/>
          <BottomText>Lembrar-me</BottomText>


        </BottomContainer>
        <Button><ButtonText>Entrar</ButtonText></Button>
        

      </LoginContainer>
    </Container>
  );
}