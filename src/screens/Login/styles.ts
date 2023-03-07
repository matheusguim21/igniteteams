import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  width:100%;
  height:70%;
  align-items:center;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  background-image: url();
`

export const LoginContainer = styled.View`
  width:80%;
  height:50%;
  align-items: center;
  background-color:${({theme}) => theme.COLORS.GRAY_600};
  border-radius: 8px;
  padding:15px;
  

`
export const WelcomeText = styled.Text`
  font-size: 30px;
  font-family: 'Roboto_700Bold';
  color:${({theme}) => theme.COLORS.GRAY_100};
  margin-bottom:20px;


`
export const Text = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.COLORS.GRAY_100};
  margin: 20px 0 10px 18px;
  text-align:left;
  align-self:flex-start;

`
export const Input = styled.TextInput`
  width:95%;
  height:50px;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  color: ${({theme}) => theme.COLORS.WHITE};
  padding: 0 20px;
`

export const BottomContainer = styled.View`
  width:100%;
  padding:10px 0px;
  flex-direction:row;



`
export const BottomText = styled.Text`
  font-size: 17px;
  margin-top:12px;
  color: ${({theme}) => theme.COLORS.GRAY_100};

`
export const Button = styled.TouchableOpacity`
  width:90%;
  height:50px;
  background-color:${({theme}) => theme.COLORS.GREEN_700};
  border-radius: 8px;
  margin-top:20px;
  justify-content:center;


`
export const ButtonText = styled.Text`

  font-size: 20px;
  text-align:center;
  color: ${({theme}) => theme.COLORS.WHITE};
  
  `
  