import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';

export const TambahData = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      onPressHandler:()=>{
        nav.navigate("");
      }
    }
  ];
  const transportItem = ({item}) => {
    return (
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:20,borderRadius:10}}>
                  <TouchableOpacity style={styles.loginButton} onPress={item.onPressHandler}>
                    <Text style={styles.btntext}>Tambah Data</Text>
                  </TouchableOpacity>
              </View>);};
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <View style={styles.welcomecontainer}>
                      <Text style={styles.welcomemessage}>{"Tambahkan Data<br/>Ekstrakulikuler".split("<br/>").join("\n")}</Text>
  
                  </View>
                  <View style={styles.searchbar}>
                    <Ionicons name="add-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Nama Ekskul" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
                  </View>
                  <View style={styles.searchbar}>
                    <Ionicons name="time-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Waktu" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
                  </View>
                  <View style={styles.searchbar}>
                    <Ionicons name="location-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Lokasi" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
                  </View>
                  <View style={styles.searchbar}>
                    <Ionicons name="person-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Nama Pembimbing" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
                  </View>
              </View>
               <View>
                    <FlatList
                    data={DATA}
                    renderItem={transportItem}
                    keyExtractor={(item) => item.id}
                  />
                </View>
          </View>);
}

const styles = StyleSheet.create({
  topview:{
    marginTop:240,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
    justifyContent:"space-between"
  },
  welcomemessage:{
    color:"#fff",
    fontSize:30,
    fontWeight:"bold"
  },
  searchbar:{
    flexDirection:"row",
    backgroundColor:"#fff",
    alignItems:"center",
    width:"100%",
    height:60,
    borderRadius:10,
    marginBottom:10
  },
  welcomecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  loginButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 25,
    width:'100%',
    marginBottom: 60,
    marginTop: 30
  },
  btntext: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex:1,
    backgroundColor:PRIMARYCOLOR,
  },
});