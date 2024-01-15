import * as React from 'react';
import {Text,View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const FromTo = (props) =>{
  return (
    <View style={{width:"100%"}}>
      <View style={{flexDirection:"row",marginBottom:20,alignItems:"center"}}>
            <Ionicons name="basketball-sharp" size={26} color={props.backgroundColor}  />
            <View style={{marginLeft:20}}>
              <Text style={{opacity:0.6,fontSize:15}}>Have Fun all of the time!</Text>
              <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>Basket</Text>
            </View>
      </View>
      <View style={{position:"absolute",left:12,height:28,borderWidth:1,top:42,width:0,borderColor:"#EBE7E6"}}>
      </View>
       <View style={{flexDirection:"row" ,alignItems:"center", borderTopStartRadius:60,borderTopEndRadius:20,borderColor:"#EBE7E6",borderTopWidth:2, marginBottom:20 }}>
            <Ionicons name="book-sharp" size={26} color="props.backgroundColor"  />
            <View style={{marginLeft:20}}>
              <Text style={{opacity:0.6,fontSize:15,marginTop:10, marginBottom:10 }}>Upgrade your English skill</Text>
              <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>English Club</Text>
            </View>
      </View>
      <View style={{position:"absolute",left:12,height:28,borderWidth:1,top:42,width:0,borderColor:"#EBE7E6"}}>
      </View>
       <View style={{flexDirection:"row" ,alignItems:"center", borderTopStartRadius:60,borderTopEndRadius:20,borderColor:"#EBE7E6",borderTopWidth:2, marginBottom:20}}>
            <Ionicons name="laptop-sharp" size={26} color="props.backgroundColor"  />
            <View style={{marginLeft:20}}>
              <Text style={{opacity:0.6,fontSize:15,marginTop:10}}>Make your character!</Text>
              <Text style={{fontWeight:"bold",fontSize:15,marginTop:10}}>3D Game Art</Text>
            </View>
      </View>
    </View>
    
  );
};