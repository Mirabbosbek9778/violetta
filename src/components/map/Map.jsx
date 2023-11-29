import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

const Maps = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([
          position?.coords?.latitude,
          position?.coords?.longitude,
        ]);
      });
    }
  }, []);
  return (
    <div className="w-[700px] h-[700px] pt-2 rounded-md">
      <YMaps>
        <Map
          defaultState={{
            center: userLocation || [41.311081, 69.240562],
            zoom: 12,
          }}
          className="w-full h-full"
        >
          {userLocation && <Placemark geometry={userLocation} />}
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
