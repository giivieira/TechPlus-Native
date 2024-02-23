import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import fundowelcome from '../../assets/fundo-welcome.png'

export default function form({}) {

    // const [fontsLoaded, fontError] = useFonts({
    //     'Poppins-Black': require('../../../fonts'),
    //     'Poppins-Bold': require('../../../fonts'),
    //     'Poppins-ExtraBold': require('../../../fonts'),
    //     'Poppins-ExtraLight': require('../../../fonts'),
    //     'Poppins-Light': require('../../../fonts'),
    //     'Poppins-Medium': require('../../../fonts'),
    //     'Poppins-Regular': require('../../../fonts'),
    //     'Poppins-SemiBold': require('../../../fonts'),
    //     'Poppins-Thin': require('../../../fonts'),
    // });

    // const navigation = useNavigation();

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsLoaded) {
    //         await SplashScreen.hideAsync();
    //     }
    // }, [fontsLoaded]);

    // if (!fontsLoaded) {
    //     return null;
    // }
    
    return (


        <View style={styles.container}>
            <ImageBackground source={fundowelcome} resizeMode="cover" style={styles.image}>
      
            <View style={styles.containerIcon}>
                <Image source={require('../../assets/logo-welcome.png')} />
            </View>
      
            <Text style={styles.title}>Nossa Tech, seu estilo.{'\n'}</Text>

            <TouchableOpacity style={styles.btn1}
                onPress={() => NavigationPreloadManager.navigate('comecar')}
            >
            <Text style={styles.txt}>COMEÇAR</Text>

            </TouchableOpacity>
            </ImageBackground>
        </View>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      alignItems: 'center',
      top: '-22%'
    },
    btn1: {
      backgroundColor: '#000',
      width: 180,
      height: 40,
      borderRadius: 30,
      top: '-10%',
      alignSelf: 'center'
    },
    txt: {
      color: '#fff',
      textAlign: 'center',
      lineHeight: 40,
      fontSize: 18,
      fontWeight: 'bold'
    },
    containerIcon: {
      alignSelf: 'center'
    },
  
  });
  
