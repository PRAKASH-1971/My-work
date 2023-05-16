import React, { useState } from "react";
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { Button, InputAccessoryView, ScrollView, TextInput } from 'react-native';



const Login = (props) => {

    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';
    const [text, setText] = useState(initialText);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '100%' }}>

            {/* <Image source={require("../assets/Images/my-iocn.png")} style={{ width: '85%', height: 250 }} /> */}
            <Image source={'https://s3-alpha-sig.figma.com/img/3d45/ddda/e396b0e8261ad3753b5140e3f550faf6?Expires=1684713600&Signature=mXAPd7I4cbEyQpFt-jnoIklwdu923rvde~KuiBf3wvwAq1nLm~36YABQMGuXmjOisGaywGJvp2UFVmeyL1J9EOo0p3OBHXPj7NHROauNwZOC8RLsAO3mTSs5E4JfnBpd4Qf4OeKWuKqEERI1O0FI4yk7j29wnQyu9dGQDs0PRUj8DSt8L0NZCx1bK1amV62WZcZTgJ2LCpP5pcJ~k2PoNAIQVPfnUgjr5cJFpO1~MaYMmkff4kGq5cOCv5M2UUmfFIFCj2sGUhcQYT3OmfUiadQ-MKQ-yiezUzFaFfrHk3CTh1A~YXbk9aEdpxByhqx9xgF0iaUY71HQI0G3UiS-9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} style={{ width: '95%', height: "40%", margin: 'auto' }} />


            <View style={{ backgroundColor: "#243D88", height: '60%', width: '100%', alignItems: "center", borderTopLeftRadius: 50, justifyContent: 'space-around' }}>

                {/* <KeyboardAvoidingView style={styles.containerAvoid}> */}

                <View style={{display:'flex',gap:8}}>

                    <Text style={styles.Head1}>Let's Travel with us</Text>
                    <Text style={styles.Head2}>Verify your account using otp</Text>
                </View>

                <View style={styles.child}>
                    <Text style={styles.leftext}>+91</Text>
                    <ScrollView keyboardDismissMode="interactive">
                        <TextInput
                            inputAccessoryViewID={inputAccessoryViewID}
                            onChangeText={setText}
                            value={text} keyboardType='numeric'
                            placeholder={'Please type here…'}
                            style={{ marginHorizontal: 10, color: 'white', height: '100%' }}
                        />
                    </ScrollView>
                    <Text onPress={() => setText(initialText)}
                        style={{ color: 'white', marginRight: 10,fontSize:18 }}>x</Text>

                </View>

                <View style={{width:'100%',height:'25%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{ width: '85%', backgroundColor: '#00000020', paddingVertical: 15, textAlign: 'center', borderRadius: 10 }}>
                        <Text style={{ color: "#FFFFFF90", fontSize: 14 }} onPress={() => props.navigation.navigate("OTP")} >Proceed</Text>
                    </View>

                    <Text style={styles.textcheck}>By Continuing,you agree to our Terms of Service & Privacy Policy</Text>
                    {/* </KeyboardAvoidingView> */}
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Head1: {
        fontSize: 24,
        fontWeight: 500,
        color: "white",
        textAlign:'center'
    },
    Head2: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.6)",
        fontWeight: 600,
        textAlign:'center'
    },
    child: {
        display: 'flex',
        flexDirection: "row",
        border: '1px Solid rgba(255, 255, 255, 0.6)',
        alignItems: "center",
        width: '85%',
        borderRadius: 5,
        color: "white",
        height: '15%',
    },
    leftext: {
        fontSize: 18,
        marginLeft: 8,
        fontWeight: 600,
        color: "white",
    },
    input: {
        height: 26,
        margin: 12,
        padding: 10,
        width: 200,
        marginLeft: 5,
        color: "white",
        flex: 1,
        color: 'rgba(255, 255, 255, 0.4);',
        border: "none"
    },
    containerAvoid: {
        flex: 1,
        alignItems: 'center',
    },
    textcheck: {
        fontSize: 10,
        width: '80%',
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign:'center',
    }
});

export default Login;