import { Alert, FlatList, TextInput } from "react-native";
import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Filter, } from "@components/Filter";
import { useEffect, useState, useRef } from "react";
import { HeaderList, NumberOfPlayers } from "@components/Filter/styles";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { Route, useRoute, useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { addPlayerByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";


export function Players(){
  
  const [isLoading, setIsLoading] = useState(true);
  const [team, setTeam] = useState('TIME A')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])  
  const [newPlayerName, setNewPlayerName] = useState('')



  async function handleAddPlayer(){
    
    if(newPlayerName.trim().length === 0){
      return Alert.alert('Novo jogador', 'Digite o nome do novo jogador apara adicionar')
    }

    const newPlayer = {
      name:newPlayerName,
      team
    }
    
    try{
      await addPlayerByGroup(newPlayer, group)
      fetchPlayersByTeam();
    }catch(error){
      if(error instanceof AppError){
        Alert.alert('Nova pessoa', error.message);
      }else{
        console.log(error);
        Alert.alert('Não foi possível adicionar')
      }
    }

  }

  type RouteParams = {
    group:string;
  }

  const newPlayerNameInputRef = useRef<TextInput>(null);


  const route = useRoute()

  const {group} = route.params as RouteParams

  const navigation = useNavigation();


   async function fetchPlayersByTeam(){
    try{
      setIsLoading(true)
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName('')
      setPlayers(playersByTeam); 


    }catch(error){
      console.log(error);
      Alert.alert('Pessoas', 'Não fou possível carregar as pessoas')
    }finally{
      setIsLoading(false);
    }
  }

  async function handleRemovePlayer(playerName:string){

    try{
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()

    }catch(error){
      console.log(error)
    }
  }
  async function groupRemove(){

    try{
      groupRemoveByName(group);
      navigation.navigate('groups')

    }catch(error){
      console.log(error);
      Alert.alert('Remover grupo', 'Não foi possível remover o grupo');

    }

  }

  async function handleGroupRemoveByName() {
    
    Alert.alert(
      'Remover',
      'Deseja remover o grupo?',
      [
        {text: 'Não', style:"cancel"},
        {text: 'Sim', onPress:()=> groupRemove()}

      ]
    )    
  }

  useEffect(()=> {
    fetchPlayersByTeam();
  }, [team]);


  return(
    <Container>

      <Header showBackButton />
      <Highlight
      title={group}
      subtitle="Adicione a galera e separe os times"
      />


      <Form>
        <Input 
        inputRef={newPlayerNameInputRef}
        placeholder="Nome da pessoa"
        autoComplete="name"
        onChangeText={setNewPlayerName}
        value={newPlayerName}
        onSubmitEditing={handleAddPlayer}
        returnKeyType="done"
        />

        <ButtonIcon  icon="add" onPress={handleAddPlayer}  />
      </Form>

      <HeaderList>
        <FlatList  
        data={['TIME A', 'TIME B']}
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

      { isLoading ? <Loading/> : 


      <FlatList
      data={players}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <PlayerCard 
        name={item.name}
        onRemove={()=> handleRemovePlayer(item.name)}
        
        />
        
      )}

      ListEmptyComponent={() => (
        <ListEmpty
        message="Não há pessoas nesse time"
        />
      )
      }

      showsVerticalScrollIndicator={false}

      contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex:1}]}
      />
      }

      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={()=> handleGroupRemoveByName()}
        />
    </Container>
  )
}