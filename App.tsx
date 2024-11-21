/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import Routes from './src/routes';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* //paddingTop: Platform.OS==="android" && 50 */}
      {/* <View style={{flex: 1, paddingTop: Platform.OS==="android"? 40: 0}}>
      </View> */}
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A5D",
    //paddingTop: Platform.OS==="android"? StatusBar.currentHeight: 0,
  },
});

export default App;
