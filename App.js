import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'

// const RootStack = createStackNavigator({
//   Login: {
//     screen: LoginScreen
//   },
//   Home: {
//     screen: HomeScreen
//   },
// }, { initialRouteName: 'Login' })

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      
    </Stack.Navigator>
  );
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
     {/* <RootStack /> */}
     </NavigationContainer>
    )
  }
}



























// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Alert, Clipboard, Linking } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';


// const styles = StyleSheet.create({
//   buttonWeb: {
//     color: '#20232a',
//     marginBottom: 20,
//     borderRadius: 6,
//     backgroundColor: "#3fbdfd",
//     borderWidth: 2,
//     borderColor: "#20232a",
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingVertical: 8,
//     fontSize: 20
//   },
//   buttonScan: {
//     color: '#20232a',
//     borderRadius: 6,
//     backgroundColor: "#3fbdfd",
//     borderWidth: 2,
//     borderColor: "#20232a",
//     fontWeight: "bold",
//     textAlign: "center",
//     paddingVertical: 8,
//     fontSize: 20
//   }
// });



// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

  

//   const copyToClipboard = (text) => {
//     Clipboard.setString(text)
//   }

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     Alert.alert(
//       'SBC CT62 Inventory System',
//       `${data}`,
//       [
//         {
//           text: 'Copy Id Code ',
//           onPress: () => copyToClipboard(data)
//         },
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel'
//         },
        
//       ],
//       { cancelable: false }
//     );


//   };

//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//       }}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
      
//       {
//       scanned && <Text style={styles.buttonWeb}
//       onPress={() => Linking.openURL('http://www.southeast.ac.th/2017/')}>Inventory Web</Text>
//       }
        
      
      
//       {
//       scanned && <Text onPress={() => setScanned(false)} 
//       style={styles.buttonScan}>Tap to Scan Again</Text>
//       }
//     </View>
//   );
// }


