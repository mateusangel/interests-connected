import { useEffect, useState } from "react";

export const useGetLocation = () => {
  const [coords, setCoords] = useState<number[] | null>([]);
  const coordsDefault = [-15.8267, -47.9218];
  useEffect(() => {
    function onSucess(position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude]);
    }
    function onError() {
      setCoords(coordsDefault);
    }
    try {
      navigator.geolocation.getCurrentPosition(onSucess, onError);
    } catch (e) {
      setCoords(coordsDefault);
    }
  }, []);

  return coords;
};
