import React, { useState } from 'react'
import { View, Text, Image } from "react-native";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Picker } from 'react-native';
import { ListItem, BottomSheet } from '@rneui/themed';


const Time_Slot = (props) => {
    const [text, onChangeText] = React.useState('');
    const [selectedValue, setSelectedValue] = useState("java");
    const [checked, setChecked] = React.useState([false, false]);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <SafeAreaView>
            <View style={{ width: '100%', height: '83vh', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', padding: 5 }}>

                {/* Progress Bar */}
                <View style={{ width: '93%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: 'auto', marginVertical: 10 }}>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                    <View style={{ width: '32%', height: 10, backgroundColor: '#4767DA', borderRadius: 15 }}></View>
                </View>

                {/* Time Slot */}
                <View style={{ width: '100%', height: '90%', marginHorizontal: 'auto', padding: 10 }}>

                    <Text style={{ fontWeight: 600, padding: 5 }}>What is your shift preference? </Text>

                    <View style={{ width: '100%', marginHorizontal: 'auto', padding: 5 }}>
                        <Text style={styles.shift} >FULL TIME</Text>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={styles.slot_div}>
                                <View>
                                    <Text style={styles.timeText}>6:00 AM to 6:00 PM </Text>
                                    <Text style={styles.timeDurationText}>Daily-12 hours </Text>
                                </View>
                                <View>
                                    <Text style={styles.timeText}>₹34000-₹56500</Text>
                                    <Text>per month</Text>
                                </View>
                            </View>
                            <View style={styles.slot_div}>
                                <View>
                                    <Text style={styles.timeText}>10:00 AM t 1:00 PM </Text>
                                    <Text style={styles.timeDurationText}>Daily-12 hours </Text>
                                </View>
                                <View>
                                    <Text style={styles.timeText}>₹34000-₹56500</Text>
                                    <Text>per month </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginHorizontal: 'auto', padding: 5 }}>
                        <Text style={styles.shift} >PART TIME</Text>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <View style={styles.slot_div}>
                                <View>
                                    <Text style={styles.timeText} >6:00 AM to 1:00 PM </Text>
                                    <Text style={styles.timeDurationText}>Daily-6 hours </Text>
                                </View>
                                <View>
                                    <Text style={styles.timeText}>₹17000-₹44500</Text>
                                    <Text style={styles.timeDurationText}>per month</Text>
                                </View>
                            </View>
                            <View style={styles.slot_div}>
                                <View>
                                    <Text style={styles.timeText}>1:00 PM to 8:00 PM </Text>
                                    <Text style={styles.timeDurationText}>Daily-12 hours </Text>
                                </View>
                                <View>
                                    <Text style={styles.timeText}>₹17000-₹44500</Text>
                                    <Text style={styles.timeDurationText}>per month </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>


                {/* T&C */}
                <View style={{ display: 'flex', flexDirection: 'row', width: '90%', margin: 'auto', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }} >
                    <Image source={"https://icons-for-free.com/download-icon-check+checkbox+checkmark+confirm+success+yes+icon-1320196711226060446_512.png"} style={{ width: 15, height: 15 }} />
                    <Text style={{ fontSize: 12, fontWeight: 600 }}>I accept the Terms of Use & Privacy Policy | View</Text>
                </View>


                {/* Continue Button */}
                <View style={{ backgroundColor: '#243D88', padding: 10, width: '96%', borderRadius: 10, marginVertical: 10, margin: 'auto' }}>
                    <Pressable onPress={() => setIsVisible(true)}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Continue</Text>
                    </Pressable>
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

export default Time_Slot

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10
    },
    slot_div: {
        display: 'flex', flexDirection: 'row', border: '1px solid black', justifyContent: 'space-between', padding: 8, borderRadius: 5, marginVertical: 10
    },
    picker: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#F2F2F2',
        border: '1px solid black'
    },
    timeText: {
        fontWeight: 700, fontSize: 13
    },
    timeDurationText: {
        color: '#303030', fontSize: 12
    },
    shift: { fontSize: 15, fontWeight: 700, textAlign: 'left', marginVertical: 5 }

});