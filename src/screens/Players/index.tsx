import { FlatList } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter, } from "@components/Filter";
import { useState } from "react";
import { HeaderList, NumberOfPlayers } from "@components/Filter/styles";
import { PlayerCard } from "@components/PlayerCard";


export function Players(){

  const [team, setTeam] = useState('TIME A')

  const [players, setPlayers] = useState<string>('')  
  const [playerName, setPlayerName] = useState('');

  function handlePlayerAdd(){

    if(playerName.trim() === ''){
      return;

    }//Essa função não deixa adicionar algo vazio
    if(players.includes(playerName)){
      return alert('Esse jogador já foi adicionado')
    }//Essa função não deixa adicionar algo que já existe

    
    
    setPlayers([...players, playerName]);

    setPlayerName('');
  
  }

  return(
    <Container>

      <Header showBackButton />
      <Highlight
      title="Nome da Turma"
      subtitle="Adicione a galera e separe os times"
      />


      <Form>
        <Input 
        placeholder="Nome da pessoa"
        autoComplete="name"
        onChangeText={setPlayerName}
        />
        <ButtonIcon  icon="add" onPress={handlePlayerAdd}  />
      </Form>

      <HeaderList>
        <FlatList  
        data={['TIME A', 'TIME B', 'TIME C']}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Filter
          title={item}
          isActive={item === team}
          onPress={()=> setTeam(item)}
          />  
        )}  
  
        horizontal
        />
      <NumberOfPlayers>
        {players.length}
      </NumberOfPlayers>

      </HeaderList>

      <FlatList
      data={players}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <PlayerCard name={item}/>
      )}
      />
    </Container>
  )
}