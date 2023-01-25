import { ThemeProvider } from 'styled-components';
import theme from './src/theme/index'
import Groups from '@screens/Groups';
import {  StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Principal } from '@screens/Principal/style';


export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  
    return (
    
    <Principal>
      <ThemeProvider theme={theme}>
        
        { fontsLoaded  ? <Groups/> : <Loading/>}
  
        <StatusBar
          barStyle={'default'}
          backgroundColor={'transparent'}
          translucent
        
        />
      </ThemeProvider>
    </Principal>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
