import React,{useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { SafeAreaView,Text,StyleSheet, FlatList,View } from 'react-native'
import Menu from '../componentes/Menu/index'
import Header from '../componentes/Header'
import Conditions from '../componentes/Conditions/index'
import Forecast from '../componentes/Forecast/index'
import api,{key} from '../services/api'


export default function Home(){
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState({name:'cloud',color:'#fff'})
  const [background, setBackground] = useState(['#1ed6ff','#97c1ff'])
  console.log(weather)
  useEffect(()=>{
    (async ()=>{
      let{status} = await Location.requestForegroundPermissionsAsync();
      if(status !=='granted'){
        setErrorMsg('Permissao negada')
        setLoading(false)
        return
      }
      let location =  await Location.getCurrentPositionAsync({});
     const response = await api.get(`weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`)
     setWeather(response.data);
     if(response.data.results.currently === 'noite'){
       setBackground(['#0c3741','#0f2f61'])
     }
     switch(response.data.results.condition_slug){
       case 'clear_day':
         setIcon({name:'partly-sunny',color:'#ffb300'})
         break;
         case 'rain':
        setIcon({name:'rainy',color:'#fff'})
         break;
         case 'storm':
          setIcon({name:'rainy',color:'#fff'})
          break;
     }
     setLoading(false);
     
    })()
    

  }, [])
  if(loading){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:17, fontStyle:'italic'}}>Carregando dados...</Text>
      </View>
    )
  }
    return(
        <SafeAreaView style={styles.container}>
            <Menu />
            <Header background={background} weather={weather} icon={icon}/>
            <Conditions weather={weather} />
            <FlatList 
            horizontal={true}
            contentContainerStyle={{paddingBottom:'5%'}}
            style={styles.list}
            data={weather.results.forecast}
            keyExtractor={item => item.date}
            renderItem={({item})=><Forecast data={item}/>}
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list:{
        marginTop:10,
        marginLeft:10,
    }
 
})