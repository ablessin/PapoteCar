import React, {useState} from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";

const googleMapsApiKey = process.env.REACT_APP_GOOGLEMAPAPIKEY;

const center = {
  lat: 50.8566,
  lng: 2.3522,
};

function Map(props) {
  const [response, setResponse] = React.useState(null);
  let depart = "Nantes";
  let arrive = "Tours";
  let etapes = [];
  if(props.depart && props.arrive)
  {
    depart = props.depart.toString();
    arrive = props.arrive.toString();
  }

  const [dureeTrajet, setDureeTrajet] = useState('');

  const containerStyle = {
    width: props.width,
    height: props.height,
  };
  const directionsCallback = (res) => {
    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
      }
    }
  };
  const handleDirectionsResponse = (response) => {
    if (response?.status === 'OK') {
      const leg = response.routes[0]?.legs[0];
      if (leg) {
        setDureeTrajet(leg.duration.text);
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
              destination: arrive,
              origin: depart,
              travelMode: "DRIVING",
              waypoints: props.etapes && props.etapes.length > 0 ? props.etapes.map(etape => ({ location: etape })) : [],
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
        <DirectionsService
            options={{
              destination: arrive, // Utiliser la valeur du champ lieu d'arrivée
              origin: depart, // Utiliser la valeur du champ lieu de départ
              travelMode: 'DRIVING', // Mode de déplacement (ici, conduite)
              waypoints: props.etapes && props.etapes.length > 0 ? props.etapes.map(etape => ({ location: etape })) : [],
            }}
            callback={handleDirectionsResponse} // Appeler la fonction de rappel avec la réponse de l'API
        />

        <p>Durée du trajet : {dureeTrajet}</p>
      </LoadScript>
    </div>
  );
}

export default Map;
