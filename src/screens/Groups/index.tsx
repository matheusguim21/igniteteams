import  { Container} from "./styles";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { GroupCard } from "@components/Groupcard";

export default function Groups(){
  return(
    <>
      <Container>
      <Header showBackButton/>

      <Highlights
      title="Turmas"
      subtitle="Jogue com sua turma"
      />

      <GroupCard title="Galera do Ignite"/>
      </Container>
    
    </>
  )
}