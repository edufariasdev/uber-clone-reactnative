import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ( { destination, origin, onReady }) => (
    <MapViewDirections
        destination ={destination}
        origin = {origin}
        onReady = {onReady}
        apikey = 'AIzaSyBwXW4Ga_t2WHfwNZHS09ljIdRTEiMWxUY'
        strokeWidth = {3}
        strokeColor = "#222"
        />
);

export default Directions; 