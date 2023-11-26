import GoogleMapReact from "google-map-react";

// eslint-disable-next-line react/prop-types
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="w-[700px] h-[700px] pt-2">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCTGe1ACarTolmT2STzwOfoMoULqeOLnEY" }}
        key={"AIzaSyCTGe1ACarTolmT2STzwOfoMoULqeOLnEY"}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={41.311081} lng={69.240562} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
