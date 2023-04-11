import React from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const googleMapsApiKey = process.env.REACT_APP_GOOGLEMAPAPIKEY;

const containerStyle = {
  width: "1900px",
  height: "500px",
};

const center = {
  lat: 50.8566,
  lng: 2.3522,
};

function Map() {
  const [response, setResponse] = React.useState(null);

  const directionsCallback = (res) => {
    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{ zoomControl: true }}
        >
          <DirectionsService
            options={{
              destination: "Paris",
              origin: "Nantes",
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />

          {response !== null && (
            <DirectionsRenderer
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
