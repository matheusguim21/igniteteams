import  { Container} from "./styles";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { GroupCard } from "@components/Groupcard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import {Button} from "@components/Button";

export default function Groups(){
  const [groups, setGroups] = useState([])


  return(
    <>
      <Container>
      <Header   />

      <Highlights
      title="Turmas"
      subtitle="Jogue com sua turma"
      />
      
      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem= {({item}) => (
        
        <GroupCard
         title={item}
         
         />)}

          contentContainerStyle={groups.length === 0 && {flex:1} }

         ListEmptyComponent = {() => (
          <ListEmpty
          message="Que tal adicionar uma lista?"
          />

         )}
        
      />

      <Button title="Criar Turma"/>
      </Container>
    
    </>
  )
}