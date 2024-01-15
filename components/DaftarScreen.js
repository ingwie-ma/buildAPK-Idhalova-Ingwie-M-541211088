import * as React from 'react';
import  {View,StyleSheet,Image,Text,TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PRIMARYCOLOR,PRIMARYBORDERADIUS} from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import {CustomCard} from './CustomCard';
import {FromTo} from './FromTo';
import SvgQRCode from 'react-native-qrcode-svg';

export const DaftarScreen = () => {
  
  return (
          <View style={styles.container}>
              <View style={styles.topview}>
                  <Text style={{position:"absolute",top:5,textAlign:"center",fontSize:30,color:"#fff",fontWeight:"bold"}}>Daftar Ekstrakulikuler</Text>
              </View>
              <View style={styles.bottomview}>
              <CustomCard elevated={true} style={{backgroundColor:"#fff",marginHorizontal:24,marginTop:-180,padding:30,borderRadius:10}}>
                  <FromTo />
                  <View style={{flexDirection:"row",marginTop:10}}>
                  </View>
                </CustomCard>
              </View>
          </View>);
}

const styles = StyleSheet.create({
  topview:{
    marginTop:60,
    marginHorizontal:24,
    backgroundColor:PRIMARYCOLOR,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
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