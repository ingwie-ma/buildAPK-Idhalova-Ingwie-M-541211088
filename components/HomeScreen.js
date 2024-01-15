import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';

export const HomeScreen = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      name: "Lihat Ekskul",
      backgroundColor:"#BFBFB2",
      onPressHandler:()=>{
        nav.navigate("daftar");
      }
    },
    {
      id: 2,
      name: "Cari Ekskul",
      backgroundColor:"#BFBFB2",
      onPressHandler:()=>{
        nav.navigate("cari");
      }
    },
    {
      id: 3,
      name: "Tambah Ekskul",
      backgroundColor:"#BFBFB2",
      onPressHandler:()=>{
        nav.navigate("tambah");
      }
    },
    {
      id: 4,
      name: "Ubah Ekskul",
      backgroundColor:"#BFBFB2",
      onPressHandler:()=>{
        nav.navigate("");
      }
    },
    {
      id: 5,
      name: "Hapus Ekskul",
      backgroundColor:"#BFBFB2",
      onPressHandler:()=>{
        nav.navigate("");
      }
    },
  ];
  const transportItem = ({item}) => {
    return (<CustomCard >
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:10,borderRadius:10}}>
                <View style={{justifyContent:"space-between"}}>
                  <Text style={{color:"#fff",fontWeight:"bold",fontSize:20}}>{item.name}</Text>
                  <TouchableOpacity style={{backgroundColor:"#fff",width:70,padding:5,borderRadius:6,marginTop:40}} onPress={item.onPressHandler}>
                    <Text style={{textAlign:"center",fontWeight:"bold"}}>Select</Text>
                  </TouchableOpacity>
                </View>
                
                <View>
                  <Image
                      style={{position:"absolute",right:-15,bottom:2}}
                      source={item.imagesrc}>
                  </Image>
                </View>
              </View>
           </CustomCard>);
  };
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <View style={styles.welcomecontainer}>
                      <Text style={styles.welcomemessage}>{"Halo,<br/>Ingwie".split("<br/>").join("\n")}</Text>
                      <View style={styles.circle}></View>
                  </View>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-40,padding:30,borderRadius:10,flexDirection:"row",justifyContent:"space-between"}}>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Hari</Text>
                    <Text style={{fontWeight:"bold",fontSize:15}}>Jum'at</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Waktu</Text>
                    <Text style={{fontWeight:"bold",fontSize:15}}>16.00</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Text style={{fontWeight:"bold", marginBottom:10}}>Jumlah Extra</Text>
                    <Text style={{fontWeight:"bold",fontSize:15}}>16</Text>
                  </View>
                </CustomCard>
                <Text style={{marginHorizontal:26,marginVertical:20,fontWeight:"bold",fontSize:20}}>Atur Data Ekstrakulikuler</Text>
                <View>
                    <FlatList
                    data={DATA}
                    renderItem={transportItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
                <View style={{position:"absolute",bottom:0,width:"100%"}}>
                </View>
                </View>
          </View>);
}

const styles = StyleSheet.create({
  topview:{
    marginTop:70,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
  },
  welcomemessage:{
    color:"#fff",
    fontSize:40,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:40,
    borderRadius:10,
    marginBottom:65
  },
  circle:{
    borderRadius:25,
    height:50,
    width:50,
    backgroundColor:"#fff"
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bottomview:{
    flex:2,
    backgroundColor:"#fff",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
  },
});