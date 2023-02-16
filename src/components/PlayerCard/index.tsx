import { ButtonIcon } from "@components/ButtonIcon";
import { Container, PlayerIcon, PlayerName } from "./styles"

type Props = {
  name:string;
}
export function PlayerCard ({name}:Props){
  return(
    <Container>
      <PlayerIcon name='person'/>
      <PlayerName>
        {name} 
      </PlayerName>
      <ButtonIcon icon="remove" />
    </Container>


  )
}