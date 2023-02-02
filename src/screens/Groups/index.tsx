import  { Container} from "./styles";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { GroupCard } from "@components/GroupCard";
export default function Groups(){
  return(
    <>
      <Container>
      <Header />

        <Highlights

        title="Turmas"
        subtitle="Jogue com sua turma"
        />
        <GroupCard
          title ="Turma da Socinpro"
        />
      </Container>
    
    </>
  )
}