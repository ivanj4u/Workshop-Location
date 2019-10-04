import React from 'react';
import {View,StyleSheet} from 'react-native';
import LocationApp from "./src/view/LocationApp";

const App = () => {
  return (
    <View style={styles.container}>
        <LocationApp/>
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
