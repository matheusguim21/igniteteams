import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";




export function Players(){
  return(
    <Container>

      <Header showBackButton />
      <Highlight
      title="Nome da Turma"
      subtitle="Adicione a galera e separe os times"
      />

      <Filter />

      <Form>
        <Input 
        placeholder="Nome da pessoa"
        autoComplete="name"
  
        />
        <ButtonIcon  icon="add" />
      </Form>
      
    </Container>
  )
}