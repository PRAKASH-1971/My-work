import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/Components/Login/Login';
import OtpPage from './src/Components/Login/OTP/OtpPage';
import UserInfo from './src/Components/KYC/UserInfo';
import User_Cred from './src/Components/KYC/User_Cred';
import Account_Ver from './src/Components/KYC/Verify/Account/Account_Ver';
import Pan_Ver from './src/Components/KYC/Verify/Pan/Pan_Ver';
import Adhaar_ver from './src/Components/KYC/Verify/Adhaar/Adhaar_ver';
import Drive_Ver from './src/Components/KYC/Verify/Driving/Drive_Ver';
import Qwik_wel from './src/Components/KYC/Job_Pref/Qwik_wel';
import Vehicle from './src/Components/KYC/Job_Pref/Vehicle';
import Del_type from './src/Components/KYC/Job_Pref/Del_type';
import Del_standard from './src/Components/KYC/Job_Pref/Del_standard';
import Select_zone from './src/Components/KYC/Zone/Select_zone';
import Time_Slot from './src/Components/KYC/Work_Time/Time_Slot';


export default function App() {
  const Stack = createNativeStackNavigator();



  return (
    <SafeAreaProvider>
      <NavigationContainer style={{ backgroundColor: 'white' }}>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#CCE2F5", color: "white", display: 'flex', alignItems: 'center', textAlign: 'center', borderBottomLeftRadius: 25, borderBottomRightRadius: 25, width: '100%', justifyContent: 'center' },
          headerTintStyle: { fontSiz: 20, fontWeight: 700, textAlign: 'center' }
        }}>

          {/* LOGIN  */}

          <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="OTP" component={OtpPage} />

          {/* KYC */}

          <Stack.Screen name="Personal_details" component={UserInfo} />
        <Stack.Screen name="User_Credentials" component={User_Cred} />

          {/* KYC Verification */}

          <Stack.Screen name="PAN_card" component={Pan_Ver} />
        <Stack.Screen name="ADHAAR_card" component={Adhaar_ver} />
        <Stack.Screen name="DRIVING_liecense" component={Drive_Ver} /> 
          <Stack.Screen name="Bank account details" component={Account_Ver} />


        <Stack.Screen name="Welcome_to_Qwik" component={Qwik_wel} /> 
         <Stack.Screen name="Select_vehicle" component={Vehicle} /> 
          <Stack.Screen name="Delivery_Standards" component={Del_type} />
          <Stack.Screen name="Delivery_Standards2" component={Del_standard} />
          <Stack.Screen name="Select ZONE" component={Select_zone} />
          <Stack.Screen name="Select working time slot" component={Time_Slot} />
       



        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
