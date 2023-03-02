import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import {Input} from '@components/Input'
import theme from "@theme/index";


export function NewGroup() {
  return (
    <Container>

      <Header showBackButton/>

      <Content>
         <Icon/>

         <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
         
         />
        <Input />
        
        
         <Button
          title="Criar Turma"
         />

      </Content>
    </Container>
  );
}