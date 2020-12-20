import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, Button, Alert, Clipboard, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';






export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  

  const copyToClipboard = (text) => {
    Clipboard.setString(text)
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Alert.alert(
      // `Data: [${data}] \nType: [${type}]`,
      'Alert Title',
      `${data}`,
      [
        {
          text: 'Copy ID',
          onPress: () => copyToClipboard(data)
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );


  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      {scanned && <Button title={'Inventory Web'} style={{ color: 'purple', textAlign: 'center', fontSize: 20, marginVertical: 20 }}
        onPress={() => Linking.openURL('http://www.southeast.ac.th/2017/')} />}
        
      {scanned && <Text>
        
      </Text>}
      
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} style={{ color: 'purple' }} />}
    </View>
  );
}

