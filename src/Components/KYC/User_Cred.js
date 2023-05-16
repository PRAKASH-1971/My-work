import React from 'react'
import { View, Text, Image, StyleSheet,Pressable } from "react-native";


const User_Cred = (props) => {
    return (
        <View style={{padding:15,display:'flex',justifyContent:'space-around',height:'100%'}}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Hi User</Text>
            <Text style={{ fontSize: 12, fontWeight: 400,marginVertical:10 }}>We need to verify some information before you can work with us in location</Text>
            <Text style={{ fontSize: 17, fontWeight: 600 }}>You'll need the following documents</Text>

            <View style={{ padding: 10,gap:10 }}>
                <View style={styles.docs}>
                    <View style={{ width: 50, height: 50 }}>
                        <Image source={"https://www.pngitem.com/pimgs/m/18-182217_pan-card-pan-card-with-cartoon-hd-png.png"} style={styles.img} />
                    </View>
                    <Pressable  onPress={() => props.navigation.navigate("PAN_card")}>
                    <View style={styles.doc_text}>
                        <Text style={{ fontSize: 15, fontWeight: 700 }} >Pan card</Text>
                        <Text style={{ fontSize: 11, fontWeight: 400 }}>To process details of your salary</Text>
                    </View>
                    </Pressable>
                </View>
                <View style={styles.docs}>
                    <View style={{ width: 50, height: 50 }}>
                    <Image source={"https://cdn.iconscout.com/icon/free/png-256/free-aadhaar-2085055-1747945.png"} style={styles.img} />                    </View>
                    <Pressable  onPress={() => props.navigation.navigate("ADHAAR_card")}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 700 }}>Aadhaar card</Text>
                        <Text style={{ fontSize: 11, fontWeight: 400 }}>To verify your identity</Text>
                    </View>
                    </Pressable>
                </View>
                <View style={styles.docs}>
                <View style={{ width: 50, height: 50 }}>
                    <Image source={"https://i.ibb.co/CsB7vYQ/driver-licence-icon-vector-id-card-license-drive-identity-photo-identification-166366544-removebg-pr.png"} style={styles.img} />
                </View>  
                <Pressable  onPress={() => props.navigation.navigate("DRIVING_liecense")}>                 
                     <View>
                        <Text style={{ fontSize: 15, fontWeight: 700 }}>Driving License</Text>
                        <Text style={{ fontSize: 11, fontWeight: 400 }}>Preferably two wheeler for rider jobs</Text>
                    </View>
                    </Pressable>
                </View>
                <View style={styles.docs}>
                {/* <View style={{ width: 50, height: 50 }}> */}
                    <Image source={require("../../assets/Images/wired-flat-56-document (1).gif")} style={{width:50,height:50}} />
                    {/* </View> */}
                    <Pressable onPress={() => props.navigation.navigate("Bank account details")}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: 700 }}>Bank account details</Text>
                        <Text style={{ fontSize: 11, fontWeight: 400 }}>To verify your bank details for processing salary</Text>
                    </View>
                    </Pressable>
                </View>
            </View>
            <View style={{ backgroundColor: '#243D88', padding: 10, width: '90%', margin: 'auto',borderRadius:10 }}>
                <Pressable  onPress={() => props.navigation.navigate("PAN_card")}>
                    <Text style={{color:'white',textAlign:'center'}}>Submit and Next</Text>
                    </Pressable>
                </View>
        </View>
    )
}

export default User_Cred

const styles = StyleSheet.create({
    img: {
        width: '100%', height: "75%", margin: 'auto', boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
    },
    docs: { display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' },
    doc_text:{ display: 'flex', flexDirection: 'column', gap: 5 }
});