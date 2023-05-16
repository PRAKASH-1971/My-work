import React,{ useEffect, useRef, useState } from 'react'
import {StyleSheet,View,Image,Text,Button,Pressable} from "react-native"
import OtpContainer from './OtpContainer'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// import OtpContainer from './OtpContainer'

const OtpPage = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'space-around',padding:10 }}>

      {/* <Image
        source={require("../assets/Images/mailicon.png")}
        style={{ width: '75%', height: 125, margin: 'auto' }}
      /> */}
       <Image source={'https://s3-alpha-sig.figma.com/img/3d45/ddda/e396b0e8261ad3753b5140e3f550faf6?Expires=1684713600&Signature=mXAPd7I4cbEyQpFt-jnoIklwdu923rvde~KuiBf3wvwAq1nLm~36YABQMGuXmjOisGaywGJvp2UFVmeyL1J9EOo0p3OBHXPj7NHROauNwZOC8RLsAO3mTSs5E4JfnBpd4Qf4OeKWuKqEERI1O0FI4yk7j29wnQyu9dGQDs0PRUj8DSt8L0NZCx1bK1amV62WZcZTgJ2LCpP5pcJ~k2PoNAIQVPfnUgjr5cJFpO1~MaYMmkff4kGq5cOCv5M2UUmfFIFCj2sGUhcQYT3OmfUiadQ-MKQ-yiezUzFaFfrHk3CTh1A~YXbk9aEdpxByhqx9xgF0iaUY71HQI0G3UiS-9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} style={{ width: '95%', height: "40%", margin: 'auto' }} />
      <View style={{ backgroundColor: "#243D88", height: '50%', width: '99%', alignItems: "center", borderRadius: 10, justifyContent:'space-around',padding:10}}>

        <Text style={styles.textp} >Enter the OTP</Text>
        <Text style={styles.textps} >We have sent    OTP    to      ********630 </Text>

        <OtpContainer />

        <Text style={styles.otpagain}>Resend OTP</Text>

        <Pressable style={styles.button} onPress={() => props.navigation.navigate("Personal_details")}>
          <Text style={styles.text}>Submit </Text>
        </Pressable>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  textp: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },

  textps: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 60,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 13,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  otpagain: {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
})

export default OtpPage