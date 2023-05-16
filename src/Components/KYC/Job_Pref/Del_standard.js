import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker ,View,Text,Image} from 'react-native';
import { ListItem, BottomSheet } from '@rneui/themed';


const Del_standard = (props) => {
    const [isVisible, setIsVisible] = useState(false);


  return (
    <SafeAreaView>
    <View style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: 'white' }}>

        <View style={{ width: '90%', height: '45%', marginHorizontal: 'auto', display: 'flex', justifyContent: 'space-around' }}>
        <Text style={{fontWeight:600}}>For which category you want to serve  ? </Text>

            <View style={{ width: '90%', border: '1px solid black', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                <Text style={{fontWeight: 600 }}>Grocery Delivery</Text>
            </View>


            <View style={{ width: '90%', border: '1px solid black', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                <Text style={{fontWeight: 600 }}>Zuzu partner</Text>
            </View>



            <View style={{ width: '90%', border: '1px solid #34A853', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                <Text style={{fontWeight: 600 ,color:'#34A853'}}>Both Services</Text>
            </View>



        <View style={{ backgroundColor: '#243D88', padding: 10, width: '90%', borderRadius: 10 ,marginVertical:10}}>
            <Pressable
             onPress={() => props.navigation.navigate("Select ZONE")}            
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
            </Pressable>
        </View>

        </View>

        <BottomSheet modalProps={{}} isVisible={isVisible}>
                    <View style={{ backgroundColor: 'white', padding: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>Yayy! You are hero for our Organisation</Text>
                        <Text style={{ fontSize: 15, fontWeight: 600, textAlign: 'center', marginVertical: 10 }}>Thanks to join us ! Stay Safe & Health</Text>
                        <View style={{ backgroundColor: '#243D88', width: '90%', marginHorizontal: 'auto', padding: 10, borderRadius: 15, marginVertical: 10 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 700 }}>Get Started</Text>
                        </View>
                        <View style={{ backgroundColor: 'red', width: '90%', marginHorizontal: 'auto', padding: 10, borderRadius: 15 }}>
                            <Text onPress={() => setIsVisible(false)} style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 700 }} >Cancel</Text>
                        </View>
                    </View>
                </BottomSheet>

    </View>
</SafeAreaView>
  )
}

export default Del_standard