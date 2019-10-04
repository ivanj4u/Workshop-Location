import React from 'react';
import {View, StyleSheet} from "react-native";
import Mapbox from '@react-native-mapbox-gl/maps';

Mapbox.setAccessToken("pk.eyJ1IjoiaXZhbmo0dSIsImEiOiJjazFiZ3pvNzAyZnMyM21uaXhuMHk0d21rIn0.Rvw2_qCjLFRwQIb-4W60ng");

const MapsApp = () => {

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Mapbox.MapView style={styles.map}>
                    <Mapbox.Camera
                        zoomLevel={11}
                        centerCoordinate={[106.865036, -6.175110]}
                    />
                </Mapbox.MapView>
            </View>
        </View>
    )
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

export default MapsApp;