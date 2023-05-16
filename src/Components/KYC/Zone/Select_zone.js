import React, { useState } from 'react'
import { View, Text, Image } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker } from 'react-native';


const Select_zone = (props) => {
    const [text, onChangeText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <SafeAreaView>
            <View style={{ width: '90%', margin: 'auto', padding: 5 ,marginVertical:10}}>
                 {/* Progress Bar */}
                 <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 'auto', marginVertical: 10 }}>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#C5C5C5', borderRadius: 15 }}></View>
                </View>
                <Text style={{ fontSize: 15, fontWeight: 600, textAlign: 'left', marginVertical: 15 }}>Areas where you serve</Text>
                <View style={{ width: '100%', margin: 'auto'}}>
                    <Text style={{ fontSize: 18, fontWeight: 650, textAlign: 'left', marginVertical: 10 }}>State</Text>
                    <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Karnataka" value="Karnataka" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Kerala" value="Kerala" />
                        <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
                    </Picker>
                </View>
                <View style={{ width: '100%', margin: 'auto',marginVertical:10}}>
                    <Text style={{ fontSize: 18, fontWeight: 650, textAlign: 'left', marginVertical: 10 }}>City</Text>
                    <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Bangalore" value="Bangalore" />
                        <Picker.Item label="Mumbai" value="Mumbai" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Noida" value="Noida" />
                    </Picker>
                </View>
                <View style={{ width: '100%', margin: 'auto',marginVertical:10}}>
                    <Text style={{ fontSize: 18, fontWeight: 650, textAlign: 'left', marginVertical: 10 }}>Zone</Text>
                    <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                        <Picker.Item label="Bangalore" value="Bangalore" />
                        <Picker.Item label="Mumbai" value="Mumbai" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Noida" value="Noida" />
                    </Picker>
                </View>
            </View>

            <View style={{ backgroundColor: '#243D88', padding: 10, width: '88%', borderRadius: 10 ,marginVertical:10,margin:'auto'}}>
            <Pressable onPress={() => props.navigation.navigate("Select working time slot")}>
                <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
            </Pressable>
        </View>
        </SafeAreaView>
    )
}

export default Select_zone

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
        border: '1px solid #D1D0D0'
    }
});