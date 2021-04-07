import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';

import { WebView } from 'react-native-webview'

import NetInfo from "@react-native-community/netinfo";

const AppLoading = () => (
  <View style={{
    flex: 1,
  }}
  >
    <ActivityIndicator color='red' />
    <Text style={{
      fontWeight: 'bold',
      color: 'orange',
      textAlign: 'center'
    }}>Wating... 🚀🚀🚀</Text>

  </View>
)

export default function App() {
  const [isConnect, setIsConnect] = React.useState(false);

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
      if (isConnected) {
        setIsConnect(true);
      } else {
        setIsConnect(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [NetInfo]);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {
        isConnect ? (
          <>
            <WebView
              source={{ uri: 'https://ap.poly.edu.vn/sinh-vien/lich-hoc/' }}
              userAgent={"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"}
              startInLoadingState
              renderLoading={() => <AppLoading />}
            />
            <View style={{
            }}>
              <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Copyright 🐷 </Text>
            </View>
          </>
        ) : (
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'orange',
                textAlign: 'center'
              }}
            > Please Connect netword ! 🇻🇳 </Text>
          </View>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
