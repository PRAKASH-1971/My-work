import React, { useState } from 'react'
import { View, Text, Image } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker } from 'react-native';



const UserInfo = (props) => {
    const [text, onChangeText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("java");


    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '105%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#F2F2F2' }}>

                <View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>First name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Last name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />

                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Fathers name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Gender</Text>
                        <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>City</Text>
                        <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Bangalore" value="Bangalore" />
                            <Picker.Item label="Mangalore" value="Mangalore" />
                            <Picker.Item label="Mumbai" value="Mumbai" />
                            <Picker.Item label="Delhi" value="Delhi" />
                        </Picker>
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Complete address</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Language you know</Text>
                        <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Hindi" value="Hindi" />
                            <Picker.Item label="English" value="English" />
                            <Picker.Item label="Kannada" value="Kannada" />
                            <Picker.Item label="Malyalam" value="Malyalam" />
                        </Picker>
                    </View>

                    <View style={{ width: '93%', margin: 'auto', padding: 5 }}>
                        <Text style={{ fontSize: 12, fontWeight: 600, textAlign: 'left', marginVertical: 5 }}>Profile picture</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>

                </View>

                <View style={{ backgroundColor: '#243D88', padding: 10, width: '90%', margin: 'auto', borderRadius: 10 }}>
                    <Pressable style={styles.button} onPress={() => props.navigation.navigate("User_Credentials")}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Submit and Next</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>

    )
}

export default UserInfo

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