import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker, View, Text, Image } from 'react-native';
import { ListItem, BottomSheet } from '@rneui/themed';


const Del_type = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <SafeAreaView>
            <View style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: 'white' }}>

                {/* Progress Bar */}
                <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 'auto', marginVertical: 10 }}>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#C5C5C5', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#C5C5C5', borderRadius: 15 }}></View>
                </View>

                <View style={{ width: '90%', height: '45%', marginHorizontal: 'auto', display: 'flex', justifyContent: 'space-around' }}>
                    <Text style={{ fontWeight: 600 }}>For which category you want to serve  ? </Text>

                    <View style={{ width: '100%', border: '1px solid #C5C5C5', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, gap: 10, marginHorizontal: 'auto' }}>
                        <Text style={{ fontWeight: 600, textAlign: 'center' }}>Taxi</Text>
                    </View>


                    <View style={{ width: '100%', border: '1px solid #C5C5C5', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, gap: 10, marginHorizontal: 'auto' }}>
                        <Text style={{ fontWeight: 600 }}>Genie</Text>
                    </View>



                    <View style={{ width: '100%', border: '1px solid #34A853', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10, gap: 10, marginHorizontal: 'auto' }}>
                        <Text style={{ fontWeight: 600, color: '#34A853' }}>Both Services</Text>
                    </View>



                    <View style={{ backgroundColor: '#243D88', padding: 10, width: '100%', borderRadius: 10, marginVertical: 10, marginHorizontal: 'auto' }}>
                        <Pressable
                            // onPress={() => props.navigation.navigate("Delivery_Standards2")}
                            onPress={() => setIsVisible(true)}
                        >
                            <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                        </Pressable>
                    </View>

                </View>

                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    <View style={{ backgroundColor: 'white', padding: 10 }}>
                        <View style={{ width: '40%', marginHorizontal: 'auto', height: 10, backgroundColor: '#606060', borderRadius: 10, marginVertical: 5 }}></View>
                        <Text style={{ fontSize: 20, fontWeight: 700, textAlign: 'center' }}>Delivery Standards</Text>
                        <Text style={{ fontWeight: 600, textAlign: 'center', marginVertical: 10 }}>For which category you want to serve  ? </Text>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ width: '90%', border: '1px solid #C5C5C5', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontWeight: 600, textAlign: 'center' }}>Grocery Delivery</Text>
                            </View>


                            <View style={{ width: '90%', border: '1px solid #C5C5C5', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontWeight: 600, textAlign: 'center' }}>Zuzu partner</Text>
                            </View>



                            <View style={{ width: '90%', border: '1px solid #34A853', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontWeight: 600, color: '#34A853', textAlign: 'center' }}>Both Services</Text>
                            </View>

                            <View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',gap:5,marginTop:10}}>
                                <View style={{ backgroundColor: '#243D88', padding: 5, width: '90%', borderRadius: 15 }}>
                                    <Pressable onPress={() => {props.navigation.navigate("Select ZONE");setIsVisible(false)}}>
                                        <Text  style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 700 }}>Continue</Text>
                                    </Pressable>
                                </View>
                                <View style={{ backgroundColor: 'red', width: '90%', marginHorizontal: 'auto', padding: 5, borderRadius: 15 }}>
                                    <Text onPress={() => setIsVisible(false)} style={{ color: 'white', textAlign: 'center', fontSize: 15, fontWeight: 700 }} >Cancel</Text>
                                </View>
                            </View>

                        </View>


                    </View>
                </BottomSheet>

            </View>
            
        </SafeAreaView>
    )
}

export default Del_type