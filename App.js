import React from 'react';
import {StyleSheet, View} from 'react-native';
import MarkerApp from "./src/view/Marker";

const App = () => {
  return (
    <View style={styles.container}>
        <MarkerApp/>
    </View>
  );
};

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        height: "100%",
        width: "100%",
    },
    map: {
        flex: 1,
    }
});

export default App;
