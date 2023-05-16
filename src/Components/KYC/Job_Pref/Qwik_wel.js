import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker } from 'react-native';
import { View, Text, Image } from "react-native";



const Qwik_wel = (props) => {
  return (
    <SafeAreaView>
            <View style={{ width: '100vw', height: '100vh', display: 'flex',backgroundColor:'white'}}>

                <View style={{width:'100%',height:'40%'}}>
                    <Image source={'https://i.ibb.co/dKjjw2V/undraw-Deliveries-2r4y.png'} style={{width:'90%',height:'100%',margin:'auto'}}/>
                </View>

                    <Text>70% COMPLETED</Text>

                <View style={{width:'90%',height:'25%',marginHorizontal:'auto',display:'flex',justifyContent:'space-around'}}>

                    <Text style={{color:'#30303090'}}>COMPLETED</Text>
                    <View style={{width:'90%',border:'1px solid #34A853',borderRadius:8,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10,padding:5}}>

                        <Image source={require("../../../assets/Images/wired-outline-37-approve-checked-simple.gif")} style={{width:30,height:30}}/>
                        <Text style={{color:"#34A853",fontWeight:600}}>Personal Details</Text>
                    </View>

                    <View style={{width:'90%',border:'1px solid #34A853',borderRadius:8,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10,padding:5}}>

                        <Image source={require("../../../assets/Images/wired-outline-37-approve-checked-simple.gif")}  style={{width:30,height:30}}/>
                        <Text style={{color:"#34A853",fontWeight:600}}>Document Verification</Text>
                    </View>
                </View>

                <View style={{width:'90%',height:'15%',marginHorizontal:'auto',display:'flex',justifyContent:'space-around'}}>
                    <Text style={{color:'#30303090'}}>PENDING</Text>
                    <Pressable onPress={() => props.navigation.navigate("Select_vehicle")}>
                    <View style={{width:'90%',border:'1px solid black',borderRadius:8,display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10,padding:10}}>
                        <Text style={{fontWeight:600}}>Job Preferences</Text>
                    </View>
                    </Pressable>
                </View>


            </View>
        </SafeAreaView> 
    )}

export default Qwik_wel

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10
    },
    picker: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#F2F2F2',
        border: '1px solid black'
    }
});