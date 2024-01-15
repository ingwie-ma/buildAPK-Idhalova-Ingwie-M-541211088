import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,FlatList, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';

export const Login = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      onPressHandler:()=>{
        nav.navigate("home");
      }
    }
  ];
  const transportItem = ({item}) => {
    return (
              <View style={{flexDirection:"row",overflow:"hidden",justifyContent:"space-between",padding:15,backgroundColor:item.backgroundColor,marginHorizontal:26,marginBottom:10,borderRadius:10}}>
                  <TouchableOpacity style={styles.loginButton} onPress={item.onPressHandler}>
                    <Text style={styles.btntext}>Login</Text>
                  </TouchableOpacity>
              </View>);
  };
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <View style={styles.welcomecontainer}>
                      <Text style={styles.welcomemessage}>{"Selamat Datang<br/>Kembali".split("<br/>").join("\n")}</Text>
                      <View style={styles.circle}></View>
                  </View>
                  <Text style={{color:"#fff"}}> Extra App</Text>
                  <View style={styles.searchbar}>
                    <Ionicons name="person-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Username" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
                  </View>
                  <View style={styles.searchbar}>
                    <Ionicons name="key-outline" size={25} color="#BEBEBE" style={{width:40,transform: [{rotateY: '180deg'}]}} />
                    <TextInput placeholder="Password" style={{color:"Black",marginLeft:15,opacity:0.5,fontSize:15}}></TextInput>
                    
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
    marginTop:200,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
    justifyContent:"space-between"
  },
  welcomemessage:{
    color:"#fff",
    fontSize:35,
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