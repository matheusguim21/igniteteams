import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./playerStorageDTO";
import { playersGetByGroup } from "./playerGetByGroup";
import App from "App";

export async function addPlayerByGroup(newPlayer : PlayerStorageDTO, group:string){
  try{

    const storedPlayer = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayer.filter(player => player.name === newPlayer.name);

    if(playerAlreadyExists.length > 0 ){
      throw new AppError('Essa pessoa já está adicionada em um time aqui')
    }

    const storage = JSON.stringify([...storedPlayer, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

  }catch(error){
    throw error;
  }


}