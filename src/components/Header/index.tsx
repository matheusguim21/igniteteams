import { BackButton, BackIcon, Container, Logo } from "./styles";

import logoImg from '@assets/logoSocinpro/socinpro-digital.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      { 
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  )
}