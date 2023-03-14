import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted:string){
  const storage = await groupsGetAll();

  const filteredGroups =  storage.filter(group => group !== groupDeleted)

  await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups) )

  await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  

}