import React from 'react'
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker ,View,Text,Image} from 'react-native';


const Vehicle = (props) => {
    return (
        <SafeAreaView>
            <View style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: 'white' }}>

                <View style={{ width: '90%', height: '70%', marginHorizontal: 'auto', display: 'flex', justifyContent: 'space-around' }}>
                <Text style={{fontWeight:600}}>What type of vehicle will you use for delivery  ? </Text>

                    <View style={{ width: '90%', border: '1px solid black', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                        <Image source={'https://w1.pngwing.com/pngs/546/859/png-transparent-food-icon-delivery-icon-sushi-pizza-delivery-scooter-courier-food-delivery-text-thumbnail.png'} style={{ width: 40, height: 40 }} />
                        <Text style={{fontWeight: 600 }}>Bike / Scooter</Text>
                    </View>


                    <View style={{ width: '90%', border: '1px solid black', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                        <Image source={'https://cdn.iconscout.com/icon/premium/png-256-thumb/auto-rickshaw-4719803-3913158.png?f=webp&w=256'} style={{ width: 40, height: 40 }}  />
                        <Text style={{fontWeight: 600 }}>Auto</Text>
                    </View>



                    <View style={{ width: '90%', border: '1px solid #34A853', borderRadius: 8, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 5,gap:10 }}>
                        <Image source={require('../../../assets/Images/wired-outline-884-electric-scooter.gif')} style={{ width: 40, height: 40 }}  />
                        <Text style={{fontWeight: 600 ,color:'#34A853'}}>Electric Scooter</Text>
                    </View>



                <View style={{ backgroundColor: '#243D88', padding: 10, width: '90%', borderRadius: 10 ,marginVertical:10}}>
                    <Pressable onPress={() => props.navigation.navigate("Delivery_Standards")}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                    </Pressable>
                </View>

                </View>

            </View>
        </SafeAreaView>

    )
}

export default Vehicle