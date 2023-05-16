import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker } from 'react-native';
import { View, Text, Image } from "react-native";



const Account_Ver = (props) => {
    const [text, onChangeText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("java");



  return (
    <SafeAreaView>
            <View style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#F2F2F2' }}>
            
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5,width:'92%',marginHorizontal:'auto' }}>Step 4 of 4</Text>
            <View style={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 'auto', marginVertical: 10 }}>
                    <View style={{ width: '23%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '23%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '23%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '23%', height: 10, backgroundColor: '#C5C5C5', borderRadius: 15 }}></View>
                </View>

                <View style={{width:'100%',height:'100%'}}>

                    <View style={{ width: '93%', marginHorizontal: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Select Bank</Text>
                        <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Karnataka Bank" value="KA" />
                            <Picker.Item label="HDFC Bank" value="HDFC" />
                            <Picker.Item label="Bank of Baroda" value="Bank_Baroda" />
                            <Picker.Item label="ICICI Bank" value="icici" />
                            <Picker.Item label="IDFC Bank" value="IDFC" />
                        </Picker>
                    </View>

                    <View style={{ width: '93%', marginHorizontal: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Account Number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />

                    </View>

                    <View style={{ width: '93%', marginHorizontal: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Re-enter account number</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                </View>

                <View style={{ backgroundColor: '#243D88', padding: 10, width: '90%', margin: 'auto', borderRadius: 10 ,marginVertical:10}}>
                    <Pressable style={styles.button} onPress={() => props.navigation.navigate("Welcome_to_Qwik")}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Account_Ver

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