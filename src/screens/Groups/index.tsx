import { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';

import {useNavigation, useFocusEffect} from '@react-navigation/native';

import { GroupCard } from '@components/Groupcard/index';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container } from './styles';

import { groupsGetAll } from '@storage/group/groupsGetAll';



export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new'); 
  }

  function handleOpenGroup(group:string){

    navigation.navigate('players', {group})

  }

  async function fetchGroups(){
    try{
      const data  = await groupsGetAll()
      setGroups(data)
    }catch(error){
      console.log(error)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))


  return (
    <Container>
      <Header />
      <Highlight 
        title="Turmas"
        subtitle="jogue com sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={()=> handleOpenGroup(item)}
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}